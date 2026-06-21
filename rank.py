import json
import csv
import gzip
import argparse

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
    ".net developer", "java developer"
}

RELEASE_YEARS = {
    "pytorch": 2016, "rust": 2015, "pinecone": 2019, "weaviate": 2019,
    "milvus": 2019, "qdrant": 2021, "pgvector": 2021, "lora": 2021,
    "qlora": 2021, "peft": 2021, "langchain": 2022, "llamaindex": 2022
}

MAX_MONTHS = {
    "pytorch": 118, "rust": 134, "milvus": 80, "weaviate": 80,
    "pinecone": 80, "qdrant": 60, "pgvector": 60, "lora": 60,
    "qlora": 60, "peft": 60, "langchain": 44, "llamaindex": 44
}

def clean(s):
    if not s:
        return ""
    return s.lower().replace("-", " ").replace("_", " ").strip()

def detect_honeypot(candidate):
    profile = candidate.get("profile") or {}
    company = clean(profile.get("current_company", ""))
    title = clean(profile.get("current_title", ""))
    exp = float(profile.get("years_of_experience") or 0)
    skills = candidate.get("skills") or []
    history = candidate.get("career_history") or []

    if any(f in company for f in FICTIONAL_COMPANIES):
        return True
    if any(t in title for t in IRRELEVANT_TITLES):
        return True

    periods = []
    for job in history:
        if not job:
            continue
        s = job.get("start_date", "")
        e = job.get("end_date", "")
        if not s:
            continue
        try:
            sv = int(s[:4]) * 12 + (int(s[5:7]) if len(s) >= 7 else 1)
            ev = (2026 * 12 + 6) if (job.get("is_current") or not e) else (int(e[:4]) * 12 + (int(e[5:7]) if len(e) >= 7 else 12))
            periods.append((sv, ev))
        except:
            continue
    periods.sort()
    for i in range(len(periods)):
        for j in range(i + 1, len(periods)):
            overlap = min(periods[i][1], periods[j][1]) - max(periods[i][0], periods[j][0])
            if overlap > 2:
                return True

    skills_dict = {clean(s.get("name", "")): s for s in skills if s and s.get("name")}
    for sn, sd in skills_dict.items():
        dur = sd.get("duration_months") or 0
        for tool, maxm in MAX_MONTHS.items():
            if tool in sn and dur > maxm:
                return True

    for job in history:
        if not job:
            continue
        desc = clean(job.get("description", ""))
        s = job.get("start_date", "")
        if not s:
            continue
        try:
            sy = int(s[:4])
            for tool, ry in RELEASE_YEARS.items():
                if tool in desc and sy < ry:
                    return True
        except:
            continue

    expert_skills = [s for s in skills if s and s.get("proficiency", "").lower() == "expert"]
    if len(expert_skills) > 6 and exp < 5:
        return True
    total_skill_yrs = sum((s or {}).get("duration_months", 0) for s in skills) / 12.0
    if exp > 0 and (total_skill_yrs / exp) > 4.5:
        return True

    return False

def compute_score(profile):
    score = 0.0
    
    exp = float(profile.get("years_of_experience") or 0)
    score += min(exp, 10) * 0.06
    
    title = str(profile.get("current_title") or "").lower()
    relevant_keywords = [
        'software engineer', 'frontend', 'backend', 'full stack',
        'data engineer', 'ml engineer', 'ai ', 'qa engineer',
        'senior software', 'analytics engineer'
    ]
    title_bonus = sum(0.15 for kw in relevant_keywords if kw in title)
    score += min(title_bonus, 0.45)
    
    company = str(profile.get("current_company") or "").lower()
    good_companies = [
        'zomato', 'razorpay', 'swiggy', 'flipkart', 'paytm',
        'cred', 'dream11', 'phonepe', 'nykaa', 'meesho', 'byju'
    ]
    if any(c in company for c in good_companies):
        score += 0.12
        
    location = str(profile.get("location") or "").lower()
    if any(city in location for city in ['bangalore', 'hyderabad', 'pune', 'chennai', 'delhi', 'mumbai']):
        score += 0.03
        
    return round(min(score, 0.99), 4)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--candidates", required=True)
    parser.add_argument("--out", default="submission.csv")
    args = parser.parse_args()

    is_gz = args.candidates.endswith(".gz")
    open_func = gzip.open if is_gz else open
    open_mode = "rt"

    clean_candidates = []

    with open_func(args.candidates, open_mode, encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            try:
                c = json.loads(line)
            except:
                continue

            cid = c.get("candidate_id", "")
            if not cid:
                continue

            if detect_honeypot(c):
                continue

            profile = c.get("profile") or {}
            score = compute_score(profile)

            clean_candidates.append({
                "candidate_id": cid,
                "score": score,
                "current_title": profile.get("current_title", ""),
                "current_company": profile.get("current_company", ""),
                "years_of_experience": profile.get("years_of_experience", 0)
            })

    clean_candidates.sort(key=lambda x: (-x["score"], x["candidate_id"]))
    top100 = clean_candidates[:100]

    with open(args.out, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["candidate_id", "rank", "score", "reasoning"])
        for idx, row in enumerate(top100):
            rank = idx + 1
            company_lower = str(row["current_company"]).lower()
            company_type = "product" if any(c in company_lower for c in ['zomato', 'razorpay', 'swiggy']) else "tech services"
            reasoning = f"{row['current_title']} at {row['current_company']} with {row['years_of_experience']} years exp. Strong technical profile in {company_type}."
            writer.writerow([row["candidate_id"], rank, row["score"], reasoning])

if __name__ == "__main__":
    main()