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

    # Build expanded skill dict
    skills_dict = {}
    for s in skills_raw:
        if not s or not s.get("name"): continue
        cn = clean(s["name"])
        skills_dict[cn] = s
        for variant in expand_skill(cn):
            if variant not in skills_dict:
                skills_dict[variant] = s

    # ── 1. TECH SCORE (40%) ──────────────────────────────
    tech_score = 0.0
    matched_required = []
    matched_preferred = []

    for req in REQUIRED_SKILLS:
        req_variants = {req} | set(SKILL_EXPANSION.get(req, []))
        for variant in req_variants:
            if variant in skills_dict:
                sd = skills_dict[variant]
                prof = clean(sd.get("proficiency","intermediate"))
                pm = 1.3 if prof=="expert" else (1.1 if prof=="advanced" else 0.9)
                dur = min(sd.get("duration_months") or 12, 60) / 60.0
                tech_score += 35.0 * pm * (0.5 + 0.5*dur)
                matched_required.append(variant)
                break

    for pref in PREFERRED_SKILLS:
        pref_variants = {pref} | set(SKILL_EXPANSION.get(pref, []))
        for variant in pref_variants:
            if variant in skills_dict:
                sd = skills_dict[variant]
                prof = clean(sd.get("proficiency","intermediate"))
                pm = 1.3 if prof=="expert" else (1.1 if prof=="advanced" else 0.9)
                tech_score += 12.0 * pm
                matched_preferred.append(variant)
                break

    # Penalty: zero core search/vector skills
    core_search = {
        "elasticsearch","milvus","pinecone","weaviate","qdrant","faiss",
        "opensearch","vector search","vector database","embeddings","rag",
        "information retrieval","bm25","ranking","retrieval","search",
        "sentence transformers"
    }
    if not any(s in skills_dict for s in core_search):
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