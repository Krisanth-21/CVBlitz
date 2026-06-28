import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Activity, B as ChevronRight, J as Brain, L as Clock, O as FileText, P as Cpu, T as Info, U as Check, X as Award, c as Terminal, f as ShieldCheck, g as Scale, i as Users, j as Download, n as X, o as TriangleAlert, p as ShieldAlert, q as Briefcase, s as TrendingUp, u as Sparkles, w as Layers } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as Header } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
import { a as CartesianGrid, d as Cell, f as ResponsiveContainer, i as XAxis, o as Bar, p as Tooltip, r as YAxis, t as ComposedChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/methodology-YJPS97BE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MethodologyPage() {
	useNavigate();
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const handleDownloadReport = () => {
		toast.promise(new Promise((resolve) => {
			setTimeout(() => {
				triggerFileDownload("cvblitz_intelligence_architecture.md", `# CVBlitz Intelligence Architecture Report

Technical documentation of the CVBlitz candidate evaluation methodology.
Generated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}

## 🏗️ 4-Stage Candidate Processing Pipeline

### 1. Job Description Ingestion
Pasting the target job description (JD) launches the pipeline. Gemini extracts requirements, tech stacks, experience levels, tier-1 Indian locations, and notice period constraints dynamically.

### 2. Resume & Feature Extraction
Ingested candidates.jsonl dataset is parsed locally. Skills, roles, companies, education records, and Redrob behavioral signals are mapped into candidate feature vectors.

### 3. Honeypot & Fraud Filter
Detects timeline overlapping full-time positions and pre-release tool experience claims (e.g. Dmitry Vance's 12-year PyTorch claim). Any flagged profile has score capped to 0.

### 4. Advanced Weighted Scoring
Aggregates matching scores across five core parameters using custom recruiter weights:
- **Technical Skills Fit**: 40% base weight
- **Role Relevance & Seniority**: 25% base weight
- **Behavioral Engagement**: 15% base weight
- **Growth Potential**: 10% base weight
- **Profile Authenticity**: 10% base weight

---
*Document Version: STARK v4.2.0*
*Platform: CVBlitz AI Command Center*
`);
				resolve(true);
			}, 1200);
		}), {
			loading: "Generating Methodology & Architecture PDF...",
			success: "CVBlitz Architecture Report downloaded successfully!",
			error: "Failed to export report."
		});
	};
	const pipelineSteps = [
		{
			title: "Job Description Ingestion",
			desc: "Pasting the target job description (JD) launches the pipeline."
		},
		{
			title: "Role Intelligence Extraction",
			desc: "Extracts explicit and implicit (inferred) success pattern skills."
		},
		{
			title: "Candidate Parsing",
			desc: "Streams candidates line-by-line using high-performance JSONL parsing."
		},
		{
			title: "Behavioral Signal Analysis",
			desc: "Weights 23 active signals across availability and reliability."
		},
		{
			title: "Honeypot Detection",
			desc: "Validates timelines, tool release dates, and filters anomalies."
		},
		{
			title: "Capability Matching",
			desc: "Maps transferable adjacent capabilities (e.g. Recommendations ➔ Retrieval)."
		},
		{
			title: "Scoring Engine",
			desc: "Calculates scores based on the 35/25/20/10/10 weighted formula."
		},
		{
			title: "Top 100 Candidate Ranking",
			desc: "Sorts candidates and breaks ties alphabetically by ID."
		},
		{
			title: "Submission CSV Generation",
			desc: "Generates formatted output matching Redrob specifications."
		}
	];
	const formulaData = [
		{
			name: "Technical Capability",
			percentage: 35,
			color: "#6366f1",
			desc: "Core skills matching, proficiency levels, and skill duration scoring."
		},
		{
			name: "Role Relevance",
			percentage: 25,
			color: "#a855f7",
			desc: "Experience target alignment and title seniority classification."
		},
		{
			name: "Behavioral Readiness",
			percentage: 20,
			color: "#06b6d4",
			desc: "Recruiter response rate, GitHub code score, and notice period length."
		},
		{
			name: "Career Growth",
			percentage: 10,
			color: "#10b981",
			desc: "Tenure stability (averaging months per job) and promotional trajectory."
		},
		{
			name: "Authenticity",
			percentage: 10,
			color: "#f59e0b",
			desc: "Timeline consistency and tool anachronism verification checks."
		}
	];
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
				className: "mx-auto max-w-7xl px-6 pt-8 space-y-8 animate-in fade-in duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " CVBlitz Defense & Verification Dossier"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-semibold tracking-tight",
								children: "CVBlitz Intelligence Architecture"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground max-w-2xl",
								children: "Understand exactly how CVBlitz evaluates candidates, filters timeline inconsistencies, and surfaces matching capabilities beyond static keyword parsing."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleDownloadReport,
							className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground text-background hover:opacity-90 px-5 text-xs font-semibold transition cursor-pointer shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download Architecture PDF"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-6",
						children: [
							{
								value: "100,000+",
								label: "Candidates Evaluated",
								icon: Users,
								color: "text-brand"
							},
							{
								value: "11 Seconds",
								label: "Ranking Runtime",
								icon: Clock,
								color: "text-cyan-600"
							},
							{
								value: "20,884",
								label: "Suspicious Profiles Filtered",
								icon: ShieldAlert,
								color: "text-red-500"
							},
							{
								value: "100",
								label: "Final Ranked Candidates",
								icon: Award,
								color: "text-amber-500"
							},
							{
								value: "95%+",
								label: "Recruiter Confidence",
								icon: Brain,
								color: "text-purple-500"
							},
							{
								value: "CPU Only",
								label: "No External APIs",
								icon: Cpu,
								color: "text-green-600"
							}
						].map((stat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-4 flex flex-col justify-between min-h-[110px] hover:border-brand/40 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] uppercase font-mono font-bold tracking-wider text-muted-foreground",
									children: ["Stat ", idx + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: `size-4 ${stat.color}` })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-bold text-gradient leading-none",
									children: stat.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9.5px] text-muted-foreground font-semibold leading-tight",
									children: stat.label
								})]
							})]
						}, idx))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-base font-bold flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4.5 text-brand" }), " CVBlitz Ranking Pipeline"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono text-muted-foreground uppercase",
									children: "Stage 3 sandboxed execution flow"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative grid grid-cols-1 md:grid-cols-9 gap-4 items-center",
								children: pipelineSteps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											onClick: () => setActiveStep(idx),
											className: `relative z-10 grid size-10 place-items-center rounded-full border transition-all cursor-pointer ${activeStep === idx ? "bg-brand text-white border-brand scale-110 shadow-lg shadow-brand/20 font-bold" : "bg-background border-border hover:border-brand/50 text-muted-foreground font-semibold"}`,
											children: idx + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-2 text-center text-[10px] font-bold text-foreground leading-snug truncate max-w-[100px]",
											children: step.title
										}),
										idx < 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "hidden md:block absolute left-[calc(50%+20px)] top-[20px] w-[calc(100%-25px)] h-0.5 z-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-full h-1",
												viewBox: "0 0 100 4",
												fill: "none",
												preserveAspectRatio: "none",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M 0,2 L 100,2",
													stroke: activeStep >= idx ? "#6366f1" : "#cbd5e1",
													strokeWidth: "1.5",
													className: "animated-flow-line"
												})
											})
										})
									]
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-muted/40 border border-border/50 rounded-xl flex gap-3 items-start animate-in slide-in-from-bottom-2 duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-8 place-items-center rounded-lg bg-brand/10 border border-brand/20 text-brand shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-bold text-foreground",
									children: [
										"Pipeline Stage ",
										activeStep + 1,
										": ",
										pipelineSteps[activeStep].title
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5 leading-relaxed",
									children: pipelineSteps[activeStep].desc
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-red-600 text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }), " Traditional Recruitment Bottleneck"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold",
									children: "The Keyword Parsing Fallacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: "Traditional recruiters review hundreds of profiles and often miss exceptional candidates because standard ATS systems evaluate files based on literal keyword density, ignoring context, transferable skills, behavioral signals, or genuine role fit."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border/40 pt-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-muted-foreground uppercase font-mono",
										children: "Traditional ATS Limitations:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 text-xs",
										children: [
											"Keyword Matching: Requires exact letter matches (rejects synonyms).",
											"Resume Parsing: Fails to parse custom formats, missing critical experience details.",
											"Static Filters: Hard-cuts candidates based on years of experience bands.",
											"Zero Authenticity Audits: Overlooks fabricated resumes and timeline frauds."
										].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2 items-start text-muted-foreground font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500 mt-0.5",
												children: "•"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, idx))
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-brand/50 bg-brand/[0.01] backdrop-blur-md p-6 space-y-4 shadow-sm relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-green-600 text-xs font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), " CVBlitz Intelligent Retrieval"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold",
									children: "Semantic Capability Recognition"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: "CVBlitz extracts role context, maps transferable competencies using semantic alignments, filters fake timeline profiles, and factors in behavioral signals. It identifies candidates that keyword scanners overlook and validates them."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-brand/10 pt-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-brand uppercase font-mono",
										children: "CVBlitz Flagship Competencies:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 text-xs",
										children: [
											"Capability Equivalence: Recognizes adjacent search expertise (FAISS ➔ Retrieval).",
											"Timeline Auditing: Identifies overlap frauds and pre-tool release date anomalies.",
											"Behavioral Readiness: Integrates 23 active engagement signals (response, activity).",
											"Explainable AI: Outputs clean, justified reasoning for every single score."
										].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2 items-start text-foreground font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-brand mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, idx))
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-base font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4.5 text-red-500" }), " Why Traditional ATS Systems Fail"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-3",
							children: [
								{
									title: "Keyword Dependency",
									desc: "Filters out elite backend engineers who build search pipelines simply because their resumes lack exact tags like 'RAG' or 'Pinecone'.",
									icon: Terminal
								},
								{
									title: "Job Title Bias",
									desc: "Penalizes creative non-standard job titles (like 'Platform Craftsman' or 'applied modeler') that describe massive technical ownership.",
									icon: Briefcase
								},
								{
									title: "Transferable Skills Ignored",
									desc: "Fails to map adjacent domain expertise. Building high-scale recommendations maps directly to retrieval engines, but is rated 0.",
									icon: Layers
								},
								{
									title: "Behavioral Signals Ignored",
									desc: "Overlooks whether a candidate has a 95% recruiter response rate or 100 github commits, ranking active candidates behind stale profiles.",
									icon: Activity
								},
								{
									title: "Profile Fraud Undetected",
									desc: "Allows keyword-stuffers claiming 12 years of PyTorch (released 2016) or overlapping full-time roles to rank top of the pool.",
									icon: TriangleAlert
								},
								{
									title: "Context Loss",
									desc: "Fails to read descriptions to differentiate between 'used LangChain for a tutorial' and 'operated custom memory indexing systems'.",
									icon: Info
								}
							].map((card, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 bg-card/45 border border-border/60 rounded-xl space-y-2 hover:border-red-300 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-7 place-items-center rounded-md bg-red-500/5 text-red-500 border border-red-500/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-foreground",
										children: card.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground leading-normal font-medium",
									children: card.desc
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4.5 text-brand" }), " Understanding What The Role Actually Requires"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-[10.5px] uppercase font-mono font-bold tracking-wider text-muted-foreground mb-2",
										children: "Explicit Requirements"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 text-xs",
										children: [
											"Python",
											"Retrieval Systems",
											"Embeddings",
											"Vector Databases"
										].map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 font-medium text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-brand font-bold text-sm",
												children: "✓"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
										}, idx))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-[10.5px] uppercase font-mono font-bold tracking-wider text-muted-foreground mb-2",
										children: "Implicit Requirements"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 text-xs",
										children: [
											"Ownership",
											"Product Thinking",
											"Execution Speed",
											"Learning Agility"
										].map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 font-semibold text-brand",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-brand font-bold text-sm",
												children: "✓"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
										}, idx))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 bg-muted/20 border border-border/50 rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs font-bold text-foreground flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-3.5 text-brand" }), " AI-Generated Role Understanding"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground mt-1 leading-relaxed",
											children: "\"CVBlitz prioritizes candidates who demonstrate ownership of high-throughput backend systems (Elasticsearch/Lucene) and a product-focused approach. High-level ML math is secondary to shipping and benchmarking real search pipelines.\""
										})]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4.5 text-brand" }), " 23 Behavioral Signals"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 grid-cols-1 md:grid-cols-2",
									children: [
										{
											title: "Recruiter Engagement",
											items: [
												"recruiter_response_rate",
												"avg_response_time_hours",
												"saved_by_recruiters_30d"
											]
										},
										{
											title: "Candidate Availability",
											items: [
												"open_to_work_flag",
												"last_active_date",
												"notice_period_days"
											]
										},
										{
											title: "Interview Reliability",
											items: ["interview_completion_rate", "offer_acceptance_rate"]
										},
										{
											title: "Profile Trust",
											items: [
												"verified_email",
												"verified_phone",
												"linkedin_connected"
											]
										},
										{
											title: "Professional Activity",
											items: [
												"github_activity_score",
												"profile_views_received_30d",
												"search_appearance_30d"
											]
										}
									].map((category, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1 bg-muted/20 p-2.5 rounded-lg border border-border/45",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-[11px] font-bold text-foreground",
											children: category.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-0.5 text-[9.5px] text-muted-foreground font-mono",
											children: category.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-brand-glow font-bold",
													children: "•"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
											}, i))
										})]
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground leading-normal p-2.5 bg-brand/5 border border-brand/10 rounded-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-brand",
										children: "Ranking Influence:"
									}), " Behavioral signals serve as confidence modifiers. High-response rates and active profiles boost candidate scoring up to 20%, whereas stale or unresponsive signals decrease target confidence."]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4.5 text-red-500 animate-pulse" }), " Honeypot & Fraud Detection"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-5 mb-6",
								children: [
									"Timeline Consistency Check",
									"Technology Release Validation",
									"Skill Inflation Detection",
									"Employment Overlap Detection",
									"Career Progression Validation"
								].map((moduleName, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-3 bg-muted/30 border border-border/50 rounded-lg text-center text-xs font-semibold flex items-center justify-center min-h-[50px] hover:border-brand/35 transition",
									children: moduleName
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-muted/20 border border-border/50 rounded-xl space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-bold text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-red-500" }), " Example Rejection: Technology Release"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-[10px] font-mono leading-relaxed text-red-700",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold text-red-800",
												children: "Candidate claims:"
											}),
											"8 years experience using PyTorch",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold mt-1.5 text-red-800",
												children: "Timeline indicates:"
											}),
											"PyTorch usage before public release (Released Sep 2016)",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold mt-1.5 text-red-800",
												children: "Result:"
											}),
											"Flagged & Disqualified"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-muted/20 border border-border/50 rounded-xl space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-bold text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-red-500" }), " Another Example: Company Tenure Fraud"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-[10px] font-mono leading-relaxed text-red-700",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold text-red-800",
												children: "Company age:"
											}),
											"3 years",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold mt-1.5 text-red-800",
												children: "Claimed tenure:"
											}),
											"8 years at this company",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold mt-1.5 text-red-800",
												children: "Result:"
											}),
											"Flagged & Disqualified"
										]
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4 md:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4.5 text-brand" }), " Candidate Scoring Formula"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: "CVBlitz scores candidates out of 1.0 (100%) using five distinct weighting matrices:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: formulaData.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-xs font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: { color: item.color },
												className: "font-mono",
												children: [item.percentage, "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9.5px] text-muted-foreground leading-normal",
											children: item.desc
										})]
									}, idx))
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 md:col-span-2 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4.5 text-brand" }), " Formula Weight Allocation Chart"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[280px] w-full pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
										layout: "vertical",
										data: formulaData,
										margin: {
											top: 10,
											right: 20,
											left: 40,
											bottom: 10
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
												stroke: "#f1f5f9",
												strokeDasharray: "3 3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												type: "number",
												domain: [0, 40],
												unit: "%",
												tick: {
													fill: "#64748b",
													fontSize: 10
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
												dataKey: "name",
												type: "category",
												tick: {
													fill: "#334155",
													fontSize: 10,
													fontWeight: 600
												},
												width: 120
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
												backgroundColor: "rgba(255, 255, 255, 0.95)",
												border: "1px solid #cbd5e1",
												borderRadius: "8px",
												fontSize: "11px"
											} }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
												dataKey: "percentage",
												name: "Weight",
												radius: [
													0,
													4,
													4,
													0
												],
												barSize: 16,
												children: formulaData.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, `cell-${index}`))
											})
										]
									})
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4.5 text-brand" }), " Why Candidates Rank Higher"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: "Rank #1 Candidate Profile"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-brand font-mono",
											children: "Total Score Weight: 84.4%"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1.5 text-xs font-medium",
										children: [
											"Strong Retrieval Systems Experience (+35% Contribution)",
											"High Recruiter Response Rate (+20% Contribution)",
											"Product Company Background (+15% Contribution)",
											"Verified Profile (+10% Contribution)",
											"Low Hiring Friction (+4% Contribution)"
										].map((bullet, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2 items-start text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-brand mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
										}, idx))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-[10.5px] uppercase font-mono font-bold tracking-wider text-muted-foreground",
										children: "Scoring contributions detail:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1.5",
										children: [
											{
												label: "Technical Fit",
												score: "89/100",
												bar: "w-[89%]"
											},
											{
												label: "Role Seniority",
												score: "100/100",
												bar: "w-[100%]"
											},
											{
												label: "Behavioral Readiness",
												score: "74/100",
												bar: "w-[74%]"
											},
											{
												label: "Stability & Growth",
												score: "85/100",
												bar: "w-[85%]"
											},
											{
												label: "Profile Authenticity Check",
												score: "Verified (Pass)",
												bar: "w-[100%] bg-green-500"
											}
										].map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-4 text-xs font-medium",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground w-1/3 truncate",
													children: row.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1 h-2 bg-muted rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full bg-brand rounded-full ${row.bar}` })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-foreground font-bold shrink-0",
													children: row.score
												})
											]
										}, idx))
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4.5 text-brand" }), " Built For Production Scale"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase font-mono text-muted-foreground font-bold",
												children: "Dataset Size"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold font-display text-foreground",
												children: "487 MB"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase font-mono text-muted-foreground font-bold",
												children: "Candidates Processed"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold font-display text-foreground",
												children: "100,000"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase font-mono text-muted-foreground font-bold",
												children: "Runtime"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold font-display text-brand",
												children: "11 Seconds"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase font-mono text-muted-foreground font-bold",
												children: "Hardware"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold font-display text-foreground",
												children: "CPU Only"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase font-mono text-muted-foreground font-bold",
												children: "External APIs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold font-display text-foreground",
												children: "None"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] uppercase font-mono text-muted-foreground font-bold",
												children: "Memory Efficient"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold font-display text-green-600",
												children: "Yes"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-brand/5 border border-brand/10 rounded-xl text-[10px] text-muted-foreground leading-relaxed font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground block mb-0.5",
											children: "Vitals verification:"
										}),
										"- Memory: <15 MB total footprint (uses readline streams)",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"- Host: Sandboxed reproduction compatible",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"- APIs called: None (runs completely offline)"
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/40 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-base font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4.5 text-brand" }), " Redrob Submission Generation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono text-muted-foreground uppercase",
								children: "Organizers Specification Validator Flow"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col md:flex-row items-center justify-between gap-3 text-center",
							children: [
								{
									label: "100,000 Candidates",
									desc: "Streaming DB"
								},
								{
									label: "11 Seconds Processing",
									desc: "Pipeline Parsing"
								},
								{
									label: "20,884 Suspicious Filtered",
									desc: "Honeypot Checks"
								},
								{
									label: "Top 100 Ranked",
									desc: "Score Sorting"
								},
								{
									label: "Reasoning Generated",
									desc: "Natural Explanations"
								},
								{
									label: "Submission CSV Created",
									desc: "UTF-8 Export"
								},
								{
									label: "Validator Passed",
									desc: "Structure Validated",
									success: true
								}
							].map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col md:flex-row items-center justify-center gap-3 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `p-3 rounded-xl border text-xs font-semibold w-full md:w-auto min-w-[140px] shadow-sm ${step.success ? "bg-green-500/10 border-green-500 text-green-700" : "bg-card border-border hover:border-brand/40 text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										children: step.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[9px] text-muted-foreground font-normal",
										children: step.desc
									})]
								}), idx < 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-muted-foreground rotate-90 md:rotate-0" })]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-brand bg-brand/[0.02] p-6 text-center space-y-4 max-w-3xl mx-auto shadow-sm relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] uppercase font-mono text-brand font-bold tracking-widest flex items-center justify-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-brand animate-pulse" }), " CVBlitz Methodology Verdict"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold",
									children: "\"CVBlitz Thinks Like A Recruiter, Not A Keyword Filter.\""
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-w-xl mx-auto p-4 bg-background/80 border border-border/60 rounded-xl text-xs text-muted-foreground leading-relaxed",
								children: "CVBlitz combines role intelligence, candidate understanding, behavioral hiring signals, profile authenticity validation, and explainable ranking logic to identify candidates that traditional ATS systems frequently miss."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex flex-wrap justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/results",
										className: "inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-glow text-white px-5 text-sm font-medium hover:scale-[1.02] transition cursor-pointer glow-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-white" }), " View Rankings"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/analyze",
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-4 text-muted-foreground" }), " Analyze Candidates"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/compare",
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4 text-muted-foreground" }), " Compare Candidates"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/ats-blindspots",
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-brand animate-pulse" }), " View ATS Blindspots"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleDownloadReport,
										className: "inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 text-muted-foreground" }), " Download Methodology Report"]
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
export { MethodologyPage as component };
