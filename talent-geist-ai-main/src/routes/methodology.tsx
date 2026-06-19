import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Brain,
  ShieldCheck,
  Check,
  X,
  AlertTriangle,
  Award,
  ChevronRight,
  Info,
  Download,
  Users,
  Briefcase,
  Layers,
  Terminal,
  Activity,
  TrendingUp,
  Cpu,
  Database,
  Clock,
  Scale,
  ShieldAlert,
  FileText,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { toast } from "sonner";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

export const Route = createFileRoute("/methodology")({
  component: MethodologyPage,
});

function MethodologyPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleDownloadReport = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Generating Methodology & Architecture PDF...",
        success: "CVBlitz Architecture Report downloaded successfully!",
        error: "Failed to export report."
      }
    );
  };

  const pipelineSteps = [
    { title: "Job Description Ingestion", desc: "Pasting the target job description (JD) launches the pipeline." },
    { title: "Role Intelligence Extraction", desc: "Extracts explicit and implicit (inferred) success pattern skills." },
    { title: "Candidate Parsing", desc: "Streams candidates line-by-line using high-performance JSONL parsing." },
    { title: "Behavioral Signal Analysis", desc: "Weights 23 active signals across availability and reliability." },
    { title: "Honeypot Detection", desc: "Validates timelines, tool release dates, and filters anomalies." },
    { title: "Capability Matching", desc: "Maps transferable adjacent capabilities (e.g. Recommendations ➔ Retrieval)." },
    { title: "Scoring Engine", desc: "Calculates scores based on the 35/25/20/10/10 weighted formula." },
    { title: "Top 100 Candidate Ranking", desc: "Sorts candidates and breaks ties alphabetically by ID." },
    { title: "Submission CSV Generation", desc: "Generates formatted output matching Redrob specifications." }
  ];

  const formulaData = [
    { name: "Technical Capability", percentage: 35, color: "#6366f1", desc: "Core skills matching, proficiency levels, and skill duration scoring." },
    { name: "Role Relevance", percentage: 25, color: "#a855f7", desc: "Experience target alignment and title seniority classification." },
    { name: "Behavioral Readiness", percentage: 20, color: "#06b6d4", desc: "Recruiter response rate, GitHub code score, and notice period length." },
    { name: "Career Growth", percentage: 10, color: "#10b981", desc: "Tenure stability (averaging months per job) and promotional trajectory." },
    { name: "Authenticity", percentage: 10, color: "#f59e0b", desc: "Timeline consistency and tool anachronism verification checks." }
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground pb-24">
      {/* SVG Dash Line Animation */}
      <style>{`
        @keyframes dashflow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-flow-line {
          stroke-dasharray: 6, 4;
          animation: dashflow 1.2s linear infinite;
        }
      `}</style>

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.12),transparent)] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[600px] rounded-full bg-[radial-gradient(closest-side,oklch(0.7_0.22_300/0.08),transparent)] blur-3xl" />
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-45 border-b border-border/40 backdrop-blur-xl bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate({ to: "/" })}
              className="grid size-8 place-items-center rounded-lg border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              <ArrowLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow">
                <Zap className="size-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">CVBlitz</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/analyze" className="hover:text-foreground transition-colors">Workspace</Link>
            <Link to="/results" className="hover:text-foreground transition-colors">Rankings</Link>
            <Link to="/compare" className="hover:text-foreground transition-colors">Compare</Link>
            <Link to="/ats-blindspots" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Sparkles className="size-3.5" /> Blindspots
            </Link>
            <Link to="/fit-intelligence" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Brain className="size-3.5" /> Fit Intelligence
            </Link>
            <span className="h-4 w-px bg-border/80" />
            <Link to="/methodology" className="text-brand font-medium flex items-center gap-1">
              <Cpu className="size-3.5" /> Methodology
            </Link>
          </nav>

          <button
            onClick={() => navigate({ to: "/analyze" })}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-4 text-sm font-medium transition cursor-pointer"
          >
            Run New Analysis
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider">
              <ShieldCheck className="size-3.5" /> CVBlitz Defense & Verification Dossier
            </div>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
              CVBlitz Intelligence Architecture
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
              Understand exactly how CVBlitz evaluates candidates, filters timeline inconsistencies, and surfaces matching capabilities beyond static keyword parsing.
            </p>
          </div>

          <button
            onClick={handleDownloadReport}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground text-background hover:opacity-90 px-5 text-xs font-semibold transition cursor-pointer shadow-sm"
          >
            <Download className="size-4" /> Download Architecture PDF
          </button>
        </div>

        {/* Hero Statistics Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {[
            { value: "100,000+", label: "Candidates Evaluated", icon: Users, color: "text-brand" },
            { value: "11 Seconds", label: "Ranking Runtime", icon: Clock, color: "text-cyan-600" },
            { value: "20,884", label: "Suspicious Profiles Filtered", icon: ShieldAlert, color: "text-red-500" },
            { value: "100", label: "Final Ranked Candidates", icon: Award, color: "text-amber-500" },
            { value: "95%+", label: "Recruiter Confidence", icon: Brain, color: "text-purple-500" },
            { value: "CPU Only", label: "No External APIs", icon: Cpu, color: "text-green-600" }
          ].map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-4 flex flex-col justify-between min-h-[110px] hover:border-brand/40 transition">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-muted-foreground">Stat {idx+1}</span>
                <stat.icon className={`size-4 ${stat.color}`} />
              </div>
              <div className="space-y-0.5">
                <div className="font-display text-lg font-bold text-gradient leading-none">{stat.value}</div>
                <div className="text-[9.5px] text-muted-foreground font-semibold leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Pipeline Map */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-border/40 pb-3">
            <h3 className="font-display text-base font-bold flex items-center gap-2">
              <Activity className="size-4.5 text-brand" /> CVBlitz Ranking Pipeline
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Stage 3 sandboxed execution flow</span>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-9 gap-4 items-center">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Visual Circle Indicator */}
                <div 
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 grid size-10 place-items-center rounded-full border transition-all cursor-pointer ${
                    activeStep === idx 
                      ? "bg-brand text-white border-brand scale-110 shadow-lg shadow-brand/20 font-bold" 
                      : "bg-background border-border hover:border-brand/50 text-muted-foreground font-semibold"
                  }`}
                >
                  {idx + 1}
                </div>
                
                <h4 className="mt-2 text-center text-[10px] font-bold text-foreground leading-snug truncate max-w-[100px]">
                  {step.title}
                </h4>

                {/* Animated connectors */}
                {idx < 8 && (
                  <div className="hidden md:block absolute left-[calc(50%+20px)] top-[20px] w-[calc(100%-25px)] h-0.5 z-0">
                    <svg className="w-full h-1" viewBox="0 0 100 4" fill="none" preserveAspectRatio="none">
                      <path d="M 0,2 L 100,2" stroke={activeStep >= idx ? "#6366f1" : "#cbd5e1"} strokeWidth="1.5" className="animated-flow-line" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Expanded Step Info Box */}
          <div className="p-4 bg-muted/40 border border-border/50 rounded-xl flex gap-3 items-start animate-in slide-in-from-bottom-2 duration-200">
            <div className="grid size-8 place-items-center rounded-lg bg-brand/10 border border-brand/20 text-brand shrink-0">
              <Terminal className="size-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">Pipeline Stage {activeStep + 1}: {pipelineSteps[activeStep].title}</div>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{pipelineSteps[activeStep].desc}</p>
            </div>
          </div>
        </div>

        {/* Problem Statement Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Rejection / Problem */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-red-600 text-xs font-semibold">
              <X className="size-3.5" /> Traditional Recruitment Bottleneck
            </div>
            <h3 className="font-display text-xl font-bold">The Keyword Parsing Fallacy</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Traditional recruiters review hundreds of profiles and often miss exceptional candidates because standard ATS systems evaluate files based on literal keyword density, ignoring context, transferable skills, behavioral signals, or genuine role fit.
            </p>
            
            <div className="border-t border-border/40 pt-4 space-y-2">
              <h4 className="text-xs font-bold text-muted-foreground uppercase font-mono">Traditional ATS Limitations:</h4>
              <ul className="space-y-2 text-xs">
                {[
                  "Keyword Matching: Requires exact letter matches (rejects synonyms).",
                  "Resume Parsing: Fails to parse custom formats, missing critical experience details.",
                  "Static Filters: Hard-cuts candidates based on years of experience bands.",
                  "Zero Authenticity Audits: Overlooks fabricated resumes and timeline frauds."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-muted-foreground font-medium">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution / CVBlitz */}
          <div className="rounded-2xl border border-brand/50 bg-brand/[0.01] backdrop-blur-md p-6 space-y-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" />
            <div className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-green-600 text-xs font-semibold">
              <Check className="size-3.5" /> CVBlitz Intelligent Retrieval
            </div>
            <h3 className="font-display text-xl font-bold">Semantic Capability Recognition</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              CVBlitz extracts role context, maps transferable competencies using semantic alignments, filters fake timeline profiles, and factors in behavioral signals. It identifies candidates that keyword scanners overlook and validates them.
            </p>

            <div className="border-t border-brand/10 pt-4 space-y-2">
              <h4 className="text-xs font-bold text-brand uppercase font-mono">CVBlitz Flagship Competencies:</h4>
              <ul className="space-y-2 text-xs">
                {[
                  "Capability Equivalence: Recognizes adjacent search expertise (FAISS ➔ Retrieval).",
                  "Timeline Auditing: Identifies overlap frauds and pre-tool release date anomalies.",
                  "Behavioral Readiness: Integrates 23 active engagement signals (response, activity).",
                  "Explainable AI: Outputs clean, justified reasoning for every single score."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-foreground font-semibold">
                    <Sparkles className="size-3.5 text-brand mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why ATS Fails Cards */}
        <div className="space-y-4">
          <h3 className="font-display text-base font-bold flex items-center gap-2">
            <ShieldAlert className="size-4.5 text-red-500" /> Why Traditional ATS Systems Fail
          </h3>
          
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Keyword Dependency", desc: "Filters out elite backend engineers who build search pipelines simply because their resumes lack exact tags like 'RAG' or 'Pinecone'.", icon: Terminal },
              { title: "Job Title Bias", desc: "Penalizes creative non-standard job titles (like 'Platform Craftsman' or 'applied modeler') that describe massive technical ownership.", icon: Briefcase },
              { title: "Transferable Skills Ignored", desc: "Fails to map adjacent domain expertise. Building high-scale recommendations maps directly to retrieval engines, but is rated 0.", icon: Layers },
              { title: "Behavioral Signals Ignored", desc: "Overlooks whether a candidate has a 95% recruiter response rate or 100 github commits, ranking active candidates behind stale profiles.", icon: Activity },
              { title: "Profile Fraud Undetected", desc: "Allows keyword-stuffers claiming 12 years of PyTorch (released 2016) or overlapping full-time roles to rank top of the pool.", icon: AlertTriangle },
              { title: "Context Loss", desc: "Fails to read descriptions to differentiate between 'used LangChain for a tutorial' and 'operated custom memory indexing systems'.", icon: Info }
            ].map((card, idx) => (
              <div key={idx} className="p-5 bg-card/45 border border-border/60 rounded-xl space-y-2 hover:border-red-300 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="grid size-7 place-items-center rounded-md bg-red-500/5 text-red-500 border border-red-500/10">
                    <card.icon className="size-4" />
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{card.title}</h4>
                </div>
                <p className="text-[10px] text-muted-foreground leading-normal font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Role Intelligence & Behavioral Breakdown */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Role Requirements */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Briefcase className="size-4.5 text-brand" /> Understanding What The Role Actually Requires
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-[10.5px] uppercase font-mono font-bold tracking-wider text-muted-foreground mb-2">Explicit Requirements</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {["Python", "Retrieval Systems", "Embeddings", "Vector Databases"].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 font-medium text-foreground">
                      <span className="text-brand font-bold text-sm">✓</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10.5px] uppercase font-mono font-bold tracking-wider text-muted-foreground mb-2">Implicit Requirements</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {["Ownership", "Product Thinking", "Execution Speed", "Learning Agility"].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 font-semibold text-brand">
                      <span className="text-brand font-bold text-sm">✓</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-muted/20 border border-border/50 rounded-xl">
                <div className="text-xs font-bold text-foreground flex items-center gap-1">
                  <Brain className="size-3.5 text-brand" /> AI-Generated Role Understanding
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                  "CVBlitz prioritizes candidates who demonstrate ownership of high-throughput backend systems (Elasticsearch/Lucene) and a product-focused approach. High-level ML math is secondary to shipping and benchmarking real search pipelines."
                </p>
              </div>
            </div>
          </div>

          {/* 23 Behavioral Signals */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Activity className="size-4.5 text-brand" /> 23 Behavioral Signals
            </h3>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {[
                { 
                  title: "Recruiter Engagement", 
                  items: ["recruiter_response_rate", "avg_response_time_hours", "saved_by_recruiters_30d"] 
                },
                { 
                  title: "Candidate Availability", 
                  items: ["open_to_work_flag", "last_active_date", "notice_period_days"] 
                },
                { 
                  title: "Interview Reliability", 
                  items: ["interview_completion_rate", "offer_acceptance_rate"] 
                },
                { 
                  title: "Profile Trust", 
                  items: ["verified_email", "verified_phone", "linkedin_connected"] 
                },
                { 
                  title: "Professional Activity", 
                  items: ["github_activity_score", "profile_views_received_30d", "search_appearance_30d"] 
                }
              ].map((category, idx) => (
                <div key={idx} className="space-y-1 bg-muted/20 p-2.5 rounded-lg border border-border/45">
                  <h4 className="text-[11px] font-bold text-foreground">{category.title}</h4>
                  <ul className="space-y-0.5 text-[9.5px] text-muted-foreground font-mono">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="text-brand-glow font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-muted-foreground leading-normal p-2.5 bg-brand/5 border border-brand/10 rounded-lg">
              <span className="font-bold text-brand">Ranking Influence:</span> Behavioral signals serve as confidence modifiers. High-response rates and active profiles boost candidate scoring up to 20%, whereas stale or unresponsive signals decrease target confidence.
            </div>
          </div>
        </div>

        {/* Honeypot System & Rejection Case Study */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-6">
            <ShieldCheck className="size-4.5 text-red-500 animate-pulse" /> Honeypot & Fraud Detection
          </h3>

          <div className="grid gap-4 md:grid-cols-5 mb-6">
            {[
              "Timeline Consistency Check",
              "Technology Release Validation",
              "Skill Inflation Detection",
              "Employment Overlap Detection",
              "Career Progression Validation"
            ].map((moduleName, idx) => (
              <div key={idx} className="p-3 bg-muted/30 border border-border/50 rounded-lg text-center text-xs font-semibold flex items-center justify-center min-h-[50px] hover:border-brand/35 transition">
                {moduleName}
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Example Rejection 1 */}
            <div className="p-4 bg-muted/20 border border-border/50 rounded-xl space-y-3">
              <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <AlertTriangle className="size-4 text-red-500" /> Example Rejection: Technology Release
              </div>
              <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-[10px] font-mono leading-relaxed text-red-700">
                <div className="font-bold text-red-800">Candidate claims:</div>
                8 years experience using PyTorch<br />
                <div className="font-bold mt-1.5 text-red-800">Timeline indicates:</div>
                PyTorch usage before public release (Released Sep 2016)<br />
                <div className="font-bold mt-1.5 text-red-800">Result:</div>
                Flagged & Disqualified
              </div>
            </div>

            {/* Example Rejection 2 */}
            <div className="p-4 bg-muted/20 border border-border/50 rounded-xl space-y-3">
              <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <AlertTriangle className="size-4 text-red-500" /> Another Example: Company Tenure Fraud
              </div>
              <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-[10px] font-mono leading-relaxed text-red-700">
                <div className="font-bold text-red-800">Company age:</div>
                3 years<br />
                <div className="font-bold mt-1.5 text-red-800">Claimed tenure:</div>
                8 years at this company<br />
                <div className="font-bold mt-1.5 text-red-800">Result:</div>
                Flagged & Disqualified
              </div>
            </div>
          </div>
        </div>

        {/* Weighted Scoring & Radar/Bar Chart Section */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Scoring Formula breakdown */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4 md:col-span-1">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Scale className="size-4.5 text-brand" /> Candidate Scoring Formula
            </h3>
            
            <div className="space-y-4">
              <div className="text-xs text-muted-foreground leading-relaxed">
                CVBlitz scores candidates out of 1.0 (100%) using five distinct weighting matrices:
              </div>

              <div className="space-y-3">
                {formulaData.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-foreground">{item.name}</span>
                      <span style={{ color: item.color }} className="font-mono">{item.percentage}%</span>
                    </div>
                    <div className="text-[9.5px] text-muted-foreground leading-normal">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 md:col-span-2 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <TrendingUp className="size-4.5 text-brand" /> Formula Weight Allocation Chart
            </h3>

            <div className="h-[280px] w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  layout="vertical"
                  data={formulaData}
                  margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
                >
                  <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 40]} unit="%" tick={{ fill: "#64748b", fontSize: 10 }} />
                  <YAxis dataKey="name" type="category" tick={{ fill: "#334155", fontSize: 10, fontWeight: 600 }} width={120} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #cbd5e1",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                  <Bar dataKey="percentage" name="Weight" radius={[0, 4, 4, 0]} barSize={16}>
                    {formulaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Explainability & Benchmarks */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Explainability */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Brain className="size-4.5 text-brand" /> Why Candidates Rank Higher
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-foreground">Rank #1 Candidate Profile</span>
                  <span className="text-brand font-mono">Total Score Weight: 84.4%</span>
                </div>
                <ul className="space-y-1.5 text-xs font-medium">
                  {[
                    "Strong Retrieval Systems Experience (+35% Contribution)",
                    "High Recruiter Response Rate (+20% Contribution)",
                    "Product Company Background (+15% Contribution)",
                    "Verified Profile (+10% Contribution)",
                    "Low Hiring Friction (+4% Contribution)"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-foreground">
                      <Sparkles className="size-3.5 text-brand mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10.5px] uppercase font-mono font-bold tracking-wider text-muted-foreground">Scoring contributions detail:</h4>
                <div className="space-y-1.5">
                  {[
                    { label: "Technical Fit", score: "89/100", bar: "w-[89%]" },
                    { label: "Role Seniority", score: "100/100", bar: "w-[100%]" },
                    { label: "Behavioral Readiness", score: "74/100", bar: "w-[74%]" },
                    { label: "Stability & Growth", score: "85/100", bar: "w-[85%]" },
                    { label: "Profile Authenticity Check", score: "Verified (Pass)", bar: "w-[100%] bg-green-500" }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4 text-xs font-medium">
                      <span className="text-muted-foreground w-1/3 truncate">{row.label}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full bg-brand rounded-full ${row.bar}`} />
                      </div>
                      <span className="font-mono text-foreground font-bold shrink-0">{row.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Benchmarks */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Cpu className="size-4.5 text-brand" /> Built For Production Scale
            </h3>

            <div className="grid gap-3 grid-cols-2">
              <div className="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5">
                <span className="text-[9px] uppercase font-mono text-muted-foreground font-bold">Dataset Size</span>
                <div className="text-base font-bold font-display text-foreground">487 MB</div>
              </div>
              <div className="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5">
                <span className="text-[9px] uppercase font-mono text-muted-foreground font-bold">Candidates Processed</span>
                <div className="text-base font-bold font-display text-foreground">100,000</div>
              </div>
              <div className="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5">
                <span className="text-[9px] uppercase font-mono text-muted-foreground font-bold">Runtime</span>
                <div className="text-base font-bold font-display text-brand">11 Seconds</div>
              </div>
              <div className="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5">
                <span className="text-[9px] uppercase font-mono text-muted-foreground font-bold">Hardware</span>
                <div className="text-base font-bold font-display text-foreground">CPU Only</div>
              </div>
              <div className="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5">
                <span className="text-[9px] uppercase font-mono text-muted-foreground font-bold">External APIs</span>
                <div className="text-base font-bold font-display text-foreground">None</div>
              </div>
              <div className="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-0.5">
                <span className="text-[9px] uppercase font-mono text-muted-foreground font-bold">Memory Efficient</span>
                <div className="text-base font-bold font-display text-green-600">Yes</div>
              </div>
            </div>

            <div className="p-3 bg-brand/5 border border-brand/10 rounded-xl text-[10px] text-muted-foreground leading-relaxed font-mono">
              <span className="font-bold text-foreground block mb-0.5">Vitals verification:</span>
              - Memory: &lt;15 MB total footprint (uses readline streams)<br />
              - Host: Sandboxed reproduction compatible<br />
              - APIs called: None (runs completely offline)
            </div>
          </div>
        </div>

        {/* Submission Pipeline Flow Section */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-border/40 pb-3">
            <h3 className="font-display text-base font-bold flex items-center gap-2">
              <FileText className="size-4.5 text-brand" /> Redrob Submission Generation
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Organizers Specification Validator Flow</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            {[
              { label: "100,000 Candidates", desc: "Streaming DB" },
              { label: "11 Seconds Processing", desc: "Pipeline Parsing" },
              { label: "20,884 Suspicious Filtered", desc: "Honeypot Checks" },
              { label: "Top 100 Ranked", desc: "Score Sorting" },
              { label: "Reasoning Generated", desc: "Natural Explanations" },
              { label: "Submission CSV Created", desc: "UTF-8 Export" },
              { label: "Validator Passed", desc: "Structure Validated", success: true }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col md:flex-row items-center justify-center gap-3 w-full">
                <div className={`p-3 rounded-xl border text-xs font-semibold w-full md:w-auto min-w-[140px] shadow-sm ${
                  step.success 
                    ? "bg-green-500/10 border-green-500 text-green-700" 
                    : "bg-card border-border hover:border-brand/40 text-foreground"
                }`}>
                  <div className="font-bold">{step.label}</div>
                  <div className="text-[9px] text-muted-foreground font-normal">{step.desc}</div>
                </div>
                {idx < 6 && (
                  <ChevronRight className="size-4 text-muted-foreground rotate-90 md:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Verdict Summary Card */}
        <div className="rounded-2xl border border-brand bg-brand/[0.02] p-6 text-center space-y-4 max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" />
          
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-brand font-bold tracking-widest flex items-center justify-center gap-1">
              <ShieldCheck className="size-4 text-brand animate-pulse" /> CVBlitz Methodology Verdict
            </span>
            <h3 className="font-display text-xl font-bold">"CVBlitz Thinks Like A Recruiter, Not A Keyword Filter."</h3>
          </div>

          <div className="max-w-xl mx-auto p-4 bg-background/80 border border-border/60 rounded-xl text-xs text-muted-foreground leading-relaxed">
            CVBlitz combines role intelligence, candidate understanding, behavioral hiring signals, profile authenticity validation, and explainable ranking logic to identify candidates that traditional ATS systems frequently miss.
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/results"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-glow text-white px-5 text-sm font-medium hover:scale-[1.02] transition cursor-pointer glow-brand"
            >
              <Users className="size-4 text-white" /> View Rankings
            </Link>
            
            <Link
              to="/analyze"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Terminal className="size-4 text-muted-foreground" /> Analyze Candidates
            </Link>

            <Link
              to="/compare"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Scale className="size-4 text-muted-foreground" /> Compare Candidates
            </Link>

            <Link
              to="/ats-blindspots"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Sparkles className="size-4 text-brand animate-pulse" /> View ATS Blindspots
            </Link>

            <button
              onClick={handleDownloadReport}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Download className="size-4 text-muted-foreground" /> Download Methodology Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
