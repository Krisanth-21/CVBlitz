# 🏆 Redrob Hackathon — Complete Challenge Analysis

## Challenge: Intelligent Candidate Discovery & Ranking

**Organizer:** Redrob AI (Series A AI-native talent intelligence platform)

---

## 📌 TL;DR — What You Need To Do

> **Rank the top 100 candidates** (out of 100,000) for a **Senior AI Engineer** role at Redrob AI. Produce a CSV with `candidate_id, rank, score, reasoning`. Your system must run in **≤5 min on CPU (16GB RAM, no GPU, no network)**.

---

## 📂 Files in the Bundle

| File | Purpose |
|------|---------|
| `candidates.jsonl` | **100,000 candidates** (~465 MB uncompressed) — the pool you rank |
| `sample_candidates.json` | First 50 candidates as pretty-printed JSON for quick inspection |
| `job_description.docx` | The JD you're ranking against — **Senior AI Engineer, Founding Team** |
| `submission_spec.docx` | Full rules, format, evaluation stages, compute constraints |
| `redrob_signals_doc.docx` | Reference for 23 behavioral signals in `redrob_signals` |
| `candidate_schema.json` | JSON Schema for every field in a candidate record |
| `sample_submission.csv` | Format reference (not a quality ranking) |
| `submission_metadata_template.yaml` | Template for metadata alongside submission |
| `validate_submission.py` | Format validator — run before uploading |

---

## 🎯 The Job Description — Senior AI Engineer (Founding Team)

### Company & Role
- **Company:** Redrob AI — Series A AI-native talent intelligence platform
- **Location:** Pune/Noida, India (Hybrid, flexible) | Open to relocation from Tier-1 Indian cities
- **Type:** Full-time
- **Experience:** 5–9 years (flexible, see below)

### What the Role Actually Does
Own the **intelligence layer** of Redrob's product — ranking, retrieval, and matching systems.

**First 90 days:**
- Weeks 1-3: Audit current system (BM25 + rule-based scoring)
- Weeks 4-8: Ship v2 ranking system (embeddings, hybrid retrieval, LLM re-ranking)
- Weeks 9-12: Set up evaluation infra (offline benchmarks, A/B testing, feedback loops)

### ✅ Must-Have Skills
1. **Production experience with embeddings-based retrieval** (sentence-transformers, OpenAI embeddings, BGE, E5, etc.)
2. **Production experience with vector databases / hybrid search** (Pinecone, Weaviate, Qdrant, Milvus, Elasticsearch, FAISS, etc.)
3. **Strong Python** — code quality matters
4. **Evaluation frameworks for ranking** — NDCG, MRR, MAP, A/B test interpretation

### 👍 Nice-to-Have Skills
- LLM fine-tuning (LoRA, QLoRA, PEFT)
- Learning-to-rank models (XGBoost-based or neural)
- HR-tech / recruiting tech / marketplace experience
- Distributed systems / large-scale inference
- Open-source contributions in AI/ML

### ❌ Explicit Disqualifiers
- Pure research without production deployment
- AI experience = only recent LangChain/OpenAI projects (< 12 months)
- Senior engineers who haven't written production code in 18+ months
- Non-technical / adjacent roles (without strong AI/ML depth)

---

## 📊 Candidate Data Schema

Each candidate record has **6 top-level sections**:

### 1. `profile` — Static Identity
| Field | Description |
|-------|-------------|
| `anonymized_name` | Anonymized full name |
| `headline` | One-line professional headline |
| `summary` | Multi-sentence professional summary |
| `location` / `country` | Geography |
| `years_of_experience` | 0–50 |
| `current_title` / `current_company` | Current position |
| `current_company_size` | Enum: 1-10 to 10001+ |
| `current_industry` | Industry string |

### 2. `career_history` — 1 to 10 roles
Each role: `company`, `title`, `start_date`, `end_date`, `duration_months`, `is_current`, `industry`, `company_size`, `description`

### 3. `education` — 0 to 5 entries
Each: `institution`, `degree`, `field_of_study`, `start_year`, `end_year`, `grade`, `tier` (tier_1 to tier_4, unknown)

### 4. `skills` — Variable count
Each: `name`, `proficiency` (beginner/intermediate/advanced/expert), `endorsements`, `duration_months`

### 5. `certifications` — Variable count
Each: `name`, `issuer`, `year`

### 6. `redrob_signals` — 23 Behavioral Signals
This is **critical** for ranking quality. These behavioral signals are often more predictive than static profiles.

| # | Signal | Range | What It Measures |
|---|--------|-------|------------------|
| 1 | `profile_completeness_score` | 0-100 | How much profile is filled |
| 2 | `signup_date` | date | When they joined Redrob |
| 3 | `last_active_date` | date | Last login |
| 4 | `open_to_work_flag` | bool | Marked as available |
| 5 | `profile_views_received_30d` | int ≥ 0 | Recruiter views (30d) |
| 6 | `applications_submitted_30d` | int ≥ 0 | Recent applications |
| 7 | `recruiter_response_rate` | 0.0-1.0 | Reply rate to recruiters |
| 8 | `avg_response_time_hours` | num ≥ 0 | Median response time |
| 9 | `skill_assessment_scores` | dict[str, 0-100] | Redrob assessment scores |
| 10 | `connection_count` | int ≥ 0 | Redrob connections |
| 11 | `endorsements_received` | int ≥ 0 | Skill endorsements |
| 12 | `notice_period_days` | 0-180 | Notice period |
| 13 | `expected_salary_range_inr_lpa` | {min, max} | Salary expectations (INR LPA) |
| 14 | `preferred_work_mode` | onsite/hybrid/remote/flexible | Work preference |
| 15 | `willing_to_relocate` | bool | Relocation willingness |
| 16 | `github_activity_score` | -1 to 100 | GitHub activity (-1 = no GitHub) |
| 17 | `search_appearance_30d` | int ≥ 0 | Recruiter search appearances |
| 18 | `saved_by_recruiters_30d` | int ≥ 0 | Bookmarked by recruiters |
| 19 | `interview_completion_rate` | 0.0-1.0 | Attended vs scheduled interviews |
| 20 | `offer_acceptance_rate` | -1 to 1.0 | Offer acceptance (-1 = no history) |
| 21 | `verified_email` | bool | Email verified |
| 22 | `verified_phone` | bool | Phone verified |
| 23 | `linkedin_connected` | bool | LinkedIn linked |

---

## 📋 Submission Format

### CSV Structure
```csv
candidate_id,rank,score,reasoning
CAND_0004989,1,0.9920,HR Manager with 6.1 yrs; 9 AI core skills; response rate 0.76.
...
```

### Hard Requirements
- **Exactly 100 data rows** (ranks 1-100)
- **Ranks 1 to 100**, each appearing exactly once
- **Scores must be non-increasing** (rank 1 has highest score)
- **Tie-break**: equal scores → candidate_id ascending
- **candidate_id format**: `CAND_XXXXXXX` (7 digits)
- **UTF-8 encoding**, `.csv` extension
- **Reasoning**: 1-2 sentence explanation per candidate

### Compute Constraints
- **≤ 5 minutes** runtime for ranking step
- **16 GB RAM**, CPU only, **no GPU**
- **No network access** during ranking
- Pre-computation (embeddings, indexes) is allowed separately

---

## 📈 Evaluation — How You're Scored

### Scoring Formula
```
Final = 0.50 × NDCG@10 + 0.30 × NDCG@50 + 0.15 × MAP + 0.05 × P@10
```

> [!IMPORTANT]
> **No live leaderboard.** Scores revealed only after submissions close. No feedback during competition.

### 5-Stage Evaluation Pipeline

| Stage | What Happens | Elimination Criteria |
|-------|-------------|---------------------|
| **1. Format validation** | Auto-validator on submission | Any spec violation |
| **2. Scoring** | Composite computed on hidden ground truth | Score below advancement cutoff |
| **3. Code reproduction + honeypot** | Top-N: code repo reproduced in sandbox | Can't reproduce; honeypot rate >10%; fabricated repo |
| **4. Manual review** | Reasoning quality, methodology, git history, code quality | Failed reasoning; flat git history; all LLM API calls |
| **5. Interview** | 30-min video call, walk through architecture | Can't explain architecture; didn't build it |

### Tiebreakers
1. Higher P@5
2. Higher P@10
3. Earlier submission timestamp

---

## ⚠️ TRAPS & HONEYPOTS — Critical!

> [!CAUTION]
> **~80 honeypot candidates** with subtly impossible profiles exist in the dataset.

### What Honeypots Look Like
- 8 years experience at a company founded 3 years ago
- "Expert" proficiency in 10 skills with 0 years used
- Subtly impossible career timelines

### Consequences
- Honeypots are **forced to relevance tier 0** in ground truth
- **Honeypot rate > 10% in top 100 = DISQUALIFIED**
- Systems doing pure keyword/embedding matching will naturally pick these up

### How to Avoid
- Cross-validate profile claims (experience vs company age, skill proficiency vs duration)
- Look for impossibly perfect profiles
- A good ranking system should **naturally** filter them out

---

## 📦 What You Must Submit

### 1. The CSV File
Top-100 ranking per Sections 2-3.

### 2. Portal Metadata
| Field | Required |
|-------|----------|
| Team name | ✅ |
| Primary contact (name, email, phone) | ✅ |
| GitHub repo URL | ✅ |
| Sandbox/demo link | ✅ |
| AI tools declaration | ✅ |
| Compute environment summary | ✅ |
| Team member list | ✅ |
| Methodology summary | Optional but recommended |

### 3. Code Repository
- Clear README with setup + reproduction commands
- Full source code
- Pre-computed artifacts or scripts to produce them
- `requirements.txt` / `pyproject.toml`
- `submission_metadata.yaml` at repo root

### 4. Sandbox (Required!)
Acceptable platforms: HuggingFace Spaces, Streamlit Cloud, Replit, Google Colab, Docker, Binder

Must:
- Accept ≤100 candidates as input
- Run ranking end-to-end → produce ranked CSV
- Complete within ≤5 min on CPU

---

## 🧠 Key Strategic Takeaways

### What Will Win This Challenge

1. **Multi-signal ranking** — Don't just match skills. Combine:
   - Skill/experience match to JD
   - Career trajectory relevance
   - Behavioral signals (response rate, activity, GitHub score)
   - Location/relocation compatibility
   - Education tier relevance

2. **Honeypot detection** — Cross-validate profiles to catch impossible claims. This is a **disqualification gate**.

3. **Strong reasoning** — Each candidate needs a 1-2 sentence justification. This is reviewed at Stage 4.

4. **Efficient processing** — 100K candidates in ≤5 min on CPU. Rule-based or lightweight ML approaches will be more practical than heavy model inference.

5. **Reproducibility** — Clean code, working sandbox, real git history showing iteration.

### What the JD Actually Values (For Ranking)
- **Must**: Embeddings/retrieval production experience, vector DB experience, strong Python, ranking evaluation expertise
- **Strong**: 5-9 years experience, India-based or willing to relocate, hybrid/onsite preference
- **Nice**: LLM fine-tuning, learning-to-rank, HR-tech background, open-source contributions
- **Disqualifier**: Pure research, < 12 months AI experience, non-coding roles

### Candidate Tiers to Look For
1. **Tier 1 (Best)**: ML/AI Engineers with production retrieval/ranking experience, 5-9 years, India-based, strong behavioral signals
2. **Tier 2**: Data Scientists / ML Engineers with adjacent production experience, willing to relocate
3. **Tier 3**: Strong backend engineers with AI-adjacent skills transitioning to ML
4. **Tier 4**: Non-technical or non-AI roles, regardless of keyword density
5. **Tier 0**: Honeypots — impossibly perfect profiles

---

> [!TIP]
> **Max 3 submissions allowed. Last valid one counts.** Validate locally with `validate_submission.py` before every upload.
