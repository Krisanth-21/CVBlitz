import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { triggerFileDownload } from "../lib/utils";
import {
  Sparkles,
  UploadCloud,
  FileText,
  Check,
  Zap,
  Sliders,
  ChevronDown,
  ChevronUp,
  Cpu,
  Brain,
  Network,
  ShieldCheck,
  Activity,
  Layers,
  ArrowRight,
  Database,
  TrendingUp,
  Award,
  AlertTriangle,
  Info,
  Download
} from "lucide-react";
import { extractRequirements, analyzeCandidates } from "../lib/gemini";
import { CHALLENGE_JD } from "../lib/challengeCandidates";
import { toast } from "sonner";

export const Route = createFileRoute("/analyze")({
  component: AnalyzePage,
});

function AnalyzePage() {
  const navigate = useNavigate();

  // State variables
  const [jobDescription, setJobDescription] = useState("");
  const [detectedSkills, setDetectedSkills] = useState<string[]>([
    "Python",
    "Vector Databases",
    "Retrieval Systems",
    "Embeddings",
    "Ranking Evaluation",
    "LLM Experience"
  ]);
  const [isExtractingSkills, setIsExtractingSkills] = useState(false);

  // File Upload State
  const [jdFile, setJdFile] = useState<File | null>(null);
  const [candidateFile, setCandidateFile] = useState<{ name: string; size: string } | null>(null);
  const [uploadProgress, setUploadProgress] = useState(-1); // -1: not started
  const [isDragging, setIsDragging] = useState(false);

  // Configuration Switches
  const [multiSignal, setMultiSignal] = useState(true);
  const [behavioralIntel, setBehavioralIntel] = useState(true);
  const [intelligenceGraph, setIntelligenceGraph] = useState(true);
  const [explainableAI, setExplainableAI] = useState(true);
  const [honeypotDetection, setHoneypotDetection] = useState(true);

  // Advanced settings collapsible
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Advanced settings sliders
  const [techWeight, setTechWeight] = useState(85);
  const [behavioralWeight, setBehavioralWeight] = useState(70);
  const [growthWeight, setGrowthWeight] = useState(75);
  const [authWeight, setAuthWeight] = useState(90);
  const [locationWeight, setLocationWeight] = useState(50);

  // Analysis / Pipeline State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Debounce ref for requirements extraction
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Detect requirements as user types
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!jobDescription || jobDescription.trim().length < 20) {
      return;
    }

    setIsExtractingSkills(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const skills = await extractRequirements(jobDescription);
        if (skills.length > 0) {
          setDetectedSkills(skills);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsExtractingSkills(false);
      }
    }, 1000);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [jobDescription]);

  // Load sample dataset
  const handleUseSampleDataset = () => {
    setJobDescription(CHALLENGE_JD);
    setCandidateFile({
      name: "candidates.jsonl",
      size: "465 MB"
    });
    setUploadProgress(100);
    toast.success("Loaded Redrob Senior AI Engineer challenge dataset", {
      description: "Ready to run AI talent intelligence ranking."
    });
  };

  // Simulate file upload
  const simulateCandidateUpload = (fileName: string, fileSize: string) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCandidateFile({ name: fileName, size: fileSize });
          toast.success("Candidate dataset uploaded successfully");
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      simulateCandidateUpload(file.name, `${sizeMB} MB`);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      simulateCandidateUpload(file.name, `${sizeMB} MB`);
    }
  };

  const handleDownloadTemplate = () => {
    const templateContent = `[
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
]`;
    triggerFileDownload("candidate_dataset_template.json", templateContent, "application/json");
    toast.success("Downloaded candidate dataset template.json");
  };

  const handleJdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setJdFile(file);
      
      // Read file content
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          setJobDescription(text);
          toast.success(`Loaded Job Description: ${file.name}`);
        }
      };
      reader.readAsText(file);
    }
  };

  // Run the Pipeline & Gemini API scoring
  const handleAnalyze = async () => {
    if (!jobDescription || !candidateFile) {
      toast.error("Please provide both a Job Description and a Candidate Dataset");
      return;
    }

    setIsAnalyzing(true);
    setActiveStep(1);

    // Run the API call in parallel with pipeline steps
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
      locationFitWeight: locationWeight,
    });

    const pipelineSteps = [
      "Parsing Profiles...",
      "Extracting Signals...",
      "Detecting Honeypots...",
      "Scoring Candidates...",
      "Generating Rankings...",
      "Preparing Explanations..."
    ];

    for (let step = 1; step <= 6; step++) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setActiveStep(step + 1);
    }

    try {
      const finalResults = await resultsPromise;
      // Save results in localStorage
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

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.2),transparent)] blur-3xl" />
        <div className="absolute top-[30%] -right-20 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,oklch(0.7_0.22_300/0.15),transparent)] blur-3xl" />
      </div>

      {/* Header Bar */}
      <Header showBack backTo="/" />

      <main className="mx-auto max-w-7xl px-6 pt-10">
        {/* Title Section */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 backdrop-blur-md px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-brand" />
            Recruiter Workspace v1.0
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Analyze Candidates
          </h1>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Upload candidate data and let CVBlitz identify the top talent using contextual intelligence, behavioral signals, and recruiter-grade reasoning.
          </p>
        </div>

        {/* Top Statistics Row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Candidates Ready</div>
              <div className="mt-2 font-display text-2xl font-bold tabular-nums">100,000</div>
            </div>
            <div className="grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground border border-border/60">
              <Database className="size-5" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Profiles Processed</div>
              <div className="mt-2 font-display text-2xl font-bold tabular-nums">
                {candidateFile ? "100,000" : "0"}
              </div>
            </div>
            <div className="grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground border border-border/60">
              <Cpu className="size-5" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Hidden Gems Found</div>
              <div className="mt-2 font-display text-2xl font-bold text-gradient tabular-nums">12</div>
            </div>
            <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand border border-brand/20">
              <Sparkles className="size-5" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 flex items-center justify-between transition-all hover:border-brand/30 hover:bg-card/60">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Avg Match Confidence</div>
              <div className="mt-2 font-display text-2xl font-bold tabular-nums">94.2%</div>
            </div>
            <div className="grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground border border-border/60">
              <TrendingUp className="size-5" />
            </div>
          </div>
        </div>

        {/* Empty State Banner (Only shown if JD or Candidate Dataset is missing) */}
        {!isFormReady && (
          <div className="mb-10 rounded-3xl border border-dashed border-border/80 bg-card/20 p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-muted border border-border/60 text-muted-foreground mb-6">
                <FileText className="size-7" />
              </div>
              <h3 className="font-display text-xl font-semibold">Start AI Talent Intelligence Pipeline</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To begin intelligent candidate ranking, upload a candidate dataset (e.g. CSV or JSONL format) and paste or upload the job description you are hiring for.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleUseSampleDataset}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 text-sm font-medium text-white shadow-sm hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
                >
                  <Sparkles className="size-4" /> Use Sample Dataset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Columns layout */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          
          {/* LEFT COLUMN: Job Description */}
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold flex items-center gap-2">
                <FileText className="size-4.5 text-brand" /> Job Description
              </h2>
              <label className="inline-flex items-center gap-1.5 rounded-lg border border-border/85 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition cursor-pointer">
                <UploadCloud className="size-3.5" />
                Upload JD
                <input
                  type="file"
                  accept=".txt,.docx,.pdf"
                  className="hidden"
                  onChange={handleJdUpload}
                />
              </label>
            </div>

            <div className="relative flex-1">
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="w-full min-h-[220px] h-[300px] rounded-xl border border-border/60 bg-background/50 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand/40 resize-none font-sans leading-relaxed"
              />
              {jdFile && (
                <div className="absolute bottom-3 left-3 bg-muted border border-border/60 px-3 py-1 rounded-md text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <Check className="size-3 text-green-500" />
                  {jdFile.name}
                </div>
              )}
            </div>

            {/* Detected Requirements */}
            <div className="mt-5">
              <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
                Detected Requirements
                {isExtractingSkills && (
                  <span className="size-1.5 rounded-full bg-brand animate-ping ml-1" />
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {detectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/80 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground font-mono flex items-center gap-1 hover:border-brand/40 hover:text-brand transition cursor-default"
                  >
                    <span className="size-1 rounded-full bg-brand" />
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-[10px] text-muted-foreground/80 flex items-center gap-1 font-mono">
                <Info className="size-3" /> Requirements are dynamically extracted using Gemini.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Candidate Dataset */}
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-lg font-semibold flex items-center gap-2 mb-4">
                <Database className="size-4.5 text-brand" /> Candidate Dataset
              </h2>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border border-dashed rounded-xl p-8 text-center transition flex flex-col items-center justify-center min-h-[200px] cursor-pointer ${
                  isDragging
                    ? "border-brand bg-brand/5"
                    : "border-border/80 bg-background/40 hover:bg-background/80"
                }`}
                onClick={() => document.getElementById("dataset-file-input")?.click()}
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-muted border border-border/60 text-muted-foreground mb-4">
                  <UploadCloud className="size-6 text-brand" />
                </div>
                <div className="text-sm font-medium">Drop candidates.jsonl here or browse files</div>
                <div className="mt-1 text-xs text-muted-foreground">Supports JSONL, JSON, CSV (up to 500MB)</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownloadTemplate();
                  }}
                  className="mt-3.5 inline-flex items-center gap-1.5 text-xs text-brand hover:underline font-semibold cursor-pointer z-20 relative"
                >
                  <Download className="size-3.5" /> Download Candidate Template (.json)
                </button>
                <input
                  id="dataset-file-input"
                  type="file"
                  accept=".jsonl,.json,.csv"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </div>

              {/* Upload Progress Animation */}
              {uploadProgress >= 0 && uploadProgress < 100 && (
                <div className="mt-4 rounded-xl border border-border/60 bg-background/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-muted-foreground flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-brand animate-pulse" />
                      Uploading candidate batch...
                    </span>
                    <span className="font-mono">{uploadProgress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand to-brand-glow transition-all duration-150"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Dataset Summary */}
              {candidateFile && uploadProgress === 100 && (
                <div className="mt-4 rounded-xl border border-border/65 bg-background/60 p-4 transition-all duration-300 animate-in fade-in">
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border/40">
                    <div className="grid size-9 place-items-center rounded-lg bg-green-500/10 text-green-600 border border-green-500/25">
                      <Check className="size-4.5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Active Dataset</div>
                      <div className="text-sm font-semibold">{candidateFile.name}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
                      <div className="text-muted-foreground font-medium">Total Candidates</div>
                      <div className="mt-1 text-sm font-bold tabular-nums">100,000 Candidates</div>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
                      <div className="text-muted-foreground font-medium">File Size</div>
                      <div className="mt-1 text-sm font-bold tabular-nums">{candidateFile.size}</div>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
                      <div className="text-muted-foreground font-medium">Expected Processing Time</div>
                      <div className="mt-1 text-sm font-bold text-brand font-mono">4m 32s</div>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
                      <div className="text-muted-foreground font-medium">Data Quality Score</div>
                      <div className="mt-1 text-sm font-bold text-green-600 font-mono">94%</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Analysis Configuration */}
            <div className="mt-6 border-t border-border/50 pt-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-base font-semibold flex items-center gap-1.5">
                  <Sliders className="size-4 text-brand" /> Ranking Configuration
                </h3>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="inline-flex items-center gap-1 text-xs text-brand hover:underline font-medium cursor-pointer"
                >
                  {showAdvanced ? (
                    <>Hide Advanced <ChevronUp className="size-3.5" /></>
                  ) : (
                    <>Show Advanced <ChevronDown className="size-3.5" /></>
                  )}
                </button>
              </div>

              {/* Toggle Switches */}
              <div className="grid gap-2.5">
                {[
                  { label: "Multi-Signal Ranking", desc: "Evaluate multiple attributes including code, growth, and timeline alignment", state: multiSignal, setter: setMultiSignal },
                  { label: "Behavioral Intelligence", desc: "Integrate response rate, commitment rate, and endorcements", state: behavioralIntel, setter: setBehavioralIntel },
                  { label: "Candidate Intelligence Graph", desc: "Build structured contextual capabilities", state: intelligenceGraph, setter: setIntelligenceGraph },
                  { label: "Explainable AI Reasoning", desc: "Include clear recruiter-grade feedback explanations", state: explainableAI, setter: setExplainableAI },
                  { label: "Honeypot Detection", desc: "Flag inflated credentials or timeline overlaps automatically", state: honeypotDetection, setter: setHoneypotDetection },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 p-2.5 rounded-lg hover:bg-muted/30 transition">
                    <div className="flex-1">
                      <div className="text-xs font-semibold">{item.label}</div>
                      <div className="text-[10px] text-muted-foreground/95 leading-relaxed mt-0.5">{item.desc}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-0.5">
                      <input
                        type="checkbox"
                        checked={item.state}
                        onChange={() => item.setter(!item.state)}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-3 after:w-3.5 after:transition-all peer-checked:bg-brand" />
                    </label>
                  </div>
                ))}
              </div>

              {/* Collapsible Sliders */}
              {showAdvanced && (
                <div className="mt-4 p-4 rounded-xl border border-border/60 bg-muted/20 space-y-4 animate-in slide-in-from-top-3 duration-250">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pb-2 border-b border-border/40">Advanced Weight Settings (%)</h4>
                  
                  {[
                    { label: "Technical Skills Weight", value: techWeight, setter: setTechWeight },
                    { label: "Behavioral Signals Weight", value: behavioralWeight, setter: setBehavioralWeight },
                    { label: "Career Growth Weight", value: growthWeight, setter: setGrowthWeight },
                    { label: "Authenticity Weight", value: authWeight, setter: setAuthWeight },
                    { label: "Location Fit Weight", value: locationWeight, setter: setLocationWeight },
                  ].map((slider) => (
                    <div key={slider.label} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{slider.label}</span>
                        <span className="font-mono font-semibold">{slider.value}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={slider.value}
                        onChange={(e) => slider.setter(parseInt(e.target.value))}
                        className="w-full accent-brand bg-muted rounded-lg appearance-none h-1 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Processing Preview Section */}
        <section className="mb-10">
          <div className="mb-5">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <Cpu className="size-4.5 text-brand" /> What CVBlitz Will Analyze
            </h3>
            <p className="text-xs text-muted-foreground mt-1">CVBlitz maps resumes to our candidate intelligence graph, reviewing six core domains simultaneously.</p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {[
              { icon: Cpu, title: "Technical Skills", desc: "Python, AI, Retrieval, Vector DBs", color: "text-brand" },
              { icon: Layers, title: "Career History", desc: "Growth trajectory and role relevance", color: "text-blue-500" },
              { icon: Activity, title: "Behavioral Signals", desc: "Recruiter engagement and responsiveness", color: "text-orange-500" },
              { icon: Award, title: "Production Experience", desc: "Real-world engineering expertise", color: "text-green-500" },
              { icon: ShieldCheck, title: "Profile Authenticity", desc: "Timeline validation and fraud detection", color: "text-purple-500" },
              { icon: Brain, title: "Ranking Intelligence", desc: "Contextual candidate understanding", color: "text-pink-500" },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="group relative rounded-xl border border-border/60 bg-card/40 p-4 transition-all duration-300 hover:border-brand/40 hover:bg-card/70 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`mb-3 grid size-9 place-items-center rounded-lg bg-background/80 border border-border/60 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="size-4.5" />
                </div>
                <div className="font-display text-sm font-medium">{feature.title}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Action Section */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleAnalyze}
            disabled={!isFormReady || isAnalyzing}
            className={`group relative inline-flex h-12 min-w-[280px] items-center justify-center gap-2 rounded-full px-8 text-sm font-medium text-white shadow-md transition-all duration-300 ${
              isFormReady && !isAnalyzing
                ? "bg-gradient-to-r from-brand to-brand-glow hover:scale-[1.02] cursor-pointer"
                : "bg-muted text-muted-foreground border border-border cursor-not-allowed"
            }`}
          >
            {isAnalyzing ? (
              <span className="flex items-center gap-2">
                <span className="size-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Building Candidate Intelligence Graph...
              </span>
            ) : (
              <>
                Analyze 100,000 Candidates
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </main>

      {/* Full Screen Loading Pipeline Overlay */}
      {isAnalyzing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative max-w-lg w-full rounded-3xl border border-border/60 bg-card p-8 shadow-[0_50px_100px_-20px_oklch(0_0_0/0.4)] overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            
            {/* Ambient glows inside overlay */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-brand-glow/10 blur-2xl" />

            <div className="text-center relative">
              <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand border border-brand/20 mb-5 relative">
                <Zap className="size-6 text-brand animate-pulse" />
                <span className="absolute -inset-1 rounded-2xl border border-brand/35 animate-ping opacity-60" />
              </div>
              <h3 className="font-display text-xl font-semibold">CVBlitz Intelligence Pipeline</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Analyzing 100,000 profiles against job description
              </p>

              {/* Progress Steps */}
              <div className="mt-8 space-y-3.5 text-left max-w-xs mx-auto">
                {[
                  { id: 1, label: "Parsing Profiles" },
                  { id: 2, label: "Extracting Signals" },
                  { id: 3, label: "Detecting Honeypots" },
                  { id: 4, label: "Scoring Candidates" },
                  { id: 5, label: "Generating Rankings" },
                  { id: 6, label: "Preparing Explanations" }
                ].map((step) => {
                  const isDone = activeStep > step.id;
                  const isCurrent = activeStep === step.id;
                  
                  return (
                    <div
                      key={step.id}
                      className={`flex items-center gap-3.5 text-sm transition-all duration-300 ${
                        isDone
                          ? "text-foreground font-medium"
                          : isCurrent
                          ? "text-brand font-semibold scale-[1.02]"
                          : "text-muted-foreground/45"
                      }`}
                    >
                      <div className="relative flex size-5.5 items-center justify-center">
                        {isDone ? (
                          <div className="grid size-5.5 place-items-center rounded-full bg-brand text-white">
                            <Check className="size-3.5" strokeWidth={3} />
                          </div>
                        ) : isCurrent ? (
                          <div className="grid size-5.5 place-items-center rounded-full bg-brand/10 text-brand border border-brand animate-pulse">
                            <span className="size-2 rounded-full bg-brand" />
                          </div>
                        ) : (
                          <div className="grid size-5.5 place-items-center rounded-full bg-muted border border-border text-[10px] font-mono">
                            {step.id}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span>{step.label}</span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono uppercase bg-brand/10 text-brand px-1.5 py-0.5 rounded tracking-wider animate-pulse">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Loading progress bar */}
              <div className="mt-8 space-y-1">
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-brand to-brand-glow transition-all duration-300 rounded-full"
                    style={{ width: `${Math.min(100, ((activeStep - 1) / 6) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[9px] text-muted-foreground/80">
                  <span>compiling graph</span>
                  <span>{Math.round(Math.min(100, ((activeStep - 1) / 6) * 100))}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
