import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Calendar, J as Brain, K as Building, U as Check, X as Award, _ as Save, a as UserCheck, g as Scale, j as Download, n as X, o as TriangleAlert, u as Sparkles, w as Layers } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as SAMPLE_CANDIDATES, r as Header, t as CHALLENGE_CANDIDATES } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
import { c as PolarAngleAxis, f as ResponsiveContainer, l as PolarRadiusAxis, m as Legend, n as RadarChart, p as Tooltip, s as Radar, u as PolarGrid } from "../_libs/recharts+[...].mjs";
import { t as Route } from "./compare-FkOoeTyT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-Bp9LeBve.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComparePage() {
	const { ids } = Route.useSearch();
	useNavigate();
	const [candidates, setCandidates] = (0, import_react.useState)([]);
	const [jd, setJd] = (0, import_react.useState)("");
	const [shortlistedIds, setShortlistedIds] = (0, import_react.useState)([]);
	const [savedComparisons, setSavedComparisons] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const storedResults = localStorage.getItem("cvblitz_results");
		const storedJd = localStorage.getItem("cvblitz_jd");
		const storedShortlist = localStorage.getItem("cvblitz_shortlist");
		const storedSavedComps = localStorage.getItem("cvblitz_saved_comparisons");
		if (storedShortlist) setShortlistedIds(JSON.parse(storedShortlist));
		if (storedSavedComps) setSavedComparisons(JSON.parse(storedSavedComps));
		let allResults = [];
		let activeJd = "";
		if (storedResults && storedJd) {
			allResults = JSON.parse(storedResults);
			activeJd = storedJd;
		} else {
			activeJd = "Job Description: Senior AI Engineer — Founding Team\nCompany: Redrob AI (Series A AI-native talent intelligence platform)\nLocation: Pune/Noida, India (Hybrid — flexible cadence) | Open to relocation candidates from Tier-1 Indian cities\nEmployment Type: Full-time\nExperience Required: 5–9 years (see \"what we mean by this\" below)\nLet's be honest about this role\nWe're going to write this JD differently from most. We're a Series A company that just raised our round and we're building a new AI Engineering org from scratch. This is the kind of role where the JD changes every six months because the company changes every six months. So instead of pretending we have a fixed checklist, we're going to tell you what we actually need and what we've gotten wrong before.\nIf you've spent your career at Google or Meta and you want a well-scoped role with a defined ladder, this isn't it.\nIf you've spent your career bouncing between early-stage startups and you want to \"just code\" without having to think about product or recruiter workflows or eval frameworks, this also isn't it.\nWe need someone who is simultaneously comfortable with two things that sound contradictory:\nDeep technical depth in modern ML systems — embeddings, retrieval, ranking, LLMs, fine-tuning.\nScrappy product-engineering attitude — willing to ship a working ranker in a week even if the underlying ML is \"obviously suboptimal,\" because we need to learn from real users before we know what to actually optimize for.\nThese are not contradictory in real life. They feel contradictory because of how engineering culture sorted itself into \"researcher\" vs \"shipper\" archetypes. We need both modes available in the same person, and we'd rather you tilt slightly toward shipper than toward researcher.\nWhat you'd actually be doing\nThe high-level mandate: own the intelligence layer of Redrob's product. That means the ranking, retrieval, and matching systems that decide what recruiters see when they search for candidates and what candidates see when they search for roles.\nIn practical terms, your first 90 days will probably look like:\nWeeks 1-3: Audit what we currently have (it's mostly BM25 + rule-based scoring, working but not great). Identify the 3-4 highest-leverage things to fix.\nWeeks 4-8: Ship a v2 ranking system that demonstrably improves recruiter-engagement metrics. This will involve embeddings, hybrid retrieval, and probably some LLM-based re-ranking, but the architecture is your call.\nWeeks 9-12: Set up the evaluation infrastructure — offline benchmarks, online A/B testing, recruiter-feedback loops — so we can keep improving without flying blind.\nBeyond that, you'll be driving the long-term architecture of how we do candidate-JD matching at scale, mentoring the next round of hires (we're growing the team from 4 to 12 engineers in the next year), and working closely with our recruiter-experience PM on what to build.\nWhat we mean by \"5-9 years\"\nThis is a range, not a requirement. Some people hit \"senior engineer\" judgment at 4 years; some never hit it after 15. We've used 5-9 because it's roughly where people we've hired into this kind of role have landed, but we'll seriously consider candidates outside the band if other signals are strong.\nThat said, here are the disqualifiers we actually apply:\nIf you've spent your career in pure research environments (academic labs, research-only roles) without any production deployment — we will not move forward. We are explicit about this. We've tried it twice and it didn't work for either side.\nIf your \"AI experience\" consists primarily of recent (under 12 months) projects using LangChain to call OpenAI — we will probably not move forward, unless you can demonstrate substantial pre-LLM-era ML production experience. We're looking for people who understood retrieval and ranking before it became fashionable.\nIf you are a senior engineer who hasn't written production code in the last 18 months because you've moved into \"architecture\" or \"tech lead\" roles — we will probably not move forward. This role writes code.\nThe skills inventory (please read carefully)\nMost JDs list 20 skills and you're supposed to have all of them. We're going to do this differently.\nThings you absolutely need\nProduction experience with embeddings-based retrieval systems (sentence-transformers, OpenAI embeddings, BGE, E5, or similar) deployed to real users. We don't care which model — we care that you've handled embedding drift, index refresh, retrieval-quality regression in production.\nProduction experience with vector databases or hybrid search infrastructure — Pinecone, Weaviate, Qdrant, Milvus, OpenSearch, Elasticsearch, FAISS, or something similar. Again, the specific tech doesn't matter; the operational experience does.\nStrong Python. Yes really, we care about code quality.\nHands-on experience designing evaluation frameworks for ranking systems — NDCG, MRR, MAP, offline-to-online correlation, A/B test interpretation. If you've never thought about how to evaluate a ranking system rigorously, this role will be very painful.\nThings we'd like you to have but won't reject you for\nLLM fine-tuning experience (LoRA, QLoRA, PEFT)\nExperience with learning-to-rank models (XGBoost-based or neural)\nPrior exposure to HR-tech, recruiting tech, or marketplace products\nBackground in distributed systems or large-scale inference optimization\nOpen-source contributions in the AI/ML space\nThings we explicitly do NOT want\nThis is the section most JDs skip but we think it's the most important:\nTitle-chasers. If your career trajectory shows you optimizing for \"Senior\" → \"Staff\" → \"Principal\" titles by switching companies every 1.5 years, we're not a fit. We need someone who plans to be here for 3+ years.\nFramework enthusiasts. If your GitHub is full of LangChain tutorials and your blog posts are \"How I used [hot framework] to build [demo]\" — that's fine but it's not what we need. We need people who think about systems, not frameworks.\nPeople who have only worked at consulting firms (TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, etc.) in their entire career. We've had bad fit experiences in both directions. If you're currently at one of these companies but have prior product-company experience, that's fine.\nPeople whose primary expertise is computer vision, speech, or robotics without significant NLP/IR exposure. We respect your work but you'd be re-learning fundamentals here.\nPeople whose work has been entirely on closed-source proprietary systems for 5+ years without external validation (papers, talks, open-source). We need to see how you think, not just trust that you can think.\nOn location, comp, and logistics\nLocation: Pune/Noida-preferred but flexible. We have offices in Noida and Pune(mostly used Tue/Thu). We don't require any specific number of in-office days but we expect quarterly travel for offsites. Candidates in Hyderabad, Pune, Mumbai, Delhi NCR welcome to apply. Outside India: case-by-case, but we don't sponsor work visas.\nNotice period: We'd love sub-30-day notice. We can buy out up to 30 days. 30+ day notice candidates are still in scope but the bar gets higher.\nThe vibe check\nWe genuinely believe culture-fit matters more at this stage than skills-fit. Skills are teachable; the rest mostly isn't.\nWe work async-first and write a lot. If you find writing painful, you'll find this role painful.\nWe disagree openly and decide quickly. If you find that style abrasive, you'll find this role abrasive.\nWe move fast and break things, with the caveat that \"things\" are usually our internal assumptions, not user-facing systems. If you need a stable, mature codebase to be productive, you'll find this role unstable.\nHow to read between the lines\nThe \"ideal candidate\" we're imagining is roughly:\n6-8 years total experience, of which 4-5 are in applied ML/AI roles at product companies (not pure services).\nHas shipped at least one end-to-end ranking, search, or recommendation system to real users at meaningful scale.\nHas strong opinions about retrieval (hybrid vs dense), evaluation (offline vs online), and LLM integration (when to fine-tune vs prompt) — and can defend them with reference to systems they actually built.\nLocated in or willing to relocate to Noida or Pune.\nActive on Redrob platform (or has clear signal of being in the job market) so we can actually talk to them.\nWe are aware this is a narrow profile. We're not expecting to find many matches in a 100K candidate pool. We're explicitly OK with that — we'd rather see 10 great matches than 1000 maybes.\nFinal note for the participants of the Redrob hackathon\nIf you're reading this in the context of the Intelligent Candidate Discovery & Ranking Challenge:\nThe \"right answer\" to this JD is not \"find candidates whose skills section contains the most AI keywords.\" That's a trap we've explicitly built into the dataset.\nThe right answer involves reasoning about the gap between what the JD says and what the JD means. A Tier 5 candidate may not use the words \"RAG\" or \"Pinecone\" in their profile, but if their career history shows they built a recommendation system at a product company, they're a fit. A candidate who has all the AI keywords listed as skills but whose title is \"Marketing Manager\" is not a fit, no matter how perfect their skill list looks.\nYour ranking system should also weigh behavioral signals — a perfect-on-paper candidate who hasn't logged in for 6 months and has a 5% recruiter response rate is, for hiring purposes, not actually available. Down-weight them appropriately.\nGood luck.";
			allResults = SAMPLE_CANDIDATES.map((cand) => {
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
					verdict = "This candidate demonstrates strong engineering fundamentals and relevant NLP exposure. However, the profile lacks evidence of production-scale retrieval systems.";
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
			});
		}
		setJd(activeJd);
		if (ids) {
			const idList = ids.split(",");
			setCandidates(allResults.filter((c) => idList.includes(c.id)));
		} else setCandidates(allResults.slice(0, 3));
	}, [ids]);
	const handleToggleShortlist = (id, name) => {
		setShortlistedIds((prev) => {
			const active = prev.includes(id);
			let updated;
			if (active) {
				updated = prev.filter((item) => item !== id);
				toast.info(`${name} removed from shortlist`);
			} else {
				updated = [...prev, id];
				toast.success(`${name} added to shortlist!`);
			}
			localStorage.setItem("cvblitz_shortlist", JSON.stringify(updated));
			return updated;
		});
	};
	const getCandidateDimensions = (c) => {
		const isHoneypot = c.isHoneypot;
		const jdLower = (jd || "").toLowerCase();
		const candidateSkills = c.details?.skills || [];
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
		const signals = (CHALLENGE_CANDIDATES.find((cc) => cc.candidate_id === c.id) || c.details)?.redrob_signals || {
			recruiter_response_rate: .75,
			github_activity_score: 80,
			interview_completion_rate: .85,
			offer_acceptance_rate: .9
		};
		const responseRate = signals.recruiter_response_rate <= 1 ? Math.round(signals.recruiter_response_rate * 100) : Math.round(signals.recruiter_response_rate);
		const completionRate = signals.interview_completion_rate <= 1 ? Math.round(signals.interview_completion_rate * 100) : Math.round(signals.interview_completion_rate);
		const githubScore = signals.github_activity_score < 0 ? 0 : Math.round(signals.github_activity_score);
		const offerAcceptance = signals.offer_acceptance_rate < 0 ? 0 : signals.offer_acceptance_rate <= 1 ? Math.round(signals.offer_acceptance_rate * 100) : Math.round(signals.offer_acceptance_rate);
		const technical = Math.min(100, Math.round(c.score * .9 + requirementsFound.length * 2));
		const behavioral = Math.round(responseRate * .6 + completionRate * .2 + githubScore * .2);
		const relevance = Math.max(10, Math.round(c.score * .8 + (isHoneypot ? -40 : 0)));
		const growth = Math.min(100, Math.round((c.details?.experienceYears || 0) * 5 + 40));
		const authenticity = isHoneypot ? 15 : 95;
		const noticePeriod = signals.notice_period_days || 30;
		const workMode = signals.preferred_work_mode || "hybrid";
		const expectedSalary = typeof signals.expected_salary_range_inr_lpa === "object" ? `${signals.expected_salary_range_inr_lpa.min} - ${signals.expected_salary_range_inr_lpa.max} LPA` : signals.expected_salary_range_inr_lpa || "Negotiable";
		const locationFit = [
			"noida",
			"pune",
			"delhi",
			" NCR",
			"hyderabad",
			"mumbai"
		].some((city) => (c.details?.location || "").toLowerCase().includes(city)) ? "High (Local/Tier-1)" : "Medium (Remote Only)";
		let risk = "Low";
		let riskDetail = "No major indicators.";
		if (isHoneypot) {
			risk = "Critical";
			riskDetail = "Authenticity validation failure. Timeline overlap detected.";
		} else if (responseRate < 40) {
			risk = "Medium";
			riskDetail = "Low recruiter responsiveness.";
		} else if (noticePeriod > 90) {
			risk = "Medium";
			riskDetail = "Long notice period (90+ days).";
		}
		return {
			technical,
			behavioral,
			relevance,
			growth,
			authenticity,
			requirementsFound,
			requirementsMissing,
			responseRate,
			githubScore,
			completionRate,
			offerAcceptance,
			noticePeriod,
			workMode,
			expectedSalary,
			locationFit,
			risk,
			riskDetail
		};
	};
	const radarData = [
		{ subject: "Technical Fit" },
		{ subject: "Behavioral Engagement" },
		{ subject: "Role Relevance" },
		{ subject: "Growth Potential" },
		{ subject: "Profile Authenticity" }
	].map((dim) => {
		const item = { subject: dim.subject };
		candidates.forEach((c) => {
			const dims = getCandidateDimensions(c);
			let value = 50;
			if (dim.subject === "Technical Fit") value = dims.technical;
			else if (dim.subject === "Behavioral Engagement") value = dims.behavioral;
			else if (dim.subject === "Role Relevance") value = dims.relevance;
			else if (dim.subject === "Growth Potential") value = dims.growth;
			else if (dim.subject === "Profile Authenticity") value = dims.authenticity;
			item[c.name] = value;
		});
		return item;
	});
	const themeColors = [
		{
			stroke: "#6366f1",
			fill: "rgba(99, 102, 241, 0.15)"
		},
		{
			stroke: "#10b981",
			fill: "rgba(16, 185, 129, 0.15)"
		},
		{
			stroke: "#f59e0b",
			fill: "rgba(245, 158, 11, 0.15)"
		},
		{
			stroke: "#0ea5e9",
			fill: "rgba(14, 165, 233, 0.15)"
		}
	];
	const activeCandidates = candidates.filter((c) => !c.isHoneypot);
	const recommendedWinner = activeCandidates.length > 0 ? activeCandidates.sort((a, b) => b.score - a.score)[0] : candidates[0];
	const getAIVerdict = () => {
		if (!recommendedWinner) return "";
		const name = recommendedWinner.name;
		const role = recommendedWinner.role;
		const comp = recommendedWinner.details?.recentCompany || "their current firm";
		const strengths = recommendedWinner.strengths.slice(0, 2).join(" and ");
		const others = candidates.filter((c) => c.id !== recommendedWinner.id);
		let compText = "";
		if (others.length > 0) compText = ` Compared to ${others.map((o) => o.name).join(", ")}, ${name} possesses superior technical match metrics, significantly stronger behavioral engagement rates, and a reliable profile history.`;
		return `${name} is identified as the optimal hire for the ${role} position. Their background at ${comp} shows excellent execution in ${strengths}.${compText} Moving them forward to final technical and team reviews is recommended.`;
	};
	const handleScheduleInterview = (name) => {
		toast.success(`Interview invitation prepared for ${name}`, { description: "Opening scheduler console..." });
	};
	const handleExportReport = () => {
		toast.promise(new Promise((resolve) => {
			setTimeout(() => {
				const names = candidates.map((c) => c.name).join(", ");
				const headers = candidates.map((c) => `| **${c.name}**`).join("");
				const borders = candidates.map(() => "| ---").join("");
				const scores = candidates.map((c) => `| ${c.score}%`).join("");
				const experiences = candidates.map((c) => `| ${c.details?.experienceYears || c.details?.years_of_experience || 0} Years`).join("");
				const locations = candidates.map((c) => `| ${c.details?.location || "Unknown"}`).join("");
				const responseRates = candidates.map((c) => `| ${c.details?.behavioralSignals?.recruiterResponseRate || 75}%`).join("");
				const githubScores = candidates.map((c) => `| ${c.details?.behavioralSignals?.githubActivity90d || 80}/100`).join("");
				const honeypots = candidates.map((c) => `| ${c.isHoneypot ? "⚠️ Flagged (0)" : "✓ Verified"}`).join("");
				triggerFileDownload(`cvblitz_comparison_report.md`, `# CVBlitz Candidate Comparison Report

Comparative analysis of selected candidates: ${names}
Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}

## 📊 Summary Overview
| Parameter ${headers} |
| --- ${borders} |
| **Match Score** ${scores} |
| **Experience** ${experiences} |
| **Location** ${locations} |
| **Response Rate** ${responseRates} |
| **GitHub Score** ${githubScores} |
| **Honeypot Status** ${honeypots} |

## 🏆 Overall AI Evaluation Verdict
${getOverallVerdict()}

---
*Generated by CVBlitz — Stark v4 AI Talent Intelligence*
`);
				resolve(true);
			}, 1200);
		}), {
			loading: "Generating PDF Executive Comparison Report...",
			success: "Comparison Dossier successfully downloaded!",
			error: "Failed to export report."
		});
	};
	const handleSaveComparison = () => {
		const currentIds = candidates.map((c) => c.id);
		const updated = [...savedComparisons, currentIds];
		setSavedComparisons(updated);
		localStorage.setItem("cvblitz_saved_comparisons", JSON.stringify(updated));
		toast.success("Comparison checklist saved successfully!", { description: "You can recall this cohort comparison from the analyze page." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.15),transparent)] blur-3xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				showBack: true,
				backTo: "/results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 pt-8 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-3.5" }), " Recruiter Evaluation Board"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-3xl font-semibold tracking-tight",
							children: "Candidate Comparison Engine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground max-w-xl",
							children: "Compare candidates the way elite recruiters do. Review cross-dimensional parameters, satisfy job criteria, and inspect hiring risk."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid gap-4 md:grid-cols-${candidates.length} lg:grid-cols-${candidates.length}`,
						children: candidates.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl border p-5 backdrop-blur-md relative overflow-hidden transition duration-300 ${c.id === recommendedWinner?.id ? "border-brand bg-brand/5 shadow-md shadow-brand/5" : "border-border/60 bg-card/40"}`,
							children: [
								c.id === recommendedWinner?.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 bg-brand text-[9px] font-mono font-bold tracking-wider text-white px-2 py-0.6 rounded-bl-lg uppercase",
									children: "Top Recommended"
								}),
								c.isHoneypot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-0 right-0 bg-destructive text-[9px] font-mono font-bold tracking-wider text-white px-2 py-0.6 rounded-bl-lg uppercase flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-2.5" }), " Authenticity Warning"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-base font-bold truncate max-w-[180px]",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground font-medium mt-0.5 truncate max-w-[180px]",
											children: c.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-muted-foreground flex items-center gap-1 mt-1 truncate max-w-[180px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3 shrink-0" }),
												" ",
												c.details?.recentCompany || ""
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `text-2xl font-bold font-display ${c.isHoneypot ? "text-destructive" : "text-gradient"}`,
												children: c.isHoneypot ? "Risk" : `${c.score}%`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5",
												children: "Match Score"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[9.5px] font-mono text-muted-foreground/80 mt-1",
												children: [
													"conf ",
													c.confidence,
													"%"
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1 mt-4",
									children: c.tags.slice(0, 2).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded text-[9px] font-mono px-1.5 py-0.5 border ${c.isHoneypot ? "bg-destructive/10 text-destructive border-destructive/10" : tag.includes("Top") || tag.includes("Gem") ? "bg-brand/10 text-brand border-brand/10" : "bg-muted text-muted-foreground border-border/80"}`,
										children: tag
									}, tag))
								})
							]
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4 border-b border-border/40 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4.5 text-brand" }), " Recruiter Multi-Signal Radar Graph"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground uppercase font-mono tracking-wider",
								children: "Comparison Grid"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-12 gap-8 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-7 h-[280px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
										cx: "50%",
										cy: "50%",
										outerRadius: "80%",
										data: radarData,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, {
												stroke: "#e2e8f0",
												strokeDasharray: "3 3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
												dataKey: "subject",
												tick: {
													fill: "#64748b",
													fontSize: 10,
													fontWeight: 500
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
												angle: 30,
												domain: [0, 100],
												tick: {
													fill: "#94a3b8",
													fontSize: 9
												}
											}),
											candidates.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
												name: c.name,
												dataKey: c.name,
												stroke: themeColors[idx % themeColors.length].stroke,
												fill: themeColors[idx % themeColors.length].fill,
												fillOpacity: .5,
												strokeWidth: 1.8
											}, c.id)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
												backgroundColor: "rgba(255, 255, 255, 0.9)",
												border: "1px solid #cbd5e1",
												borderRadius: "8px",
												fontSize: "11px"
											} }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
												verticalAlign: "bottom",
												height: 36,
												wrapperStyle: { fontSize: "11px" }
											})
										]
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-5 space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-background/40 border border-border/65 rounded-xl p-4.5 space-y-3 text-xs leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "font-semibold flex items-center gap-1.5 text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-brand" }), " Radar Dimensions Explained"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 text-muted-foreground text-[11px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "Technical Fit:"
											}), " Computed match score based on extracted requirements."] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "Behavioral Engagement:"
											}), " Combined recruiter response rates, interview completion, and active status."] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "Growth Potential:"
											}), " Relative career progress based on experience timeline velocity."] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: "Profile Authenticity:"
											}), " Checks for inconsistent timelines, fraud warnings, and overlap alerts."] })
										]
									})]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 border-b border-border/40 bg-card/25 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4.5 text-muted-foreground" }), " Side-by-Side Dimension Board"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9.5px] uppercase font-mono tracking-wider text-muted-foreground",
								children: "Parameter Compare"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full border-collapse text-left text-xs min-w-[700px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border/40 bg-muted/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4 font-semibold text-muted-foreground w-1/4",
										children: "Evaluation Axis"
									}), candidates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4 font-bold text-foreground w-1/4 border-l border-border/30",
										children: c.name
									}, c.id))]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
									className: "divide-y divide-border/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Overall Score"
										}), candidates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-mono font-bold text-sm border-l border-border/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: c.isHoneypot ? "text-destructive" : "text-brand",
												children: c.isHoneypot ? "Honeypot Warning" : `${c.score}%`
											})
										}, c.id))] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Technical Match"
										}), candidates.map((c) => {
											const dims = getCandidateDimensions(c);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 border-l border-border/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-semibold",
														children: [dims.technical, "%"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "w-16 h-1 bg-muted rounded-full overflow-hidden shrink-0",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "h-full bg-brand",
															style: { width: `${dims.technical}%` }
														})
													})]
												})
											}, c.id);
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Behavioral Signals"
										}), candidates.map((c) => {
											const dims = getCandidateDimensions(c);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 border-l border-border/30 space-y-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "Response Rate:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-mono font-medium",
															children: [dims.responseRate, "%"]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "Interview Completion:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-mono font-medium",
															children: [dims.completionRate, "%"]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground",
															children: "GitHub Activity:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono font-medium",
															children: dims.githubScore
														})]
													})
												]
											}, c.id);
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Expected Salary"
										}), candidates.map((c) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 border-l border-border/30 font-mono font-semibold",
												children: getCandidateDimensions(c).expectedSalary
											}, c.id);
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Notice Period"
										}), candidates.map((c) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 border-l border-border/30 font-semibold font-mono",
												children: [getCandidateDimensions(c).noticePeriod, " Days"]
											}, c.id);
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Work Mode & Location Fit"
										}), candidates.map((c) => {
											const dims = getCandidateDimensions(c);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 border-l border-border/30 space-y-1 font-medium capitalize",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: dims.workMode }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-muted-foreground font-normal",
													children: dims.locationFit
												})]
											}, c.id);
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4 font-medium text-muted-foreground",
											children: "Hiring Risk"
										}), candidates.map((c) => {
											const dims = getCandidateDimensions(c);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 border-l border-border/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `rounded-full px-2 py-0.5 text-[10px] font-semibold border ${dims.risk === "Critical" ? "bg-destructive/10 text-destructive border-destructive/20 animate-pulse" : dims.risk === "Medium" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-green-500/10 text-green-500 border-green-500/20"}`,
														children: dims.risk
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground block truncate max-w-[130px]",
														title: dims.riskDetail,
														children: dims.riskDetail
													})]
												})
											}, c.id);
										})] })
									]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-base font-bold flex items-center gap-2 mb-4 border-b border-border/40 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4.5 text-brand" }), " Job Requirements Gap Comparison"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid gap-6 md:grid-cols-${candidates.length}`,
							children: candidates.map((c) => {
								const dims = getCandidateDimensions(c);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pb-2 border-b border-border/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: c.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] text-muted-foreground",
												children: [
													"Satisfies ",
													dims.requirementsFound.length,
													" of ",
													dims.requirementsFound.length + dims.requirementsMissing.length,
													" criteria"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] uppercase tracking-wider text-green-500 font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), " Requirements Found"]
											}), dims.requirementsFound.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1",
												children: dims.requirementsFound.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-green-500/10 text-green-500 border border-green-500/15 rounded px-2 py-0.5 text-[10px] font-medium",
													children: req
												}, req))
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-muted-foreground",
												children: "None detected"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3 text-amber-500" }), " Requirements Missing"]
											}), dims.requirementsMissing.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1",
												children: dims.requirementsMissing.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-amber-500/10 text-amber-500 border border-amber-500/15 rounded px-2 py-0.5 text-[10px] font-medium",
													children: req
												}, req))
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-muted-foreground",
												children: "No critical requirements missing"
											})]
										})
									]
								}, c.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid gap-6 md:grid-cols-${candidates.length}`,
						children: candidates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-border/40 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-sm",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground",
										children: c.role
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-semibold text-foreground flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-brand shrink-0" }), " AI-Identified Strengths"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1.5 text-xs text-muted-foreground",
										children: c.strengths.map((str, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-1.5 leading-tight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-green-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: str })]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-semibold text-foreground flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-amber-500 shrink-0" }), " Screening Gaps & Risks"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1.5 text-xs text-muted-foreground",
										children: [c.weaknesses.map((weak, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-1.5 leading-tight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: weak })]
										}, idx)), c.isHoneypot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-1.5 leading-tight bg-destructive/10 border border-destructive/20 rounded p-2 text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 shrink-0 mt-0.5 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Timeline fraud overlap detected: ", c.honeypotReason] })]
										})]
									})]
								})
							]
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-base font-bold flex items-center gap-2 mb-6 border-b border-border/40 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4.5 text-muted-foreground" }), " Career Progression Timeline Comparison"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid gap-6 md:grid-cols-${candidates.length}`,
							children: candidates.map((c) => {
								const history = (CHALLENGE_CANDIDATES.find((cc) => cc.candidate_id === c.id) || c.details)?.career_history || [];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-semibold text-xs border-b border-border/20 pb-2",
										children: [c.name, " Timeline"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative border-l border-border pl-4 ml-2.5 space-y-4.5",
										children: history.length > 0 ? history.map((job, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -left-[20.5px] top-1 size-2 rounded-full border bg-card ${job.is_current ? "border-brand bg-brand" : "border-border"}` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold leading-snug",
													children: job.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] text-muted-foreground mt-0.5",
													children: [
														job.company,
														" · ",
														job.start_date.substring(0, 7),
														" - ",
														job.end_date ? job.end_date.substring(0, 7) : "Present"
													]
												}),
												job.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[10px] text-muted-foreground/80 leading-normal line-clamp-2",
													children: job.description
												})
											]
										}, index)) : (c.details?.timeline || []).map((job, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[20.5px] top-1 size-2 rounded-full border border-border bg-card" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold leading-snug",
													children: job.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] text-muted-foreground mt-0.5",
													children: [
														job.company,
														" · ",
														job.period
													]
												})
											]
										}, idx))
									})]
								}, c.id);
							})
						})]
					}),
					recommendedWinner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-brand bg-brand/5 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -bottom-20 size-60 rounded-full bg-brand/10 blur-3xl pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 text-xs font-mono text-brand uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4 animate-bounce" }), " CVBlitz Recommendation Banner"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row md:items-start justify-between gap-5 border-b border-brand/20 pb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground font-semibold",
											children: "Recommended Match"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "font-display text-2xl font-bold flex items-center gap-2",
											children: [recommendedWinner.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] bg-brand text-white font-mono font-bold tracking-wide uppercase px-2 py-0.5 rounded-full shrink-0",
												children: "Strongest Fit"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground leading-normal max-w-2xl mt-2 font-medium",
											children: getAIVerdict()
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4.5 shrink-0 bg-background/50 border border-brand/20 rounded-xl p-3.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-2xl font-bold font-display text-gradient",
												children: [recommendedWinner.score, "%"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5",
												children: "Match Score"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-l border-brand/20 my-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-2xl font-bold font-display text-gradient",
												children: [recommendedWinner.confidence, "%"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5",
												children: "Confidence"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-4 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleToggleShortlist(recommendedWinner.id, recommendedWinner.name),
										className: `h-9 inline-flex items-center gap-1.5 rounded-lg px-4 text-xs font-medium border transition cursor-pointer ${shortlistedIds.includes(recommendedWinner.id) ? "bg-brand/10 border-brand text-brand" : "border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4" }), shortlistedIds.includes(recommendedWinner.id) ? "Shortlisted" : "Shortlist Winner"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleScheduleInterview(recommendedWinner.name),
										className: "h-9 inline-flex items-center gap-1.5 rounded-lg px-4 text-xs font-medium bg-foreground text-background hover:opacity-90 transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), "Schedule Interview"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleExportReport,
										className: "h-9 inline-flex items-center gap-1.5 rounded-lg px-3.5 text-xs font-medium border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export Comparison"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleSaveComparison,
										className: "h-9 inline-flex items-center gap-1.5 rounded-lg px-3.5 text-xs font-medium border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer",
										title: "Save this cohort comparison",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Save Cohort"]
									})]
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ComparePage as component };
