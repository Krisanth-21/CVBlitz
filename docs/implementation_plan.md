# Implementation Plan — Core Backend Ranking Engine (`rank.py`)

This plan outlines the design and implementation of the CPU-optimized candidate ranking engine `rank.py` for the Redrob Hackathon. The script will parse the entire 100k+ candidate pool locally in under 2 minutes, apply strict honeypot filters, calculate weighted matching scores, and output a validated `submission.csv` containing the top 100 candidates.

---

## User Review Required

Please review the proposed design details for the scoring system and reasoning generator:

> [!IMPORTANT]
> **Strict Compute Budget Constraints**
> The script must run in **≤ 5 minutes** on a standard CPU with **≤ 16 GB RAM** and **no network connection**. To achieve this:
> - We will use a fast stream reader (`jsonl` line-by-line parsing) to keep RAM usage minimal (~15 MB total footprint).
> - We will use highly optimized Python keyword sets and dictionary lookups instead of heavy NLP models (like spaCy or SentenceTransformers), which would exceed the 5-minute CPU runtime constraint over 100,000 candidates.

> [!NOTE]
> **Honeypot Detection Metrics**
> The honeypots will be hard-filtered to `0.0` score if they fail any of the following checks:
> 1. Overlapping timelines of concurrent full-time roles (excluding overlaps under 1 month).
> 2. Experience with technologies prior to their release (e.g., claiming > 9.5 years of PyTorch experience, as PyTorch was released in September 2016; or > 10.5 years of Rust, released in 2015).
> 3. Profile claims that violate physical boundaries (e.g., more years of experience than the company's lifespan, or claiming 15+ years of experience under 25 years of age).

---

## Proposed Changes

### Workspace Root Directory

#### [NEW] [rank.py](file:///c:/Users/krisa/OneDrive/Desktop/Hackathon/rank.py)
The core Python script executing the pipeline. It will contain the following modular classes:
- **`JobDescriptionAnalyzer`**: Parses the job description text file and extracts required/preferred keywords, target experience ranges, location preferences (Tier-1 Indian cities like Pune/Noida/Delhi/Mumbai/Hyderabad/Bangalore), and notice period thresholds.
- **`CandidateFeatureExtractor`**: Maps the nested JSON elements (career history, skills, signals, education).
- **`HoneypotDetector`**: Runs chronological checks and skill inflation audits to output `authenticity_score`.
- **`ScoringEngine`**: Calculates sub-scores and aggregates them:
  $$\text{Score} = 0.40 \times \text{Tech} + 0.25 \times \text{Role} + 0.15 \times \text{Behavior} + 0.10 \times \text{Growth} + 0.10 \times \text{Authenticity}$$
- **`ReasoningGenerator`**: Assembles precise, fact-based justifications referencing actual experience years, specific skills, and legitimate gaps (e.g., long notice periods).
- **`SubmissionWriter`**: Sorts candidates, handles deterministic tie-breaking (by score descending, then candidate_id ascending), selects the top 100, and outputs a valid CSV.

#### [NEW] [submission_metadata.yaml](file:///c:/Users/krisa/OneDrive/Desktop/Hackathon/submission_metadata.yaml)
Required metadata file mirroring portal details.

#### [NEW] [requirements.txt](file:///c:/Users/krisa/OneDrive/Desktop/Hackathon/requirements.txt)
Empty or minimum requirements (like `pyyaml`) to ensure compatibility in the sandboxed Docker reproduction run.

#### [MODIFY] [README.md](file:///c:/Users/krisa/OneDrive/Desktop/Hackathon/README.md)
Update the README with clear execution commands and setup details for reproducing the submission.

---

## Verification Plan

### Automated Verification
We will run format validation using the organizer's provided validation script:
```powershell
python C:\Users\krisa\OneDrive\Desktop\Hackathon\[PUB] India_runs_data_and_ai_challenge\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\validate_submission.py --submission submission.csv
```
This ensures:
- Exactly 100 rows + header.
- Correct columns (`candidate_id,rank,score,reasoning`).
- Non-increasing scores.
- Ranks 1 to 100 are unique.

### Performance Verification
We will time the execution over the entire `candidates.jsonl` dataset to ensure it finishes well within the 5-minute constraint.
