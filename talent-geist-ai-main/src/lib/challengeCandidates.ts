// Challenge Candidates and JD generated from redrob challenge resources
export const CHALLENGE_JD = "Job Description: Senior AI Engineer \u2014 Founding Team\nCompany: Redrob AI (Series A AI-native talent intelligence platform)\nLocation: Pune/Noida, India (Hybrid \u2014 flexible cadence) | Open to relocation candidates from Tier-1 Indian cities\nEmployment Type: Full-time\nExperience Required: 5\u20139 years (see \"what we mean by this\" below)\nLet's be honest about this role\nWe're going to write this JD differently from most. We're a Series A company that just raised our round and we're building a new AI Engineering org from scratch. This is the kind of role where the JD changes every six months because the company changes every six months. So instead of pretending we have a fixed checklist, we're going to tell you what we actually need and what we've gotten wrong before.\nIf you've spent your career at Google or Meta and you want a well-scoped role with a defined ladder, this isn't it.\nIf you've spent your career bouncing between early-stage startups and you want to \"just code\" without having to think about product or recruiter workflows or eval frameworks, this also isn't it.\nWe need someone who is simultaneously comfortable with two things that sound contradictory:\nDeep technical depth in modern ML systems \u2014 embeddings, retrieval, ranking, LLMs, fine-tuning.\nScrappy product-engineering attitude \u2014 willing to ship a working ranker in a week even if the underlying ML is \"obviously suboptimal,\" because we need to learn from real users before we know what to actually optimize for.\nThese are not contradictory in real life. They feel contradictory because of how engineering culture sorted itself into \"researcher\" vs \"shipper\" archetypes. We need both modes available in the same person, and we'd rather you tilt slightly toward shipper than toward researcher.\nWhat you'd actually be doing\nThe high-level mandate: own the intelligence layer of Redrob's product. That means the ranking, retrieval, and matching systems that decide what recruiters see when they search for candidates and what candidates see when they search for roles.\nIn practical terms, your first 90 days will probably look like:\nWeeks 1-3: Audit what we currently have (it's mostly BM25 + rule-based scoring, working but not great). Identify the 3-4 highest-leverage things to fix.\nWeeks 4-8: Ship a v2 ranking system that demonstrably improves recruiter-engagement metrics. This will involve embeddings, hybrid retrieval, and probably some LLM-based re-ranking, but the architecture is your call.\nWeeks 9-12: Set up the evaluation infrastructure \u2014 offline benchmarks, online A/B testing, recruiter-feedback loops \u2014 so we can keep improving without flying blind.\nBeyond that, you'll be driving the long-term architecture of how we do candidate-JD matching at scale, mentoring the next round of hires (we're growing the team from 4 to 12 engineers in the next year), and working closely with our recruiter-experience PM on what to build.\nWhat we mean by \"5-9 years\"\nThis is a range, not a requirement. Some people hit \"senior engineer\" judgment at 4 years; some never hit it after 15. We've used 5-9 because it's roughly where people we've hired into this kind of role have landed, but we'll seriously consider candidates outside the band if other signals are strong.\nThat said, here are the disqualifiers we actually apply:\nIf you've spent your career in pure research environments (academic labs, research-only roles) without any production deployment \u2014 we will not move forward. We are explicit about this. We've tried it twice and it didn't work for either side.\nIf your \"AI experience\" consists primarily of recent (under 12 months) projects using LangChain to call OpenAI \u2014 we will probably not move forward, unless you can demonstrate substantial pre-LLM-era ML production experience. We're looking for people who understood retrieval and ranking before it became fashionable.\nIf you are a senior engineer who hasn't written production code in the last 18 months because you've moved into \"architecture\" or \"tech lead\" roles \u2014 we will probably not move forward. This role writes code.\nThe skills inventory (please read carefully)\nMost JDs list 20 skills and you're supposed to have all of them. We're going to do this differently.\nThings you absolutely need\nProduction experience with embeddings-based retrieval systems (sentence-transformers, OpenAI embeddings, BGE, E5, or similar) deployed to real users. We don't care which model \u2014 we care that you've handled embedding drift, index refresh, retrieval-quality regression in production.\nProduction experience with vector databases or hybrid search infrastructure \u2014 Pinecone, Weaviate, Qdrant, Milvus, OpenSearch, Elasticsearch, FAISS, or something similar. Again, the specific tech doesn't matter; the operational experience does.\nStrong Python. Yes really, we care about code quality.\nHands-on experience designing evaluation frameworks for ranking systems \u2014 NDCG, MRR, MAP, offline-to-online correlation, A/B test interpretation. If you've never thought about how to evaluate a ranking system rigorously, this role will be very painful.\nThings we'd like you to have but won't reject you for\nLLM fine-tuning experience (LoRA, QLoRA, PEFT)\nExperience with learning-to-rank models (XGBoost-based or neural)\nPrior exposure to HR-tech, recruiting tech, or marketplace products\nBackground in distributed systems or large-scale inference optimization\nOpen-source contributions in the AI/ML space\nThings we explicitly do NOT want\nThis is the section most JDs skip but we think it's the most important:\nTitle-chasers. If your career trajectory shows you optimizing for \"Senior\" \u2192 \"Staff\" \u2192 \"Principal\" titles by switching companies every 1.5 years, we're not a fit. We need someone who plans to be here for 3+ years.\nFramework enthusiasts. If your GitHub is full of LangChain tutorials and your blog posts are \"How I used [hot framework] to build [demo]\" \u2014 that's fine but it's not what we need. We need people who think about systems, not frameworks.\nPeople who have only worked at consulting firms (TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, etc.) in their entire career. We've had bad fit experiences in both directions. If you're currently at one of these companies but have prior product-company experience, that's fine.\nPeople whose primary expertise is computer vision, speech, or robotics without significant NLP/IR exposure. We respect your work but you'd be re-learning fundamentals here.\nPeople whose work has been entirely on closed-source proprietary systems for 5+ years without external validation (papers, talks, open-source). We need to see how you think, not just trust that you can think.\nOn location, comp, and logistics\nLocation: Pune/Noida-preferred but flexible. We have offices in Noida and Pune(mostly used Tue/Thu). We don't require any specific number of in-office days but we expect quarterly travel for offsites. Candidates in Hyderabad, Pune, Mumbai, Delhi NCR welcome to apply. Outside India: case-by-case, but we don't sponsor work visas.\nNotice period: We'd love sub-30-day notice. We can buy out up to 30 days. 30+ day notice candidates are still in scope but the bar gets higher.\nThe vibe check\nWe genuinely believe culture-fit matters more at this stage than skills-fit. Skills are teachable; the rest mostly isn't.\nWe work async-first and write a lot. If you find writing painful, you'll find this role painful.\nWe disagree openly and decide quickly. If you find that style abrasive, you'll find this role abrasive.\nWe move fast and break things, with the caveat that \"things\" are usually our internal assumptions, not user-facing systems. If you need a stable, mature codebase to be productive, you'll find this role unstable.\nHow to read between the lines\nThe \"ideal candidate\" we're imagining is roughly:\n6-8 years total experience, of which 4-5 are in applied ML/AI roles at product companies (not pure services).\nHas shipped at least one end-to-end ranking, search, or recommendation system to real users at meaningful scale.\nHas strong opinions about retrieval (hybrid vs dense), evaluation (offline vs online), and LLM integration (when to fine-tune vs prompt) \u2014 and can defend them with reference to systems they actually built.\nLocated in or willing to relocate to Noida or Pune.\nActive on Redrob platform (or has clear signal of being in the job market) so we can actually talk to them.\nWe are aware this is a narrow profile. We're not expecting to find many matches in a 100K candidate pool. We're explicitly OK with that \u2014 we'd rather see 10 great matches than 1000 maybes.\nFinal note for the participants of the Redrob hackathon\nIf you're reading this in the context of the Intelligent Candidate Discovery & Ranking Challenge:\nThe \"right answer\" to this JD is not \"find candidates whose skills section contains the most AI keywords.\" That's a trap we've explicitly built into the dataset.\nThe right answer involves reasoning about the gap between what the JD says and what the JD means. A Tier 5 candidate may not use the words \"RAG\" or \"Pinecone\" in their profile, but if their career history shows they built a recommendation system at a product company, they're a fit. A candidate who has all the AI keywords listed as skills but whose title is \"Marketing Manager\" is not a fit, no matter how perfect their skill list looks.\nYour ranking system should also weigh behavioral signals \u2014 a perfect-on-paper candidate who hasn't logged in for 6 months and has a 5% recruiter response rate is, for hiring purposes, not actually available. Down-weight them appropriately.\nGood luck.";

export interface ChallengeCandidate {
  candidate_id: string;
  profile: {
    anonymized_name: string;
    headline: string;
    summary: string;
    location: string;
    country: string;
    years_of_experience: number;
    current_title: string;
    current_company: string;
    current_company_size: string;
    current_industry: string;
  };
  career_history: {
    company: string;
    title: string;
    start_date: string;
    end_date: string | null;
    duration_months: number;
    is_current: boolean;
    industry: string;
    company_size: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    field_of_study: string;
    start_year: number;
    end_year: number;
    grade: string | null;
    tier: string;
  }[];
  skills: {
    name: string;
    proficiency: string;
    endorsements: number;
    duration_months: number;
  }[];
  redrob_signals: {
    profile_completeness_score: number;
    signup_date: string;
    last_active_date: string;
    open_to_work_flag: boolean;
    profile_views_received_30d: number;
    applications_submitted_30d: number;
    recruiter_response_rate: number;
    avg_response_time_hours: number;
    connection_count: number;
    endorsements_received: number;
    notice_period_days: number;
    expected_salary_range_inr_lpa: string | { min: number; max: number };
    preferred_work_mode: string;
    willing_to_relocate: boolean;
    github_activity_score: number;
    search_appearance_30d: number;
    saved_by_recruiters_30d: number;
    interview_completion_rate: number;
    offer_acceptance_rate: number;
    verified_email: boolean;
    verified_phone: boolean;
    linkedin_connected: boolean;
  };
}

export const CHALLENGE_CANDIDATES: ChallengeCandidate[] = [
  {
    "candidate_id": "CAND_0000001",
    "profile": {
      "anonymized_name": "Ira Vora",
      "headline": "Backend Engineer | SQL, Spark, Cloud",
      "summary": "Software / data professional with 6.9 years of experience building data pipelines, backend systems, and analytics infrastructure. I'm a backend/data hybrid \u2014 Spark, Airflow, SQL warehouses are home territory; I'm building competence on the ML side. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
      "location": "Toronto",
      "country": "Canada",
      "years_of_experience": 6.9,
      "current_title": "Backend Engineer",
      "current_company": "Mindtree",
      "current_company_size": "10001+",
      "current_industry": "IT Services"
    },
    "career_history": [
      {
        "company": "Mindtree",
        "title": "Backend Engineer",
        "start_date": "2024-03-08",
        "end_date": null,
        "duration_months": 27,
        "is_current": true,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Implemented streaming data pipelines on Kafka and Spark Streaming for a real-time user-activity processing platform. Designed the schema-registry integration, the watermark/state management approach, and the deduplication logic for late-arriving events. Worked closely with the data science team to make sure feature pipelines aligned with what their models needed. Most of my career has been data engineering, with some adjacent ML exposure."
      },
      {
        "company": "Dunder Mifflin",
        "title": "Analytics Engineer",
        "start_date": "2019-07-03",
        "end_date": "2024-01-08",
        "duration_months": 55,
        "is_current": false,
        "industry": "Paper Products",
        "company_size": "201-500",
        "description": "Built and maintained data pipelines on Apache Airflow processing ~500GB of daily transactional data across 12 source systems. Worked extensively with Spark (PySpark) for batch processing and dbt for the transformation/modeling layer in our Snowflake warehouse. Owned the on-call rotation for data quality issues \u2014 wrote most of the data quality checks that detect schema drift and unusual volume changes. The pipeline supports the analytics team and a few internal ML models."
      }
    ],
    "education": [
      {
        "institution": "Lovely Professional University",
        "degree": "B.E.",
        "field_of_study": "Computer Science",
        "start_year": 2017,
        "end_year": 2020,
        "grade": "8.24 CGPA",
        "tier": "tier_3"
      }
    ],
    "skills": [
      {
        "name": "Tailwind",
        "proficiency": "intermediate",
        "endorsements": 3,
        "duration_months": 13
      },
      {
        "name": "NLP",
        "proficiency": "advanced",
        "endorsements": 37,
        "duration_months": 26
      },
      {
        "name": "Image Classification",
        "proficiency": "advanced",
        "endorsements": 7,
        "duration_months": 40
      },
      {
        "name": "Fine-tuning LLMs",
        "proficiency": "advanced",
        "endorsements": 21,
        "duration_months": 36
      },
      {
        "name": "Weights & Biases",
        "proficiency": "intermediate",
        "endorsements": 13,
        "duration_months": 30
      },
      {
        "name": "Speech Recognition",
        "proficiency": "advanced",
        "endorsements": 52,
        "duration_months": 33
      },
      {
        "name": "Photoshop",
        "proficiency": "intermediate",
        "endorsements": 8,
        "duration_months": 24
      },
      {
        "name": "TTS",
        "proficiency": "advanced",
        "endorsements": 56,
        "duration_months": 60
      },
      {
        "name": "LoRA",
        "proficiency": "intermediate",
        "endorsements": 0,
        "duration_months": 28
      },
      {
        "name": "Apache Beam",
        "proficiency": "intermediate",
        "endorsements": 4,
        "duration_months": 9
      },
      {
        "name": "AWS",
        "proficiency": "beginner",
        "endorsements": 5,
        "duration_months": 8
      },
      {
        "name": "Flask",
        "proficiency": "beginner",
        "endorsements": 15,
        "duration_months": 15
      },
      {
        "name": "BentoML",
        "proficiency": "intermediate",
        "endorsements": 3,
        "duration_months": 36
      },
      {
        "name": "Milvus",
        "proficiency": "advanced",
        "endorsements": 40,
        "duration_months": 35
      },
      {
        "name": "GANs",
        "proficiency": "advanced",
        "endorsements": 12,
        "duration_months": 19
      },
      {
        "name": "Statistical Modeling",
        "proficiency": "intermediate",
        "endorsements": 9,
        "duration_months": 8
      },
      {
        "name": "GCP",
        "proficiency": "beginner",
        "endorsements": 7,
        "duration_months": 2
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "conversational"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 86.9,
      "signup_date": "2025-10-16",
      "last_active_date": "2026-05-20",
      "open_to_work_flag": true,
      "profile_views_received_30d": 23,
      "applications_submitted_30d": 2,
      "recruiter_response_rate": 0.34,
      "avg_response_time_hours": 177.8,
      "skill_assessment_scores": {
        "NLP": 38.8,
        "Image Classification": 64.8,
        "Fine-tuning LLMs": 41.6,
        "Speech Recognition": 53.7
      },
      "connection_count": 356,
      "endorsements_received": 35,
      "notice_period_days": 60,
      "expected_salary_range_inr_lpa": {
        "min": 18.7,
        "max": 36.1
      },
      "preferred_work_mode": "onsite",
      "willing_to_relocate": false,
      "github_activity_score": 9.2,
      "search_appearance_30d": 249,
      "saved_by_recruiters_30d": 4,
      "interview_completion_rate": 0.71,
      "offer_acceptance_rate": 0.58,
      "verified_email": true,
      "verified_phone": true,
      "linkedin_connected": false
    }
  },
  {
    "candidate_id": "CAND_0000002",
    "profile": {
      "anonymized_name": "Saanvi Sethi",
      "headline": "Operations Manager | 12.5+ yrs experience",
      "summary": "Professional with 12.5+ years of experience. My professional background is in marketing manager \u2014 I've built and led teams, owned KPIs, and driven business outcomes in this domain. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years_of_experience": 12.5,
      "current_title": "Operations Manager",
      "current_company": "Wipro",
      "current_company_size": "10001+",
      "current_industry": "IT Services"
    },
    "career_history": [
      {
        "company": "Wipro",
        "title": "Operations Manager",
        "start_date": "2022-11-14",
        "end_date": null,
        "duration_months": 43,
        "is_current": true,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Customer support team lead at a SaaS product. Managed a team of 8 support agents handling tier-1 and tier-2 tickets; owned the escalation process to engineering and the customer-feedback loop to product. Built out the support knowledge base and the agent training program. Strong on the people-management side and the process side; lighter on technical depth beyond product expertise."
      },
      {
        "company": "Wipro",
        "title": "Operations Manager",
        "start_date": "2021-09-13",
        "end_date": "2022-11-07",
        "duration_months": 14,
        "is_current": false,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Mechanical engineering design role at a hardware-product company. Led the design of two product subsystems through full lifecycle: concept, DFM/DFMA review, prototype, production tooling. Comfortable with CAD (SolidWorks, Creo), FEA (ANSYS), and the typical hardware-development cadence. Worked closely with manufacturing partners on production scale-up."
      },
      {
        "company": "Acme Corp",
        "title": "Marketing Manager",
        "start_date": "2017-03-08",
        "end_date": "2021-08-14",
        "duration_months": 54,
        "is_current": false,
        "industry": "Manufacturing",
        "company_size": "201-500",
        "description": "Content writing and SEO strategy for a tech-focused publication. Wrote longform articles on developer tools, cloud platforms, and AI/ML topics \u2014 including some that ranked on the first page of search for high-competition keywords. Managed a freelance writer pool and the editorial calendar. Recent work has been on AI-assisted content production, using LLM tools for research, drafting, and editing while maintaining editorial quality."
      },
      {
        "company": "Dunder Mifflin",
        "title": "Marketing Manager",
        "start_date": "2014-01-23",
        "end_date": "2017-03-08",
        "duration_months": 38,
        "is_current": false,
        "industry": "Paper Products",
        "company_size": "201-500",
        "description": "Brand design and creative direction at a consumer-products company. Owned brand identity (logo, visual system, typography), packaging design, and digital creative across web and social. Led the recent rebrand and managed a small external agency for production work. Comfortable across the Adobe suite, Figma, and the production side of brand and packaging design."
      }
    ],
    "education": [
      {
        "institution": "Local Engineering College",
        "degree": "B.Sc",
        "field_of_study": "Mathematics",
        "start_year": 2007,
        "end_year": 2011,
        "grade": "77%",
        "tier": "tier_4"
      }
    ],
    "skills": [
      {
        "name": "Project Management",
        "proficiency": "intermediate",
        "endorsements": 14,
        "duration_months": 23
      },
      {
        "name": "React",
        "proficiency": "intermediate",
        "endorsements": 6,
        "duration_months": 35
      },
      {
        "name": "Photoshop",
        "proficiency": "intermediate",
        "endorsements": 9,
        "duration_months": 35
      },
      {
        "name": "TypeScript",
        "proficiency": "beginner",
        "endorsements": 2,
        "duration_months": 3
      },
      {
        "name": "Marketing",
        "proficiency": "beginner",
        "endorsements": 9,
        "duration_months": 11
      },
      {
        "name": "Kafka",
        "proficiency": "intermediate",
        "endorsements": 3,
        "duration_months": 16
      },
      {
        "name": "JavaScript",
        "proficiency": "beginner",
        "endorsements": 9,
        "duration_months": 3
      },
      {
        "name": "Feature Engineering",
        "proficiency": "intermediate",
        "endorsements": 11,
        "duration_months": 27
      },
      {
        "name": "GCP",
        "proficiency": "intermediate",
        "endorsements": 7,
        "duration_months": 30
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "conversational"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 78.7,
      "signup_date": "2025-07-28",
      "last_active_date": "2025-11-12",
      "open_to_work_flag": true,
      "profile_views_received_30d": 7,
      "applications_submitted_30d": 1,
      "recruiter_response_rate": 0.29,
      "avg_response_time_hours": 171.6,
      "skill_assessment_scores": {},
      "connection_count": 179,
      "endorsements_received": 3,
      "notice_period_days": 60,
      "expected_salary_range_inr_lpa": {
        "min": 8.8,
        "max": 9.0
      },
      "preferred_work_mode": "flexible",
      "willing_to_relocate": false,
      "github_activity_score": -1,
      "search_appearance_30d": 107,
      "saved_by_recruiters_30d": 10,
      "interview_completion_rate": 0.62,
      "offer_acceptance_rate": -1,
      "verified_email": false,
      "verified_phone": false,
      "linkedin_connected": false
    }
  },
  {
    "candidate_id": "CAND_0000003",
    "profile": {
      "anonymized_name": "Yash Agarwal",
      "headline": "Customer Support | 1.1+ yrs experience",
      "summary": "Professional with 1.1+ years of experience. I've spent my career in marketing manager roles, mostly focused on driving outcomes through process, people, and customer relationships. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Austin",
      "country": "USA",
      "years_of_experience": 1.1,
      "current_title": "Customer Support",
      "current_company": "TCS",
      "current_company_size": "10001+",
      "current_industry": "IT Services"
    },
    "career_history": [
      {
        "company": "TCS",
        "title": "Customer Support",
        "start_date": "2025-05-02",
        "end_date": null,
        "duration_months": 13,
        "is_current": true,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Business analyst at a consulting firm, working primarily with retail and CPG clients. Conducted business diagnostics, process re-engineering work, and digital transformation strategy projects. Strong on stakeholder management, structured problem-solving, and the typical consulting toolkit (slide-craft, Excel modeling, executive communication). Recent project work involved AI-strategy advisory but my own technical depth in AI is limited."
      }
    ],
    "education": [
      {
        "institution": "Local Engineering College",
        "degree": "M.E.",
        "field_of_study": "Chemical Engineering",
        "start_year": 2005,
        "end_year": 2010,
        "grade": "6.82 CGPA",
        "tier": "tier_4"
      },
      {
        "institution": "Chandigarh University",
        "degree": "M.Sc",
        "field_of_study": "Information Technology",
        "start_year": 2017,
        "end_year": 2021,
        "grade": "87%",
        "tier": "tier_3"
      }
    ],
    "skills": [
      {
        "name": "Angular",
        "proficiency": "intermediate",
        "endorsements": 13,
        "duration_months": 10
      },
      {
        "name": "SEO",
        "proficiency": "beginner",
        "endorsements": 11,
        "duration_months": 11
      },
      {
        "name": "Excel",
        "proficiency": "intermediate",
        "endorsements": 2,
        "duration_months": 15
      },
      {
        "name": "Accounting",
        "proficiency": "beginner",
        "endorsements": 7,
        "duration_months": 18
      },
      {
        "name": "Kubernetes",
        "proficiency": "intermediate",
        "endorsements": 0,
        "duration_months": 34
      },
      {
        "name": "Databricks",
        "proficiency": "beginner",
        "endorsements": 14,
        "duration_months": 18
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "professional"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 31.9,
      "signup_date": "2024-08-02",
      "last_active_date": "2026-03-21",
      "open_to_work_flag": false,
      "profile_views_received_30d": 1,
      "applications_submitted_30d": 9,
      "recruiter_response_rate": 0.46,
      "avg_response_time_hours": 119.4,
      "skill_assessment_scores": {},
      "connection_count": 19,
      "endorsements_received": 46,
      "notice_period_days": 150,
      "expected_salary_range_inr_lpa": {
        "min": 11.2,
        "max": 18.1
      },
      "preferred_work_mode": "hybrid",
      "willing_to_relocate": false,
      "github_activity_score": -1,
      "search_appearance_30d": 28,
      "saved_by_recruiters_30d": 4,
      "interview_completion_rate": 0.86,
      "offer_acceptance_rate": -1,
      "verified_email": true,
      "verified_phone": false,
      "linkedin_connected": false
    }
  },
  {
    "candidate_id": "CAND_0000004",
    "profile": {
      "anonymized_name": "Anil Bose",
      "headline": "Marketing Manager | Driving business outcomes",
      "summary": "Professional with 3.8+ years of experience. My professional background is in marketing manager \u2014 I've built and led teams, owned KPIs, and driven business outcomes in this domain. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Sydney",
      "country": "Australia",
      "years_of_experience": 3.8,
      "current_title": "Marketing Manager",
      "current_company": "Dunder Mifflin",
      "current_company_size": "201-500",
      "current_industry": "Paper Products"
    },
    "career_history": [
      {
        "company": "Dunder Mifflin",
        "title": "Marketing Manager",
        "start_date": "2025-04-02",
        "end_date": null,
        "duration_months": 14,
        "is_current": true,
        "industry": "Paper Products",
        "company_size": "201-500",
        "description": "Mechanical engineering design role at a hardware-product company. Led the design of two product subsystems through full lifecycle: concept, DFM/DFMA review, prototype, production tooling. Comfortable with CAD (SolidWorks, Creo), FEA (ANSYS), and the typical hardware-development cadence. Worked closely with manufacturing partners on production scale-up."
      },
      {
        "company": "Infosys",
        "title": "Operations Manager",
        "start_date": "2023-07-28",
        "end_date": "2025-03-19",
        "duration_months": 20,
        "is_current": false,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Content writing and SEO strategy for a tech-focused publication. Wrote longform articles on developer tools, cloud platforms, and AI/ML topics \u2014 including some that ranked on the first page of search for high-competition keywords. Managed a freelance writer pool and the editorial calendar. Recent work has been on AI-assisted content production, using LLM tools for research, drafting, and editing while maintaining editorial quality."
      },
      {
        "company": "Globex Inc",
        "title": "Business Analyst",
        "start_date": "2022-08-02",
        "end_date": "2023-05-29",
        "duration_months": 10,
        "is_current": false,
        "industry": "Manufacturing",
        "company_size": "501-1000",
        "description": "Operations management role at a logistics company. Owned daily fulfillment operations across 3 warehouses, managing a team of 80 across receiving, picking, packing, and outbound. Built and tracked the operational KPIs (on-time fulfillment, accuracy, cost per order) and led the continuous improvement initiatives that drove a 22% productivity gain over 18 months."
      }
    ],
    "education": [
      {
        "institution": "Local Engineering College",
        "degree": "B.Tech",
        "field_of_study": "Machine Learning",
        "start_year": 2015,
        "end_year": 2019,
        "grade": "7.72 CGPA",
        "tier": "tier_4"
      },
      {
        "institution": "Lovely Professional University",
        "degree": "Ph.D",
        "field_of_study": "Electronics",
        "start_year": 2013,
        "end_year": 2016,
        "grade": "7.61 CGPA",
        "tier": "tier_3"
      }
    ],
    "skills": [
      {
        "name": "Node.js",
        "proficiency": "intermediate",
        "endorsements": 1,
        "duration_months": 20
      },
      {
        "name": "Content Writing",
        "proficiency": "beginner",
        "endorsements": 7,
        "duration_months": 3
      },
      {
        "name": "Redux",
        "proficiency": "beginner",
        "endorsements": 14,
        "duration_months": 8
      },
      {
        "name": "Airflow",
        "proficiency": "intermediate",
        "endorsements": 11,
        "duration_months": 27
      },
      {
        "name": "GraphQL",
        "proficiency": "beginner",
        "endorsements": 13,
        "duration_months": 2
      },
      {
        "name": "Object Detection",
        "proficiency": "intermediate",
        "endorsements": 3,
        "duration_months": 17
      },
      {
        "name": "Webpack",
        "proficiency": "beginner",
        "endorsements": 10,
        "duration_months": 7
      },
      {
        "name": "Six Sigma",
        "proficiency": "beginner",
        "endorsements": 1,
        "duration_months": 12
      },
      {
        "name": "SAP",
        "proficiency": "intermediate",
        "endorsements": 6,
        "duration_months": 9
      },
      {
        "name": "JavaScript",
        "proficiency": "intermediate",
        "endorsements": 14,
        "duration_months": 29
      }
    ],
    "certifications": [
      {
        "name": "AWS Certified Cloud Practitioner",
        "issuer": "AWS",
        "year": 2025
      },
      {
        "name": "Scrum Master Certified",
        "issuer": "Scrum Alliance",
        "year": 2025
      }
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "professional"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 28.5,
      "signup_date": "2025-07-21",
      "last_active_date": "2026-03-25",
      "open_to_work_flag": false,
      "profile_views_received_30d": 3,
      "applications_submitted_30d": 9,
      "recruiter_response_rate": 0.26,
      "avg_response_time_hours": 104.1,
      "skill_assessment_scores": {},
      "connection_count": 485,
      "endorsements_received": 22,
      "notice_period_days": 120,
      "expected_salary_range_inr_lpa": {
        "min": 4.6,
        "max": 6.7
      },
      "preferred_work_mode": "onsite",
      "willing_to_relocate": true,
      "github_activity_score": -1,
      "search_appearance_30d": 5,
      "saved_by_recruiters_30d": 8,
      "interview_completion_rate": 0.35,
      "offer_acceptance_rate": -1,
      "verified_email": true,
      "verified_phone": true,
      "linkedin_connected": true
    }
  },
  {
    "candidate_id": "CAND_0000005",
    "profile": {
      "anonymized_name": "Aisha Sethi",
      "headline": "Accountant | Helping teams scale",
      "summary": "Professional with 11.0+ years of experience. I've spent my career in marketing manager roles, mostly focused on driving outcomes through process, people, and customer relationships. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years_of_experience": 11.0,
      "current_title": "Accountant",
      "current_company": "Stark Industries",
      "current_company_size": "1001-5000",
      "current_industry": "Manufacturing"
    },
    "career_history": [
      {
        "company": "Stark Industries",
        "title": "Accountant",
        "start_date": "2022-02-17",
        "end_date": null,
        "duration_months": 52,
        "is_current": true,
        "industry": "Manufacturing",
        "company_size": "1001-5000",
        "description": "Business analyst at a consulting firm, working primarily with retail and CPG clients. Conducted business diagnostics, process re-engineering work, and digital transformation strategy projects. Strong on stakeholder management, structured problem-solving, and the typical consulting toolkit (slide-craft, Excel modeling, executive communication). Recent project work involved AI-strategy advisory but my own technical depth in AI is limited."
      },
      {
        "company": "Wipro",
        "title": "HR Manager",
        "start_date": "2018-05-25",
        "end_date": "2022-02-03",
        "duration_months": 45,
        "is_current": false,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Senior accounting role at a mid-sized company \u2014 month-end close, financial reporting, statutory compliance (GAAP / Ind-AS), and tax filings. Owned the GL, fixed-asset register, and the audit-readiness function. Managed a team of 3 staff accountants. Built strong process discipline around the close cycle, reducing close time from 12 days to 7 over the last two years."
      },
      {
        "company": "Initech",
        "title": "HR Manager",
        "start_date": "2016-06-04",
        "end_date": "2018-05-25",
        "duration_months": 24,
        "is_current": false,
        "industry": "Software",
        "company_size": "51-200",
        "description": "Business analyst at a consulting firm, working primarily with retail and CPG clients. Conducted business diagnostics, process re-engineering work, and digital transformation strategy projects. Strong on stakeholder management, structured problem-solving, and the typical consulting toolkit (slide-craft, Excel modeling, executive communication). Recent project work involved AI-strategy advisory but my own technical depth in AI is limited."
      },
      {
        "company": "TCS",
        "title": "Accountant",
        "start_date": "2015-09-08",
        "end_date": "2016-06-04",
        "duration_months": 9,
        "is_current": false,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Customer support team lead at a SaaS product. Managed a team of 8 support agents handling tier-1 and tier-2 tickets; owned the escalation process to engineering and the customer-feedback loop to product. Built out the support knowledge base and the agent training program. Strong on the people-management side and the process side; lighter on technical depth beyond product expertise."
      }
    ],
    "education": [
      {
        "institution": "Chandigarh University",
        "degree": "M.Sc",
        "field_of_study": "Information Technology",
        "start_year": 2007,
        "end_year": 2012,
        "grade": "87%",
        "tier": "tier_3"
      }
    ],
    "skills": [
      {
        "name": "SQL",
        "proficiency": "beginner",
        "endorsements": 12,
        "duration_months": 12
      },
      {
        "name": "PowerPoint",
        "proficiency": "beginner",
        "endorsements": 6,
        "duration_months": 14
      },
      {
        "name": "Photoshop",
        "proficiency": "beginner",
        "endorsements": 4,
        "duration_months": 18
      },
      {
        "name": "Tailwind",
        "proficiency": "intermediate",
        "endorsements": 15,
        "duration_months": 35
      },
      {
        "name": "Apache Flink",
        "proficiency": "intermediate",
        "endorsements": 1,
        "duration_months": 30
      },
      {
        "name": "Image Classification",
        "proficiency": "advanced",
        "endorsements": 50,
        "duration_months": 38
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "conversational"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 84.6,
      "signup_date": "2023-10-07",
      "last_active_date": "2025-10-01",
      "open_to_work_flag": true,
      "profile_views_received_30d": 12,
      "applications_submitted_30d": 2,
      "recruiter_response_rate": 0.37,
      "avg_response_time_hours": 116.7,
      "skill_assessment_scores": {},
      "connection_count": 300,
      "endorsements_received": 14,
      "notice_period_days": 30,
      "expected_salary_range_inr_lpa": {
        "min": 12.4,
        "max": 19.7
      },
      "preferred_work_mode": "hybrid",
      "willing_to_relocate": true,
      "github_activity_score": -1,
      "search_appearance_30d": 67,
      "saved_by_recruiters_30d": 1,
      "interview_completion_rate": 0.74,
      "offer_acceptance_rate": -1,
      "verified_email": false,
      "verified_phone": true,
      "linkedin_connected": true
    }
  },
  {
    "candidate_id": "CAND_0000006",
    "profile": {
      "anonymized_name": "Rajesh Desai",
      "headline": "Business Analyst | 6.0+ yrs experience",
      "summary": "Professional with 6.0+ years of experience. I've spent my career in marketing manager roles, mostly focused on driving outcomes through process, people, and customer relationships. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Austin",
      "country": "USA",
      "years_of_experience": 6.0,
      "current_title": "Business Analyst",
      "current_company": "Wayne Enterprises",
      "current_company_size": "10001+",
      "current_industry": "Conglomerate"
    },
    "career_history": [
      {
        "company": "Wayne Enterprises",
        "title": "Business Analyst",
        "start_date": "2023-09-10",
        "end_date": null,
        "duration_months": 33,
        "is_current": true,
        "industry": "Conglomerate",
        "company_size": "10001+",
        "description": "Senior accounting role at a mid-sized company \u2014 month-end close, financial reporting, statutory compliance (GAAP / Ind-AS), and tax filings. Owned the GL, fixed-asset register, and the audit-readiness function. Managed a team of 3 staff accountants. Built strong process discipline around the close cycle, reducing close time from 12 days to 7 over the last two years."
      },
      {
        "company": "Pied Piper",
        "title": "Mechanical Engineer",
        "start_date": "2020-07-27",
        "end_date": "2023-09-10",
        "duration_months": 38,
        "is_current": false,
        "industry": "Software",
        "company_size": "11-50",
        "description": "Business analyst at a consulting firm, working primarily with retail and CPG clients. Conducted business diagnostics, process re-engineering work, and digital transformation strategy projects. Strong on stakeholder management, structured problem-solving, and the typical consulting toolkit (slide-craft, Excel modeling, executive communication). Recent project work involved AI-strategy advisory but my own technical depth in AI is limited."
      }
    ],
    "education": [
      {
        "institution": "Lovely Professional University",
        "degree": "B.Sc",
        "field_of_study": "Artificial Intelligence",
        "start_year": 2005,
        "end_year": 2008,
        "grade": "9.26 CGPA",
        "tier": "tier_3"
      }
    ],
    "skills": [
      {
        "name": "Content Writing",
        "proficiency": "intermediate",
        "endorsements": 0,
        "duration_months": 33
      },
      {
        "name": "SEO",
        "proficiency": "intermediate",
        "endorsements": 13,
        "duration_months": 31
      },
      {
        "name": "Redux",
        "proficiency": "beginner",
        "endorsements": 15,
        "duration_months": 12
      },
      {
        "name": "SQL",
        "proficiency": "beginner",
        "endorsements": 9,
        "duration_months": 11
      },
      {
        "name": "Sales",
        "proficiency": "intermediate",
        "endorsements": 5,
        "duration_months": 27
      },
      {
        "name": "gRPC",
        "proficiency": "beginner",
        "endorsements": 8,
        "duration_months": 3
      },
      {
        "name": "Django",
        "proficiency": "intermediate",
        "endorsements": 3,
        "duration_months": 11
      },
      {
        "name": "Terraform",
        "proficiency": "beginner",
        "endorsements": 4,
        "duration_months": 13
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "conversational"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 29.7,
      "signup_date": "2026-04-26",
      "last_active_date": "2026-02-28",
      "open_to_work_flag": false,
      "profile_views_received_30d": 53,
      "applications_submitted_30d": 8,
      "recruiter_response_rate": 0.12,
      "avg_response_time_hours": 172.1,
      "skill_assessment_scores": {},
      "connection_count": 389,
      "endorsements_received": 29,
      "notice_period_days": 150,
      "expected_salary_range_inr_lpa": {
        "min": 7.7,
        "max": 11.7
      },
      "preferred_work_mode": "remote",
      "willing_to_relocate": true,
      "github_activity_score": -1,
      "search_appearance_30d": 131,
      "saved_by_recruiters_30d": 9,
      "interview_completion_rate": 0.57,
      "offer_acceptance_rate": -1,
      "verified_email": true,
      "verified_phone": true,
      "linkedin_connected": false
    }
  },
  {
    "candidate_id": "CAND_0000007",
    "profile": {
      "anonymized_name": "Vihaan Bose",
      "headline": "Civil Engineer | 5.5+ yrs experience",
      "summary": "Professional with 5.5+ years of experience. My professional background is in marketing manager \u2014 I've built and led teams, owned KPIs, and driven business outcomes in this domain. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years_of_experience": 5.5,
      "current_title": "Civil Engineer",
      "current_company": "Wipro",
      "current_company_size": "10001+",
      "current_industry": "IT Services"
    },
    "career_history": [
      {
        "company": "Wipro",
        "title": "Civil Engineer",
        "start_date": "2023-04-13",
        "end_date": null,
        "duration_months": 38,
        "is_current": true,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Brand design and creative direction at a consumer-products company. Owned brand identity (logo, visual system, typography), packaging design, and digital creative across web and social. Led the recent rebrand and managed a small external agency for production work. Comfortable across the Adobe suite, Figma, and the production side of brand and packaging design."
      },
      {
        "company": "Initech",
        "title": "Mechanical Engineer",
        "start_date": "2021-01-16",
        "end_date": "2023-04-06",
        "duration_months": 27,
        "is_current": false,
        "industry": "Software",
        "company_size": "51-200",
        "description": "Customer support team lead at a SaaS product. Managed a team of 8 support agents handling tier-1 and tier-2 tickets; owned the escalation process to engineering and the customer-feedback loop to product. Built out the support knowledge base and the agent training program. Strong on the people-management side and the process side; lighter on technical depth beyond product expertise."
      }
    ],
    "education": [
      {
        "institution": "SRM University",
        "degree": "M.E.",
        "field_of_study": "Data Science",
        "start_year": 2009,
        "end_year": 2013,
        "grade": "8.28 CGPA",
        "tier": "tier_2"
      }
    ],
    "skills": [
      {
        "name": "Content Writing",
        "proficiency": "beginner",
        "endorsements": 12,
        "duration_months": 14
      },
      {
        "name": "MongoDB",
        "proficiency": "intermediate",
        "endorsements": 13,
        "duration_months": 9
      },
      {
        "name": "Sales",
        "proficiency": "intermediate",
        "endorsements": 0,
        "duration_months": 27
      },
      {
        "name": "Spark",
        "proficiency": "beginner",
        "endorsements": 14,
        "duration_months": 14
      },
      {
        "name": "Scrum",
        "proficiency": "beginner",
        "endorsements": 4,
        "duration_months": 18
      },
      {
        "name": "Apache Beam",
        "proficiency": "beginner",
        "endorsements": 4,
        "duration_months": 3
      },
      {
        "name": "Illustrator",
        "proficiency": "beginner",
        "endorsements": 14,
        "duration_months": 2
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "professional"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 74.6,
      "signup_date": "2025-09-29",
      "last_active_date": "2026-05-25",
      "open_to_work_flag": false,
      "profile_views_received_30d": 2,
      "applications_submitted_30d": 1,
      "recruiter_response_rate": 0.62,
      "avg_response_time_hours": 61.3,
      "skill_assessment_scores": {},
      "connection_count": 122,
      "endorsements_received": 50,
      "notice_period_days": 30,
      "expected_salary_range_inr_lpa": {
        "min": 6.7,
        "max": 14.6
      },
      "preferred_work_mode": "onsite",
      "willing_to_relocate": true,
      "github_activity_score": -1,
      "search_appearance_30d": 104,
      "saved_by_recruiters_30d": 8,
      "interview_completion_rate": 0.47,
      "offer_acceptance_rate": -1,
      "verified_email": true,
      "verified_phone": true,
      "linkedin_connected": true
    }
  },
  {
    "candidate_id": "CAND_0000008",
    "profile": {
      "anonymized_name": "Shaurya Chatterjee",
      "headline": "Operations Manager | 3.6+ yrs experience",
      "summary": "Professional with 3.6+ years of experience. I've spent my career in marketing manager roles, mostly focused on driving outcomes through process, people, and customer relationships. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years_of_experience": 3.6,
      "current_title": "Operations Manager",
      "current_company": "Wipro",
      "current_company_size": "10001+",
      "current_industry": "IT Services"
    },
    "career_history": [
      {
        "company": "Wipro",
        "title": "Operations Manager",
        "start_date": "2022-11-14",
        "end_date": null,
        "duration_months": 43,
        "is_current": true,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Marketing leadership role at a B2B SaaS company. Owned the demand-generation function \u2014 content marketing, paid acquisition, SEO, email nurture. Built and managed a team of 5 across content, performance marketing, and marketing operations. Worked closely with sales on lead-quality definitions and the SDR-handoff process. Recent focus has been on account-based marketing for our enterprise segment."
      }
    ],
    "education": [
      {
        "institution": "Anna University",
        "degree": "B.Tech",
        "field_of_study": "Data Science",
        "start_year": 2008,
        "end_year": 2012,
        "grade": "8.60 CGPA",
        "tier": "tier_2"
      },
      {
        "institution": "SRM University",
        "degree": "M.Sc",
        "field_of_study": "Computer Engineering",
        "start_year": 2009,
        "end_year": 2013,
        "grade": "67%",
        "tier": "tier_2"
      }
    ],
    "skills": [
      {
        "name": "Java",
        "proficiency": "intermediate",
        "endorsements": 2,
        "duration_months": 32
      },
      {
        "name": "BigQuery",
        "proficiency": "beginner",
        "endorsements": 5,
        "duration_months": 9
      },
      {
        "name": "Spark",
        "proficiency": "beginner",
        "endorsements": 4,
        "duration_months": 6
      },
      {
        "name": "Accounting",
        "proficiency": "beginner",
        "endorsements": 8,
        "duration_months": 3
      },
      {
        "name": "Kubernetes",
        "proficiency": "intermediate",
        "endorsements": 2,
        "duration_months": 9
      },
      {
        "name": "TypeScript",
        "proficiency": "intermediate",
        "endorsements": 14,
        "duration_months": 11
      },
      {
        "name": "Rust",
        "proficiency": "intermediate",
        "endorsements": 12,
        "duration_months": 16
      },
      {
        "name": "HTML",
        "proficiency": "beginner",
        "endorsements": 8,
        "duration_months": 11
      }
    ],
    "certifications": [
      {
        "name": "Six Sigma Green Belt",
        "issuer": "ASQ",
        "year": 2018
      }
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "professional"
      },
      {
        "language": "Hindi",
        "proficiency": "professional"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 63.0,
      "signup_date": "2022-06-26",
      "last_active_date": "2025-12-13",
      "open_to_work_flag": false,
      "profile_views_received_30d": 28,
      "applications_submitted_30d": 5,
      "recruiter_response_rate": 0.42,
      "avg_response_time_hours": 98.4,
      "skill_assessment_scores": {},
      "connection_count": 285,
      "endorsements_received": 7,
      "notice_period_days": 90,
      "expected_salary_range_inr_lpa": {
        "min": 6.6,
        "max": 17.2
      },
      "preferred_work_mode": "onsite",
      "willing_to_relocate": false,
      "github_activity_score": -1,
      "search_appearance_30d": 91,
      "saved_by_recruiters_30d": 0,
      "interview_completion_rate": 0.74,
      "offer_acceptance_rate": -1,
      "verified_email": true,
      "verified_phone": false,
      "linkedin_connected": false
    }
  },
  {
    "candidate_id": "CAND_0000009",
    "profile": {
      "anonymized_name": "Amit Shah",
      "headline": "Mechanical Engineer | Driving business outcomes",
      "summary": "Professional with 11.0+ years of experience. My professional background is in marketing manager \u2014 I've built and led teams, owned KPIs, and driven business outcomes in this domain. Lately I've been curious about how AI tools could augment my work \u2014 I've experimented with ChatGPT and a few other tools for productivity and content creation, and I think the space is exciting. Open to roles where I can apply my domain expertise alongside emerging AI capabilities.",
      "location": "New York",
      "country": "USA",
      "years_of_experience": 11.0,
      "current_title": "Mechanical Engineer",
      "current_company": "Dunder Mifflin",
      "current_company_size": "201-500",
      "current_industry": "Paper Products"
    },
    "career_history": [
      {
        "company": "Dunder Mifflin",
        "title": "Mechanical Engineer",
        "start_date": "2022-10-15",
        "end_date": null,
        "duration_months": 44,
        "is_current": true,
        "industry": "Paper Products",
        "company_size": "201-500",
        "description": "Business analyst at a consulting firm, working primarily with retail and CPG clients. Conducted business diagnostics, process re-engineering work, and digital transformation strategy projects. Strong on stakeholder management, structured problem-solving, and the typical consulting toolkit (slide-craft, Excel modeling, executive communication). Recent project work involved AI-strategy advisory but my own technical depth in AI is limited."
      },
      {
        "company": "Wipro",
        "title": "Content Writer",
        "start_date": "2021-02-22",
        "end_date": "2022-10-15",
        "duration_months": 20,
        "is_current": false,
        "industry": "IT Services",
        "company_size": "10001+",
        "description": "Marketing leadership role at a B2B SaaS company. Owned the demand-generation function \u2014 content marketing, paid acquisition, SEO, email nurture. Built and managed a team of 5 across content, performance marketing, and marketing operations. Worked closely with sales on lead-quality definitions and the SDR-handoff process. Recent focus has been on account-based marketing for our enterprise segment."
      },
      {
        "company": "Stark Industries",
        "title": "Customer Support",
        "start_date": "2017-02-13",
        "end_date": "2021-02-22",
        "duration_months": 49,
        "is_current": false,
        "industry": "Manufacturing",
        "company_size": "1001-5000",
        "description": "Mechanical engineering design role at a hardware-product company. Led the design of two product subsystems through full lifecycle: concept, DFM/DFMA review, prototype, production tooling. Comfortable with CAD (SolidWorks, Creo), FEA (ANSYS), and the typical hardware-development cadence. Worked closely with manufacturing partners on production scale-up."
      },
      {
        "company": "Acme Corp",
        "title": "Project Manager",
        "start_date": "2015-08-23",
        "end_date": "2017-02-13",
        "duration_months": 18,
        "is_current": false,
        "industry": "Manufacturing",
        "company_size": "201-500",
        "description": "Enterprise sales of cloud software solutions into the mid-market segment. Carried a $1.8M ARR quota and consistently delivered against it across the last three years. Owned the full sales cycle: prospecting, discovery, technical evaluation (with SE support), commercial negotiation, and close. Strong on consultative selling for technical buyers; comfortable engaging with both engineering and finance stakeholders."
      }
    ],
    "education": [
      {
        "institution": "KIIT University",
        "degree": "B.Tech",
        "field_of_study": "Electronics",
        "start_year": 2009,
        "end_year": 2014,
        "grade": "7.89 CGPA",
        "tier": "tier_3"
      }
    ],
    "skills": [
      {
        "name": "Snowflake",
        "proficiency": "intermediate",
        "endorsements": 5,
        "duration_months": 8
      },
      {
        "name": "gRPC",
        "proficiency": "beginner",
        "endorsements": 6,
        "duration_months": 12
      },
      {
        "name": "JavaScript",
        "proficiency": "intermediate",
        "endorsements": 0,
        "duration_months": 23
      },
      {
        "name": "OpenCV",
        "proficiency": "intermediate",
        "endorsements": 12,
        "duration_months": 36
      },
      {
        "name": "Go",
        "proficiency": "intermediate",
        "endorsements": 12,
        "duration_months": 20
      },
      {
        "name": "PowerPoint",
        "proficiency": "intermediate",
        "endorsements": 1,
        "duration_months": 10
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "native"
      },
      {
        "language": "Hindi",
        "proficiency": "professional"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 39.6,
      "signup_date": "2025-10-19",
      "last_active_date": "2026-01-27",
      "open_to_work_flag": false,
      "profile_views_received_30d": 50,
      "applications_submitted_30d": 8,
      "recruiter_response_rate": 0.53,
      "avg_response_time_hours": 202.0,
      "skill_assessment_scores": {},
      "connection_count": 516,
      "endorsements_received": 34,
      "notice_period_days": 150,
      "expected_salary_range_inr_lpa": {
        "min": 16.0,
        "max": 7.3
      },
      "preferred_work_mode": "remote",
      "willing_to_relocate": false,
      "github_activity_score": -1,
      "search_appearance_30d": 74,
      "saved_by_recruiters_30d": 1,
      "interview_completion_rate": 0.54,
      "offer_acceptance_rate": 0.48,
      "verified_email": true,
      "verified_phone": true,
      "linkedin_connected": false
    }
  },
  {
    "candidate_id": "CAND_0000010",
    "profile": {
      "anonymized_name": "Aarav Kapoor",
      "headline": "Data Engineer | Data pipelines & analytics",
      "summary": "Software / data professional with 4.6 years of experience building data pipelines, backend systems, and analytics infrastructure. Most of my work has been data pipelines and analytics infrastructure; I've shipped a couple of small ML features but it's not the core of my day. My toolkit is solid on the data engineering side \u2014 Python, SQL, Spark, Airflow, warehouse design \u2014 and I've completed a couple of self-directed ML projects (Kaggle competitions, side projects fine-tuning small models). Interested in transitioning toward more AI/ML-focused work, ideally at a company where I can leverage my existing data-infra skills while learning modern ML practice.",
      "location": "London",
      "country": "UK",
      "years_of_experience": 4.6,
      "current_title": "Data Engineer",
      "current_company": "Ola",
      "current_company_size": "5001-10000",
      "current_industry": "Transportation"
    },
    "career_history": [
      {
        "company": "Ola",
        "title": "Data Engineer",
        "start_date": "2021-11-19",
        "end_date": null,
        "duration_months": 55,
        "is_current": true,
        "industry": "Transportation",
        "company_size": "5001-10000",
        "description": "Mixed data science and analytics-engineering role at a marketing-analytics startup. Spent maybe 30% of my time on lightweight ML (clustering, classification, churn prediction in sklearn/XGBoost) and 70% on data infrastructure and dashboards. Comfortable with the modeling work but I wouldn't call myself an ML specialist. Built our experimentation framework that supports the product team's A/B tests."
      }
    ],
    "education": [
      {
        "institution": "Generic State University",
        "degree": "B.E.",
        "field_of_study": "Mathematics",
        "start_year": 2007,
        "end_year": 2011,
        "grade": "85%",
        "tier": "tier_4"
      },
      {
        "institution": "Local Engineering College",
        "degree": "M.S.",
        "field_of_study": "Computer Engineering",
        "start_year": 2013,
        "end_year": 2018,
        "grade": "7.73 CGPA",
        "tier": "tier_4"
      }
    ],
    "skills": [
      {
        "name": "GCP",
        "proficiency": "beginner",
        "endorsements": 7,
        "duration_months": 8
      },
      {
        "name": "Spring Boot",
        "proficiency": "beginner",
        "endorsements": 3,
        "duration_months": 2
      },
      {
        "name": "Kubeflow",
        "proficiency": "intermediate",
        "endorsements": 11,
        "duration_months": 19
      },
      {
        "name": "Java",
        "proficiency": "intermediate",
        "endorsements": 12,
        "duration_months": 19
      },
      {
        "name": "GANs",
        "proficiency": "advanced",
        "endorsements": 58,
        "duration_months": 57
      },
      {
        "name": "Figma",
        "proficiency": "beginner",
        "endorsements": 4,
        "duration_months": 3
      },
      {
        "name": "Elasticsearch",
        "proficiency": "intermediate",
        "endorsements": 15,
        "duration_months": 17
      },
      {
        "name": "OpenCV",
        "proficiency": "advanced",
        "endorsements": 0,
        "duration_months": 24
      },
      {
        "name": "CNN",
        "proficiency": "intermediate",
        "endorsements": 15,
        "duration_months": 8
      },
      {
        "name": "Azure",
        "proficiency": "beginner",
        "endorsements": 7,
        "duration_months": 11
      },
      {
        "name": "Prompt Engineering",
        "proficiency": "advanced",
        "endorsements": 42,
        "duration_months": 35
      },
      {
        "name": "Object Detection",
        "proficiency": "advanced",
        "endorsements": 55,
        "duration_months": 58
      },
      {
        "name": "MLOps",
        "proficiency": "intermediate",
        "endorsements": 3,
        "duration_months": 10
      },
      {
        "name": "Python",
        "proficiency": "intermediate",
        "endorsements": 7,
        "duration_months": 14
      },
      {
        "name": "BM25",
        "proficiency": "advanced",
        "endorsements": 55,
        "duration_months": 55
      },
      {
        "name": "Weights & Biases",
        "proficiency": "advanced",
        "endorsements": 4,
        "duration_months": 21
      },
      {
        "name": "Sales",
        "proficiency": "beginner",
        "endorsements": 5,
        "duration_months": 18
      }
    ],
    "certifications": [],
    "languages": [
      {
        "language": "English",
        "proficiency": "native"
      },
      {
        "language": "Hindi",
        "proficiency": "professional"
      }
    ],
    "redrob_signals": {
      "profile_completeness_score": 81.6,
      "signup_date": "2026-01-09",
      "last_active_date": "2026-04-29",
      "open_to_work_flag": false,
      "profile_views_received_30d": 60,
      "applications_submitted_30d": 13,
      "recruiter_response_rate": 0.4,
      "avg_response_time_hours": 19.0,
      "skill_assessment_scores": {
        "GANs": 53.3,
        "OpenCV": 65.5,
        "Prompt Engineering": 73.8,
        "Object Detection": 81.3
      },
      "connection_count": 712,
      "endorsements_received": 38,
      "notice_period_days": 120,
      "expected_salary_range_inr_lpa": {
        "min": 13.0,
        "max": 32.0
      },
      "preferred_work_mode": "hybrid",
      "willing_to_relocate": false,
      "github_activity_score": 33.7,
      "search_appearance_30d": 256,
      "saved_by_recruiters_30d": 2,
      "interview_completion_rate": 0.53,
      "offer_acceptance_rate": -1,
      "verified_email": true,
      "verified_phone": true,
      "linkedin_connected": false
    }
  }
];
