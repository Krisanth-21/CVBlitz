#!/usr/bin/env python3
"""
CVBlitz Best Ranker — rank_best.py
Produces top 100 candidates scoring 0.925–0.954 range.

Usage:
  python rank_best.py --candidates candidates.jsonl --out submission.csv
  python rank_best.py --candidates candidates.jsonl.gz --out submission.csv
"""

import json, csv, re, math, argparse, gzip, sys, logging
from datetime import datetime
from typing import Dict, List, Any, Tuple, Set, Optional

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("CVBlitzBestRanker")

# ============================================================
# JD TARGETS (Redrob Hackathon — Senior AI Engineer)
# ============================================================
REQUIRED_SKILLS = {
    "python", "embeddings", "vector database", "vector search",
    "retrieval", "ranking", "elasticsearch", "lucene", "faiss",
    "opensearch", "milvus", "pinecone", "weaviate", "qdrant",
    "sentence transformers", "hugging face transformers", "rag",
    "llamaindex", "information retrieval", "ndcg", "bm25",
    "evaluation", "search"
}

PREFERRED_SKILLS = {
    "pytorch", "fine tuning", "lora", "qlora", "peft",
    "learning to rank", "distributed systems", "mlops",
    "spark", "airflow", "recommendation systems", "llms",
    "deep learning", "nlp", "xgboost", "langchain", "pgvector"
}

TARGET_EXP_MIN = 5
TARGET_EXP_MAX = 9

# ============================================================
# SKILL EXPANSION: synonyms + hyponyms + abbreviations
# ============================================================
SKILL_EXPANSION = {
    "vector database":   ["milvus","pinecone","weaviate","qdrant","faiss","pgvector","chroma","opensearch","vespa"],
    "vector search":     ["milvus","pinecone","weaviate","qdrant","faiss","pgvector","opensearch"],
    "search":            ["elasticsearch","opensearch","lucene","solr","faiss","milvus","pinecone","vespa"],
    "embeddings":        ["sentence transformers","hugging face transformers","sentence-transformers","word2vec","fasttext"],
    "ranking":           ["learning to rank","bm25","reranking","ndcg","mrr","map"],
    "retrieval":         ["rag","llamaindex","langchain","haystack","information retrieval"],
    "rag":               ["retrieval augmented generation","llamaindex","langchain","haystack"],
    "nlp":               ["natural language processing","text mining","computational linguistics"],
    "ml":                ["machine learning"],
    "llms":              ["large language models","gpt","llm","foundation model","generative ai"],
    "fine tuning":       ["lora","qlora","peft","finetuning","fine-tuning","rlhf"],
    "elasticsearch":     ["opensearch","solr","lucene","elastic"],
    "pytorch":           ["torch"],
    "hugging face transformers": ["transformers","huggingface","sentence transformers","sentence-transformers"],
    "information retrieval": ["ir","search","retrieval","bm25","tf idf","tfidf"],
    "python":            ["py","python3","python2"],
    "mlops":             ["mlflow","kubeflow","bentoml","ray","dvc","weights biases","wandb"],
    "deep learning":     ["neural networks","cnn","rnn","lstm","transformer","bert","gpt"],
}

REVERSE_EXPANSION = {
    "milvus": ["vector database","vector search","embeddings"],
    "pinecone": ["vector database","vector search","embeddings"],
    "weaviate": ["vector database","vector search","embeddings"],
    "qdrant": ["vector database","vector search","embeddings"],
    "faiss": ["vector database","vector search","embeddings","search"],
    "pgvector": ["vector database","vector search","embeddings"],
    "opensearch": ["search","elasticsearch","vector search"],
    "elasticsearch": ["search","information retrieval"],
    "lucene": ["search","information retrieval"],
    "sentence transformers": ["embeddings","nlp","hugging face transformers"],
    "sentence-transformers": ["embeddings","nlp"],
    "hugging face transformers": ["embeddings","nlp","deep learning"],
    "llamaindex": ["rag","retrieval","llms"],
    "langchain": ["rag","retrieval","llms"],
    "haystack": ["rag","retrieval","information retrieval"],
    "bm25": ["ranking","information retrieval","search"],
    "learning to rank": ["ranking","information retrieval"],
    "ndcg": ["ranking","evaluation"],
    "lora": ["fine tuning","deep learning"],
    "qlora": ["fine tuning","deep learning"],
    "peft": ["fine tuning","deep learning"],
    "pytorch": ["deep learning","ml"],
    "tensorflow": ["deep learning","ml"],
    "mlflow": ["mlops"],
    "kubeflow": ["mlops"],
    "bentoml": ["mlops"],
    "retrieval augmented generation": ["rag","retrieval"],
    "natural language processing": ["nlp"],
    "information retrieval": ["retrieval","search","ranking"],
}

# ============================================================
# HONEYPOT DETECTION CONSTANTS
# ============================================================
FICTIONAL_COMPANIES = {
    "stark industries","hooli","dunder mifflin","globex",
    "wayne enterprises","pied piper","acme corp","initech",
    "umbrella corporation","cyberdyne","weyland-yutani",
    "aperture science","oscorp","lexcorp","tyrell corporation"
}

IRRELEVANT_TITLES = {
    "content writer","copywriter","technical writer",
    "marketing manager","sales executive","hr manager",
    "business analyst","account manager","graphic designer",
    "mechanical engineer","civil engineer","customer support",
    "operations manager","accountant","project manager",
    "mobile developer","devops engineer","cloud engineer",
    ".net developer","java developer"
}

SERVICES_FIRMS = {
    "tcs","wipro","infosys","cognizant","hcl","capgemini",
    "mphasis","ltimindtree","tech mahindra","hexaware",
    "mindtree","niit technologies","mastech","kpit",
    "genpact","tata consultancy"
}

RELEASE_YEARS = {
    "pytorch":2016,"rust":2015,"pinecone":2019,"weaviate":2019,
    "milvus":2019,"qdrant":2021,"pgvector":2021,"lora":2021,
    "qlora":2021,"peft":2021,"langchain":2022,"llamaindex":2022
}

MAX_MONTHS = {
    "pytorch":118,"rust":134,"milvus":80,"weaviate":80,
    "pinecone":80,"qdrant":60,"pgvector":60,"lora":60,
    "qlora":60,"peft":60,"langchain":44,"llamaindex":44
}

IRRELEVANT_SKILLS_DISPLAY = {
    "excel","powerpoint","word","tally","photoshop","illustrator",
    "seo","accounting","webpack","tailwind","redux","dbt",
    "scrum","agile","marketing","sales","hr","recruiting",
    "javascript","go","grpc","opencv","snowflake","figma",
    "databricks","scikit learn","scikit-learn","speech recognition",
    "tts","asr","forecasting","kubernetes","microservices"
}

# ============================================================
# UTILITIES
# ============================================================
def clean(s):
    if not s: return ""
    return s.lower().replace("-"," ").replace("_"," ").strip()

def stem_text(word):
    """Cleans and stems a single term using a simple, fast suffix stripper."""
    w = clean(word)
    if len(w) <= 3:
        return w
    # Common suffix stripping
    if w.endswith("ies"):
        w = w[:-3] + "i"
    elif w.endswith("ing"):
        w = w[:-3]
    elif w.endswith("ed"):
        w = w[:-2]
    elif w.endswith("es") and not w.endswith("ss"):
        w = w[:-2]
    elif w.endswith("al"):
        w = w[:-2]
    elif w.endswith("ment"):
        w = w[:-4]
    elif w.endswith("tion"):
        w = w[:-4]
    elif w.endswith("s") and not w.endswith("ss") and not w.endswith("u"):
        w = w[:-1]
    return w

class ConceptKnowledgeGraph:
    def __init__(self):
        # Base relations
        # Map: child -> list of (parent, rel_type)
        self.relations = {}
        # Synonyms map
        self.synonyms = {}
        
        # Load relations
        relations_list = [
            # Hyponymy (is_a)
            ("milvus", "is_a", "vector database"),
            ("pinecone", "is_a", "vector database"),
            ("weaviate", "is_a", "vector database"),
            ("qdrant", "is_a", "vector database"),
            ("faiss", "is_a", "vector database"),
            ("pgvector", "is_a", "vector database"),
            ("chroma", "is_a", "vector database"),
            ("opensearch", "is_a", "vector database"),
            ("elasticsearch", "is_a", "search engine"),
            ("solr", "is_a", "search engine"),
            ("lucene", "is_a", "search engine"),
            
            # Meronymy (part_of)
            ("embeddings", "part_of", "vector search"),
            ("vector database", "part_of", "vector search"),
            ("vector search", "part_of", "rag"),
            ("retrieval", "part_of", "rag"),
            ("llamaindex", "part_of", "rag"),
            ("langchain", "part_of", "rag"),
        ]
        
        for child, rel_type, parent in relations_list:
            c_stem = stem_text(child)
            p_stem = stem_text(parent)
            if c_stem not in self.relations:
                self.relations[c_stem] = []
            self.relations[c_stem].append((p_stem, rel_type))
            
        synonyms_list = [
            ("nlp", "natural language processing"),
            ("llms", "large language models"),
            ("ml", "machine learning"),
            ("py", "python"),
            ("rag", "retrieval augmented generation"),
            ("ir", "information retrieval"),
            ("tf idf", "tfidf"),
        ]
        for s1, s2 in synonyms_list:
            stem1 = stem_text(s1)
            stem2 = stem_text(s2)
            self.synonyms[stem1] = stem2
            self.synonyms[stem2] = stem1

    def expand_skills(self, skills_raw: List[Dict[str, Any]]) -> Dict[str, Tuple[float, Dict[str, Any]]]:
        """
        Expands skills list using Synonyms, Hypernymy, and Meronymy.
        Returns a dict mapping: stem -> (confidence, source_skill_dict)
        """
        expanded = {}
        # First load explicit
        for s in skills_raw:
            if not s or not s.get("name"): continue
            stem = stem_text(s["name"])
            if stem not in expanded or (s.get("duration_months") or 0) > (expanded[stem][1].get("duration_months") or 0):
                expanded[stem] = (1.0, s)
                
        # Pass 1: Resolve Synonyms and direct Hyponymy -> Hypernymy
        changed = True
        while changed:
            changed = False
            current_stems = list(expanded.keys())
            for stem in current_stems:
                conf, source = expanded[stem]
                
                # 1. Synonyms
                if stem in self.synonyms:
                    syn = self.synonyms[stem]
                    if syn not in expanded or expanded[syn][0] < conf:
                        expanded[syn] = (conf, source)
                        changed = True
                        
                # 2. Hypernymy (is_a -> e.g. milvus -> vector database)
                if stem in self.relations:
                    for parent, rel_type in self.relations[stem]:
                        if rel_type == "is_a":
                            if parent not in expanded or expanded[parent][0] < conf:
                                expanded[parent] = (conf, source)
                                changed = True
                                
        # Pass 2: Resolve Meronymy -> Holonymy
        holonym_parts = {}
        for child, rel_type, parent in [
            ("embeddings", "part_of", "vector search"),
            ("vector database", "part_of", "vector search"),
            ("vector search", "part_of", "rag"),
            ("retrieval", "part_of", "rag"),
        ]:
            c_stem = stem_text(child)
            p_stem = stem_text(parent)
            if p_stem not in holonym_parts:
                holonym_parts[p_stem] = set()
            holonym_parts[p_stem].add(c_stem)
            
        for holonym, parts in holonym_parts.items():
            matched_parts = [p for p in parts if p in expanded]
            if len(matched_parts) == len(parts):
                best_source = expanded[matched_parts[0]][1]
                for p in matched_parts[1:]:
                    s_data = expanded[p][1]
                    if (s_data.get("duration_months") or 0) > (best_source.get("duration_months") or 0):
                        best_source = s_data
                if holonym not in expanded or expanded[holonym][0] < 1.0:
                    expanded[holonym] = (1.0, best_source)
            elif len(matched_parts) > 0:
                best_source = expanded[matched_parts[0]][1]
                score = 0.6 * (len(matched_parts) / len(parts))
                if holonym not in expanded or expanded[holonym][0] < score:
                    expanded[holonym] = (score, best_source)
                    
        # Hardcoded shortcuts for popular frameworks
        for framework in ["llamaindex", "langchain"]:
            f_stem = stem_text(framework)
            if f_stem in expanded:
                r_stem = stem_text("rag")
                if r_stem not in expanded or expanded[r_stem][0] < 1.0:
                    expanded[r_stem] = (1.0, expanded[f_stem][1])
                    
        return expanded

# Global Concept Knowledge Graph instance
kg = ConceptKnowledgeGraph()

def expand_skill(skill_name):
    c = clean(skill_name)
    variants = {c}
    variants.update(SKILL_EXPANSION.get(c, []))
    variants.update(REVERSE_EXPANSION.get(c, []))
    return variants

# ============================================================
# HONEYPOT DETECTION
# ============================================================
def detect_honeypot(candidate):
    profile = candidate.get("profile") or {}
    company = clean(profile.get("current_company",""))
    title = clean(profile.get("current_title",""))
    exp = float(profile.get("years_of_experience") or 0)
    skills = candidate.get("skills") or []
    history = candidate.get("career_history") or []

    if any(f in company for f in FICTIONAL_COMPANIES):
        return True, "fictional_company"
    if any(t in title for t in IRRELEVANT_TITLES):
        return True, "irrelevant_title"

    # Timeline overlaps (>2 months simultaneous full-time jobs)
    periods = []
    for job in history:
        if not job: continue
        s = job.get("start_date","")
        e = job.get("end_date","")
        if not s: continue
        try:
            sv = int(s[:4])*12 + (int(s[5:7]) if len(s)>=7 else 1)
            ev = (2026*12+6) if (job.get("is_current") or not e) else (int(e[:4])*12 + (int(e[5:7]) if len(e)>=7 else 12))
            periods.append((sv, ev))
        except: continue
    periods.sort()
    for i in range(len(periods)):
        for j in range(i+1, len(periods)):
            overlap = min(periods[i][1], periods[j][1]) - max(periods[i][0], periods[j][0])
            if overlap > 2:
                return True, "timeline_overlap"

    # Anachronism — skill duration exceeds tool existence
    skills_dict = {clean(s.get("name","")): s for s in skills if s and s.get("name")}
    for sn, sd in skills_dict.items():
        dur = sd.get("duration_months") or 0
        for tool, maxm in MAX_MONTHS.items():
            if tool in sn and dur > maxm:
                return True, f"anachronism_duration:{sn}"

    # Anachronism — job description mentions tool before release
    for job in history:
        if not job: continue
        desc = clean(job.get("description",""))
        s = job.get("start_date","")
        if not s: continue
        try:
            sy = int(s[:4])
            for tool, ry in RELEASE_YEARS.items():
                if tool in desc and sy < ry:
                    return True, f"anachronism_job:{tool}"
        except: continue

    # Skill inflation
    expert_skills = [s for s in skills if s and s.get("proficiency","").lower()=="expert"]
    if len(expert_skills) > 6 and exp < 5:
        return True, "skill_inflation_expert"
    total_skill_yrs = sum((s or {}).get("duration_months",0) for s in skills) / 12.0
    if exp > 0 and (total_skill_yrs / exp) > 4.5:
        return True, "skill_inflation_ratio"

    return False, ""

# ============================================================
# SCORING ENGINE
# ============================================================
def score_candidate(candidate):
    profile = candidate.get("profile") or {}
    skills_raw = candidate.get("skills") or []
    signals = candidate.get("redrob_signals") or {}
    history = candidate.get("career_history") or []

    title = clean(profile.get("current_title",""))
    company = clean(profile.get("current_company",""))
    location = clean(profile.get("location",""))
    exp = float(profile.get("years_of_experience") or 0)

    # Build expanded skills dictionary using Concept Knowledge Graph
    expanded_skills = kg.expand_skills(skills_raw)

    # ── 1. TECH SCORE (40%) ──────────────────────────────
    tech_score = 0.0
    matched_required = []
    matched_preferred = []

    for req in REQUIRED_SKILLS:
        req_stem = stem_text(req)
        if req_stem in expanded_skills:
            conf, sd = expanded_skills[req_stem]
            prof = clean(sd.get("proficiency", "intermediate"))
            pm = 1.3 if prof == "expert" else (1.1 if prof == "advanced" else 0.9)
            dur = min(sd.get("duration_months") or 12, 60) / 60.0
            tech_score += 35.0 * pm * (0.5 + 0.5 * dur) * conf
            matched_required.append(req)

    for pref in PREFERRED_SKILLS:
        pref_stem = stem_text(pref)
        if pref_stem in expanded_skills:
            conf, sd = expanded_skills[pref_stem]
            prof = clean(sd.get("proficiency", "intermediate"))
            pm = 1.3 if prof == "expert" else (1.1 if prof == "advanced" else 0.9)
            tech_score += 12.0 * pm * conf
            matched_preferred.append(pref)

    # Penalty check using stemmed keys
    core_search = {
        stem_text("elasticsearch"), stem_text("milvus"), stem_text("pinecone"),
        stem_text("weaviate"), stem_text("qdrant"), stem_text("faiss"),
        stem_text("opensearch"), stem_text("vector search"), stem_text("vector database"),
        stem_text("embeddings"), stem_text("rag"), stem_text("information retrieval"),
        stem_text("bm25"), stem_text("ranking"), stem_text("retrieval"),
        stem_text("search"), stem_text("sentence transformers")
    }
    if not any(s in expanded_skills for s in core_search):
        tech_score *= 0.4

    tech_score = min(max(tech_score, 5.0), 100.0)

    # ── 2. ROLE SCORE (25%) ──────────────────────────────
    role_score = 50.0

    if TARGET_EXP_MIN <= exp <= TARGET_EXP_MAX:
        role_score += 35.0
    elif 4 <= exp < 5:
        role_score += 22.0
    elif 9 < exp <= 11:
        role_score += 18.0
    elif 11 < exp <= 13:
        role_score += 10.0
    elif exp > 13:
        role_score += max(0.0, 8.0 - 3.0*(exp-13))
    else:
        role_score += max(0.0, exp * 4.5)

    AI_TITLES = ["ai","ml","nlp","machine learning","search","retrieval",
                 "ranking","recommendation","research","data scientist",
                 "research engineer","applied scientist"]
    GOOD_TITLES = ["software engineer","backend","systems","data engineer"]
    BAD_TITLES = ["qa","tester","frontend","ui","ux","designer",
                  "product manager","recruiter","finance","support"]

    if any(kw in title for kw in AI_TITLES):
        role_score += 25.0
    elif any(kw in title for kw in GOOD_TITLES):
        role_score += 10.0
    elif any(kw in title for kw in BAD_TITLES):
        role_score *= 0.3

    # Services firm penalty
    is_services_only = True
    for job in history:
        if not job: continue
        jc = clean(job.get("company",""))
        if not any(sf in jc for sf in SERVICES_FIRMS):
            is_services_only = False
            break
    if not history:
        is_services_only = False
    curr_services = any(sf in company for sf in SERVICES_FIRMS)

    if is_services_only:
        role_score *= 0.5
    elif curr_services:
        role_score *= 0.75

    # Location boost
    if any(c in location for c in ["bangalore","bengaluru","noida","pune"]):
        role_score += 12.0
    elif any(c in location for c in ["delhi","ncr","mumbai","hyderabad","chennai","gurgaon"]):
        role_score += 6.0

    role_score = min(max(role_score, 5.0), 100.0)

    # ── 3. BEHAVIORAL SCORE (15%) ─────────────────────────
    resp = float(signals.get("recruiter_response_rate") or 75)
    if resp <= 1.0: resp *= 100.0

    github = float(signals.get("github_activity_score") or -1)
    github_norm = min(github, 100.0) if github >= 0 else 50.0

    interview = float(signals.get("interview_completion_rate") or 80)
    if interview <= 1.0: interview *= 100.0

    notice = int(signals.get("notice_period_days") or 60)
    if notice <= 15:   notice_score = 100.0
    elif notice <= 30: notice_score = 90.0
    elif notice <= 45: notice_score = 75.0
    elif notice <= 60: notice_score = 60.0
    elif notice <= 90: notice_score = 35.0
    else:              notice_score = 10.0

    open_to_work = bool(signals.get("open_to_work_flag", True))
    relocate = bool(signals.get("willing_to_relocate", True))

    last_active = signals.get("last_active_date","")
    active_days = 365
    if last_active:
        try:
            dt = datetime.strptime(last_active[:10], "%Y-%m-%d")
            active_days = (datetime(2026,6,21) - dt).days
        except: pass
    if active_days <= 14:   active_score = 100.0
    elif active_days <= 30: active_score = 85.0
    elif active_days <= 90: active_score = 65.0
    elif active_days <= 180: active_score = 40.0
    else:                   active_score = 15.0

    offer_rate = float(signals.get("offer_acceptance_rate") or -1)
    offer_score = (offer_rate*100.0) if offer_rate >= 0 else 75.0

    saved = int(signals.get("saved_by_recruiters_30d") or 0)
    saved_score = min(float(saved)*25.0, 100.0)

    behavioral_score = (
        0.22*resp +
        0.18*github_norm +
        0.15*interview +
        0.18*notice_score +
        0.12*active_score +
        0.10*offer_score +
        0.05*saved_score
    )
    if open_to_work: behavioral_score += 5.0
    if relocate:     behavioral_score += 3.0
    behavioral_score = min(max(behavioral_score, 5.0), 100.0)

    # ── 4. GROWTH SCORE (10%) ────────────────────────────
    growth_score = 65.0
    num_jobs = len(history)
    if num_jobs > 0:
        total_months = sum((j or {}).get("duration_months",0) for j in history if j)
        avg_tenure = total_months / num_jobs
        if avg_tenure >= 30:   growth_score += 20.0
        elif avg_tenure >= 18: growth_score += 10.0
        elif avg_tenure < 12:  growth_score -= 20.0

    promotions = 0
    prev_comp, prev_title_g = "", ""
    for job in reversed(history):
        if not job: continue
        jc = clean(job.get("company",""))
        jt = clean(job.get("title",""))
        if prev_comp and jc == prev_comp:
            senior_kw = ["senior","lead","principal","staff","head","architect"]
            if any(s in jt for s in senior_kw) and not any(s in prev_title_g for s in senior_kw):
                promotions += 1
        prev_comp, prev_title_g = jc, jt
    growth_score += min(promotions*15.0, 30.0)
    growth_score = min(max(growth_score, 5.0), 100.0)

    # ── 5. AUTHENTICITY SCORE (10%) ──────────────────────
    auth_score = 100.0
    if num_jobs > 0:
        total_months = sum((j or {}).get("duration_months",0) for j in history if j)
        avg_tenure = total_months / num_jobs
        if avg_tenure < 12: auth_score -= 20.0
    if num_jobs > 8 and exp < 6: auth_score -= 20.0
    if bool(signals.get("verified_email")) and bool(signals.get("verified_phone")):
        auth_score += 5.0
    auth_score = min(max(auth_score, 50.0), 100.0)

    # ── FINAL WEIGHTED SCORE ──────────────────────────────
    final = (
        0.40*tech_score +
        0.25*role_score +
        0.15*behavioral_score +
        0.10*growth_score +
        0.10*auth_score
    )
    final = round(final/100.0, 4)

    return final, {
        "tech": tech_score,
        "role": role_score,
        "behavioral": behavioral_score,
        "growth": growth_score,
        "auth": auth_score,
        "matched_required": matched_required,
        "matched_preferred": matched_preferred,
        "notice": notice,
        "exp": exp,
        "title": profile.get("current_title",""),
        "company": profile.get("current_company",""),
        "location": profile.get("location",""),
        "github": github,
        "response_rate": resp,
    }

# ============================================================
# REASONING GENERATOR — 6 rotating templates
# ============================================================
def generate_reasoning(cid, breakdown):
    title = breakdown["title"]
    company = breakdown["company"]
    location = breakdown["location"]
    exp = breakdown["exp"]
    notice = breakdown["notice"]
    resp = breakdown["response_rate"]
    github = breakdown["github"]
    growth = breakdown["growth"]
    matched_req = breakdown["matched_required"]
    matched_pref = breakdown["matched_preferred"]

    display_req = [s for s in matched_req if s not in IRRELEVANT_SKILLS_DISPLAY][:2]
    display_pref = [s for s in matched_pref if s not in IRRELEVANT_SKILLS_DISPLAY][:1]
    all_skills = display_req + display_pref
    skill_str = " and ".join([s.title() for s in all_skills[:2]]) if all_skills else "core ML/search technologies"

    notice_note = f" Note: Long notice period ({notice} days) might require buyout." if notice >= 90 else ""
    github_str = f"{github:.1f}" if github >= 0 else "not available"
    availability = "immediately available" if notice <= 30 else f"available in {notice} days"

    templates = [
        f"{exp:.1f} years as {title} at {company}, with hands-on expertise in {skill_str}. "
        f"Career trajectory shows {'strong' if growth > 75 else 'moderate'} upward growth.{notice_note}",

        f"Strong behavioral profile: response rate {resp:.0f}%, GitHub activity score {github_str}. "
        f"Currently {title} at {company} with {exp:.1f} years total experience in {skill_str}.{notice_note}",

        f"{title} at {company} based in {location}. "
        f"{exp:.1f} years of experience with {skill_str}. {availability}.",

        f"Demonstrated depth in {skill_str} across {exp:.1f} years. "
        f"Currently {title} at {company}. "
        f"Behavioral engagement is {'high' if resp > 70 else 'moderate'}.{notice_note}",

        f"{'Senior-level' if exp > 8 else 'Mid-level'} profile with {exp:.1f} years, "
        f"currently {title} at {company}. "
        f"Skilled in {skill_str} with {'strong' if growth > 75 else 'developing'} career growth signals.{notice_note}",

        f"{exp:.1f} years experience as {title} at {company} with {skill_str}. "
        f"{'Concern: below-average behavioral signals.' if resp < 40 else 'Engagement metrics are acceptable.'}"
        f"{notice_note}",
    ]

    return templates[hash(cid) % len(templates)]

# ============================================================
# MAIN PIPELINE
# ============================================================
def main():
    parser = argparse.ArgumentParser(description="CVBlitz Best Ranker")
    parser.add_argument("--candidates", required=True, help="Path to candidates.jsonl or candidates.jsonl.gz")
    parser.add_argument("--out", default="submission.csv", help="Output CSV path")
    args = parser.parse_args()

    start = datetime.now()
    logger.info("Starting CVBlitz Best Ranker pipeline...")

    is_gz = args.candidates.endswith(".gz")
    open_func = gzip.open if is_gz else open
    open_mode = "rt"

    scored = []
    total = honeypots = skipped = 0

    with open_func(args.candidates, open_mode, encoding="utf-8") as f:
        for line in f:
            if not line.strip(): continue
            try:
                c = json.loads(line)
            except:
                skipped += 1
                continue

            cid = c.get("candidate_id","")
            if not cid: continue

            is_hp, reason = detect_honeypot(c)
            if is_hp:
                honeypots += 1
                total += 1
                continue

            final_score, breakdown = score_candidate(c)
            scored.append({
                "candidate_id": cid,
                "score": final_score,
                "breakdown": breakdown
            })
            total += 1
            if total % 10000 == 0:
                logger.info(f"{total}/100000 | honeypots={honeypots} | clean={len(scored)}")

    logger.info(f"Done. Total={total} Honeypots={honeypots} Clean={len(scored)} Skipped={skipped}")

    # Sort: descending score, ascending candidate_id for ties
    scored.sort(key=lambda x: (-x["score"], x["candidate_id"]))

    top100 = scored[:100]

    # Validate monotonic
    scores = [r["score"] for r in top100]
    if not all(scores[i] >= scores[i+1] for i in range(len(scores)-1)):
        logger.error("Sorting error — scores not monotonically decreasing!")
        sys.exit(1)

    # Sanity check
    print("\n=== TOP 10 SANITY CHECK ===")
    for i, row in enumerate(top100[:10]):
        b = row["breakdown"]
        print(f"Rank {i+1:>2}: {row['candidate_id']} | {b['title']} at {b['company']} | Score:{row['score']:.4f} | Tech:{b['tech']:.1f} Role:{b['role']:.1f} Beh:{b['behavioral']:.1f}")
    print("===========================\n")

    # Write CSV
    with open(args.out, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["candidate_id","rank","score","reasoning"])
        for idx, row in enumerate(top100):
            rank = idx + 1
            reasoning = generate_reasoning(row["candidate_id"], row["breakdown"])
            reasoning = reasoning.replace("\n"," ").replace('"',"'")
            writer.writerow([row["candidate_id"], rank, row["score"], reasoning])

    elapsed = (datetime.now() - start).total_seconds()
    logger.info(f"CSV written to: {args.out}")
    logger.info(f"Pipeline completed in {elapsed:.2f} seconds.")
    logger.info(f"Score range: {top100[0]['score']:.4f} (rank 1) → {top100[-1]['score']:.4f} (rank 100)")

if __name__ == "__main__":
    main()