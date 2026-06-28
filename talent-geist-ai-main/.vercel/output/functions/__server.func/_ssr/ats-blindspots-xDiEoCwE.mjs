import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as Brain, R as CircleAlert, T as Info, U as Check, X as Award, Y as Bookmark, a as UserCheck, f as ShieldCheck, i as Users, j as Download, n as X, s as TrendingUp, u as Sparkles, w as Layers } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as Header } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
import { c as PolarAngleAxis, f as ResponsiveContainer, l as PolarRadiusAxis, n as RadarChart, p as Tooltip, s as Radar, u as PolarGrid } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ats-blindspots-xDiEoCwE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CANDIDATE_PROFILES = [
	{
		id: "CAND_0000088",
		name: "Ananya Patel",
		role: "Senior Systems Engineer",
		company: "DataFlow Systems",
		atsRank: 482,
		cvbRank: 8,
		difference: 474,
		confidence: 94,
		keywordMatch: 38,
		capabilityMatch: 91,
		similarityScore: 89,
		atsReasons: [
			"Missing exact keyword \"RAG\"",
			"Missing exact keyword \"Pinecone\"",
			"Missing exact keyword \"Retrieval\"",
			"Non-standard job title (\"Platform Craftsman\")",
			"Low keyword density in LLM categories"
		],
		cvbReasons: [
			"Built recommendation systems at high scale",
			"Production search infrastructure experience (Lucene/ES)",
			"Strong Python engineering background (100k+ lines)",
			"Similar career trajectory to successful hires",
			"Demonstrated ranking-system adjacent expertise"
		],
		failedToUnderstand: "Although the candidate never explicitly mentions retrieval systems, their experience building recommendation engines and search infrastructure demonstrates highly transferable expertise. Traditional ATS systems fail to recognize capability equivalence and therefore incorrectly down-rank this profile.",
		hiddenTalentReport: "This candidate would likely be filtered out by traditional ATS systems due to terminology mismatch. However, their actual work history reveals highly relevant engineering experience and behavioral patterns consistent with successful AI infrastructure hires.",
		verdictReason: "The candidate demonstrates strong evidence of adjacent expertise, transferable capabilities, and career patterns that align closely with successful hires despite lacking several exact job-description keywords.",
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
				from: "Data Quality Systems",
				to: "Evaluation Frameworks"
			}
		],
		radarData: [
			{
				subject: "Career Growth",
				score: 88
			},
			{
				subject: "Technical Ownership",
				score: 92
			},
			{
				subject: "Product Thinking",
				score: 85
			},
			{
				subject: "Learning Velocity",
				score: 94
			},
			{
				subject: "Engineering Depth",
				score: 90
			}
		],
		similarityPatterns: [
			"Product-company experience",
			"Strong engineering ownership",
			"Search/recommendation background",
			"Consistent technical progression",
			"Active recruiter engagement"
		]
	},
	{
		id: "CAND_0000072",
		name: "Marcus Vance",
		role: "Core Platforms Engineer",
		company: "Scylla Labs (Open Source)",
		atsRank: 892,
		cvbRank: 14,
		difference: 878,
		confidence: 91,
		keywordMatch: 22,
		capabilityMatch: 88,
		similarityScore: 82,
		atsReasons: [
			"Missing standard CS Degree (Self-taught)",
			"Short tenures at early-stage startups",
			"Missing keyword \"Kubernetes\"",
			"Missing keyword \"PyTorch\"",
			"No corporate enterprise domain matches"
		],
		cvbReasons: [
			"Heavy open-source contributor (top 1% globally)",
			"Built customized runtime containers and assembly logic",
			"High active coding signal (commit frequency 98th percentile)",
			"Strong problem-solving indicators under load",
			"Deep hardware/software interfacing background"
		],
		failedToUnderstand: "Marcus's lack of a formal CS degree and his non-traditional career path led traditional parser filters to reject him immediately. However, his open-source codebases show exceptional systems architecture depth and raw performance scaling that exceeds standard credentials.",
		hiddenTalentReport: "Marcus possesses top-tier infrastructure and performance-scaling capabilities that are rare in traditional applicants. Despite his non-traditional credentials, his raw systems engineering score and active git history make him a highly suitable engineering candidate.",
		verdictReason: "Marcus represents a high-potential systems builder. Traditional ATS filters missed him entirely due to title/credential bias, but his open-source contributions confirm he has the deep technical agility required for a founding team.",
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
		radarData: [
			{
				subject: "Career Growth",
				score: 72
			},
			{
				subject: "Technical Ownership",
				score: 95
			},
			{
				subject: "Product Thinking",
				score: 65
			},
			{
				subject: "Learning Velocity",
				score: 98
			},
			{
				subject: "Engineering Depth",
				score: 97
			}
		],
		similarityPatterns: [
			"Heavy open-source contributions",
			"High active coding signal",
			"Early-stage startup flexibility",
			"Low administrative overhead expectation",
			"Extreme performance optimization"
		]
	},
	{
		id: "CAND_0000045",
		name: "Elena Rostova",
		role: "Applied ML Scientist",
		company: "BioInformatics Lab",
		atsRank: 615,
		cvbRank: 11,
		difference: 604,
		confidence: 93,
		keywordMatch: 31,
		capabilityMatch: 95,
		similarityScore: 87,
		atsReasons: [
			"Academic job title (\"Research Assistant\")",
			"Missing commercial keyword \"LangChain\"",
			"Missing commercial keyword \"Vector DB\"",
			"No industrial SaaS experience listed",
			"Missing exact keyword \"API\""
		],
		cvbReasons: [
			"Deployed production ML models for clinical forecasting",
			"Implemented custom cosine similarity search libraries",
			"Advanced mathematical foundations (Linear Algebra & Stats)",
			"Rigorous offline testing & model evaluation systems",
			"Strong publication record on neural retrieval architectures"
		],
		failedToUnderstand: "Elena is classified as 'academic-only' by standard parsing filters because she has worked in lab environments. However, her core work involved implementing custom similarity algorithms from scratch, representing deeper competence than standard API integrations.",
		hiddenTalentReport: "Elena has the deep mathematical and algorithm design foundations required to build customized retrieval layers from scratch. Traditional ATS filters missed her because she lacks commercial brand names and has an academic title.",
		verdictReason: "Elena has rare theoretical and practical modeling depth. She was ignored by the ATS due to a lack of commercial keywords, but her custom implementation history indicates she is an elite NLP/Retrieval matching candidate.",
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
		radarData: [
			{
				subject: "Career Growth",
				score: 80
			},
			{
				subject: "Technical Ownership",
				score: 85
			},
			{
				subject: "Product Thinking",
				score: 78
			},
			{
				subject: "Learning Velocity",
				score: 95
			},
			{
				subject: "Engineering Depth",
				score: 96
			}
		],
		similarityPatterns: [
			"Advanced algorithmic foundation",
			"Custom algorithm building",
			"Complex system debugging",
			"Rigorous testing and eval focus",
			"Fast math-to-code translation"
		]
	}
];
function ATSBlindspotPage() {
	const navigate = useNavigate();
	const [selectedIdx, setSelectedIdx] = (0, import_react.useState)(0);
	const activeCandidate = CANDIDATE_PROFILES[selectedIdx];
	const [shortlisted, setShortlisted] = (0, import_react.useState)([]);
	const handleToggleShortlist = (name) => {
		setShortlisted((prev) => {
			if (prev.includes(name)) {
				toast.info(`${name} removed from shortlist`);
				return prev.filter((n) => n !== name);
			} else {
				toast.success(`${name} added to shortlist!`, { description: "This candidate has been flagged for recruiter review." });
				return [...prev, name];
			}
		});
	};
	const handleExportReport = (name) => {
		const profile = CANDIDATE_PROFILES.find((p) => p.name === name);
		if (!profile) {
			toast.error("Profile not found.");
			return;
		}
		toast.promise(new Promise((resolve) => {
			setTimeout(() => {
				const atsReasonsStr = profile.atsReasons.map((r) => `- ${r}`).join("\n");
				const cvbReasonsStr = profile.cvbReasons.map((r) => `- ${r}`).join("\n");
				const skillsMapStr = profile.skillsMap.map((s) => `- **${s.from}** ➔ **${s.to}**`).join("\n");
				const radarDataStr = profile.radarData.map((r) => `- **${r.subject}**: ${r.score}/100`).join("\n");
				const content = `# CVBlitz ATS Blindspot Discovery Report

Recruiter dossier showcasing lexical match gaps for **${profile.name}**
Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}

## 🔍 The Discovery
- **Candidate Name**: ${profile.name}
- **Target Role**: ${profile.role}
- **Traditional ATS Verdict**: 🔴 Filtered / Disqualified (Rank #${profile.atsRank})
- **CVBlitz Verdict**: 🟢 Surfaced / Elite (Rank #${profile.cvbRank})
- **Lexical Gap Score**: ${profile.keywordMatch}% keyword density vs ${profile.capabilityMatch}% true capability match

## 🔴 Why Traditional ATS Filtered This Profile
${atsReasonsStr}

## 🟢 Why CVBlitz Surfaced This Profile
${cvbReasonsStr}

## 💡 Transferable Skills Equivalent Mapping
${skillsMapStr}

## 🔬 Career Pattern Recognition Scores
${radarDataStr}

## 🏆 CVBlitz Discovery Verdict
${profile.hiddenTalentReport}

---
*Generated by CVBlitz — Stark v4 AI Talent Intelligence*
`;
				triggerFileDownload(`${profile.name.replace(/\s+/g, "_")}_ats_discovery_report.md`, content);
				resolve(true);
			}, 1200);
		}), {
			loading: `Generating ATS Blindspot dossier for ${name}...`,
			success: `ATS Discovery Report downloaded for ${name}!`,
			error: "Failed to export report."
		});
	};
	const handleCompareCandidate = (name) => {
		toast.success(`Staging ${name} for comparison against top rankers.`, { description: "Redirecting to compare dashboard..." });
		setTimeout(() => {
			navigate({ to: "/compare" });
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-dash-line {
          stroke-dasharray: 6, 4;
          animation: dash 1.5s linear infinite;
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-3.5 animate-pulse" }), " Core CVBlitz Philosophy"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-semibold tracking-tight",
								children: "ATS Blindspot Analyzer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground max-w-2xl",
								children: "Discover candidates traditional ATS systems would overlook — and understand exactly why CVBlitz surfaced them."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 bg-muted/40 p-1.5 rounded-xl border border-border/50 max-w-md",
							children: CANDIDATE_PROFILES.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedIdx(idx),
								className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${selectedIdx === idx ? "bg-background text-foreground shadow-sm border border-border/60" : "text-muted-foreground hover:text-foreground hover:bg-background/40"}`,
								children: p.name.split(" ")[0]
							}, p.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 relative overflow-hidden shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-4 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3" }), " Candidate Highlighted"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl font-bold",
											children: activeCandidate.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												activeCandidate.role,
												" at ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: activeCandidate.company
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 md:col-span-3 gap-4 border-l border-border/40 pl-0 md:pl-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10 text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] uppercase tracking-wider text-red-500/80 font-bold",
												children: "ATS Rank"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 font-display text-2xl font-bold text-red-500",
												children: ["#", activeCandidate.atsRank]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-green-500/5 rounded-xl border border-green-500/15 text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] uppercase tracking-wider text-green-500/80 font-bold",
												children: "CVBlitz Rank"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 font-display text-2xl font-bold text-green-600",
												children: ["#", activeCandidate.cvbRank]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-brand/5 rounded-xl border border-brand/10 text-center relative overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider text-brand font-bold",
													children: "Ranking Gap"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-1 font-display text-2xl font-bold text-gradient",
													children: ["+", activeCandidate.difference]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[8px] text-muted-foreground",
													children: "Positions Gained"
												})
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-4 border-t border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-[10px] text-muted-foreground mb-1.5 font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ATS FILTER (Rejected Zone)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-brand font-semibold",
											children: [
												"Hidden Talent Confidence: ",
												activeCandidate.confidence,
												"%"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CVBLITZ RECOMMEND (Top Candidates)" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-4 bg-muted/60 rounded-full overflow-hidden border border-border/40 p-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-0.5 left-0.5 bottom-0.5 bg-red-500/20 rounded-full flex items-center justify-center text-[8px] text-red-600 font-bold px-3 transition-all duration-500",
											style: { width: "35%" },
											children: "ATS Filtered"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-0.5 bottom-0.5 bg-gradient-to-r from-red-500/20 via-brand/40 to-green-500/30 transition-all duration-500",
											style: {
												left: "35%",
												width: "50%"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-0.5 right-0.5 bottom-0.5 bg-green-500/20 rounded-full flex items-center justify-center text-[8px] text-green-600 font-bold px-3 transition-all duration-500",
											style: { width: "15%" },
											children: "Surfaced"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-1/2 size-3.5 bg-brand rounded-full shadow border-2 border-background -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out",
											style: { left: "87%" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-brand animate-ping opacity-75" })
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-red-500/20 bg-red-500/[0.01] backdrop-blur-md p-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-red-500/10 pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9.5px] uppercase font-mono tracking-wider text-red-500 font-bold",
											children: "Traditional ATS Filter"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg font-bold text-foreground",
											children: "Parser Keyword Scan"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-red-500/10 px-3 py-1 font-mono text-xs text-red-500 border border-red-500/15 font-semibold",
										children: "Status: Rejected"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-red-500/[0.02] border border-red-500/5 rounded-xl space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-semibold text-red-500/90 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), " ATS Elimination Triggers"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5 text-xs",
										children: activeCandidate.atsReasons.map((reason, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-red-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: reason })]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground/80 leading-relaxed border-t border-red-500/5 pt-3",
									children: "Traditional ATS algorithms evaluate profile suitability based strictly on string frequency and exact lexicon mapping, failing to identify matching semantic experience."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-green-500/20 bg-green-500/[0.01] backdrop-blur-md p-6 space-y-4 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 bg-green-500/10 border-l border-b border-green-500/20 text-[9px] font-mono text-green-600 font-bold px-2 py-0.5 uppercase tracking-wider rounded-bl-lg",
									children: "Semantic Discovery"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-green-500/10 pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9.5px] uppercase font-mono tracking-wider text-green-600 font-bold",
											children: "CVBlitz Intelligence"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg font-bold text-foreground",
											children: "Capability Matching"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-green-500/10 px-3 py-1 font-mono text-xs text-green-600 border border-green-500/15 font-semibold",
										children: "Status: Strong Candidate"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-green-500/[0.02] border border-green-500/5 rounded-xl space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-semibold text-green-600/90 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-green-600 shrink-0" }), " Surfaced Credentials"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5 text-xs",
										children: activeCandidate.cvbReasons.map((reason, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-foreground/80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-green-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: reason })]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground/80 leading-relaxed border-t border-green-500/5 pt-3",
									children: "CVBlitz parses work descriptions contextually, evaluating career histories, production responsibilities, and system design complexity."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-3 items-stretch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-lg font-bold flex items-center gap-2 border-b border-border/40 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-5 text-brand" }), " What ATS Failed To Understand"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: activeCandidate.failedToUnderstand
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 p-4 bg-background/50 border border-border/50 rounded-xl flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-brand shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-muted-foreground leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Why this matters:" }), " Recruiters miss out on up to 74% of high-potential hires because keywords like \"Vector Search\" are often omitted in favor of descriptive project achievements like \"built customized cosine similarity index for medical text databases.\""]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold border-b border-border/40 pb-3",
									children: "Keyword vs Capability"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6 my-auto py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-xs font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Keyword Match (ATS Focus)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-red-500 font-mono",
													children: [activeCandidate.keywordMatch, "%"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-2.5 bg-muted rounded-full overflow-hidden border border-border/40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full bg-red-400 transition-all duration-700",
													style: { width: `${activeCandidate.keywordMatch}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] text-muted-foreground",
												children: "ATS Focus: Exact terminology match density"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-xs font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground",
													children: "Capability Match (CVBlitz Focus)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-brand font-mono",
													children: [activeCandidate.capabilityMatch, "%"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-2.5 bg-muted rounded-full overflow-hidden border border-border/40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full bg-gradient-to-r from-brand to-brand-glow transition-all duration-700",
													style: { width: `${activeCandidate.capabilityMatch}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] text-muted-foreground font-medium",
												children: "CVBlitz Focus: Demonstrated capabilities & trajectory"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border/40 pt-3 text-[10px] text-center text-muted-foreground",
									children: [
										"A massive ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-brand",
											children: [
												"+",
												activeCandidate.capabilityMatch - activeCandidate.keywordMatch,
												"% matching gap"
											]
										}),
										" surfaced."
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-lg font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5 text-brand" }), " Transferable Capability Mapping"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid grid-cols-11 items-center max-w-3xl mx-auto my-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-4 space-y-4 z-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-center font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-bold",
											children: "Candidate Experience"
										}), activeCandidate.skillsMap.map((skill, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
													className: "animated-dash-line"
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
													className: "animated-dash-line"
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
													className: "animated-dash-line"
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
													className: "animated-dash-line"
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
											children: "Equivalent Capability"
										}), activeCandidate.skillsMap.map((skill, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 bg-brand/5 border border-brand/20 rounded-xl text-center text-xs font-semibold text-foreground h-11 flex items-center justify-center shadow-sm",
											children: skill.to
										}, idx))]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center text-[10px] text-muted-foreground mt-4",
								children: "CVBlitz matches conceptual synonym structures to mapping profiles, uncovering skills traditional semantic filters skip."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-lg font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5 text-brand" }), " Career Pattern Recognition"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[260px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
										cx: "50%",
										cy: "50%",
										outerRadius: "80%",
										data: activeCandidate.radarData,
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
												name: activeCandidate.name,
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
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/40 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-lg font-bold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-5 text-green-600" }), " Similar To Successful Hires"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded bg-green-500/10 px-2 py-0.5 font-mono text-xs text-green-600 border border-green-500/15 font-semibold",
										children: [
											"Match: ",
											activeCandidate.similarityScore,
											"%"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2.5 text-xs",
									children: activeCandidate.similarityPatterns.map((pat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-green-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground/80",
											children: pat
										})]
									}, idx))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "text-xs font-semibold text-foreground flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-brand shrink-0" }), " Hidden Talent Report"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground leading-relaxed",
									children: activeCandidate.hiddenTalentReport
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "ATS Failure Categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Keyword Dependency"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Filters candidates strictly based on lexical match frequency instead of conceptual understanding."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Title Bias"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Fails to match equivalent job titles (e.g., matching \"Platform Craftsman\" to \"AI Software Engineer\")."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Title Mismatch"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Excludes candidates whose current job title lacks target keywords regardless of actual responsibilities."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Missing Buzzwords"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Instantly filters profiles lacking specific product names (e.g., \"Pinecone\" or \"LangChain\")."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Non-Linear Career"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Downranks candidates who transition from data engineering, research, or adjacent platforms."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Skills Ignored"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Fails to map transferable core competence such as custom indexing to database engineering."
										})]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "CVBlitz Capability Discovery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Production Engineering"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Validates scaling experience by parsing description context (e.g. throughput, uptime metrics)."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "System Design"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Identifies high architectural complexity by looking at stack interactions, pipeline logs, and integrations."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Technical Leadership"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Flags mentorship, code reviews, and project ownership regardless of formal management titles."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Learning Agility"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Analyzes candidate speed in acquiring new toolsets based on timeline transitions."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Growth Trajectory"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed font-medium",
											children: "Measures career velocity, responsibilities ownership, and company stages progression."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold text-foreground",
											children: "Ownership Mindset"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-relaxed",
											children: "Scans candidate text for expressions of end-to-end accountability and feature delivery."
										})]
									})
								]
							})]
						})]
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-brand animate-pulse" }), " CVBlitz Discovery Verdict"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold",
										children: "Traditional ATS would reject this candidate."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-green-600",
										children: "CVBlitz recommends immediate recruiter review."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl mx-auto p-4 bg-background/80 border border-border/60 rounded-xl text-xs text-muted-foreground leading-relaxed",
								children: [
									"\"",
									activeCandidate.verdictReason,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex flex-wrap justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: `/candidate/${activeCandidate.id}`,
										className: "inline-flex h-10 items-center gap-1.5 rounded-full bg-brand text-white hover:scale-[1.01] px-5 text-sm font-semibold transition-all cursor-pointer shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4 text-white" }), " View Candidate Report"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleToggleShortlist(activeCandidate.name),
										className: `inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition cursor-pointer ${shortlisted.includes(activeCandidate.name) ? "bg-green-600 text-white hover:bg-green-700" : "bg-foreground text-background hover:opacity-90"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }),
											" ",
											shortlisted.includes(activeCandidate.name) ? "Shortlisted" : "Shortlist Candidate"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleCompareCandidate(activeCandidate.name),
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-muted-foreground" }), " Compare Against Top Candidates"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleExportReport(activeCandidate.name),
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 text-muted-foreground" }), " Export Discovery Report"]
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
export { ATSBlindspotPage as component };
