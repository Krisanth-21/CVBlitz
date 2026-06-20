#!/usr/bin/env python3
"""
CVBlitz Backend Ranking Engine (rank.py)
----------------------------------------
Designed to rank the top 100 candidates from candidates.jsonl for the Redrob Hackathon.
Complies with all compute, memory, and validation constraints.
Execution:
  python rank.py --candidates candidates.jsonl --job_description job_description.txt --out submission.csv
"""

import os
import sys
import json
import csv
import re
import argparse
import logging
import gzip
from datetime import datetime
from typing import Dict, List, Any, Tuple, Set, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger("CVBlitzRanker")

def clean_skill_name(name: str) -> str:
    """Helper to normalize skill names for robust comparison."""
    if not name:
        return ""
    return name.lower().replace("-", " ").replace("_", " ").strip()

class JobDescriptionAnalyzer:
    """Stage 1: Job Description Intelligence"""
    def __init__(self, jd_path: str):
        self.jd_path = jd_path
        self.jd_text = ""
        self.required_skills: Set[str] = set()
        self.preferred_skills: Set[str] = set()
        self.min_exp = 5
        self.max_exp = 9
        self.preferred_locations: Set[str] = set()
        self.disallowed_companies: Set[str] = set()
        
    def analyze(self) -> None:
        """Reads and parses the job description to extract intelligence signals."""
        logger.info(f"Analyzing Job Description from: {self.jd_path}")
        try:
            with open(self.jd_path, "r", encoding="utf-8") as f:
                self.jd_text = f.read()
        except Exception as e:
            logger.error(f"Failed to read Job Description file: {e}. Using default fallback JD.")
            self.jd_text = "Senior AI Engineer Founding Team. Needed Python, embeddings, vector databases, retrieval, ranking, evaluation frameworks, 5-9 years experience."

        # Normalized search text
        jd_lower = self.jd_text.lower()

        # Core required skills (high weight)
        core_requirements = [
            "python", "embeddings", "vector database", "vector databases", "vector search", 
            "retrieval", "ranking", "evaluation", "ndcg", "mrr", "map", "search", 
            "elasticsearch", "lucene", "faiss", "opensearch", "milvus", "pinecone", 
            "weaviate", "qdrant", "sentence transformers", "sentence-transformers", 
            "hugging face transformers", "rag", "llamaindex", "information retrieval", "ranking systems"
        ]
        for skill in core_requirements:
            cleaned_skill = clean_skill_name(skill)
            if cleaned_skill in jd_lower or skill in jd_lower:
                self.required_skills.add(cleaned_skill)

        # Preferred nice-to-have skills
        nice_to_haves = [
            "pytorch", "fine-tuning", "lora", "qlora", "peft", "xgboost", 
            "learning-to-rank", "learning to rank", "distributed systems", "mlops", "spark", "airflow",
            "recommendation systems", "llms", "deep learning", "nlp"
        ]
        for skill in nice_to_haves:
            cleaned_skill = clean_skill_name(skill)
            if cleaned_skill in jd_lower or skill in jd_lower:
                self.preferred_skills.add(cleaned_skill)

        # Experience extraction (defaults: 5 to 9 years)
        exp_match = re.search(r"(\d+)[–-](\d+)\s+years", jd_lower)
        if exp_match:
            self.min_exp = int(exp_match.group(1))
            self.max_exp = int(exp_match.group(2))
            logger.info(f"Extracted target experience range: {self.min_exp}-{self.max_exp} years.")
        else:
            logger.warning("Target experience range not found in text. Defaulting to 5-9 years.")

        # Preferred locations (Tier-1 Indian cities mentioned)
        cities = ["pune", "noida", "delhi", "mumbai", "hyderabad", "bangalore"]
        for city in cities:
            if city in jd_lower:
                self.preferred_locations.add(city)
        
        # Disallowed consulting/services companies
        consulting_firms = ["tcs", "infosys", "wipro", "accenture", "cognizant", "capgemini", "hcl", "tech mahindra", "mphasis", "l&t", "lti", "mindtree", "ltimindtree"]
        for firm in consulting_firms:
            if firm in jd_lower:
                self.disallowed_companies.add(firm)


class CandidateFeatureExtractor:
    """Stage 2: Candidate Feature Extraction"""
    @staticmethod
    def extract(candidate: Dict[str, Any]) -> Dict[str, Any]:
        profile = candidate.get("profile") or {}
        skills = candidate.get("skills") or []
        signals = candidate.get("redrob_signals") or {}
        history = candidate.get("career_history") or []
        education = candidate.get("education") or []

        # Extract name, title, company
        name = profile.get("anonymized_name", "Candidate")
        title = profile.get("current_title", "")
        company = profile.get("current_company", "")
        location = profile.get("location", "")
        exp_years = profile.get("years_of_experience")
        if exp_years is None:
            exp_years = 0.0
        else:
            exp_years = float(exp_years)

        # Skill list normalized
        skills_set = {}
        for s in skills:
            if s and s.get("name"):
                cleaned = clean_skill_name(s.get("name"))
                skills_set[cleaned] = s

        # Behavioral signals extraction
        response_rate = signals.get("recruiter_response_rate")
        if response_rate is None:
            response_rate = 75.0
        else:
            response_rate = float(response_rate)
            # Handle fraction (e.g. 0.75) vs percentage (e.g. 75)
            if response_rate <= 1.0:
                response_rate = response_rate * 100.0
            
        github_score = signals.get("github_activity_score")
        if github_score is None:
            github_score = -1.0
        else:
            github_score = float(github_score)
        
        interview_rate = signals.get("interview_completion_rate")
        if interview_rate is None:
            interview_rate = 80.0
        else:
            interview_rate = float(interview_rate)
            if interview_rate <= 1.0:
                interview_rate = interview_rate * 100.0

        notice_period = signals.get("notice_period_days")
        if notice_period is None:
            notice_period = 60
        else:
            notice_period = int(notice_period)

        open_to_work = signals.get("open_to_work_flag")
        if open_to_work is None:
            open_to_work = True
        else:
            open_to_work = bool(open_to_work)

        relocate = signals.get("willing_to_relocate")
        if relocate is None:
            relocate = True
        else:
            relocate = bool(relocate)

        offer_acceptance_rate = signals.get("offer_acceptance_rate")
        if offer_acceptance_rate is None:
            offer_acceptance_rate = -1.0
        else:
            offer_acceptance_rate = float(offer_acceptance_rate)

        saved_by_recruiters_30d = signals.get("saved_by_recruiters_30d")
        if saved_by_recruiters_30d is None:
            saved_by_recruiters_30d = 0
        else:
            saved_by_recruiters_30d = int(saved_by_recruiters_30d)

        last_active_date = signals.get("last_active_date")

        # Average tenure calculation
        num_jobs = len(history)
        avg_tenure_months = 0.0
        if num_jobs > 0:
            total_months = sum((job or {}).get("duration_months", 0) for job in history if job)
            avg_tenure_months = total_months / num_jobs

        return {
            "candidate_id": candidate.get("candidate_id", ""),
            "name": name,
            "title": title,
            "company": company,
            "location": location,
            "exp_years": exp_years,
            "skills": skills_set,
            "response_rate": response_rate,
            "github_score": github_score,
            "interview_rate": interview_rate,
            "notice_period": notice_period,
            "open_to_work": open_to_work,
            "relocate": relocate,
            "offer_acceptance_rate": offer_acceptance_rate,
            "saved_by_recruiters_30d": saved_by_recruiters_30d,
            "last_active_date": last_active_date,
            "history": history,
            "education": education,
            "num_jobs": num_jobs,
            "avg_tenure_months": avg_tenure_months
        }


class HoneypotDetector:
    """Stage 3: Honeypot & Fraud Profile Detection"""
    @staticmethod
    def detect(features: Dict[str, Any]) -> Tuple[float, bool]:
        """
        Resilient audit of candidate history, skills, and identity.
        """
        history = features.get("history") or []
        skills = features.get("skills") or {}
        exp_years = features.get("exp_years") or 0.0
        
        # 1. Overlapping timeline check (simultaneous full-time jobs)
        periods = []
        for job in history:
            if not job:
                continue
            start_str = job.get("start_date")
            end_str = job.get("end_date")
            if not start_str:
                continue
            try:
                start_year = int(start_str[:4])
                start_month = int(start_str[5:7]) if len(start_str) >= 7 else 1
                start_val = start_year * 12 + start_month
                
                if job.get("is_current") or not end_str:
                    end_val = 2026 * 12 + 6
                else:
                    end_year = int(end_str[:4])
                    end_month = int(end_str[5:7]) if len(end_str) >= 7 else 12
                    end_val = end_year * 12 + end_month
                
                periods.append((start_val, end_val))
            except Exception:
                continue
                
        periods.sort(key=lambda x: x[0])
        has_overlap = False
        for i in range(len(periods)):
            for j in range(i + 1, len(periods)):
                p1_start, p1_end = periods[i][0], periods[i][1]
                p2_start, p2_end = periods[j][0], periods[j][1]
                
                overlap_start = max(p1_start, p2_start)
                overlap_end = min(p1_end, p2_end)
                if overlap_end - overlap_start > 2: # Overlaps by more than 2 months
                    has_overlap = True
                    break

        # 2. Tool release date violations (anachronisms)
        has_anachronism = False
        
        # Release limits as of June 2026 (in months)
        limits = {
            "pytorch": 118,
            "rust": 134,
            "milvus": 80,
            "weaviate": 80,
            "pinecone": 80,
            "qdrant": 60,
            "pgvector": 60,
            "lora": 60,
            "qlora": 60,
            "peft": 60,
            "langchain": 44,
            "llamaindex": 44
        }

        for skill_name, s_data in skills.items():
            if not s_data:
                continue
            dur_months = s_data.get("duration_months") or 0
            
            for tool, max_months in limits.items():
                if tool in skill_name and dur_months > max_months:
                    has_anachronism = True
                    break

        # Check job description matches for pre-release claims
        release_years = {
            "pytorch": 2016,
            "rust": 2015,
            "pinecone": 2019,
            "weaviate": 2019,
            "milvus": 2019,
            "qdrant": 2021,
            "pgvector": 2021,
            "lora": 2021,
            "qlora": 2021,
            "peft": 2021,
            "langchain": 2022,
            "llamaindex": 2022
        }

        for job in history:
            if not job:
                continue
            desc_lower = job.get("description", "")
            if not desc_lower:
                continue
            desc_lower = desc_lower.lower()
            start_str = job.get("start_date", "")
            if not start_str:
                continue
            try:
                start_year = int(start_str[:4])
                for tool, rel_year in release_years.items():
                    if tool in desc_lower and start_year < rel_year:
                        has_anachronism = True
                        break
            except Exception:
                continue

        # 3. Unrealistic skill inflation
        has_inflation = False
        expert_skills = [s for s, data in skills.items() if data and data.get("proficiency", "").lower() == "expert"]
        if len(expert_skills) > 6 and exp_years < 5:
            has_inflation = True

        total_skill_years = sum((s or {}).get("duration_months", 0) for s in skills.values()) / 12.0
        if exp_years > 0 and (total_skill_years / exp_years) > 4.5:
            has_inflation = True

        # 4. Fictional companies & Irrelevant titles honeypots
        company = (features.get("company") or "").lower()
        title = (features.get("title") or "").lower()
        
        FICTIONAL_COMPANIES = {
            "stark industries", "hooli", "dunder mifflin", "globex",
            "wayne enterprises", "pied piper", "acme corp", "initech",
            "umbrella corporation", "cyberdyne", "weyland-yutani",
            "aperture science", "oscorp", "lexcorp", "tyrell corporation"
        }

        IRRELEVANT_TITLES = {
            "content writer", "copywriter", "technical writer",
            "marketing manager", "sales executive", "hr manager",
            "business analyst", "account manager", "graphic designer",
            "mechanical engineer", "civil engineer", "customer support",
            "operations manager", "accountant", "project manager",
            "mobile developer", "devops engineer", "cloud engineer",
            "full stack developer"
        }
        
        is_fictional_or_irrelevant = False
        if any(f in company for f in FICTIONAL_COMPANIES):
            is_fictional_or_irrelevant = True
        if any(t in title for t in IRRELEVANT_TITLES):
            is_fictional_or_irrelevant = True

        # Decisive honeypot flag
        is_honeypot = has_overlap or has_anachronism or has_inflation or is_fictional_or_irrelevant

        if is_honeypot:
            return 0.0, True
        return 100.0, False


class ScoringEngine:
    """Stage 4: scoring candidate parameters"""
    def __init__(self, jd: JobDescriptionAnalyzer):
        self.jd = jd

    def calculate_score(self, features: Dict[str, Any], is_honeypot: bool) -> Tuple[float, Dict[str, float]]:
        """Computes matching score for candidate. Returns (final_score, breakdown)."""
        if is_honeypot:
            return 0.0, {
                "technical": 0.0,
                "role_relevance": 0.0,
                "behavioral": 0.0,
                "growth": 0.0,
                "authenticity": 0.0
            }

        # 1. Technical Score (40%)
        tech_score = 0.0
        skills = features["skills"]
        
        # Match core skills
        matched_cores = 0
        for req in self.jd.required_skills:
            cleaned_req = clean_skill_name(req)
            if cleaned_req in skills:
                matched_cores += 1
                prof = (skills[cleaned_req].get("proficiency") or "intermediate").lower()
                prof_mult = 1.2 if prof == "expert" else (1.0 if prof == "advanced" else 0.8)
                dur_factor = min(skills[cleaned_req].get("duration_months") or 12, 60) / 60.0
                tech_score += 30.0 * prof_mult * (0.5 + 0.5 * dur_factor)
                
        # Match preferred skills
        matched_prefs = 0
        for pref in self.jd.preferred_skills:
            cleaned_pref = clean_skill_name(pref)
            if cleaned_pref in skills:
                matched_prefs += 1
                prof = (skills[cleaned_pref].get("proficiency") or "intermediate").lower()
                prof_mult = 1.2 if prof == "expert" else (1.0 if prof == "advanced" else 0.8)
                tech_score += 10.0 * prof_mult
                
        # Add bonus points for resume descriptions mentioning core keywords
        desc_matches = 0
        for job in features["history"]:
            if not job:
                continue
            desc = job.get("description") or ""
            desc = desc.lower()
            if any(kw in desc for kw in ["retrieval", "vector", "search", "ranking", "eval"]):
                desc_matches += 1
        tech_score += min(desc_matches * 3.0, 15.0)

        # Core Search/Retrieval Tech Skills Check
        # If candidate has zero search/retrieval/vector database/indexing/embeddings skills, penalize tech score by 50%
        search_terms = ["embeddings", "vector", "retrieval", "search", "indexing", "ranking", "milvus", "pinecone", "weaviate", "qdrant", "elasticsearch", "lucene", "faiss", "rag", "llamaindex", "information retrieval", "ranking systems"]
        has_search_skills = any(term in skills for term in search_terms)
        if not has_search_skills:
            tech_score = tech_score * 0.5

        # Normalize tech score to [0, 100]
        tech_score = min(max(tech_score, 10.0), 100.0)

        # 2. Role Relevance Score (25%)
        role_score = 50.0
        exp = features["exp_years"]
        
        # Experience target match (gentler decay for senior profiles)
        if 5 <= exp <= 9:
            role_score += 30.0
        elif 4 <= exp < 5:
            role_score += 20.0
        elif 9 < exp <= 12:
            role_score += 20.0
        elif exp > 12:
            role_score += max(10.0, 20.0 - 2.5 * (exp - 12))
        else:
            role_score += max(0.0, exp * 4.0)

        # Title keyword match
        title_lower = (features["title"] or "").lower()
        
        # Non-matching/QA/BA/Ops title terms
        non_matching_roles = [
            "qa", "tester", "quality assurance", "scrum", "agile", "frontend", "front-end", 
            "ui/ux", "designer", "product manager", "project manager", "recruiter", "hr", 
            "marketing", "sales", "business analyst", "ops", "operations", "civil", 
            "mechanical", "electrical", "finance", "accountant", "support"
        ]
        
        is_non_matching = any(f" {r} " in f" {title_lower} " or title_lower.startswith(r) or title_lower.endswith(r) for r in non_matching_roles)
        
        if is_non_matching:
            role_score = role_score * 0.1 # Severe 90% penalty for QA, BA, PM, Ops, Civil, etc.
        else:
            if any(kw in title_lower for kw in ["ai", "ml", "nlp", "machine learning", "search", "retrieval", "ranking", "recommendation"]):
                role_score += 20.0
            elif "backend" in title_lower or "systems" in title_lower or "software" in title_lower:
                role_score += 10.0
            elif "manager" in title_lower or "director" in title_lower:
                role_score -= 10.0 # penalty for non-coding management titles
            
        # Services/Consulting firm penalty (Disqualifier check)
        is_services_only = True
        services_keywords = [
            "tcs", "wipro", "infosys", "cognizant", "hcl", "capgemini",
            "mphasis", "ltimindtree", "tech mahindra", "hexaware",
            "mindtree", "niit technologies", "mastech", "kpit",
            "l&t", "lnt", "lti", "genpact", "tata consultancy"
        ]
        
        curr_comp_lower = (features["company"] or "").lower()
        is_curr_services = any(firm in curr_comp_lower for firm in services_keywords)
        
        if features["history"]:
            for job in features["history"]:
                if not job:
                    continue
                comp = job.get("company", "")
                if not comp:
                    continue
                comp = comp.lower()
                if not any(firm in comp for firm in services_keywords):
                    is_services_only = False
                    break
        else:
            is_services_only = False
            
        if is_services_only and len(features["history"]) > 0:
            role_score = role_score * 0.5 # 50% penalty for services-only background
        elif is_curr_services:
            role_score = role_score * 0.7 # 30% penalty for currently working at services company

        # Location alignment check (prioritizes Pune/Noida/Delhi/Bangalore/etc., penalizes non-relocating remote candidates)
        loc_lower = (features["location"] or "").lower()
        is_preferred_city = any(city in loc_lower for city in ["noida", "pune"])
        tier1_cities = ["pune", "noida", "delhi", "ncr", "mumbai", "hyderabad", "bangalore", "chennai", "gurgaon"]
        is_tier1 = any(city in loc_lower for city in tier1_cities)
        
        if is_preferred_city:
            role_score += 10.0
        elif is_tier1 and features["relocate"]:
            role_score += 5.0
            
        if not is_preferred_city and not features["relocate"]:
            role_score -= 15.0

        role_score = min(max(role_score, 10.0), 100.0)

        # 3. Behavioral Score (15%)
        resp = features["response_rate"]
        github = features["github_score"]
        interview = features["interview_rate"]
        notice = features["notice_period"]

        # Notice period score
        if notice <= 30:
            notice_score = 100.0
        elif notice <= 45:
            notice_score = 80.0
        elif notice <= 60:
            notice_score = 60.0
        elif notice <= 90:
            notice_score = 30.0
        else:
            notice_score = 10.0

        # Last active score (relative to June 20, 2026)
        active_days = 365
        last_active_str = features["last_active_date"]
        if last_active_str:
            try:
                last_active_dt = datetime.strptime(last_active_str[:10], "%Y-%m-%d")
                current_dt = datetime(2026, 6, 20)
                active_days = (current_dt - last_active_dt).days
            except Exception:
                pass
        if active_days <= 30:
            active_score = 100.0
        elif active_days <= 90:
            active_score = 80.0
        elif active_days <= 180:
            active_score = 50.0
        else:
            active_score = 20.0

        # Offer acceptance score
        offer_rate = features["offer_acceptance_rate"]
        if offer_rate == -1.0:
            offer_score = 80.0
        else:
            offer_score = offer_rate * 100.0

        # Saved by recruiters score
        saved_count = features["saved_by_recruiters_30d"]
        saved_score = min(float(saved_count) * 20.0, 100.0)

        # Combine using 8-signal behavioral formula
        behavioral_score = (
            0.20 * resp +
            0.20 * github +
            0.15 * interview +
            0.15 * notice_score +
            0.10 * active_score +
            0.10 * offer_score +
            0.10 * saved_score
        )
        if features["open_to_work"]:
            behavioral_score += 5.0
        behavioral_score = min(max(behavioral_score, 10.0), 100.0)

        # 4. Career Growth Score (10%)
        growth_score = 70.0
        avg_tenure = features["avg_tenure_months"]
        if avg_tenure > 30.0:
            growth_score += 15.0
        elif avg_tenure < 18.0:
            growth_score -= 20.0

        # Promotion indicators across jobs
        titles_seen = set()
        promotions = 0
        for job in reversed(features["history"]):
            if not job:
                continue
            jt = job.get("title", "")
            if jt:
                jt = jt.lower()
                if len(titles_seen) > 0 and not any(t in jt for t in titles_seen):
                    if any(lead in jt for lead in ["senior", "lead", "principal", "architect", "staff", "head", "director", "manager"]):
                        promotions += 1
                titles_seen.add(jt)
        
        # Internal promotions checking within same company
        same_company_promotions = 0
        prev_company = None
        prev_title = ""
        for job in reversed(features["history"]):
            if not job:
                continue
            comp = job.get("company", "")
            jt = job.get("title", "")
            if not comp or not jt:
                continue
            comp = comp.lower()
            jt = jt.lower()
            if prev_company and comp == prev_company:
                is_senior_now = any(s in jt for s in ["senior", "lead", "principal", "architect", "staff", "head", "director", "manager"])
                was_senior_before = any(s in prev_title for s in ["senior", "lead", "principal", "architect", "staff", "head", "director", "manager"])
                if is_senior_now and not was_senior_before:
                    same_company_promotions += 1
            prev_company = comp
            prev_title = jt
            
        growth_score += min(promotions * 10.0, 20.0)
        growth_score += min(same_company_promotions * 15.0, 30.0)
        growth_score = min(max(growth_score, 10.0), 100.0)

        # 5. Authenticity Score (10%)
        authenticity_score = 100.0

        # Weighted final score computation
        final_score = (
            0.40 * tech_score +
            0.25 * role_score +
            0.15 * behavioral_score +
            0.10 * growth_score +
            0.10 * authenticity_score
        )
        
        final_score = round(final_score / 100.0, 3)

        return final_score, {
            "technical": tech_score,
            "role_relevance": role_score,
            "behavioral": behavioral_score,
            "growth": growth_score,
            "authenticity": authenticity_score
        }


class ReasoningGenerator:
    """Stage 6: Recruiter Reasoning Generation"""
    @staticmethod
    def generate(features: Dict[str, Any], scores: Dict[str, float], rank: int) -> str:
        """Generates detailed, factual recruiter-style justification."""
        name = features.get("title") or "Engineer"
        company = features.get("company") or "current firm"
        years = features.get("exp_years") or 0.0
        notice = features.get("notice_period") or 30
        location = features.get("location") or "India"
        growth = scores.get("growth") or 0.0
        response_rate = (features.get("response_rate") or 0.0) / 100.0
        github = features.get("github_score") or -1.0

        # Format GitHub score safely
        github_str = f"{github:.2f}" if github >= 0 else "not available"

        # Skills filtering
        IRRELEVANT_SKILLS = {
            "excel", "powerpoint", "word", "tally", "photoshop",
            "illustrator", "seo", "sales", "accounting", "html", "css",
            "angular", "react", "figma", "webpack", "tailwind"
        }
        cand_skills = list(features.get("skills", {}).keys())
        relevant_skills = [s for s in cand_skills if s.lower() not in IRRELEVANT_SKILLS]

        top_skills = []
        for sk in ["python", "elasticsearch", "lucene", "pytorch", "spark", "sql", "pinecone", "weaviate", "milvus", "qdrant", "langchain", "rag"]:
            if sk in relevant_skills:
                top_skills.append(sk.capitalize() if sk != 'rag' else 'RAG')
        if not top_skills:
            top_skills = [s.capitalize() for s in relevant_skills[:2]]
        
        skill_str = " and ".join(top_skills[:2]) if top_skills else "relevant technologies"

        notice_note = f" Note: Long notice period ({notice} days) might require buyout." if notice >= 90 else ""

        templates = [
            # Template 1 — title + company + skills focus
            f"{years:.1f} years as {name} at {company}, with hands-on expertise in {skill_str}. "
            f"Career trajectory shows {'strong' if growth > 70.0 else 'moderate'} upward growth.{notice_note}",

            # Template 2 — behavioral signals focus
            f"Strong behavioral profile: response rate {response_rate:.0%}, GitHub activity score {github_str}. "
            f"Currently {name} at {company} with {years:.1f} years total experience in {skill_str}.{notice_note}",

            # Template 3 — location + availability focus
            f"{name} at {company} based in {location}. "
            f"{years:.1f} years of experience with {skill_str}. "
            f"{'immediately available' if notice <= 30 else f'available in {notice} days'}.{notice_note}",

            # Template 4 — skills depth focus
            f"Demonstrated depth in {skill_str} across {years:.1f} years. "
            f"Currently {name} at {company}. "
            f"Behavioral engagement is {'high' if response_rate > 0.7 else 'moderate'}.{notice_note}",

            # Template 5 — seniority + growth focus
            f"{'Senior-level' if years > 8 else 'Mid-level'} profile with {years:.1f} years, "
            f"currently {name} at {company}. "
            f"Skilled in {skill_str} with {'strong' if growth > 70.0 else 'developing'} career growth signals.{notice_note}",

            # Template 6 — concern-aware (for lower ranks)
            f"{years:.1f} years experience as {name} at {company} with {skill_str}. "
            f"{'Concern: below-average behavioral signals.' if response_rate < 0.4 else 'Engagement metrics are acceptable.'}"
            f"{notice_note}"
        ]

        return templates[rank % len(templates)]


class SubmissionWriter:
    """Stage 5 & Output: Ranks, validates constraints, and writes CSV"""
    @staticmethod
    def write(ranked_candidates: List[Dict[str, Any]], out_path: str) -> None:
        logger.info(f"Writing final submission CSV to: {out_path}")
        try:
            with open(out_path, mode="w", newline="", encoding="utf-8") as f:
                writer = csv.writer(f)
                writer.writerow(["candidate_id", "rank", "score", "reasoning"])
                
                for idx, row in enumerate(ranked_candidates[:100]):
                    rank = idx + 1
                    clean_reasoning = row["reasoning"].replace("\n", " ").replace("\"", "'")
                    writer.writerow([row["candidate_id"], rank, row["score"], clean_reasoning])
                    
            logger.info("CSV writing completed successfully.")
        except Exception as e:
            logger.error(f"Failed to write CSV file: {e}")
            sys.exit(1)


def main():
    # CLI setup
    parser = argparse.ArgumentParser(description="CVBlitz AI Hackathon Ranking Engine")
    parser.add_argument("--candidates", required=True, help="Path to candidates.jsonl")
    parser.add_argument("--job_description", required=True, help="Path to job_description.txt")
    parser.add_argument("--out", required=True, help="Path to output submission.csv")
    args = parser.parse_args()

    start_time = datetime.now()
    logger.info("Starting CVBlitz Ranking Pipeline...")

    # Validate inputs exist
    if not os.path.exists(args.candidates):
        logger.error(f"Candidates file not found: {args.candidates}")
        sys.exit(1)
    if not os.path.exists(args.job_description):
        logger.error(f"Job Description file not found: {args.job_description}")
        sys.exit(1)

    # Stage 1: Analyze Job Description
    analyzer = JobDescriptionAnalyzer(args.job_description)
    analyzer.analyze()

    scoring_engine = ScoringEngine(analyzer)
    scored_candidates = []

    logger.info("Processing candidates stream...")
    count = 0
    honeypot_count = 0
    
    try:
        is_gz = args.candidates.endswith(".gz")
        open_func = gzip.open if is_gz else open
        open_mode = "rt" if is_gz else "r"
        
        # Read the first non-empty character to check if it's a JSON array or JSON Lines
        first_char = ""
        with open_func(args.candidates, open_mode, encoding="utf-8") as f:
            for line in f:
                clean = line.strip()
                if clean:
                    first_char = clean[0]
                    break
        
        def process_candidate(candidate):
            nonlocal count, honeypot_count
            if not candidate or "candidate_id" not in candidate:
                return
            
            features = CandidateFeatureExtractor.extract(candidate)
            auth_score, is_honeypot = HoneypotDetector.detect(features)
            if is_honeypot:
                honeypot_count += 1
            
            score, breakdown = scoring_engine.calculate_score(features, is_honeypot)
            
            scored_candidates.append({
                "candidate_id": features["candidate_id"],
                "current_title": features["title"],
                "current_company": features["company"],
                "score": score,
                "features": features,
                "breakdown": breakdown,
                "is_honeypot": is_honeypot
            })

            count += 1
            if count % 10000 == 0:
                logger.info(f"Parsed {count} candidates... (Filtered {honeypot_count} honeypots)")

        if first_char == "[":
            logger.info("Parsing input as standard JSON array...")
            with open_func(args.candidates, open_mode, encoding="utf-8") as f:
                try:
                    candidates_list = json.load(f)
                except Exception as je:
                    logger.error(f"Failed to parse candidates JSON array: {je}")
                    sys.exit(1)
                
                for candidate in candidates_list:
                    try:
                        process_candidate(candidate)
                    except Exception as e:
                        logger.error(f"Error processing candidate in JSON array: {e}")
                        continue
        else:
            logger.info("Parsing input as streaming JSON Lines...")
            with open_func(args.candidates, open_mode, encoding="utf-8") as f:
                for line in f:
                    if not line.strip():
                        continue
                    try:
                        candidate = json.loads(line)
                    except Exception as je:
                        logger.warning(f"Skipping malformed JSON line: {je}")
                        continue
                    
                    try:
                        process_candidate(candidate)
                    except Exception as e:
                        logger.error(f"Error processing candidate row: {e}")
                        continue
                    
    except Exception as e:
        logger.error(f"Failed to parse candidates input: {e}")
        sys.exit(1)

    logger.info(f"Total candidates evaluated: {count}. Total honeypots flagged: {honeypot_count}.")

    logger.info("Sorting and ranking candidates...")
    scored_candidates.sort(key=lambda x: (-x["score"], x["candidate_id"]))

    top_candidates = scored_candidates[:100]

    # Validate that scores are monotonically decreasing
    for i in range(len(top_candidates) - 1):
        if top_candidates[i]["score"] < top_candidates[i+1]["score"]:
            logger.error("Ranking sorting error: scores are not monotonically decreasing!")
            sys.exit(1)

    # Generate reasoning for top 100
    for idx, cand in enumerate(top_candidates):
        rank = idx + 1
        features = cand["features"]
        breakdown = cand["breakdown"]
        
        if cand["is_honeypot"]:
            cand["reasoning"] = "WARNING: Flagged as honeypot due to timeline discrepancies."
        else:
            cand["reasoning"] = ReasoningGenerator.generate(features, breakdown, rank)

    # Output sanity check to console
    print("\n=== TOP 10 SANITY CHECK ===")
    for i, row in enumerate(top_candidates[:10]):
        print(f"Rank {i+1}: {row['candidate_id']} | {row.get('current_title')} at {row.get('current_company')} | Score: {row['score']:.3f}")
    print("===========================\n")

    SubmissionWriter.write(top_candidates, args.out)

    duration = (datetime.now() - start_time).total_seconds()
    logger.info(f"CVBlitz pipeline completed successfully in {duration:.2f} seconds.")


if __name__ == "__main__":
    main()
