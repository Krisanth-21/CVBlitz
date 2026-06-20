import json
import os
from collections import defaultdict

candidates_path = r"c:\Users\krisa\OneDrive\Desktop\Hackathon\[PUB] India_runs_data_and_ai_challenge\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\candidates.jsonl"
if not os.path.exists(candidates_path):
    # Try sample_candidates.json
    candidates_path = r"c:\Users\krisa\OneDrive\Desktop\Hackathon\[PUB] India_runs_data_and_ai_challenge\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\sample_candidates.json"

print(f"Reading from {candidates_path}...")

max_durations = defaultdict(int)
total_candidates = 0

if candidates_path.endswith(".json"):
    with open(candidates_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        for cand in data:
            total_candidates += 1
            for skill in cand.get("skills", []):
                name = skill.get("name", "").lower()
                dur = skill.get("duration_months", 0)
                if dur > max_durations[name]:
                    max_durations[name] = dur
else:
    with open(candidates_path, "r", encoding="utf-8") as f:
        for line in f:
            if not line.strip():
                continue
            total_candidates += 1
            try:
                cand = json.loads(line)
                for skill in cand.get("skills", []):
                    name = skill.get("name", "").lower()
                    dur = skill.get("duration_months", 0)
                    if dur > max_durations[name]:
                        max_durations[name] = dur
            except:
                pass

print(f"Total candidates scanned: {total_candidates}")
print("Top 100 skills by max duration (months):")
sorted_skills = sorted(max_durations.items(), key=lambda x: x[1], reverse=True)
for name, dur in sorted_skills[:100]:
    print(f"  {name}: {dur} months ({dur/12.0:.1f} years)")
