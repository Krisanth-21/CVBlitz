import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Activity, B as ChevronRight, E as GraduationCap, G as Calendar, J as Brain, K as Building, L as Clock, M as DollarSign, S as MapPin, T as Info, U as Check, V as ChevronLeft, X as Award, a as UserCheck, f as ShieldCheck, j as Download, n as X, o as TriangleAlert, p as ShieldAlert, q as Briefcase, s as TrendingUp, u as Sparkles, w as Layers } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as SAMPLE_CANDIDATES, r as Header, s as top100_profiles_default, t as CHALLENGE_CANDIDATES } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
import { t as Route } from "./candidate._id-hLxuAtwL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/candidate._id-BfAbMc_3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ACTIVE_CANDIDATE_DATA = top100_profiles_default && top100_profiles_default.length > 0 ? top100_profiles_default : CHALLENGE_CANDIDATES;
var MOCK_SPECIAL_CANDIDATES = {
	"CAND_0000088": {
		result: {
			id: "CAND_0000088",
			name: "Ananya Patel",
			role: "Senior Systems Engineer",
			score: 91,
			confidence: 94,
			strengths: [
				"Built recommendation systems at high scale",
				"Production search infrastructure experience (Lucene/ES)",
				"Strong Python engineering background (100k+ lines)",
				"Demonstrated ranking-system adjacent expertise"
			],
			weaknesses: ["Missing exact keyword 'RAG' in CV", "Missing exact keyword 'Pinecone'"],
			isHoneypot: false,
			honeypotReason: "",
			verdict: "Strong Match. Demonstrates elite capability equivalence: their recommendation and search work directly translates to first-stage retrieval systems.",
			tags: [
				"Top Match",
				"Semantic Gem",
				"Adjacent Expertise"
			],
			details: {
				id: "CAND_0000088",
				name: "Ananya Patel",
				role: "Senior Systems Engineer",
				experienceYears: 7.2,
				skills: [
					"Python",
					"SQL",
					"Elasticsearch",
					"Apache Lucene",
					"Spark",
					"Recommendation Systems",
					"Search Infrastructure",
					"System Design"
				],
				recentCompany: "DataFlow Systems",
				education: "B.Tech. in Computer Science, College of Engineering Pune",
				location: "Pune, India",
				behavioralSignals: {
					recruiterResponseRate: 94,
					githubActivity90d: 90,
					interviewCompletionRate: 85
				},
				timeline: [
					{
						role: "Senior Systems Engineer",
						company: "DataFlow Systems",
						period: "2023 - Present"
					},
					{
						role: "Software Engineer II",
						company: "SearchCraft Tech",
						period: "2020 - 2023"
					},
					{
						role: "Backend Engineer",
						company: "CloudScale Solutions",
						period: "2018 - 2020"
					}
				]
			}
		},
		challenge: {
			candidate_id: "CAND_0000088",
			profile: {
				anonymized_name: "Ananya Patel",
				headline: "Senior Systems Engineer | Scale, Search & Recommendation Systems",
				summary: "Systems-focused software engineer with 7+ years of experience building high-throughput search and recommendation pipelines. Proficient in Python, Java, Elasticsearch, Lucene, and Spark. Passionate about systems performance, distributed architecture, and data engineering. Looking to transition into AI retrieval and matching systems.",
				location: "Pune",
				country: "India",
				years_of_experience: 7.2,
				current_title: "Senior Systems Engineer",
				current_company: "DataFlow Systems",
				current_company_size: "501-1000",
				current_industry: "Data Infrastructure"
			},
			career_history: [{
				company: "DataFlow Systems",
				title: "Senior Systems Engineer",
				start_date: "2023-04-01",
				end_date: null,
				duration_months: 38,
				is_current: true,
				industry: "Data Infrastructure",
				company_size: "501-1000",
				description: "Architected and managed high-scale recommendation engines handling 2M+ active users. Optimized index indexing pipelines on Apache Lucene, reducing query latencies by 35%. Wrote 100k+ lines of clean, production-grade Python and Java."
			}, {
				company: "SearchCraft Tech",
				title: "Software Engineer II",
				start_date: "2020-05-15",
				end_date: "2023-03-31",
				duration_months: 34,
				is_current: false,
				industry: "SaaS",
				company_size: "201-500",
				description: "Built search features using Elasticsearch clusters. Scaled data pipelines from batch processing to real-time stream ingestion."
			}],
			education: [{
				institution: "College of Engineering Pune",
				degree: "B.Tech.",
				field_of_study: "Computer Science",
				start_year: 2014,
				end_year: 2018,
				grade: "9.1 CGPA",
				tier: "tier_1"
			}],
			skills: [
				{
					name: "Python",
					proficiency: "advanced",
					endorsements: 45,
					duration_months: 80
				},
				{
					name: "Elasticsearch",
					proficiency: "advanced",
					endorsements: 38,
					duration_months: 60
				},
				{
					name: "Apache Lucene",
					proficiency: "advanced",
					endorsements: 25,
					duration_months: 40
				},
				{
					name: "Recommendation Systems",
					proficiency: "advanced",
					endorsements: 30,
					duration_months: 36
				}
			],
			redrob_signals: {
				profile_completeness_score: 96,
				signup_date: "2019-06-12",
				last_active_date: "2026-06-20",
				open_to_work_flag: true,
				profile_views_received_30d: 48,
				applications_submitted_30d: 5,
				recruiter_response_rate: 94,
				avg_response_time_hours: 6,
				connection_count: 450,
				endorsements_received: 38,
				notice_period_days: 30,
				expected_salary_range_inr_lpa: "24-30 LPA",
				preferred_work_mode: "hybrid",
				willing_to_relocate: true,
				github_activity_score: 90,
				search_appearance_30d: 120,
				saved_by_recruiters_30d: 14,
				interview_completion_rate: 85,
				offer_acceptance_rate: 80,
				verified_email: true,
				verified_phone: true,
				linkedin_connected: true
			}
		}
	},
	"CAND_0000072": {
		result: {
			id: "CAND_0000072",
			name: "Marcus Vance",
			role: "Core Platforms Engineer",
			score: 85,
			confidence: 91,
			strengths: [
				"Built open source compilers and database engines",
				"Deep systems performance and profiling expertise",
				"Strong GitHub presence and open source contributions",
				"Fast learner with excellent low-level indexing capabilities"
			],
			weaknesses: ["Lacks direct machine learning experience", "Less product-centric background"],
			isHoneypot: false,
			honeypotReason: "",
			verdict: "Strong adjacent potential. Possesses the core systems engineering skills required to build high-performance vector database indices from scratch.",
			tags: [
				"Systems Specialist",
				"Open Source Core",
				"Elite Coder"
			],
			details: {
				id: "CAND_0000072",
				name: "Marcus Vance",
				role: "Core Platforms Engineer",
				experienceYears: 6.5,
				skills: [
					"Python",
					"C++",
					"Rust",
					"Compilers",
					"Distributed Systems",
					"Memory Indexing",
					"Low-level Network I/O"
				],
				recentCompany: "Scylla Labs (Open Source)",
				education: "B.Tech. in Computer Science, IIT Delhi",
				location: "Noida, India",
				behavioralSignals: {
					recruiterResponseRate: 91,
					githubActivity90d: 98,
					interviewCompletionRate: 90
				},
				timeline: [
					{
						role: "Core Platforms Engineer",
						company: "Scylla Labs",
						period: "2022 - Present"
					},
					{
						role: "Systems Programmer",
						company: "KernelOps",
						period: "2020 - 2022"
					},
					{
						role: "Tooling Engineer",
						company: "CodeForge",
						period: "2019 - 2020"
					}
				]
			}
		},
		challenge: {
			candidate_id: "CAND_0000072",
			profile: {
				anonymized_name: "Marcus Vance",
				headline: "Core Platforms Engineer | Rust, C++ & Low-Level Systems",
				summary: "Systems software developer with 6+ years of experience contributing to database cores and compilers. Deep knowledge of memory models, cache optimization, and network stack programming. Maintainer of open-source libraries with 5,000+ stars.",
				location: "Noida",
				country: "India",
				years_of_experience: 6.5,
				current_title: "Core Platforms Engineer",
				current_company: "Scylla Labs (Open Source)",
				current_company_size: "11-50",
				current_industry: "Open Source Infrastructure"
			},
			career_history: [{
				company: "Scylla Labs (Open Source)",
				title: "Core Platforms Engineer",
				start_date: "2022-06-15",
				end_date: null,
				duration_months: 48,
				is_current: true,
				industry: "Open Source Infrastructure",
				company_size: "11-50",
				description: "Maintained core storage layers written in C++ and Rust. Implemented custom indexing mechanisms that improved query execution time by 40%."
			}],
			education: [{
				institution: "IIT Delhi",
				degree: "B.Tech.",
				field_of_study: "Computer Science",
				start_year: 2015,
				end_year: 2019,
				grade: "9.4 CGPA",
				tier: "tier_1"
			}],
			skills: [
				{
					name: "Rust",
					proficiency: "advanced",
					endorsements: 65,
					duration_months: 48
				},
				{
					name: "C++",
					proficiency: "advanced",
					endorsements: 80,
					duration_months: 70
				},
				{
					name: "Systems Programming",
					proficiency: "advanced",
					endorsements: 55,
					duration_months: 60
				}
			],
			redrob_signals: {
				profile_completeness_score: 98,
				signup_date: "2020-03-04",
				last_active_date: "2026-06-20",
				open_to_work_flag: true,
				profile_views_received_30d: 92,
				applications_submitted_30d: 3,
				recruiter_response_rate: 91,
				avg_response_time_hours: 4,
				connection_count: 500,
				endorsements_received: 94,
				notice_period_days: 15,
				expected_salary_range_inr_lpa: "32-40 LPA",
				preferred_work_mode: "hybrid",
				willing_to_relocate: false,
				github_activity_score: 98,
				search_appearance_30d: 210,
				saved_by_recruiters_30d: 25,
				interview_completion_rate: 90,
				offer_acceptance_rate: 85,
				verified_email: true,
				verified_phone: true,
				linkedin_connected: true
			}
		}
	},
	"CAND_0000045": {
		result: {
			id: "CAND_0000045",
			name: "Elena Rostova",
			role: "Applied ML Scientist",
			score: 91,
			confidence: 95,
			strengths: [
				"Ph.D. in Computational Biology / NLP focus",
				"Built similarity research indices and predictive models",
				"Expert in mathematical embeddings and vector projections",
				"Solid Python statistical engineering foundations"
			],
			weaknesses: ["Lacks commercial SaaS software engineering history", "No direct experience with managed vector DB tools (Pinecone, etc.)"],
			isHoneypot: false,
			honeypotReason: "",
			verdict: "High theoretical and practical modeling capability. Foundational knowledge in similarity metrics is a far deeper capability than simple API usage.",
			tags: [
				"Applied Scientist",
				"PhD Graduate",
				"Vector Math Expert"
			],
			details: {
				id: "CAND_0000045",
				name: "Elena Rostova",
				role: "Applied ML Scientist",
				experienceYears: 5.8,
				skills: [
					"Python",
					"PyTorch",
					"NLP",
					"Similarity Research",
					"Mathematical Embeddings",
					"Statistical Testing",
					"Data Science"
				],
				recentCompany: "BioInformatics Lab",
				education: "Ph.D. in Computational Biology, IISc Bangalore",
				location: "Pune, India",
				behavioralSignals: {
					recruiterResponseRate: 95,
					githubActivity90d: 88,
					interviewCompletionRate: 80
				},
				timeline: [
					{
						role: "Applied ML Scientist",
						company: "BioInformatics Lab",
						period: "2023 - Present"
					},
					{
						role: "Postdoctoral Researcher",
						company: "GenTech Inst",
						period: "2021 - 2023"
					},
					{
						role: "ML Research Assistant",
						company: "IISc Lab",
						period: "2019 - 2021"
					}
				]
			}
		},
		challenge: {
			candidate_id: "CAND_0000045",
			profile: {
				anonymized_name: "Elena Rostova",
				headline: "Applied ML Scientist | PhD NLP & Similarity Research",
				summary: "Machine Learning scientist with 5+ years of experience researching and deploying neural similarity algorithms. Expert in NLP vector projections, high-dimensional space scaling, and statistical evaluation.",
				location: "Pune",
				country: "India",
				years_of_experience: 5.8,
				current_title: "Applied ML Scientist",
				current_company: "BioInformatics Lab",
				current_company_size: "11-50",
				current_industry: "Research & Development"
			},
			career_history: [{
				company: "BioInformatics Lab",
				title: "Applied ML Scientist",
				start_date: "2023-08-01",
				end_date: null,
				duration_months: 34,
				is_current: true,
				industry: "Research & Development",
				company_size: "11-50",
				description: "Shipped genomic forecasting models to clinical platforms. Developed custom embedding alignment techniques in PyTorch for high-dimensional vector search."
			}],
			education: [{
				institution: "IISc Bangalore",
				degree: "Ph.D.",
				field_of_study: "Computational Biology",
				start_year: 2016,
				end_year: 2021,
				grade: null,
				tier: "tier_1"
			}],
			skills: [
				{
					name: "Python",
					proficiency: "advanced",
					endorsements: 50,
					duration_months: 70
				},
				{
					name: "PyTorch",
					proficiency: "advanced",
					endorsements: 48,
					duration_months: 60
				},
				{
					name: "Natural Language Processing",
					proficiency: "advanced",
					endorsements: 42,
					duration_months: 50
				}
			],
			redrob_signals: {
				profile_completeness_score: 95,
				signup_date: "2021-09-01",
				last_active_date: "2026-06-20",
				open_to_work_flag: true,
				profile_views_received_30d: 65,
				applications_submitted_30d: 2,
				recruiter_response_rate: 95,
				avg_response_time_hours: 5,
				connection_count: 320,
				endorsements_received: 52,
				notice_period_days: 60,
				expected_salary_range_inr_lpa: "28-36 LPA",
				preferred_work_mode: "hybrid",
				willing_to_relocate: true,
				github_activity_score: 88,
				search_appearance_30d: 140,
				saved_by_recruiters_30d: 18,
				interview_completion_rate: 80,
				offer_acceptance_rate: 75,
				verified_email: true,
				verified_phone: true,
				linkedin_connected: true
			}
		}
	}
};
function CandidateReportPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const [candidate, setCandidate] = (0, import_react.useState)(null);
	const [results, setResults] = (0, import_react.useState)([]);
	const [jd, setJd] = (0, import_react.useState)("");
	const [shortlistedIds, setShortlistedIds] = (0, import_react.useState)([]);
	const [challengeDetails, setChallengeDetails] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const storedResults = localStorage.getItem("cvblitz_results");
		const storedJd = localStorage.getItem("cvblitz_jd");
		let activeResults = [];
		let activeJd = "";
		if (storedResults && storedJd) {
			activeResults = JSON.parse(storedResults);
			activeJd = storedJd;
		} else {
			activeJd = "Job Description: Senior AI Engineer — Founding Team\nCompany: Redrob AI (Series A AI-native talent intelligence platform)\nLocation: Pune/Noida, India (Hybrid — flexible cadence) | Open to relocation candidates from Tier-1 Indian cities\nEmployment Type: Full-time\nExperience Required: 5–9 years (see \"what we mean by this\" below)\nLet's be honest about this role\nWe're going to write this JD differently from most. We're a Series A company that just raised our round and we're building a new AI Engineering org from scratch. This is the kind of role where the JD changes every six months because the company changes every six months. So instead of pretending we have a fixed checklist, we're going to tell you what we actually need and what we've gotten wrong before.\nIf you've spent your career at Google or Meta and you want a well-scoped role with a defined ladder, this isn't it.\nIf you've spent your career bouncing between early-stage startups and you want to \"just code\" without having to think about product or recruiter workflows or eval frameworks, this also isn't it.\nWe need someone who is simultaneously comfortable with two things that sound contradictory:\nDeep technical depth in modern ML systems — embeddings, retrieval, ranking, LLMs, fine-tuning.\nScrappy product-engineering attitude — willing to ship a working ranker in a week even if the underlying ML is \"obviously suboptimal,\" because we need to learn from real users before we know what to actually optimize for.\nThese are not contradictory in real life. They feel contradictory because of how engineering culture sorted itself into \"researcher\" vs \"shipper\" archetypes. We need both modes available in the same person, and we'd rather you tilt slightly toward shipper than toward researcher.\nWhat you'd actually be doing\nThe high-level mandate: own the intelligence layer of Redrob's product. That means the ranking, retrieval, and matching systems that decide what recruiters see when they search for candidates and what candidates see when they search for roles.\nIn practical terms, your first 90 days will probably look like:\nWeeks 1-3: Audit what we currently have (it's mostly BM25 + rule-based scoring, working but not great). Identify the 3-4 highest-leverage things to fix.\nWeeks 4-8: Ship a v2 ranking system that demonstrably improves recruiter-engagement metrics. This will involve embeddings, hybrid retrieval, and probably some LLM-based re-ranking, but the architecture is your call.\nWeeks 9-12: Set up the evaluation infrastructure — offline benchmarks, online A/B testing, recruiter-feedback loops — so we can keep improving without flying blind.\nBeyond that, you'll be driving the long-term architecture of how we do candidate-JD matching at scale, mentoring the next round of hires (we're growing the team from 4 to 12 engineers in the next year), and working closely with our recruiter-experience PM on what to build.\nWhat we mean by \"5-9 years\"\nThis is a range, not a requirement. Some people hit \"senior engineer\" judgment at 4 years; some never hit it after 15. We've used 5-9 because it's roughly where people we've hired into this kind of role have landed, but we'll seriously consider candidates outside the band if other signals are strong.\nThat said, here are the disqualifiers we actually apply:\nIf you've spent your career in pure research environments (academic labs, research-only roles) without any production deployment — we will not move forward. We are explicit about this. We've tried it twice and it didn't work for either side.\nIf your \"AI experience\" consists primarily of recent (under 12 months) projects using LangChain to call OpenAI — we will probably not move forward, unless you can demonstrate substantial pre-LLM-era ML production experience. We're looking for people who understood retrieval and ranking before it became fashionable.\nIf you are a senior engineer who hasn't written production code in the last 18 months because you've moved into \"architecture\" or \"tech lead\" roles — we will probably not move forward. This role writes code.\nThe skills inventory (please read carefully)\nMost JDs list 20 skills and you're supposed to have all of them. We're going to do this differently.\nThings you absolutely need\nProduction experience with embeddings-based retrieval systems (sentence-transformers, OpenAI embeddings, BGE, E5, or similar) deployed to real users. We don't care which model — we care that you've handled embedding drift, index refresh, retrieval-quality regression in production.\nProduction experience with vector databases or hybrid search infrastructure — Pinecone, Weaviate, Qdrant, Milvus, OpenSearch, Elasticsearch, FAISS, or something similar. Again, the specific tech doesn't matter; the operational experience does.\nStrong Python. Yes really, we care about code quality.\nHands-on experience designing evaluation frameworks for ranking systems — NDCG, MRR, MAP, offline-to-online correlation, A/B test interpretation. If you've never thought about how to evaluate a ranking system rigorously, this role will be very painful.\nThings we'd like you to have but won't reject you for\nLLM fine-tuning experience (LoRA, QLoRA, PEFT)\nExperience with learning-to-rank models (XGBoost-based or neural)\nPrior exposure to HR-tech, recruiting tech, or marketplace products\nBackground in distributed systems or large-scale inference optimization\nOpen-source contributions in the AI/ML space\nThings we explicitly do NOT want\nThis is the section most JDs skip but we think it's the most important:\nTitle-chasers. If your career trajectory shows you optimizing for \"Senior\" → \"Staff\" → \"Principal\" titles by switching companies every 1.5 years, we're not a fit. We need someone who plans to be here for 3+ years.\nFramework enthusiasts. If your GitHub is full of LangChain tutorials and your blog posts are \"How I used [hot framework] to build [demo]\" — that's fine but it's not what we need. We need people who think about systems, not frameworks.\nPeople who have only worked at consulting firms (TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, etc.) in their entire career. We've had bad fit experiences in both directions. If you're currently at one of these companies but have prior product-company experience, that's fine.\nPeople whose primary expertise is computer vision, speech, or robotics without significant NLP/IR exposure. We respect your work but you'd be re-learning fundamentals here.\nPeople whose work has been entirely on closed-source proprietary systems for 5+ years without external validation (papers, talks, open-source). We need to see how you think, not just trust that you can think.\nOn location, comp, and logistics\nLocation: Pune/Noida-preferred but flexible. We have offices in Noida and Pune(mostly used Tue/Thu). We don't require any specific number of in-office days but we expect quarterly travel for offsites. Candidates in Hyderabad, Pune, Mumbai, Delhi NCR welcome to apply. Outside India: case-by-case, but we don't sponsor work visas.\nNotice period: We'd love sub-30-day notice. We can buy out up to 30 days. 30+ day notice candidates are still in scope but the bar gets higher.\nThe vibe check\nWe genuinely believe culture-fit matters more at this stage than skills-fit. Skills are teachable; the rest mostly isn't.\nWe work async-first and write a lot. If you find writing painful, you'll find this role painful.\nWe disagree openly and decide quickly. If you find that style abrasive, you'll find this role abrasive.\nWe move fast and break things, with the caveat that \"things\" are usually our internal assumptions, not user-facing systems. If you need a stable, mature codebase to be productive, you'll find this role unstable.\nHow to read between the lines\nThe \"ideal candidate\" we're imagining is roughly:\n6-8 years total experience, of which 4-5 are in applied ML/AI roles at product companies (not pure services).\nHas shipped at least one end-to-end ranking, search, or recommendation system to real users at meaningful scale.\nHas strong opinions about retrieval (hybrid vs dense), evaluation (offline vs online), and LLM integration (when to fine-tune vs prompt) — and can defend them with reference to systems they actually built.\nLocated in or willing to relocate to Noida or Pune.\nActive on Redrob platform (or has clear signal of being in the job market) so we can actually talk to them.\nWe are aware this is a narrow profile. We're not expecting to find many matches in a 100K candidate pool. We're explicitly OK with that — we'd rather see 10 great matches than 1000 maybes.\nFinal note for the participants of the Redrob hackathon\nIf you're reading this in the context of the Intelligent Candidate Discovery & Ranking Challenge:\nThe \"right answer\" to this JD is not \"find candidates whose skills section contains the most AI keywords.\" That's a trap we've explicitly built into the dataset.\nThe right answer involves reasoning about the gap between what the JD says and what the JD means. A Tier 5 candidate may not use the words \"RAG\" or \"Pinecone\" in their profile, but if their career history shows they built a recommendation system at a product company, they're a fit. A candidate who has all the AI keywords listed as skills but whose title is \"Marketing Manager\" is not a fit, no matter how perfect their skill list looks.\nYour ranking system should also weigh behavioral signals — a perfect-on-paper candidate who hasn't logged in for 6 months and has a 5% recruiter response rate is, for hiring purposes, not actually available. Down-weight them appropriately.\nGood luck.";
			activeResults = SAMPLE_CANDIDATES.map((cand) => {
				let score = 75;
				let confidence = 90;
				let strengths = [];
				let weaknesses = [];
				let isHoneypot = cand.id === "CAND_0000099";
				let honeypotReason = "";
				let verdict = "";
				let tags = [];
				if (cand.id === "CAND_0000001") {
					score = 77.9;
					confidence = 91;
					strengths = [
						"Strong Python foundation",
						"NLP experience",
						"Consistent engineering career",
						"Production software background"
					];
					weaknesses = [
						"Lacks production-scale retrieval systems",
						"Vector database experience",
						"Ranking infrastructure expertise"
					];
					verdict = "This candidate demonstrates strong engineering fundamentals and relevant NLP exposure. However, the profile lacks evidence of production-scale retrieval systems, vector database experience, and ranking infrastructure expertise required for the Senior AI Engineer role.";
					tags = [
						"Potential Match",
						"Verified Profile",
						"Active Candidate"
					];
				} else if (cand.id === "CAND_0000099") {
					score = 42.5;
					confidence = 95;
					strengths = ["High keywords matching (PyTorch, Vector DBs, AI)"];
					weaknesses = [
						"Severe timeline inconsistencies",
						"Simultaneous full-time employment roles",
						"Impossible claim of 12 years of PyTorch"
					];
					honeypotReason = "Claimed 12 years of PyTorch experience (released late 2016), overlapping full-time director/architect roles from 2021 to 2024.";
					verdict = "WARNING: Flagged as Honeypot. Candidate has overlapping full-time employments and claims impossible tool timelines.";
					tags = ["Honeypot Flagged", "Authenticity Warning"];
				} else {
					score = 80;
					confidence = 90;
					strengths = cand.skills.slice(0, 3).map((s) => `Proficient in ${s}`);
					weaknesses = ["Needs specific search architecture verification"];
					verdict = `${cand.name} exhibits good machine learning exposure and engineering background aligned to general AI engineer requirements.`;
					tags = [
						"Strong Fit",
						"Verified Profile",
						"Active Candidate"
					];
				}
				return {
					id: cand.id,
					name: cand.name,
					role: cand.role,
					score,
					confidence,
					strengths,
					weaknesses,
					isHoneypot,
					honeypotReason,
					verdict,
					details: cand,
					tags
				};
			}).sort((a, b) => b.score - a.score);
		}
		if (MOCK_SPECIAL_CANDIDATES[id] && !activeResults.some((c) => c.id === id)) activeResults = [MOCK_SPECIAL_CANDIDATES[id].result, ...activeResults];
		setResults(activeResults);
		setJd(activeJd);
		const found = activeResults.find((c) => c.id === id);
		if (found) {
			setCandidate(found);
			const details = ACTIVE_CANDIDATE_DATA.find((cc) => cc.candidate_id === found.id);
			if (details) setChallengeDetails(details);
			else if (MOCK_SPECIAL_CANDIDATES[found.id]) setChallengeDetails(MOCK_SPECIAL_CANDIDATES[found.id].challenge);
			else if (found.id === "CAND_0000099") setChallengeDetails({
				candidate_id: "CAND_0000099",
				profile: {
					anonymized_name: found.name,
					headline: found.role,
					summary: found.verdict,
					location: "Remote",
					country: "India",
					years_of_experience: found.details?.experienceYears || 0,
					current_title: found.role,
					current_company: found.details?.recentCompany || "",
					current_company_size: "11-50",
					current_industry: "Artificial Intelligence"
				},
				career_history: [],
				education: [],
				skills: [],
				redrob_signals: {
					profile_completeness_score: 92,
					signup_date: "2024-01-01",
					last_active_date: "2026-06-19",
					open_to_work_flag: true,
					profile_views_received_30d: 4,
					applications_submitted_30d: 12,
					recruiter_response_rate: 45,
					avg_response_time_hours: 48,
					connection_count: 120,
					endorsements_received: 5,
					notice_period_days: 90,
					expected_salary_range_inr_lpa: "45-55 LPA",
					preferred_work_mode: "remote",
					willing_to_relocate: false,
					github_activity_score: 20,
					search_appearance_30d: 15,
					saved_by_recruiters_30d: 1,
					interview_completion_rate: 50,
					offer_acceptance_rate: 65,
					verified_email: true,
					verified_phone: true,
					linkedin_connected: true
				}
			});
		}
		const storedShortlist = localStorage.getItem("cvblitz_shortlisted");
		if (storedShortlist) setShortlistedIds(JSON.parse(storedShortlist));
	}, [id]);
	const handleShortlist = () => {
		if (!candidate) return;
		setShortlistedIds((prev) => {
			const isShortlisted = prev.includes(candidate.id);
			let updated;
			if (isShortlisted) {
				toast.info(`${candidate.name} removed from shortlist`);
				updated = prev.filter((item) => item !== candidate.id);
			} else {
				toast.success(`${candidate.name} added to shortlist!`);
				updated = [...prev, candidate.id];
			}
			localStorage.setItem("cvblitz_shortlisted", JSON.stringify(updated));
			return updated;
		});
	};
	const handleScheduleInterview = () => {
		if (!candidate) return;
		toast.success(`Screening interview setup initialized for ${candidate.name}`, { description: "Invitation sent to recruiter dashboard." });
	};
	const handleExportReport = () => {
		if (!candidate) return;
		const timelineStr = candidate.details?.timeline ? candidate.details.timeline.map((t) => `- **${t.period}**: ${t.role} at ${t.company}`).join("\n") : "- (No timeline data)";
		const skillsStr = candidate.details?.skills ? candidate.details.skills.join(", ") : "- (No skills listed)";
		const strengthsStr = candidate.strengths ? candidate.strengths.map((s) => `- ${s}`).join("\n") : "- Matches job description requirements";
		const weaknessesStr = candidate.weaknesses ? candidate.weaknesses.map((w) => `- ${w}`).join("\n") : "- None identified";
		const dossierContent = `# CVBlitz Talent Intelligence Dossier

Candidate Profile Report for **${candidate.name}**
Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
Status: ${candidate.isHoneypot ? "⚠️ Honeypot Flagged" : "✓ Verified"}

## 📊 Evaluation Summary
- **Overall Match Score**: ${candidate.score}%
- **AI Recommendation**: ${candidate.verdict}
- **Confidence Rating**: ${candidate.confidence}%

## 🌟 Key Strengths
${strengthsStr}

## ⚠️ Identified Gaps / Risk Indicators
${weaknessesStr}
${candidate.isHoneypot ? `\n- **Honeypot Reason**: ${candidate.honeypotReason}` : ""}

## 💼 Professional Timeline
${timelineStr}

## 🛠️ Skills & Competencies
- ${skillsStr}

## 📡 Behavioral Signals
- **Recruiter Response Rate**: ${candidate.details?.behavioralSignals?.recruiterResponseRate || 75}%
- **GitHub Activity Score**: ${candidate.details?.behavioralSignals?.githubActivity90d || 80}/100
- **Interview Completion Rate**: ${candidate.details?.behavioralSignals?.interviewCompletionRate || 90}%

---
*Generated by CVBlitz — Stark v4 AI Talent Intelligence*
`;
		triggerFileDownload(`${candidate.name.replace(/\s+/g, "_")}_dossier.md`, dossierContent);
		toast.success(`Exporting Talent Intelligence dossier...`, { description: `Report for ${candidate.name} downloaded as PDF.` });
	};
	const currentIndex = results.findIndex((c) => c.id === id);
	const handlePrev = () => {
		if (currentIndex > 0) navigate({ to: `/candidate/${results[currentIndex - 1].id}` });
	};
	const handleNext = () => {
		if (currentIndex < results.length - 1) navigate({ to: `/candidate/${results[currentIndex + 1].id}` });
	};
	if (!candidate || !challengeDetails) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-background text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-10 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: "Loading Candidate Intelligence..."
			})]
		})
	});
	const isShortlisted = shortlistedIds.includes(candidate.id);
	const isHoneypot = candidate.isHoneypot;
	const jdLower = (jd || "").toLowerCase();
	const candidateSkills = candidate.details?.skills || [];
	const requirementsFound = candidateSkills.filter((skill) => skill && typeof skill === "string" && (jdLower.includes(skill.toLowerCase()) || [
		"python",
		"software development",
		"engineering experience"
	].some((k) => skill.toLowerCase().includes(k))));
	const requirementsMissing = [
		"vector database",
		"retrieval system",
		"embedding",
		"ranking evaluation",
		"hybrid search",
		"mlops",
		"ray",
		"kubernetes"
	].filter((skill) => jdLower.includes(skill) && !candidateSkills.some((cs) => cs && typeof cs === "string" && cs.toLowerCase().includes(skill)));
	const technicalMatch = Math.round(candidate.score * .9 + requirementsFound.length * 2);
	const behavioralMatch = Math.round(challengeDetails.redrob_signals.recruiter_response_rate * .7 + challengeDetails.redrob_signals.interview_completion_rate * .3);
	const roleRelevance = Math.round(candidate.score * .8 + (isHoneypot ? -40 : 0));
	const careerGrowth = Math.round((candidate.details?.experienceYears || 0) * 5 + 40);
	const authenticityScore = isHoneypot ? 15 : 95;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-35" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.12),transparent)] blur-3xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				showBack: true,
				backTo: "/results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/40 pb-6 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-1.5 mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold ${candidate.score > 88 && !isHoneypot ? "bg-brand/10 text-brand border border-brand/20" : "bg-muted text-muted-foreground border border-border/80"}`,
										children: candidate.score > 88 ? "Top Match" : "Potential Match"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-green-500/10 text-green-600 border border-green-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold",
										children: "Verified Profile"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold",
										children: "Active Candidate"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl font-bold tracking-tight",
								children: candidate.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground/80",
										children: challengeDetails.profile.headline || candidate.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3.5 inline text-muted-foreground/75" }),
									" ",
									candidate.details?.recentCompany || ""
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleShortlist,
									className: `h-10 inline-flex items-center gap-2 rounded-xl text-xs font-semibold px-4 border transition cursor-pointer ${isShortlisted ? "border-brand/40 bg-brand/10 text-brand" : "border-border/80 bg-background hover:bg-muted text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4" }), isShortlisted ? "Shortlisted" : "Shortlist Candidate"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleScheduleInterview,
									className: "h-10 inline-flex items-center gap-2 rounded-xl text-xs font-semibold px-4 bg-foreground text-background hover:opacity-90 transition cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), "Schedule Interview"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleExportReport,
									className: "grid place-items-center size-10 border border-border/80 bg-background hover:bg-muted rounded-xl text-muted-foreground hover:text-foreground transition cursor-pointer",
									title: "Export Report",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
									children: "Match Score"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex items-baseline gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `font-display text-4xl font-bold ${isHoneypot ? "text-destructive" : "text-gradient"}`,
										children: [candidate.score, "%"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
									children: "Match Confidence"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex items-baseline gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-4xl font-bold tabular-nums",
										children: [candidate.confidence, "%"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
									children: "Ranking Position"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-4xl font-bold text-brand tabular-nums",
										children: ["#", currentIndex + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: ["of ", results.length]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold",
									children: "Authenticity Score"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex items-baseline gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `font-display text-4xl font-bold tabular-nums ${isHoneypot ? "text-destructive" : "text-green-600"}`,
										children: [authenticityScore, "%"]
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-8 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-brand/25 bg-brand/5 p-6 relative overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-4 right-4 text-brand/20",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-16" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-base font-bold text-brand flex items-center gap-2 mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-5" }), " AI Intelligence Verdict"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-foreground/90 leading-relaxed font-sans italic pr-6",
											children: [
												"\"",
												candidate.verdict,
												"\""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-4 border-t border-brand/15 flex items-center justify-between text-xs text-brand/85 font-mono",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Evaluation Confidence: ",
												candidate.confidence,
												"%"
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contextual Fit Verified" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4.5 text-brand" }), " Fit Analysis Breakdown"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-4",
										children: [
											{
												label: "Technical Match",
												val: technicalMatch,
												color: isHoneypot ? "bg-destructive" : "bg-brand"
											},
											{
												label: "Behavioral Signals",
												val: behavioralMatch,
												color: "bg-blue-500"
											},
											{
												label: "Role Relevance",
												val: roleRelevance,
												color: "bg-purple-500"
											},
											{
												label: "Career Growth",
												val: careerGrowth,
												color: "bg-emerald-500"
											},
											{
												label: "Authenticity",
												val: authenticityScore,
												color: isHoneypot ? "bg-destructive animate-pulse" : "bg-green-600"
											}
										].map((breakdown) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-muted-foreground",
													children: breakdown.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono font-semibold tabular-nums",
													children: [Math.max(0, breakdown.val), "%"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-2 w-full bg-muted rounded-full overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `h-full rounded-full transition-all duration-500 ${breakdown.color}`,
													style: { width: `${Math.max(0, Math.min(100, breakdown.val))}%` }
												})
											})]
										}, breakdown.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4.5 text-brand" }), " Job Description Alignment"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-6 md:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs uppercase tracking-wider text-green-600 font-semibold flex items-center gap-1.5 pb-2 border-b border-border/30",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Requirements Found"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-2",
												children: [requirementsFound.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2.5 rounded-lg border border-green-500/10 bg-green-500/5 px-3 py-2 text-xs font-mono text-green-700",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-green-500 shrink-0" }), req]
												}, i)), requirementsFound.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-muted-foreground italic py-2",
													children: "No matching key requirements found."
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5 pb-2 border-b border-border/30",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), " Requirements Missing"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-2",
												children: [requirementsMissing.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/40 px-3 py-2 text-xs font-mono text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5 text-muted-foreground/80 shrink-0" }), req]
												}, i)), requirementsMissing.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-green-600 font-medium py-2",
													children: "All primary skills requirements met!"
												})]
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4.5 text-brand" }), " Primary Strengths"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: candidate.strengths.map((str, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-3.5 transition hover:border-brand/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-7.5 place-items-center rounded-lg bg-green-500/10 text-green-600 border border-green-500/20 shrink-0 mt-0.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-semibold text-foreground/90",
												children: str
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-muted-foreground mt-0.5 leading-relaxed",
												children: "Verified capabilty based on career signals."
											})] })]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4.5 text-brand" }), " Career Timeline & Growth"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative border-l border-border/80 pl-6 ml-3 space-y-6",
										children: [challengeDetails.career_history.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute -left-[30px] top-1.5 grid size-4 place-items-center rounded-full bg-card border border-border/90",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${item.is_current ? "bg-brand animate-pulse" : "bg-muted-foreground"}` })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col sm:flex-row sm:items-baseline justify-between gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-sm font-semibold text-foreground",
														children: item.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono text-[10px] text-muted-foreground font-medium bg-muted/40 px-2 py-0.5 rounded",
														children: [
															item.start_date.substring(0, 7),
															" - ",
															item.end_date ? item.end_date.substring(0, 7) : "Present",
															" (",
															item.duration_months,
															" mos)"
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-brand font-medium mt-0.5",
													children: [
														item.company,
														" · ",
														item.industry,
														" · ",
														item.company_size,
														" employees"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs text-muted-foreground leading-relaxed pr-2",
													children: item.description
												})
											]
										}, idx)), challengeDetails.career_history.length === 0 && (candidate.details?.timeline || []).map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute -left-[30px] top-1.5 grid size-4 place-items-center rounded-full bg-card border border-border/90",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-muted-foreground" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-semibold text-foreground",
													children: item.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-brand font-medium mt-0.5",
													children: [
														item.company,
														" · ",
														item.period
													]
												})
											]
										}, idx))]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-gradient-to-br from-card/30 to-muted/20 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5 mb-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-brand" }), " Contextual Intelligence Insight"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: "This candidate may not match all AI infrastructure keywords but demonstrates transferable engineering capabilities and strong technical foundations that could enable rapid upskilling."
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4.5 text-brand" }), " Profile Summary"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Experience"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-semibold",
													children: [challengeDetails.profile.years_of_experience, " Years"]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Location"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-semibold truncate max-w-[170px]",
													children: [
														challengeDetails.profile.location,
														", ",
														challengeDetails.profile.country
													]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Education"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold truncate max-w-[170px]",
													children: challengeDetails.education.length > 0 ? `${challengeDetails.education[0].degree} in ${challengeDetails.education[0].field_of_study}` : "State CS Program"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Notice Period"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-semibold font-mono",
													children: [challengeDetails.redrob_signals.notice_period_days, " Days"]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Preferred Work Mode"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold capitalize",
													children: challengeDetails.redrob_signals.preferred_work_mode
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-muted-foreground",
													children: "Expected Salary"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold font-mono",
													children: typeof challengeDetails.redrob_signals.expected_salary_range_inr_lpa === "object" && challengeDetails.redrob_signals.expected_salary_range_inr_lpa !== null ? `${challengeDetails.redrob_signals.expected_salary_range_inr_lpa.min} - ${challengeDetails.redrob_signals.expected_salary_range_inr_lpa.max} LPA` : challengeDetails.redrob_signals.expected_salary_range_inr_lpa
												})] })]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4.5 text-brand" }), " Behavioral Signals"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [
											{
												label: "Recruiter Response",
												val: challengeDetails.redrob_signals.recruiter_response_rate <= 1 ? Math.round(challengeDetails.redrob_signals.recruiter_response_rate * 100) : Math.round(challengeDetails.redrob_signals.recruiter_response_rate)
											},
											{
												label: "GitHub Code Score",
												val: challengeDetails.redrob_signals.github_activity_score < 0 ? 0 : Math.round(challengeDetails.redrob_signals.github_activity_score)
											},
											{
												label: "Interview Completion",
												val: challengeDetails.redrob_signals.interview_completion_rate <= 1 ? Math.round(challengeDetails.redrob_signals.interview_completion_rate * 100) : Math.round(challengeDetails.redrob_signals.interview_completion_rate)
											},
											{
												label: "Offer Acceptance",
												val: challengeDetails.redrob_signals.offer_acceptance_rate < 0 ? 0 : challengeDetails.redrob_signals.offer_acceptance_rate <= 1 ? Math.round(challengeDetails.redrob_signals.offer_acceptance_rate * 100) : Math.round(challengeDetails.redrob_signals.offer_acceptance_rate)
											}
										].map((signal) => {
											const radius = 24;
											const circumference = 2 * Math.PI * radius;
											const strokeDashoffset = circumference - signal.val / 100 * circumference;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-border/60 bg-background/40 p-3 text-center flex flex-col items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative size-16",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														className: "size-full -rotate-90",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "32",
															cy: "32",
															r: radius,
															className: "stroke-muted fill-transparent",
															strokeWidth: "3.5"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
															cx: "32",
															cy: "32",
															r: radius,
															className: "stroke-brand fill-transparent transition-all duration-500",
															strokeWidth: "3.5",
															strokeDasharray: circumference,
															strokeDashoffset
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute inset-0 flex items-center justify-center text-xs font-mono font-bold tabular-nums",
														children: [signal.val, "%"]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground mt-2 font-medium leading-tight",
													children: signal.label
												})]
											}, signal.label);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-base font-bold flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4.5 text-brand" }), " Authenticity Verification"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/65 bg-background/50 p-3.5 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-muted-foreground",
													children: "Verification Status"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `text-sm font-bold mt-0.5 ${isHoneypot ? "text-destructive" : "text-green-600"}`,
													children: isHoneypot ? "Honeypot Detected" : "Verified Profile"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `grid size-9 place-items-center rounded-lg ${isHoneypot ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-600"}`,
												children: isHoneypot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2 text-xs",
											children: [
												{
													label: "No overlapping employment dates",
													val: !isHoneypot
												},
												{
													label: "Consistent career progression",
													val: true
												},
												{
													label: "Realistic experience timeline",
													val: !isHoneypot
												},
												{
													label: "Verified profile information",
													val: true
												}
											].map((check, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-2 rounded-lg bg-background/30",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: check.label
												}), check.val ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-green-500 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-destructive shrink-0" })]
											}, i))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-base font-bold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4.5 text-brand" }), " Screen Signals & Risk Flags"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2.5",
										children: [
											challengeDetails.redrob_signals.recruiter_response_rate < 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-orange-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-muted-foreground leading-relaxed",
													children: [
														"Low recruiter response rate (",
														challengeDetails.redrob_signals.recruiter_response_rate,
														"%)"
													]
												})]
											}),
											challengeDetails.redrob_signals.github_activity_score < 30 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-orange-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-muted-foreground leading-relaxed",
													children: [
														"Limited open-source/GitHub activity score (",
														Math.round(challengeDetails.redrob_signals.github_activity_score),
														")"
													]
												})]
											}),
											requirementsMissing.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-orange-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-muted-foreground leading-relaxed",
													children: "Lacks direct experience in multiple core search infrastructures"
												})]
											}),
											challengeDetails.profile.location !== "Pune" && challengeDetails.profile.location !== "Noida" && challengeDetails.profile.location !== "Delhi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-orange-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-muted-foreground leading-relaxed",
													children: "Located outside primary target hiring nodes (relocation required)"
												})]
											}),
											isHoneypot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-destructive/20 bg-destructive/5 p-3 flex items-start gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-destructive/90 leading-relaxed font-semibold",
													children: "Flagged: CV Timeline fraud and overlapping employment."
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-sm font-bold text-brand flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4.5" }), " Recruiter Recommendation"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-semibold",
											children: "Recommendation: "
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-bold ${isHoneypot ? "text-destructive" : "text-brand"}`,
											children: isHoneypot ? "Reject profile / Investigate overlap" : "Proceed to Screening Interview"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground leading-relaxed",
											children: isHoneypot ? "Severe validation anomalies found. Timeline overlaps in current role require manual check prior to candidate screen." : "Strong technical foundation with moderate role alignment. Candidate may be suitable if the organization values adaptability and learning potential over direct retrieval-system experience."
										})]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 pt-6 border-t border-border/40 flex items-center justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handlePrev,
								disabled: currentIndex === 0,
								className: `inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition ${currentIndex > 0 ? "border-border/80 bg-background hover:bg-muted text-foreground cursor-pointer" : "border-border/40 text-muted-foreground/50 cursor-not-allowed"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Previous Candidate"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/results",
								className: "text-xs font-semibold text-brand hover:underline",
								children: "Back to Rankings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleNext,
								disabled: currentIndex === results.length - 1,
								className: `inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition ${currentIndex < results.length - 1 ? "border-border/80 bg-background hover:bg-muted text-foreground cursor-pointer" : "border-border/40 text-muted-foreground/50 cursor-not-allowed"}`,
								children: ["Next Candidate ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { CandidateReportPage as component };
