import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Activity, E as GraduationCap, G as Calendar, J as Brain, K as Building, S as MapPin, U as Check, a as UserCheck, f as ShieldCheck, h as Search, i as Users, j as Download, n as X, o as TriangleAlert, w as Layers } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as SAMPLE_CANDIDATES, r as Header } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-DnGPwjlO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResultsPage() {
	const navigate = useNavigate();
	const [results, setResults] = (0, import_react.useState)([]);
	const [jd, setJd] = (0, import_react.useState)("");
	const [selectedCandidate, setSelectedCandidate] = (0, import_react.useState)(null);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [shortlistedIds, setShortlistedIds] = (0, import_react.useState)([]);
	const [filterHoneypots, setFilterHoneypots] = (0, import_react.useState)(false);
	const [selectedCompareIds, setSelectedCompareIds] = (0, import_react.useState)([]);
	const handleToggleCompare = (id) => {
		setSelectedCompareIds((prev) => {
			if (prev.includes(id)) return prev.filter((x) => x !== id);
			else {
				if (prev.length >= 4) {
					toast.warning("Maximum of 4 candidates can be compared side-by-side.");
					return prev;
				}
				return [...prev, id];
			}
		});
	};
	(0, import_react.useEffect)(() => {
		const storedResults = localStorage.getItem("cvblitz_results");
		const storedJd = localStorage.getItem("cvblitz_jd");
		if (storedResults && storedJd) {
			const parsedResults = JSON.parse(storedResults);
			setResults(parsedResults);
			setJd(storedJd);
			if (parsedResults.length > 0) setSelectedCandidate(parsedResults[0]);
		} else {
			const defaultJd = "Senior AI Engineer with 5+ years of experience in Python, RAG pipelines, Vector Databases, and LLM orchestration.";
			const defaultResults = SAMPLE_CANDIDATES.map((cand) => {
				let score = 75;
				let confidence = 90;
				let strengths = [];
				let weaknesses = [];
				let isHoneypot = false;
				let honeypotReason = "";
				let verdict = "";
				let tags = [];
				if (cand.id === "cand_1") {
					score = 98.4;
					confidence = 96;
					strengths = [
						"Production scale retrieval systems",
						"Deep Vector Database expertise",
						"Strong Python engineering core",
						"Exceptional recruiter engagement"
					];
					weaknesses = ["Mainly experienced in hybrid/SF locations"];
					verdict = "Exceptional fit. Deep understanding of search systems and embeddings matched with an active, highly responsive profile.";
					tags = [
						"Top Match",
						"Hidden Gem",
						"Strong Behavioral Signal"
					];
				} else if (cand.id === "cand_2") {
					score = 95.1;
					confidence = 93;
					strengths = [
						"MLOps infrastructure at scale",
						"Ray, Kubernetes & CUDA core competency",
						"Solid track record of engineering leadership"
					];
					weaknesses = ["Less focused on raw retrieval systems/LLM application layers"];
					verdict = "Excellent candidate for platform and infrastructure. Possesses critical MLOps scaling skills but less NLP specific.";
					tags = ["Top Match", "Infrastructure Lead"];
				} else if (cand.id === "cand_3") {
					score = 93.7;
					confidence = 94;
					strengths = [
						"Ph.D. NLP research background",
						"Ranking evaluation systems",
						"High-quality academic citations",
						"Strong GitHub activity"
					];
					weaknesses = ["Fewer years of non-academic industrial production experience"];
					verdict = "Top tier analytical and research depth in NLP and semantic search. Highly responsive and engaged.";
					tags = ["Academic Excellence", "Strong Behavioral Signal"];
				} else if (cand.id === "cand_4") {
					score = 92.2;
					confidence = 90;
					strengths = [
						"Staff-level engineering experience",
						"LLM evaluation and validation frameworks",
						"Fully remote work capability"
					];
					weaknesses = ["Slightly lower Github activity recently"];
					verdict = "Experienced staff engineer with solid LLM evaluation background. Offers strategic depth and remote maturity.";
					tags = ["Staff Level", "LLM Expert"];
				} else if (cand.id === "cand_5") {
					score = 62;
					confidence = 85;
					strengths = [
						"Active learner",
						"Good foundational Python skills",
						"Eager to learn ML frameworks"
					];
					weaknesses = ["Lacks production engineering experience", "Minimal expertise in vector DBs or RAG pipelines"];
					verdict = "Too junior for a senior role. Good basic coding foundations but lacks scale and AI-specific production experience.";
					tags = ["Junior Profile"];
				} else if (cand.id === "cand_6") {
					score = 42.5;
					confidence = 95;
					strengths = ["High keywords matching (PyTorch, Vector DBs, AI)"];
					weaknesses = [
						"Severe timeline inconsistencies",
						"Simultaneous full-time employment roles",
						"Impossible claim of 12 years of PyTorch"
					];
					isHoneypot = true;
					honeypotReason = "Claimed 12 years of PyTorch experience (released late 2016), overlapping full-time director/architect roles from 2021 to 2024.";
					verdict = "WARNING: Flagged as Honeypot. Candidate has overlapping full-time employments and claims impossible tool timelines.";
					tags = ["Honeypot Flagged", "Authenticity Warning"];
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
			setResults(defaultResults);
			setJd(defaultJd);
			setSelectedCandidate(defaultResults[0]);
		}
	}, []);
	const handleShortlist = (id, name) => {
		setShortlistedIds((prev) => {
			if (prev.includes(id)) {
				toast.info(`${name} removed from shortlist`);
				return prev.filter((item) => item !== id);
			} else {
				toast.success(`${name} added to shortlist!`, { description: "Candidate is now tagged for recruitment screening." });
				return [...prev, id];
			}
		});
	};
	const handleScheduleInterview = (name) => {
		toast.success(`Interview invitation prepared for ${name}`, { description: "Opening scheduler modal..." });
	};
	const handleDownloadDossier = (name) => {
		const candidate = results.find((c) => c.name === name);
		if (!candidate) {
			toast.error("Candidate not found.");
			return;
		}
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
		toast.success(`Dossier for ${name} downloaded successfully!`, { description: "Recruiter-grade summary saved." });
	};
	const filteredCandidates = results.filter((c) => {
		const nameLower = (c.name || c.details?.name || "").toLowerCase();
		const roleLower = (c.role || c.details?.role || "").toLowerCase();
		const queryLower = searchQuery.toLowerCase();
		const matchesSearch = nameLower.includes(queryLower) || roleLower.includes(queryLower) || (c.details?.skills || []).some((s) => s && typeof s === "string" && s.toLowerCase().includes(queryLower));
		if (filterHoneypots) return matchesSearch && !c.isHoneypot;
		return matchesSearch;
	});
	const honeypotsCount = results.filter((c) => c.isHoneypot).length;
	const bestMatchScore = results.length > 0 ? results[0].score : 0;
	const verifiedCount = results.filter((c) => !c.isHoneypot).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.15),transparent)] blur-3xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				showBack: true,
				backTo: "/analyze"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-3.5" }), " Intelligence Graph Compiled"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-semibold tracking-tight",
								children: "Talent Intelligence Rankings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1.5 text-xs text-muted-foreground max-w-2xl truncate",
								children: ["Job Description: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-foreground/80",
									children: jd
								})]
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-card/40 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
									children: "Best Match Score"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-baseline gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-2xl font-bold text-gradient tabular-nums",
										children: [bestMatchScore, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-green-500 font-mono font-medium",
										children: "Top Match"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-card/40 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
									children: "Candidates Analyzed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-2xl font-bold tabular-nums",
									children: "100,000"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-card/40 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
									children: "Honeypots Flagged"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-baseline gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-display text-2xl font-bold tabular-nums ${honeypotsCount > 0 ? "text-destructive" : ""}`,
										children: honeypotsCount
									}), honeypotsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded bg-destructive/10 px-1 py-0.5 font-mono text-[9px] text-destructive flex items-center gap-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-2.5" }), " Warning"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-card/40 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
									children: "Verified Candidates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-display text-2xl font-bold tabular-nums",
									children: [
										verifiedCount,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-medium text-muted-foreground",
											children: ["/ ", results.length]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-6 lg:col-span-7 space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											placeholder: "Search by name, role or skill...",
											className: "w-full h-9 rounded-lg border border-border/60 bg-background/55 pl-9 pr-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand/40"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-2 cursor-pointer text-xs text-muted-foreground hover:text-foreground transition select-none",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: filterHoneypots,
											onChange: () => setFilterHoneypots(!filterHoneypots),
											className: "rounded border-border text-brand focus:ring-brand size-3.5"
										}), "Hide Honeypots"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2.5 max-h-[580px] overflow-y-auto pr-1",
									children: filteredCandidates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center py-12 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-8 mx-auto mb-2 text-muted-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm",
											children: "No candidates match your filters."
										})]
									}) : filteredCandidates.map((cand, index) => {
										const isSelected = selectedCandidate?.id === cand.id;
										const isShortlisted = shortlistedIds.includes(cand.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											onClick: () => setSelectedCandidate(cand),
											className: `grid grid-cols-12 items-center gap-2 rounded-xl border p-3 cursor-pointer transition-all duration-200 ${isSelected ? "border-brand/50 bg-brand/5 shadow-sm" : "border-border/60 bg-background/30 hover:border-brand/20 hover:bg-background/70"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "col-span-1 flex justify-center",
													onClick: (e) => e.stopPropagation(),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: selectedCompareIds.includes(cand.id),
														onChange: () => handleToggleCompare(cand.id),
														className: "rounded border-border text-brand focus:ring-brand size-3.5 cursor-pointer accent-brand",
														title: "Select for comparison"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "col-span-1.5 flex justify-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `grid size-7.5 place-items-center rounded-lg font-mono text-xs font-semibold ${cand.isHoneypot ? "bg-destructive/10 text-destructive border border-destructive/20" : isSelected ? "bg-gradient-to-br from-brand to-brand-glow text-white" : "bg-card border border-border/70 text-muted-foreground"}`,
														children: cand.isHoneypot ? "!" : index + 1
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "col-span-5.5 sm:col-span-6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-sm font-semibold leading-tight",
																children: cand.name
															}), isShortlisted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-brand/10 text-[9px] text-brand font-mono font-medium px-1.5 py-0.2",
																children: "Shortlisted"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-[11px] text-muted-foreground truncate",
															children: [
																cand.role,
																" · ",
																cand.details?.recentCompany || ""
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex flex-wrap gap-1 mt-1.5",
															children: cand.tags.slice(0, 2).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `rounded px-1.5 py-0.5 text-[9px] font-mono font-medium ${cand.isHoneypot ? "bg-destructive/10 text-destructive border border-destructive/10" : tag.includes("Top") || tag.includes("Gem") ? "bg-brand/10 text-brand border border-brand/10" : "bg-muted text-muted-foreground border border-border/80"}`,
																children: tag
															}, tag))
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "col-span-4 sm:col-span-3.5 flex flex-col items-end gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-baseline gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-xs text-muted-foreground",
																children: "match"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: `font-display text-sm font-bold tabular-nums ${cand.isHoneypot ? "text-destructive" : ""}`,
																children: [cand.score.toFixed(1), "%"]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "w-20 h-1 bg-muted rounded-full overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: `h-full rounded-full ${cand.isHoneypot ? "bg-destructive" : "bg-gradient-to-r from-brand to-brand-glow"}`,
																style: { width: `${cand.score}%` }
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-mono text-[9px] text-muted-foreground/80 tabular-nums",
															children: [
																"conf ",
																cand.confidence,
																"%"
															]
														})
													]
												})
											]
										}, cand.id);
									})
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-6 lg:col-span-5",
							children: selectedCandidate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between border-b border-border/40 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												className: "font-display text-xl font-bold flex items-center gap-1.5",
												children: [selectedCandidate.name, shortlistedIds.includes(selectedCandidate.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4 text-brand" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground mt-0.5",
												children: selectedCandidate.role
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 text-[11px] text-muted-foreground mt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
													" ",
													selectedCandidate.details?.location || ""
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `font-display text-3xl font-bold text-gradient tabular-nums ${selectedCandidate.isHoneypot ? "text-destructive" : ""}`,
												children: selectedCandidate.isHoneypot ? "Honeypot" : `${selectedCandidate.score}%`
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5",
												children: "Match Score"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1",
										children: selectedCandidate.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded px-2 py-0.5 text-[10px] font-mono font-medium ${selectedCandidate.isHoneypot ? "bg-destructive/10 text-destructive border border-destructive/20" : "bg-brand/10 text-brand border border-brand/20"}`,
											children: tag
										}, tag))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-brand/25 bg-brand/5 p-4 relative overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-3 right-3 text-brand/25",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-10" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] uppercase tracking-wider text-brand font-bold flex items-center gap-1 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-3.5" }), " AI Intelligence Verdict"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground leading-relaxed font-sans italic",
												children: [
													"\"",
													selectedCandidate.verdict,
													"\""
												]
											})
										]
									}),
									selectedCandidate.isHoneypot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-destructive/35 bg-destructive/5 p-4 flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-8 place-items-center rounded-lg bg-destructive/10 text-destructive border border-destructive/20 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold text-destructive",
											children: "Profile Fraud Flagged"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mt-1 leading-relaxed",
											children: selectedCandidate.honeypotReason
										})] })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-green-500/20 bg-green-500/5 p-4 flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-8 place-items-center rounded-lg bg-green-500/10 text-green-600 border border-green-500/20 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold text-green-600",
											children: "Profile Authenticity Verified"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mt-0.5 leading-relaxed font-mono",
											children: "No overlapping jobs or timeline discrepancies detected. Responsive profile."
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-green-500" }), " Strengths"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1.5",
												children: selectedCandidate.strengths.map((str, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-green-500 mt-0.5",
														children: "•"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: str })]
												}, idx))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5 text-muted-foreground" }), " Gaps & Weaknesses"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1.5",
												children: selectedCandidate.weaknesses.map((weak, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground/80 mt-0.5",
														children: "•"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: weak })]
												}, idx))
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2 border-t border-border/40 pt-4 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] uppercase tracking-wider text-muted-foreground",
												children: "Recent Company"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: selectedCandidate.details?.recentCompany || ""
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 p-2 rounded-lg bg-muted/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[9px] uppercase tracking-wider text-muted-foreground",
												children: "Education"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold truncate max-w-[140px]",
												children: selectedCandidate.details?.education || ""
											})] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3.5 border-t border-border/40 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3.5 text-brand" }), " Behavioral Signals"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2.5",
											children: [
												{
													label: "Recruiter Response Rate",
													value: selectedCandidate.details?.behavioralSignals?.recruiterResponseRate || 0
												},
												{
													label: "GitHub Activity (90d)",
													value: selectedCandidate.details?.behavioralSignals?.githubActivity90d || 0
												},
												{
													label: "Interview Completion Rate",
													value: selectedCandidate.details?.behavioralSignals?.interviewCompletionRate || 0
												}
											].map((sig) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: sig.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono font-semibold tabular-nums",
														children: [sig.value, "%"]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-1 w-full bg-muted rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-gradient-to-r from-brand to-brand-glow rounded-full",
														style: { width: `${sig.value}%` }
													})
												})]
											}, sig.label))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 border-t border-border/40 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5 text-muted-foreground" }), " Career Timeline"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative border-l border-border/80 pl-4 ml-2.5 space-y-4",
											children: (selectedCandidate.details?.timeline || []).map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[20.5px] top-1.5 size-2 rounded-full border border-border bg-card" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-semibold leading-tight",
														children: item.role
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[10px] text-muted-foreground font-medium mt-0.5",
														children: [
															item.company,
															" · ",
															item.period
														]
													})
												]
											}, idx))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-border/40 pt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: `/candidate/${selectedCandidate.id}`,
											className: "w-full h-10 inline-flex items-center justify-center gap-2 rounded-lg text-xs font-semibold bg-brand text-white hover:scale-[1.01] transition-all cursor-pointer shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-4" }), "View Full Intelligence Report"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-border/40 pt-1 flex flex-col sm:flex-row gap-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleShortlist(selectedCandidate.id, selectedCandidate.name),
												className: `flex-1 h-10 inline-flex items-center justify-center gap-2 rounded-lg text-xs font-medium border transition cursor-pointer ${shortlistedIds.includes(selectedCandidate.id) ? "border-brand/40 bg-brand/10 text-brand" : "border-border/80 bg-background hover:bg-muted text-foreground"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4" }), shortlistedIds.includes(selectedCandidate.id) ? "Shortlisted" : "Shortlist Candidate"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleScheduleInterview(selectedCandidate.name),
												className: "flex-1 h-10 inline-flex items-center justify-center gap-2 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), "Schedule Interview"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDownloadDossier(selectedCandidate.name),
												className: "grid place-items-center size-10 border border-border/80 bg-background hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition shrink-0 cursor-pointer",
												title: "Download Talent Dossier",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
											})
										]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/20 p-12 text-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-10 mx-auto mb-2 text-muted-foreground/45" }), "Select a candidate to view AI reasoning dossier."]
							})
						})]
					})
				]
			}),
			selectedCompareIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-bottom-5 duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border/80 bg-card/85 backdrop-blur-xl p-3 shadow-2xl flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-8 place-items-center rounded-lg bg-brand/10 text-brand shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-semibold text-foreground",
								children: [selectedCompareIds.length, " of 4 selected"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground text-[10px]",
								children: "Select 2 to 4 candidates to compare"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedCompareIds([]),
							className: "h-8 rounded-lg px-2.5 text-xs font-medium border border-border bg-background hover:bg-muted transition cursor-pointer text-muted-foreground hover:text-foreground",
							children: "Clear"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: selectedCompareIds.length < 2,
							onClick: () => {
								navigate({
									to: "/compare",
									search: { ids: selectedCompareIds.join(",") }
								});
							},
							className: `h-8 rounded-lg px-3.5 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${selectedCompareIds.length >= 2 ? "bg-brand text-white shadow-sm hover:opacity-90 active:scale-95 cursor-pointer" : "bg-muted text-muted-foreground border border-border cursor-not-allowed"}`,
							children: "Compare"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { ResultsPage as component };
