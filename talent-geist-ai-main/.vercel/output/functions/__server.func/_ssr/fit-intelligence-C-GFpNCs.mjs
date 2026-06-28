import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Activity, J as Brain, U as Check, Y as Bookmark, a as UserCheck, c as Terminal, f as ShieldCheck, g as Scale, i as Users, j as Download, n as X, q as Briefcase, s as TrendingUp, u as Sparkles, w as Layers } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as Header } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
import { c as PolarAngleAxis, f as ResponsiveContainer, l as PolarRadiusAxis, n as RadarChart, p as Tooltip, s as Radar, u as PolarGrid } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fit-intelligence-C-GFpNCs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FIT_PROFILES = [
	{
		id: "CAND_0000088",
		name: "Ananya Patel",
		role: "Senior Systems Engineer",
		company: "DataFlow Systems",
		roleUnderstanding: 94,
		candidateUnderstanding: 91,
		fitConfidence: 89,
		recruiterTrust: 96,
		explicitRequires: [
			{
				skill: "Python",
				explanation: "Core software engineering and systems logic language."
			},
			{
				skill: "Embeddings",
				explanation: "Translating words into numerical vector spaces for models."
			},
			{
				skill: "Vector Databases",
				explanation: "Indexing and querying vectors efficiently under load."
			},
			{
				skill: "Retrieval Systems",
				explanation: "First-stage candidate selection and filtering from pools."
			},
			{
				skill: "Ranking Frameworks",
				explanation: "Aggregating signals to score and sort candidates."
			}
		],
		implicitRequires: [
			{
				skill: "Ownership Mindset",
				explanation: "Autonomously building systems end-to-end for recruiters."
			},
			{
				skill: "Product Thinking",
				explanation: "Understanding user workflow and pipeline performance."
			},
			{
				skill: "Fast Execution",
				explanation: "Willingness to ship scrappy versions to learn fast."
			},
			{
				skill: "Cross-functional Collaboration",
				explanation: "Coordinating with PMs, researchers, and recruiters."
			},
			{
				skill: "Production Experience",
				explanation: "Handling real-world database index refreshes."
			},
			{
				skill: "Learning Agility",
				explanation: "Quick adoption of vector search engines and models."
			}
		],
		candidateCapabilities: [
			{
				title: "Technical Capabilities",
				score: 92,
				desc: "High mastery of Python and elastic scaling databases."
			},
			{
				title: "Production Experience",
				score: 88,
				desc: "Ran search and recommend pipelines for 2M+ users."
			},
			{
				title: "Leadership Signals",
				score: 85,
				desc: "Led two platform migrations as Principal Architect."
			},
			{
				title: "Behavioral Signals",
				score: 90,
				desc: "Highly active on GitHub, 94% recruiter response rate."
			},
			{
				title: "Growth Trajectory",
				score: 94,
				desc: "Double promotion within 3 years at DataFlow."
			}
		],
		fitMatrix: [
			{
				roleReq: "Retrieval Systems",
				candCap: "Recommendation Systems",
				score: 91
			},
			{
				roleReq: "Vector Databases",
				candCap: "Search Infrastructure",
				score: 87
			},
			{
				roleReq: "Ranking Evaluation",
				candCap: "Experimentation Frameworks",
				score: 84
			},
			{
				roleReq: "Ownership",
				candCap: "System Ownership",
				score: 93
			}
		],
		explicitMatch: [
			{
				name: "Python",
				matched: true
			},
			{
				name: "Embeddings",
				matched: true
			},
			{
				name: "Vector Databases",
				matched: true
			},
			{
				name: "Retrieval Systems",
				matched: true
			}
		],
		implicitMatch: [
			{
				name: "Ownership",
				score: 92
			},
			{
				name: "Execution Speed",
				score: 88
			},
			{
				name: "Product Thinking",
				score: 85
			},
			{
				name: "Learning Agility",
				score: 91
			},
			{
				name: "Leadership Potential",
				score: 78
			}
		],
		skillsMap: [
			{
				from: "Recommendation Systems",
				to: "Retrieval Systems"
			},
			{
				from: "Search Infrastructure",
				to: "Ranking Systems"
			},
			{
				from: "Feature Engineering",
				to: "Embeddings Pipeline Design"
			},
			{
				from: "Data Quality Frameworks",
				to: "Evaluation Systems"
			}
		],
		verdictReason: "This candidate does not simply match the keywords in the job description. Their experience building large-scale recommendation and search infrastructure demonstrates capabilities highly relevant to retrieval systems. Their career progression, production ownership, and engineering depth align strongly with the actual success profile required for the role.",
		successPatterns: [
			{
				subject: "Ownership Alignment",
				score: 92
			},
			{
				subject: "Execution Alignment",
				score: 88
			},
			{
				subject: "Technical Depth Alignment",
				score: 94
			},
			{
				subject: "Product Alignment",
				score: 85
			},
			{
				subject: "Growth Alignment",
				score: 91
			}
		],
		radarData: [
			{
				subject: "Ownership Alignment",
				score: 92
			},
			{
				subject: "Execution Alignment",
				score: 88
			},
			{
				subject: "Technical Depth Alignment",
				score: 94
			},
			{
				subject: "Product Alignment",
				score: 85
			},
			{
				subject: "Growth Alignment",
				score: 91
			}
		],
		reportMetrics: {
			techFit: 89,
			roleFit: 92,
			behavioralFit: 81,
			growthFit: 90,
			ownershipFit: 94
		}
	},
	{
		id: "CAND_0000072",
		name: "Marcus Vance",
		role: "Core Platforms Engineer",
		company: "Scylla Labs (Open Source)",
		roleUnderstanding: 95,
		candidateUnderstanding: 88,
		fitConfidence: 85,
		recruiterTrust: 91,
		explicitRequires: [
			{
				skill: "Python",
				explanation: "Core software engineering and systems logic language."
			},
			{
				skill: "Embeddings",
				explanation: "Translating words into numerical vector spaces for models."
			},
			{
				skill: "Vector Databases",
				explanation: "Indexing and querying vectors efficiently under load."
			},
			{
				skill: "Retrieval Systems",
				explanation: "First-stage candidate selection and filtering from pools."
			},
			{
				skill: "Ranking Frameworks",
				explanation: "Aggregating signals to score and sort candidates."
			}
		],
		implicitRequires: [
			{
				skill: "Ownership Mindset",
				explanation: "Autonomously building systems end-to-end for recruiters."
			},
			{
				skill: "Product Thinking",
				explanation: "Understanding user workflow and pipeline performance."
			},
			{
				skill: "Fast Execution",
				explanation: "Willingness to ship scrappy versions to learn fast."
			},
			{
				skill: "Cross-functional Collaboration",
				explanation: "Coordinating with PMs, researchers, and recruiters."
			},
			{
				skill: "Production Experience",
				explanation: "Handling real-world database index refreshes."
			},
			{
				skill: "Learning Agility",
				explanation: "Quick adoption of vector search engines and models."
			}
		],
		candidateCapabilities: [
			{
				title: "Technical Capabilities",
				score: 96,
				desc: "Built open source compilers, deep systems performance."
			},
			{
				title: "Production Experience",
				score: 82,
				desc: "Maintained platform servers with 99.99% uptime."
			},
			{
				title: "Leadership Signals",
				score: 80,
				desc: "Maintains active libraries with 5,000+ stars."
			},
			{
				title: "Behavioral Signals",
				score: 95,
				desc: "Top 1% git activity signals, rapid responder."
			},
			{
				title: "Growth Trajectory",
				score: 85,
				desc: "Quick progression from developer to core platform architect."
			}
		],
		fitMatrix: [
			{
				roleReq: "Retrieval Systems",
				candCap: "Low-level Network I/O",
				score: 85
			},
			{
				roleReq: "Vector Databases",
				candCap: "Custom Memory Indexing",
				score: 92
			},
			{
				roleReq: "Ranking Evaluation",
				candCap: "Hardware Profiling",
				score: 80
			},
			{
				roleReq: "Ownership",
				candCap: "Lib Maintainership",
				score: 95
			}
		],
		explicitMatch: [
			{
				name: "Python",
				matched: true
			},
			{
				name: "Embeddings",
				matched: false
			},
			{
				name: "Vector Databases",
				matched: false
			},
			{
				name: "Retrieval Systems",
				matched: false
			}
		],
		implicitMatch: [
			{
				name: "Ownership",
				score: 96
			},
			{
				name: "Execution Speed",
				score: 95
			},
			{
				name: "Product Thinking",
				score: 68
			},
			{
				name: "Learning Agility",
				score: 98
			},
			{
				name: "Leadership Potential",
				score: 82
			}
		],
		skillsMap: [
			{
				from: "Open Source Libs",
				to: "Advanced Algorithm Design"
			},
			{
				from: "Custom Container Hacks",
				to: "Infrastructure Engineering"
			},
			{
				from: "Assembly Optimization",
				to: "Performance Scaling"
			},
			{
				from: "Scripting & Automation",
				to: "CI/CD & MLOps Pipelines"
			}
		],
		verdictReason: "Marcus lacks commercial machine learning brand names in his profile. However, his heavy systems programming and open-source contributions demonstrate elite learning agility and system design capabilities. He possesses the raw hardware-level debugging skills that founding teams desperately need.",
		successPatterns: [
			{
				subject: "Ownership Alignment",
				score: 96
			},
			{
				subject: "Execution Alignment",
				score: 95
			},
			{
				subject: "Technical Depth Alignment",
				score: 97
			},
			{
				subject: "Product Alignment",
				score: 68
			},
			{
				subject: "Growth Alignment",
				score: 88
			}
		],
		radarData: [
			{
				subject: "Ownership Alignment",
				score: 96
			},
			{
				subject: "Execution Alignment",
				score: 95
			},
			{
				subject: "Technical Depth Alignment",
				score: 97
			},
			{
				subject: "Product Alignment",
				score: 68
			},
			{
				subject: "Growth Alignment",
				score: 88
			}
		],
		reportMetrics: {
			techFit: 82,
			roleFit: 88,
			behavioralFit: 94,
			growthFit: 85,
			ownershipFit: 96
		}
	},
	{
		id: "CAND_0000045",
		name: "Elena Rostova",
		role: "Applied ML Scientist",
		company: "BioInformatics Lab",
		roleUnderstanding: 96,
		candidateUnderstanding: 92,
		fitConfidence: 91,
		recruiterTrust: 95,
		explicitRequires: [
			{
				skill: "Python",
				explanation: "Core software engineering and systems logic language."
			},
			{
				skill: "Embeddings",
				explanation: "Translating words into numerical vector spaces for models."
			},
			{
				skill: "Vector Databases",
				explanation: "Indexing and querying vectors efficiently under load."
			},
			{
				skill: "Retrieval Systems",
				explanation: "First-stage candidate selection and filtering from pools."
			},
			{
				skill: "Ranking Frameworks",
				explanation: "Aggregating signals to score and sort candidates."
			}
		],
		implicitRequires: [
			{
				skill: "Ownership Mindset",
				explanation: "Autonomously building systems end-to-end for recruiters."
			},
			{
				skill: "Product Thinking",
				explanation: "Understanding user workflow and pipeline performance."
			},
			{
				skill: "Fast Execution",
				explanation: "Willingness to ship scrappy versions to learn fast."
			},
			{
				skill: "Cross-functional Collaboration",
				explanation: "Coordinating with PMs, researchers, and recruiters."
			},
			{
				skill: "Production Experience",
				explanation: "Handling real-world database index refreshes."
			},
			{
				skill: "Learning Agility",
				explanation: "Quick adoption of vector search engines and models."
			}
		],
		candidateCapabilities: [
			{
				title: "Technical Capabilities",
				score: 95,
				desc: "Ph.D. level understanding of NLP models and vector projections."
			},
			{
				title: "Production Experience",
				score: 84,
				desc: "Shipped genomic forecasting models to clinical platforms."
			},
			{
				title: "Leadership Signals",
				score: 78,
				desc: "Supervised 3 researchers on neural search publications."
			},
			{
				title: "Behavioral Signals",
				score: 88,
				desc: "Consistent active contributor, highly detailed verifications."
			},
			{
				title: "Growth Trajectory",
				score: 90,
				desc: "Expanded lab forecasting efficiency by 3x in 2 years."
			}
		],
		fitMatrix: [
			{
				roleReq: "Retrieval Systems",
				candCap: "Similarity Research",
				score: 95
			},
			{
				roleReq: "Vector Databases",
				candCap: "Mathematical Embeddings",
				score: 91
			},
			{
				roleReq: "Ranking Evaluation",
				candCap: "Statistical Testing",
				score: 88
			},
			{
				roleReq: "Ownership",
				candCap: "Algorithm Building",
				score: 85
			}
		],
		explicitMatch: [
			{
				name: "Python",
				matched: true
			},
			{
				name: "Embeddings",
				matched: true
			},
			{
				name: "Vector Databases",
				matched: false
			},
			{
				name: "Retrieval Systems",
				matched: false
			}
		],
		implicitMatch: [
			{
				name: "Ownership",
				score: 85
			},
			{
				name: "Execution Speed",
				score: 84
			},
			{
				name: "Product Thinking",
				score: 78
			},
			{
				name: "Learning Agility",
				score: 95
			},
			{
				name: "Leadership Potential",
				score: 80
			}
		],
		skillsMap: [
			{
				from: "Similarity Research",
				to: "Vector Search & Embeddings"
			},
			{
				from: "Clinical Forecasting",
				to: "Production Predictive Models"
			},
			{
				from: "Offline Model Evals",
				to: "Ranking Evaluation Frameworks"
			},
			{
				from: "Algorithmic Math",
				to: "Custom LLM Fine-Tuning"
			}
		],
		verdictReason: "Elena brings high theoretical and practical modeling expertise. While she lacks commercial SaaS toolnames like LangChain or Pinecone, her foundational knowledge in implementing custom similarity search indices represents a deeper engineering capability than standard API integration.",
		successPatterns: [
			{
				subject: "Ownership Alignment",
				score: 85
			},
			{
				subject: "Execution Alignment",
				score: 84
			},
			{
				subject: "Technical Depth Alignment",
				score: 96
			},
			{
				subject: "Product Alignment",
				score: 78
			},
			{
				subject: "Growth Alignment",
				score: 92
			}
		],
		radarData: [
			{
				subject: "Ownership Alignment",
				score: 85
			},
			{
				subject: "Execution Alignment",
				score: 84
			},
			{
				subject: "Technical Depth Alignment",
				score: 96
			},
			{
				subject: "Product Alignment",
				score: 78
			},
			{
				subject: "Growth Alignment",
				score: 92
			}
		],
		reportMetrics: {
			techFit: 92,
			roleFit: 90,
			behavioralFit: 84,
			growthFit: 89,
			ownershipFit: 85
		}
	}
];
function FitIntelligencePage() {
	const navigate = useNavigate();
	const [selectedIdx, setSelectedIdx] = (0, import_react.useState)(0);
	const activeProfile = FIT_PROFILES[selectedIdx];
	const [shortlisted, setShortlisted] = (0, import_react.useState)([]);
	const handleToggleShortlist = (name) => {
		setShortlisted((prev) => {
			if (prev.includes(name)) {
				toast.info(`${name} removed from shortlist`);
				return prev.filter((n) => n !== name);
			} else {
				toast.success(`${name} added to shortlist!`, { description: "This candidate has been added to review cohort." });
				return [...prev, name];
			}
		});
	};
	const handleExportAnalysis = (name) => {
		const profile = FIT_PROFILES.find((p) => p.name === name);
		if (!profile) {
			toast.error("Profile not found.");
			return;
		}
		toast.promise(new Promise((resolve) => {
			setTimeout(() => {
				const explicitReqsStr = profile.explicitRequires.map((e) => `- **${e.skill}**: ${e.explanation}`).join("\n");
				const implicitReqsStr = profile.implicitRequires.map((i) => `- **${i.skill}**: ${i.explanation}`).join("\n");
				const successPatternsStr = profile.successPatterns.map((s) => `- **${s.subject}**: ${s.score}%`).join("\n");
				const content = `# CVBlitz Role-Candidate Fit Analysis Report

Semantic alignment evaluation of **${profile.name}** against requirements.
Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}

## 📊 Alignment Overview
- **Candidate Name**: ${profile.name}
- **Role Alignment Target**: Senior AI Engineer
- **Role Understanding Index**: ${profile.roleUnderstanding}%
- **Candidate Understanding Index**: ${profile.candidateUnderstanding}%
- **Fit Confidence**: ${profile.fitConfidence}%
- **Recruiter Trust Grade**: ${profile.recruiterTrust}%

## 💡 Explicit Requirements Match (Stated)
${explicitReqsStr}

## 🧠 Implicit Success Patterns (Inferred)
${implicitReqsStr}

## 🔬 Success Pattern Alignment Scores
${successPatternsStr}

## 🏆 Final Recruiter Verdict & Recommendation
${profile.verdictReason}

---
*Generated by CVBlitz — Stark v4 AI Talent Intelligence*
`;
				triggerFileDownload(`${profile.name.replace(/\s+/g, "_")}_fit_analysis.md`, content);
				resolve(true);
			}, 1200);
		}), {
			loading: `Generating Fit Intelligence PDF for ${name}...`,
			success: `Role-Fit analysis exported for ${name}!`,
			error: "Failed to export report."
		});
	};
	const handleCompare = (name) => {
		toast.success(`Staging ${name} in Comparison Engine...`, { description: "Opening compare dashboard..." });
		setTimeout(() => {
			navigate({ to: "/compare" });
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes dashflow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-flow-line {
          stroke-dasharray: 6, 4;
          animation: dashflow 1.2s linear infinite;
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.12),transparent)] blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-10 right-10 h-[400px] w-[600px] rounded-full bg-[radial-gradient(closest-side,oklch(0.7_0.22_300/0.08),transparent)] blur-3xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				showBack: true,
				backTo: "/"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 pt-8 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " Deep Contextual Retrieval Analysis"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-semibold tracking-tight",
								children: "Role-Candidate Fit Intelligence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground max-w-2xl",
								children: "Understand why a candidate truly fits the role beyond keywords, titles, and ATS filters."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 bg-muted/40 p-1.5 rounded-xl border border-border/50 max-w-md",
							children: FIT_PROFILES.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedIdx(idx),
								className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${selectedIdx === idx ? "bg-background text-foreground shadow-sm border border-border/60" : "text-muted-foreground hover:text-foreground hover:bg-background/40"}`,
								children: p.name.split(" ")[0]
							}, p.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
										children: "Role Understanding"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-2xl font-bold text-gradient tabular-nums",
										children: [activeProfile.roleUnderstanding, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4.5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
										children: "Candidate Understanding"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-2xl font-bold text-gradient tabular-nums",
										children: [activeProfile.candidateUnderstanding, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4.5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
										children: "Fit Confidence"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-2xl font-bold text-gradient tabular-nums",
										children: [activeProfile.fitConfidence, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4.5 animate-pulse" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
										children: "Recruiter Trust"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-2xl font-bold text-gradient tabular-nums",
										children: [activeProfile.recruiterTrust, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4.5" })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-4.5 text-muted-foreground" }), " Explicit Requirements (Stated)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: activeProfile.explicitRequires.map((r, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-muted/40 border border-border/50 rounded-xl space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-green-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.skill })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground pl-5 leading-normal",
										children: r.explanation
									})]
								}, idx))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4.5 text-brand" }), " Implicit Requirements (Inferred)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: activeProfile.implicitRequires.map((r, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-brand/[0.02] border border-brand/15 rounded-xl space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-brand shrink-0 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.skill })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground pl-5 leading-normal",
										children: r.explanation
									})]
								}, idx))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4.5 text-brand" }), " What The Candidate Actually Brings"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-5",
							children: activeProfile.candidateCapabilities.map((cap, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-background/50 border border-border/60 rounded-xl flex flex-col justify-between space-y-3 shadow-sm hover:border-brand/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-foreground",
										children: cap.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9.5px] text-muted-foreground leading-normal",
										children: cap.desc
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[9.5px] font-mono font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Alignment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [cap.score, "%"] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 bg-muted rounded-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-brand",
											style: { width: `${cap.score}%` }
										})
									})]
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4.5 text-green-600" }), " Explicit Keyword Matching"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 grid-cols-2",
									children: activeProfile.explicitRequires.slice(0, 4).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-muted/30 border border-border/50 rounded-xl flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-foreground",
											children: x.skill
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "size-5 rounded-full bg-green-500/10 border border-green-500/20 grid place-items-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-green-600" })
										})]
									}, x.skill))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted-foreground leading-relaxed pt-2",
									children: "Standard ATS checks look strictly at this panel, matching text tags literally and ignoring wider conceptual synonyms."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4.5 text-brand" }), " Implicit Success Pattern Matching"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2.5",
								children: activeProfile.implicitMatch.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-xs font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: m.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-brand font-mono",
											children: [m.score, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-2 bg-muted rounded-full overflow-hidden border border-border/45",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gradient-to-r from-brand to-brand-glow",
											style: { width: `${m.score}%` }
										})
									})]
								}, m.name))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4.5 text-brand" }), " Fit Intelligence Matrix"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full border-collapse text-left text-xs min-w-[600px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border/40 bg-muted/20 text-muted-foreground font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 w-1/3",
											children: "Role Requirement"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 w-1/3 border-l border-border/30",
											children: "Candidate Capability"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 w-1/3 border-l border-border/30",
											children: "Alignment Score"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-border/30 font-medium",
									children: activeProfile.fitMatrix.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-muted-foreground",
											children: item.roleReq
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 border-l border-border/30 text-foreground",
											children: item.candCap
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 border-l border-border/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-brand font-semibold",
													children: [item.score, "%"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden max-w-[120px]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-brand",
														style: { width: `${item.score}%` }
													})
												})]
											})
										})
									] }, idx))
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4.5 text-brand" }), " How CVBlitz Interprets Transferable Skills"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid grid-cols-11 items-center max-w-3xl mx-auto my-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-4 space-y-4 z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-center font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-bold",
										children: "Candidate Experience"
									}), activeProfile.skillsMap.map((skill, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 bg-muted/40 border border-border/60 rounded-xl text-center text-xs font-medium text-muted-foreground h-11 flex items-center justify-center shadow-sm",
										children: skill.from
									}, idx))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 h-full relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "absolute inset-0 w-full h-full",
										style: { minHeight: "260px" },
										viewBox: "0 0 100 240",
										fill: "none",
										preserveAspectRatio: "none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 0,22 L 100,22",
												stroke: "#6366f1",
												strokeWidth: "1.5",
												className: "animated-flow-line"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "50",
												cy: "22",
												r: "3",
												fill: "#6366f1"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 0,77 Q 50,77 100,77",
												stroke: "#6366f1",
												strokeWidth: "1.5",
												className: "animated-flow-line"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "50",
												cy: "77",
												r: "3",
												fill: "#6366f1"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 0,132 Q 50,132 100,132",
												stroke: "#6366f1",
												strokeWidth: "1.5",
												className: "animated-flow-line"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "50",
												cy: "132",
												r: "3",
												fill: "#6366f1"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 0,187 Q 50,187 100,187",
												stroke: "#6366f1",
												strokeWidth: "1.5",
												className: "animated-flow-line"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "50",
												cy: "187",
												r: "3",
												fill: "#6366f1"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-4 space-y-4 z-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-center font-mono text-[9px] uppercase tracking-wider text-brand font-bold",
										children: "Equivalent Role Capability"
									}), activeProfile.skillsMap.map((skill, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 bg-brand/5 border border-brand/20 rounded-xl text-center text-xs font-semibold text-foreground h-11 flex items-center justify-center shadow-sm",
										children: skill.to
									}, idx))]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4.5 text-brand" }), " Role Success Pattern Analysis"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[250px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
										cx: "50%",
										cy: "50%",
										outerRadius: "80%",
										data: activeProfile.radarData,
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
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
												name: activeProfile.name,
												dataKey: "score",
												stroke: "#6366f1",
												fill: "rgba(99, 102, 241, 0.15)",
												fillOpacity: .5,
												strokeWidth: 2
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
												backgroundColor: "rgba(255, 255, 255, 0.9)",
												border: "1px solid #cbd5e1",
												borderRadius: "8px",
												fontSize: "11px"
											} })
										]
									})
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4.5 text-brand" }), " Why This Candidate Fits"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground leading-relaxed font-medium bg-muted/20 p-4 rounded-xl border border-border/50",
									children: [
										"\"",
										activeProfile.verdictReason,
										"\""
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 border border-brand/15 bg-brand/[0.01] rounded-xl space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-brand/10 pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-brand animate-pulse" }), " Recruiter Trust Layer"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3 text-xs leading-normal",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: "Would ATS Recommend?"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-red-500 flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5 shrink-0" }), " No (Term mismatch)"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: "Would CVBlitz Recommend?"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-green-600 flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 shrink-0" }), " Yes (High capability)"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9.5px] text-muted-foreground border-t border-brand/10 pt-2 leading-relaxed",
										children: "Traditional ATS systems evaluate keyword presence. CVBlitz evaluates demonstrated capability, transferable expertise, behavioral signals, and role success patterns."
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4.5 text-brand" }), " Fit Confidence Report"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold",
											children: "Technical Fit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-bold font-display text-foreground",
											children: [activeProfile.reportMetrics.techFit, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold",
											children: "Role Fit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-bold font-display text-foreground",
											children: [activeProfile.reportMetrics.roleFit, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold",
											children: "Behavioral Fit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-bold font-display text-foreground",
											children: [activeProfile.reportMetrics.behavioralFit, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold",
											children: "Growth Fit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-bold font-display text-foreground",
											children: [activeProfile.reportMetrics.growthFit, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-brand/5 border border-brand/10 rounded-xl space-y-1.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9.5px] uppercase tracking-wider text-brand font-bold",
											children: "Ownership Fit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-bold font-display text-gradient",
											children: [activeProfile.reportMetrics.ownershipFit, "%"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-border/40 pt-4 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground font-medium",
									children: "Composite Recruiter Evaluation Confidence:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-brand font-mono text-sm",
									children: [activeProfile.fitConfidence, "%"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-brand bg-brand/[0.02] p-6 text-center space-y-4 max-w-3xl mx-auto shadow-sm relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] uppercase font-mono text-brand font-bold tracking-widest flex items-center justify-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-brand animate-pulse" }), " CVBlitz Role-Fit Verdict"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold",
										children: "Overall Verdict: Strong Match"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-green-600",
										children: "Surpassed all behavioral and technical parameters."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-w-xl mx-auto p-4 bg-background/80 border border-border/60 rounded-xl text-xs text-muted-foreground leading-relaxed",
								children: "\"This candidate demonstrates strong alignment with both the explicit requirements and the hidden success patterns of the role. While some keywords may be missing, the underlying capabilities, career trajectory, and production experience suggest a high probability of success.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex flex-wrap justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: `/candidate/${activeProfile.id}`,
										className: "inline-flex h-10 items-center gap-1.5 rounded-full bg-brand text-white hover:scale-[1.01] px-5 text-sm font-semibold transition-all cursor-pointer shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4 text-white" }), " View Candidate Report"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleToggleShortlist(activeProfile.name),
										className: `inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition cursor-pointer ${shortlisted.includes(activeProfile.name) ? "bg-green-600 text-white hover:bg-green-700" : "bg-foreground text-background hover:opacity-90"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }),
											" ",
											shortlisted.includes(activeProfile.name) ? "Shortlisted" : "Add to Shortlist"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleCompare(activeProfile.name),
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-muted-foreground" }), " Compare Candidates"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleExportAnalysis(activeProfile.name),
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 text-muted-foreground" }), " Export Fit Analysis"]
									})
								]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { FitIntelligencePage as component };
