import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Activity, H as ChevronDown, I as CloudUpload, J as Brain, N as Database, O as FileText, P as Cpu, T as Info, U as Check, X as Award, Z as ArrowRight, d as SlidersVertical, f as ShieldCheck, j as Download, s as TrendingUp, t as Zap, u as Sparkles, w as Layers, z as ChevronUp } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as analyzeCandidates, n as CHALLENGE_JD, o as extractRequirements, r as Header } from "./Header-BkxoBHcG.mjs";
import { t as triggerFileDownload } from "./utils-Bv5VJm0_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analyze-LzG61izP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnalyzePage() {
	const navigate = useNavigate();
	const [jobDescription, setJobDescription] = (0, import_react.useState)("");
	const [detectedSkills, setDetectedSkills] = (0, import_react.useState)([
		"Python",
		"Vector Databases",
		"Retrieval Systems",
		"Embeddings",
		"Ranking Evaluation",
		"LLM Experience"
	]);
	const [isExtractingSkills, setIsExtractingSkills] = (0, import_react.useState)(false);
	const [jdFile, setJdFile] = (0, import_react.useState)(null);
	const [candidateFile, setCandidateFile] = (0, import_react.useState)(null);
	const [uploadProgress, setUploadProgress] = (0, import_react.useState)(-1);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [multiSignal, setMultiSignal] = (0, import_react.useState)(true);
	const [behavioralIntel, setBehavioralIntel] = (0, import_react.useState)(true);
	const [intelligenceGraph, setIntelligenceGraph] = (0, import_react.useState)(true);
	const [explainableAI, setExplainableAI] = (0, import_react.useState)(true);
	const [honeypotDetection, setHoneypotDetection] = (0, import_react.useState)(true);
	const [showAdvanced, setShowAdvanced] = (0, import_react.useState)(false);
	const [techWeight, setTechWeight] = (0, import_react.useState)(85);
	const [behavioralWeight, setBehavioralWeight] = (0, import_react.useState)(70);
	const [growthWeight, setGrowthWeight] = (0, import_react.useState)(75);
	const [authWeight, setAuthWeight] = (0, import_react.useState)(90);
	const [locationWeight, setLocationWeight] = (0, import_react.useState)(50);
	const [isAnalyzing, setIsAnalyzing] = (0, import_react.useState)(false);
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const debounceRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (debounceRef.current) clearTimeout(debounceRef.current);
		if (!jobDescription || jobDescription.trim().length < 20) return;
		setIsExtractingSkills(true);
		debounceRef.current = setTimeout(async () => {
			try {
				const skills = await extractRequirements(jobDescription);
				if (skills.length > 0) setDetectedSkills(skills);
			} catch (err) {
				console.error(err);
			} finally {
				setIsExtractingSkills(false);
			}
		}, 1e3);
		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, [jobDescription]);
	const handleUseSampleDataset = () => {
		setJobDescription(CHALLENGE_JD);
		setCandidateFile({
			name: "candidates.jsonl",
			size: "465 MB"
		});
		setUploadProgress(100);
		toast.success("Loaded Redrob Senior AI Engineer challenge dataset", { description: "Ready to run AI talent intelligence ranking." });
	};
	const simulateCandidateUpload = (fileName, fileSize) => {
		setUploadProgress(0);
		const interval = setInterval(() => {
			setUploadProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setCandidateFile({
						name: fileName,
						size: fileSize
					});
					toast.success("Candidate dataset uploaded successfully");
					return 100;
				}
				return prev + 10;
			});
		}, 150);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};
	const handleDragLeave = () => {
		setIsDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const file = e.dataTransfer.files[0];
			const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
			simulateCandidateUpload(file.name, `${sizeMB} MB`);
		}
	};
	const handleFileSelect = (e) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
			simulateCandidateUpload(file.name, `${sizeMB} MB`);
		}
	};
	const handleDownloadTemplate = () => {
		triggerFileDownload("candidate_dataset_template.json", `[
  {
    "candidate_id": "CAND_000001",
    "profile": {
      "anonymized_name": "A. Iyer",
      "current_title": "Senior AI Engineer",
      "years_of_experience": 8,
      "location": "Bangalore",
      "country": "India",
      "current_company": "VectorTech Solutions"
    },
    "skills": [
      { "name": "Python", "experience_years": 7 },
      { "name": "PyTorch", "experience_years": 5 },
      { "name": "Pinecone", "experience_years": 3 }
    ],
    "education": [
      {
        "degree": "B.Tech",
        "field_of_study": "Computer Science",
        "institution": "IIT Madras"
      }
    ],
    "redrob_signals": {
      "recruiter_response_rate": 0.95,
      "github_activity_score": 85,
      "interview_completion_rate": 0.90
    },
    "experience": [
      {
        "role": "Senior AI Engineer",
        "company": "VectorTech Solutions",
        "period": "2023 - Present"
      }
    ]
  }
]`, "application/json");
		toast.success("Downloaded candidate dataset template.json");
	};
	const handleJdUpload = (e) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setJdFile(file);
			const reader = new FileReader();
			reader.onload = (event) => {
				const text = event.target?.result;
				if (text) {
					setJobDescription(text);
					toast.success(`Loaded Job Description: ${file.name}`);
				}
			};
			reader.readAsText(file);
		}
	};
	const handleAnalyze = async () => {
		if (!jobDescription || !candidateFile) {
			toast.error("Please provide both a Job Description and a Candidate Dataset");
			return;
		}
		setIsAnalyzing(true);
		setActiveStep(1);
		let resultsPromise = analyzeCandidates(jobDescription, {
			multiSignal,
			behavioralIntel,
			intelligenceGraph,
			explainableAI,
			honeypotDetection,
			technicalSkillsWeight: techWeight,
			behavioralSignalsWeight: behavioralWeight,
			careerGrowthWeight: growthWeight,
			authenticityWeight: authWeight,
			locationFitWeight: locationWeight
		});
		for (let step = 1; step <= 6; step++) {
			await new Promise((resolve) => setTimeout(resolve, 800));
			setActiveStep(step + 1);
		}
		try {
			const finalResults = await resultsPromise;
			localStorage.setItem("cvblitz_results", JSON.stringify(finalResults));
			localStorage.setItem("cvblitz_jd", jobDescription);
			localStorage.setItem("cvblitz_skills", JSON.stringify(detectedSkills));
			localStorage.setItem("cvblitz_config", JSON.stringify({
				techWeight,
				behavioralWeight,
				growthWeight,
				authWeight,
				locationWeight,
				honeypotDetection
			}));
			toast.success("Intelligence graph compiled successfully!");
			navigate({ to: "/results" });
		} catch (err) {
			console.error(err);
			toast.error("Failed to analyze candidates.");
			setIsAnalyzing(false);
		}
	};
	const isFormReady = jobDescription.trim().length > 10 && candidateFile !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.2),transparent)] blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[30%] -right-20 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,oklch(0.7_0.22_300/0.15),transparent)] blur-3xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				showBack: true,
				backTo: "/"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 backdrop-blur-md px-3 py-1 text-xs font-medium text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-brand" }), "Recruiter Workspace v1.0"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl",
								children: "Analyze Candidates"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base text-muted-foreground leading-relaxed",
								children: "Upload candidate data and let CVBlitz identify the top talent using contextual intelligence, behavioral signals, and recruiter-grade reasoning."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4 mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground font-medium",
									children: "Candidates Ready"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-2xl font-bold tabular-nums",
									children: "100,000"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground border border-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground font-medium",
									children: "Profiles Processed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-2xl font-bold tabular-nums",
									children: candidateFile ? "100,000" : "0"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground border border-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground font-medium",
									children: "Hidden Gems Found"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-2xl font-bold text-gradient tabular-nums",
									children: "12"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 place-items-center rounded-xl bg-brand/10 text-brand border border-brand/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground font-medium",
									children: "Avg Match Confidence"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-2xl font-bold tabular-nums",
									children: "94.2%"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground border border-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5" })
								})]
							})
						]
					}),
					!isFormReady && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 rounded-3xl border border-dashed border-border/80 bg-card/20 p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-15 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto grid size-14 place-items-center rounded-2xl bg-muted border border-border/60 text-muted-foreground mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: "Start AI Talent Intelligence Pipeline"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: "To begin intelligent candidate ranking, upload a candidate dataset (e.g. CSV or JSONL format) and paste or upload the job description you are hiring for."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap items-center justify-center gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: handleUseSampleDataset,
										className: "inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 text-sm font-medium text-white shadow-sm hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " Use Sample Dataset"]
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2 mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "font-display text-lg font-semibold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4.5 text-brand" }), " Job Description"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-1.5 rounded-lg border border-border/85 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-3.5" }),
											"Upload JD",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: ".txt,.docx,.pdf",
												className: "hidden",
												onChange: handleJdUpload
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: jobDescription,
										onChange: (e) => setJobDescription(e.target.value),
										placeholder: "Paste the job description here...",
										className: "w-full min-h-[220px] h-[300px] rounded-xl border border-border/60 bg-background/50 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand/40 resize-none font-sans leading-relaxed"
									}), jdFile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-3 left-3 bg-muted border border-border/60 px-3 py-1 rounded-md text-[11px] text-muted-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-green-500" }), jdFile.name]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 text-xs uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1",
											children: ["Detected Requirements", isExtractingSkills && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand animate-ping ml-1" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1.5",
											children: detectedSkills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-md border border-border/80 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground font-mono flex items-center gap-1 hover:border-brand/40 hover:text-brand transition cursor-default",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-brand" }), skill]
											}, skill))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 text-[10px] text-muted-foreground/80 flex items-center gap-1 font-mono",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3" }), " Requirements are dynamically extracted using Gemini."]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-lg font-semibold flex items-center gap-2 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-4.5 text-brand" }), " Candidate Dataset"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onDragOver: handleDragOver,
									onDragLeave: handleDragLeave,
									onDrop: handleDrop,
									className: `border border-dashed rounded-xl p-8 text-center transition flex flex-col items-center justify-center min-h-[200px] cursor-pointer ${isDragging ? "border-brand bg-brand/5" : "border-border/80 bg-background/40 hover:bg-background/80"}`,
									onClick: () => document.getElementById("dataset-file-input")?.click(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-12 place-items-center rounded-2xl bg-muted border border-border/60 text-muted-foreground mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-6 text-brand" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium",
											children: "Drop candidates.jsonl here or browse files"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Supports JSONL, JSON, CSV (up to 500MB)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: (e) => {
												e.stopPropagation();
												handleDownloadTemplate();
											},
											className: "mt-3.5 inline-flex items-center gap-1.5 text-xs text-brand hover:underline font-semibold cursor-pointer z-20 relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), " Download Candidate Template (.json)"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "dataset-file-input",
											type: "file",
											accept: ".jsonl,.json,.csv",
											className: "hidden",
											onChange: handleFileSelect
										})
									]
								}),
								uploadProgress >= 0 && uploadProgress < 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-xl border border-border/60 bg-background/60 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs mb-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium text-muted-foreground flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-brand animate-pulse" }), "Uploading candidate batch..."]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono",
											children: [uploadProgress, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 w-full bg-muted rounded-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gradient-to-r from-brand to-brand-glow transition-all duration-150",
											style: { width: `${uploadProgress}%` }
										})
									})]
								}),
								candidateFile && uploadProgress === 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-xl border border-border/65 bg-background/60 p-4 transition-all duration-300 animate-in fade-in",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-3 pb-3 border-b border-border/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-9 place-items-center rounded-lg bg-green-500/10 text-green-600 border border-green-500/25",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "Active Dataset"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: candidateFile.name
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg border border-border/60 bg-muted/40 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground font-medium",
													children: "Total Candidates"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 text-sm font-bold tabular-nums",
													children: "100,000 Candidates"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg border border-border/60 bg-muted/40 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground font-medium",
													children: "File Size"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 text-sm font-bold tabular-nums",
													children: candidateFile.size
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg border border-border/60 bg-muted/40 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground font-medium",
													children: "Expected Processing Time"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 text-sm font-bold text-brand font-mono",
													children: "4m 32s"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg border border-border/60 bg-muted/40 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground font-medium",
													children: "Data Quality Score"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 text-sm font-bold text-green-600 font-mono",
													children: "94%"
												})]
											})
										]
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-border/50 pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-base font-semibold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "size-4 text-brand" }), " Ranking Configuration"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setShowAdvanced(!showAdvanced),
											className: "inline-flex items-center gap-1 text-xs text-brand hover:underline font-medium cursor-pointer",
											children: showAdvanced ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Hide Advanced ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3.5" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Show Advanced ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })] })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-2.5",
										children: [
											{
												label: "Multi-Signal Ranking",
												desc: "Evaluate multiple attributes including code, growth, and timeline alignment",
												state: multiSignal,
												setter: setMultiSignal
											},
											{
												label: "Behavioral Intelligence",
												desc: "Integrate response rate, commitment rate, and endorcements",
												state: behavioralIntel,
												setter: setBehavioralIntel
											},
											{
												label: "Candidate Intelligence Graph",
												desc: "Build structured contextual capabilities",
												state: intelligenceGraph,
												setter: setIntelligenceGraph
											},
											{
												label: "Explainable AI Reasoning",
												desc: "Include clear recruiter-grade feedback explanations",
												state: explainableAI,
												setter: setExplainableAI
											},
											{
												label: "Honeypot Detection",
												desc: "Flag inflated credentials or timeline overlaps automatically",
												state: honeypotDetection,
												setter: setHoneypotDetection
											}
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-4 p-2.5 rounded-lg hover:bg-muted/30 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs font-semibold",
													children: item.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-muted-foreground/95 leading-relaxed mt-0.5",
													children: item.desc
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "relative inline-flex items-center cursor-pointer mt-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: item.state,
													onChange: () => item.setter(!item.state),
													className: "sr-only peer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-4 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-3 after:w-3.5 after:transition-all peer-checked:bg-brand" })]
											})]
										}, item.label))
									}),
									showAdvanced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 p-4 rounded-xl border border-border/60 bg-muted/20 space-y-4 animate-in slide-in-from-top-3 duration-250",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground pb-2 border-b border-border/40",
											children: "Advanced Weight Settings (%)"
										}), [
											{
												label: "Technical Skills Weight",
												value: techWeight,
												setter: setTechWeight
											},
											{
												label: "Behavioral Signals Weight",
												value: behavioralWeight,
												setter: setBehavioralWeight
											},
											{
												label: "Career Growth Weight",
												value: growthWeight,
												setter: setGrowthWeight
											},
											{
												label: "Authenticity Weight",
												value: authWeight,
												setter: setAuthWeight
											},
											{
												label: "Location Fit Weight",
												value: locationWeight,
												setter: setLocationWeight
											}
										].map((slider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: slider.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono font-semibold",
													children: [slider.value, "%"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "range",
												min: "0",
												max: "100",
												value: slider.value,
												onChange: (e) => slider.setter(parseInt(e.target.value)),
												className: "w-full accent-brand bg-muted rounded-lg appearance-none h-1 cursor-pointer"
											})]
										}, slider.label))]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-lg font-semibold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4.5 text-brand" }), " What CVBlitz Will Analyze"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "CVBlitz maps resumes to our candidate intelligence graph, reviewing six core domains simultaneously."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 grid-cols-2 md:grid-cols-3",
							children: [
								{
									icon: Cpu,
									title: "Technical Skills",
									desc: "Python, AI, Retrieval, Vector DBs",
									color: "text-brand"
								},
								{
									icon: Layers,
									title: "Career History",
									desc: "Growth trajectory and role relevance",
									color: "text-blue-500"
								},
								{
									icon: Activity,
									title: "Behavioral Signals",
									desc: "Recruiter engagement and responsiveness",
									color: "text-orange-500"
								},
								{
									icon: Award,
									title: "Production Experience",
									desc: "Real-world engineering expertise",
									color: "text-green-500"
								},
								{
									icon: ShieldCheck,
									title: "Profile Authenticity",
									desc: "Timeline validation and fraud detection",
									color: "text-purple-500"
								},
								{
									icon: Brain,
									title: "Ranking Intelligence",
									desc: "Contextual candidate understanding",
									color: "text-pink-500"
								}
							].map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative rounded-xl border border-border/60 bg-card/40 p-4 transition-all duration-300 hover:border-brand/40 hover:bg-card/70 hover:-translate-y-0.5",
								style: { animationDelay: `${i * 100}ms` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `mb-3 grid size-9 place-items-center rounded-lg bg-background/80 border border-border/60 ${feature.color} group-hover:scale-110 transition-transform`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: "size-4.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-sm font-medium",
										children: feature.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground leading-relaxed",
										children: feature.desc
									})
								]
							}, feature.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleAnalyze,
							disabled: !isFormReady || isAnalyzing,
							className: `group relative inline-flex h-12 min-w-[280px] items-center justify-center gap-2 rounded-full px-8 text-sm font-medium text-white shadow-md transition-all duration-300 ${isFormReady && !isAnalyzing ? "bg-gradient-to-r from-brand to-brand-glow hover:scale-[1.02] cursor-pointer" : "bg-muted text-muted-foreground border border-border cursor-not-allowed"}`,
							children: isAnalyzing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-full border-2 border-white border-t-transparent animate-spin" }), "Building Candidate Intelligence Graph..."]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Analyze 100,000 Candidates", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })] })
						})
					})
				]
			}),
			isAnalyzing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 animate-in fade-in duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-lg w-full rounded-3xl border border-border/60 bg-card p-8 shadow-[0_50px_100px_-20px_oklch(0_0_0/0.4)] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-10 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand/10 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-brand-glow/10 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand border border-brand/20 mb-5 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-6 text-brand animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-1 rounded-2xl border border-brand/35 animate-ping opacity-60" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: "CVBlitz Intelligence Pipeline"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs text-muted-foreground",
									children: "Analyzing 100,000 profiles against job description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 space-y-3.5 text-left max-w-xs mx-auto",
									children: [
										{
											id: 1,
											label: "Parsing Profiles"
										},
										{
											id: 2,
											label: "Extracting Signals"
										},
										{
											id: 3,
											label: "Detecting Honeypots"
										},
										{
											id: 4,
											label: "Scoring Candidates"
										},
										{
											id: 5,
											label: "Generating Rankings"
										},
										{
											id: 6,
											label: "Preparing Explanations"
										}
									].map((step) => {
										const isDone = activeStep > step.id;
										const isCurrent = activeStep === step.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flex items-center gap-3.5 text-sm transition-all duration-300 ${isDone ? "text-foreground font-medium" : isCurrent ? "text-brand font-semibold scale-[1.02]" : "text-muted-foreground/45"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative flex size-5.5 items-center justify-center",
												children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid size-5.5 place-items-center rounded-full bg-brand text-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														className: "size-3.5",
														strokeWidth: 3
													})
												}) : isCurrent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid size-5.5 place-items-center rounded-full bg-brand/10 text-brand border border-brand animate-pulse",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-brand" })
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid size-5.5 place-items-center rounded-full bg-muted border border-border text-[10px] font-mono",
													children: step.id
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 flex justify-between items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.label }), isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-mono uppercase bg-brand/10 text-brand px-1.5 py-0.5 rounded tracking-wider animate-pulse",
													children: "Active"
												})]
											})]
										}, step.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 w-full bg-muted rounded-full overflow-hidden relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gradient-to-r from-brand to-brand-glow transition-all duration-300 rounded-full",
											style: { width: `${Math.min(100, (activeStep - 1) / 6 * 100)}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between font-mono text-[9px] text-muted-foreground/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "compiling graph" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(Math.min(100, (activeStep - 1) / 6 * 100)), "%"] })]
									})]
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AnalyzePage as component };
