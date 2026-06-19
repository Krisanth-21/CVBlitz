import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/Header";
import { triggerFileDownload } from "../lib/utils";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Check,
  X,
  AlertTriangle,
  Award,
  ChevronRight,
  Info,
  Download,
  Bookmark,
  Users,
  Brain,
  ShieldCheck,
  TrendingUp,
  Activity,
  Award as MedalIcon,
  HelpCircle,
  AlertCircle,
  Layers,
  UserCheck,
  Scale,
  Terminal,
  Briefcase,
  Cpu
} from "lucide-react";
import { toast } from "sonner";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";

export const Route = createFileRoute("/fit-intelligence")({
  component: FitIntelligencePage,
});

interface FitProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  roleUnderstanding: number;
  candidateUnderstanding: number;
  fitConfidence: number;
  recruiterTrust: number;
  explicitRequires: { skill: string; explanation: string }[];
  implicitRequires: { skill: string; explanation: string }[];
  candidateCapabilities: { title: string; score: number; desc: string }[];
  fitMatrix: { roleReq: string; candCap: string; score: number }[];
  explicitMatch: { name: string; matched: boolean }[];
  implicitMatch: { name: string; score: number }[];
  skillsMap: { from: string; to: string }[];
  verdictReason: string;
  successPatterns: { subject: string; score: number }[];
  radarData: { subject: string; score: number }[];
  reportMetrics: {
    techFit: number;
    roleFit: number;
    behavioralFit: number;
    growthFit: number;
    ownershipFit: number;
  };
}

const FIT_PROFILES: FitProfile[] = [
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
      { skill: "Python", explanation: "Core software engineering and systems logic language." },
      { skill: "Embeddings", explanation: "Translating words into numerical vector spaces for models." },
      { skill: "Vector Databases", explanation: "Indexing and querying vectors efficiently under load." },
      { skill: "Retrieval Systems", explanation: "First-stage candidate selection and filtering from pools." },
      { skill: "Ranking Frameworks", explanation: "Aggregating signals to score and sort candidates." }
    ],
    implicitRequires: [
      { skill: "Ownership Mindset", explanation: "Autonomously building systems end-to-end for recruiters." },
      { skill: "Product Thinking", explanation: "Understanding user workflow and pipeline performance." },
      { skill: "Fast Execution", explanation: "Willingness to ship scrappy versions to learn fast." },
      { skill: "Cross-functional Collaboration", explanation: "Coordinating with PMs, researchers, and recruiters." },
      { skill: "Production Experience", explanation: "Handling real-world database index refreshes." },
      { skill: "Learning Agility", explanation: "Quick adoption of vector search engines and models." }
    ],
    candidateCapabilities: [
      { title: "Technical Capabilities", score: 92, desc: "High mastery of Python and elastic scaling databases." },
      { title: "Production Experience", score: 88, desc: "Ran search and recommend pipelines for 2M+ users." },
      { title: "Leadership Signals", score: 85, desc: "Led two platform migrations as Principal Architect." },
      { title: "Behavioral Signals", score: 90, desc: "Highly active on GitHub, 94% recruiter response rate." },
      { title: "Growth Trajectory", score: 94, desc: "Double promotion within 3 years at DataFlow." }
    ],
    fitMatrix: [
      { roleReq: "Retrieval Systems", candCap: "Recommendation Systems", score: 91 },
      { roleReq: "Vector Databases", candCap: "Search Infrastructure", score: 87 },
      { roleReq: "Ranking Evaluation", candCap: "Experimentation Frameworks", score: 84 },
      { roleReq: "Ownership", candCap: "System Ownership", score: 93 }
    ],
    explicitMatch: [
      { name: "Python", matched: true },
      { name: "Embeddings", matched: true },
      { name: "Vector Databases", matched: true },
      { name: "Retrieval Systems", matched: true }
    ],
    implicitMatch: [
      { name: "Ownership", score: 92 },
      { name: "Execution Speed", score: 88 },
      { name: "Product Thinking", score: 85 },
      { name: "Learning Agility", score: 91 },
      { name: "Leadership Potential", score: 78 }
    ],
    skillsMap: [
      { from: "Recommendation Systems", to: "Retrieval Systems" },
      { from: "Search Infrastructure", to: "Ranking Systems" },
      { from: "Feature Engineering", to: "Embeddings Pipeline Design" },
      { from: "Data Quality Frameworks", to: "Evaluation Systems" }
    ],
    verdictReason: "This candidate does not simply match the keywords in the job description. Their experience building large-scale recommendation and search infrastructure demonstrates capabilities highly relevant to retrieval systems. Their career progression, production ownership, and engineering depth align strongly with the actual success profile required for the role.",
    successPatterns: [
      { subject: "Ownership Alignment", score: 92 },
      { subject: "Execution Alignment", score: 88 },
      { subject: "Technical Depth Alignment", score: 94 },
      { subject: "Product Alignment", score: 85 },
      { subject: "Growth Alignment", score: 91 }
    ],
    radarData: [
      { subject: "Ownership Alignment", score: 92 },
      { subject: "Execution Alignment", score: 88 },
      { subject: "Technical Depth Alignment", score: 94 },
      { subject: "Product Alignment", score: 85 },
      { subject: "Growth Alignment", score: 91 }
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
      { skill: "Python", explanation: "Core software engineering and systems logic language." },
      { skill: "Embeddings", explanation: "Translating words into numerical vector spaces for models." },
      { skill: "Vector Databases", explanation: "Indexing and querying vectors efficiently under load." },
      { skill: "Retrieval Systems", explanation: "First-stage candidate selection and filtering from pools." },
      { skill: "Ranking Frameworks", explanation: "Aggregating signals to score and sort candidates." }
    ],
    implicitRequires: [
      { skill: "Ownership Mindset", explanation: "Autonomously building systems end-to-end for recruiters." },
      { skill: "Product Thinking", explanation: "Understanding user workflow and pipeline performance." },
      { skill: "Fast Execution", explanation: "Willingness to ship scrappy versions to learn fast." },
      { skill: "Cross-functional Collaboration", explanation: "Coordinating with PMs, researchers, and recruiters." },
      { skill: "Production Experience", explanation: "Handling real-world database index refreshes." },
      { skill: "Learning Agility", explanation: "Quick adoption of vector search engines and models." }
    ],
    candidateCapabilities: [
      { title: "Technical Capabilities", score: 96, desc: "Built open source compilers, deep systems performance." },
      { title: "Production Experience", score: 82, desc: "Maintained platform servers with 99.99% uptime." },
      { title: "Leadership Signals", score: 80, desc: "Maintains active libraries with 5,000+ stars." },
      { title: "Behavioral Signals", score: 95, desc: "Top 1% git activity signals, rapid responder." },
      { title: "Growth Trajectory", score: 85, desc: "Quick progression from developer to core platform architect." }
    ],
    fitMatrix: [
      { roleReq: "Retrieval Systems", candCap: "Low-level Network I/O", score: 85 },
      { roleReq: "Vector Databases", candCap: "Custom Memory Indexing", score: 92 },
      { roleReq: "Ranking Evaluation", candCap: "Hardware Profiling", score: 80 },
      { roleReq: "Ownership", candCap: "Lib Maintainership", score: 95 }
    ],
    explicitMatch: [
      { name: "Python", matched: true },
      { name: "Embeddings", matched: false },
      { name: "Vector Databases", matched: false },
      { name: "Retrieval Systems", matched: false }
    ],
    implicitMatch: [
      { name: "Ownership", score: 96 },
      { name: "Execution Speed", score: 95 },
      { name: "Product Thinking", score: 68 },
      { name: "Learning Agility", score: 98 },
      { name: "Leadership Potential", score: 82 }
    ],
    skillsMap: [
      { from: "Open Source Libs", to: "Advanced Algorithm Design" },
      { from: "Custom Container Hacks", to: "Infrastructure Engineering" },
      { from: "Assembly Optimization", to: "Performance Scaling" },
      { from: "Scripting & Automation", to: "CI/CD & MLOps Pipelines" }
    ],
    verdictReason: "Marcus lacks commercial machine learning brand names in his profile. However, his heavy systems programming and open-source contributions demonstrate elite learning agility and system design capabilities. He possesses the raw hardware-level debugging skills that founding teams desperately need.",
    successPatterns: [
      { subject: "Ownership Alignment", score: 96 },
      { subject: "Execution Alignment", score: 95 },
      { subject: "Technical Depth Alignment", score: 97 },
      { subject: "Product Alignment", score: 68 },
      { subject: "Growth Alignment", score: 88 }
    ],
    radarData: [
      { subject: "Ownership Alignment", score: 96 },
      { subject: "Execution Alignment", score: 95 },
      { subject: "Technical Depth Alignment", score: 97 },
      { subject: "Product Alignment", score: 68 },
      { subject: "Growth Alignment", score: 88 }
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
      { skill: "Python", explanation: "Core software engineering and systems logic language." },
      { skill: "Embeddings", explanation: "Translating words into numerical vector spaces for models." },
      { skill: "Vector Databases", explanation: "Indexing and querying vectors efficiently under load." },
      { skill: "Retrieval Systems", explanation: "First-stage candidate selection and filtering from pools." },
      { skill: "Ranking Frameworks", explanation: "Aggregating signals to score and sort candidates." }
    ],
    implicitRequires: [
      { skill: "Ownership Mindset", explanation: "Autonomously building systems end-to-end for recruiters." },
      { skill: "Product Thinking", explanation: "Understanding user workflow and pipeline performance." },
      { skill: "Fast Execution", explanation: "Willingness to ship scrappy versions to learn fast." },
      { skill: "Cross-functional Collaboration", explanation: "Coordinating with PMs, researchers, and recruiters." },
      { skill: "Production Experience", explanation: "Handling real-world database index refreshes." },
      { skill: "Learning Agility", explanation: "Quick adoption of vector search engines and models." }
    ],
    candidateCapabilities: [
      { title: "Technical Capabilities", score: 95, desc: "Ph.D. level understanding of NLP models and vector projections." },
      { title: "Production Experience", score: 84, desc: "Shipped genomic forecasting models to clinical platforms." },
      { title: "Leadership Signals", score: 78, desc: "Supervised 3 researchers on neural search publications." },
      { title: "Behavioral Signals", score: 88, desc: "Consistent active contributor, highly detailed verifications." },
      { title: "Growth Trajectory", score: 90, desc: "Expanded lab forecasting efficiency by 3x in 2 years." }
    ],
    fitMatrix: [
      { roleReq: "Retrieval Systems", candCap: "Similarity Research", score: 95 },
      { roleReq: "Vector Databases", candCap: "Mathematical Embeddings", score: 91 },
      { roleReq: "Ranking Evaluation", candCap: "Statistical Testing", score: 88 },
      { roleReq: "Ownership", candCap: "Algorithm Building", score: 85 }
    ],
    explicitMatch: [
      { name: "Python", matched: true },
      { name: "Embeddings", matched: true },
      { name: "Vector Databases", matched: false },
      { name: "Retrieval Systems", matched: false }
    ],
    implicitMatch: [
      { name: "Ownership", score: 85 },
      { name: "Execution Speed", score: 84 },
      { name: "Product Thinking", score: 78 },
      { name: "Learning Agility", score: 95 },
      { name: "Leadership Potential", score: 80 }
    ],
    skillsMap: [
      { from: "Similarity Research", to: "Vector Search & Embeddings" },
      { from: "Clinical Forecasting", to: "Production Predictive Models" },
      { from: "Offline Model Evals", to: "Ranking Evaluation Frameworks" },
      { from: "Algorithmic Math", to: "Custom LLM Fine-Tuning" }
    ],
    verdictReason: "Elena brings high theoretical and practical modeling expertise. While she lacks commercial SaaS toolnames like LangChain or Pinecone, her foundational knowledge in implementing custom similarity search indices represents a deeper engineering capability than standard API integration.",
    successPatterns: [
      { subject: "Ownership Alignment", score: 85 },
      { subject: "Execution Alignment", score: 84 },
      { subject: "Technical Depth Alignment", score: 96 },
      { subject: "Product Alignment", score: 78 },
      { subject: "Growth Alignment", score: 92 }
    ],
    radarData: [
      { subject: "Ownership Alignment", score: 85 },
      { subject: "Execution Alignment", score: 84 },
      { subject: "Technical Depth Alignment", score: 96 },
      { subject: "Product Alignment", score: 78 },
      { subject: "Growth Alignment", score: 92 }
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
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProfile = FIT_PROFILES[selectedIdx];
  const [shortlisted, setShortlisted] = useState<string[]>([]);

  const handleToggleShortlist = (name: string) => {
    setShortlisted(prev => {
      const exists = prev.includes(name);
      if (exists) {
        toast.info(`${name} removed from shortlist`);
        return prev.filter(n => n !== name);
      } else {
        toast.success(`${name} added to shortlist!`, {
          description: "This candidate has been added to review cohort."
        });
        return [...prev, name];
      }
    });
  };

  const handleExportAnalysis = (name: string) => {
    const profile = FIT_PROFILES.find(p => p.name === name);
    if (!profile) {
      toast.error("Profile not found.");
      return;
    }

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          const explicitReqsStr = profile.explicitRequires.map(e => `- **${e.skill}**: ${e.explanation}`).join('\n');
          const implicitReqsStr = profile.implicitRequires.map(i => `- **${i.skill}**: ${i.explanation}`).join('\n');
          const successPatternsStr = profile.successPatterns.map(s => `- **${s.subject}**: ${s.score}%`).join('\n');
          
          const content = `# CVBlitz Role-Candidate Fit Analysis Report

Semantic alignment evaluation of **${profile.name}** against requirements.
Generated: ${new Date().toLocaleDateString()}

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
          triggerFileDownload(`${profile.name.replace(/\s+/g, '_')}_fit_analysis.md`, content);
          resolve(true);
        }, 1200);
      }),
      {
        loading: `Generating Fit Intelligence PDF for ${name}...`,
        success: `Role-Fit analysis exported for ${name}!`,
        error: "Failed to export report."
      }
    );
  };

  const handleCompare = (name: string) => {
    toast.success(`Staging ${name} in Comparison Engine...`, {
      description: "Opening compare dashboard..."
    });
    setTimeout(() => {
      navigate({ to: "/compare" });
    }, 1000);
  };

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
      <Header showBack backTo="/" />

      <main className="mx-auto max-w-7xl px-6 pt-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider">
              <ShieldCheck className="size-3.5" /> Deep Contextual Retrieval Analysis
            </div>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
              Role-Candidate Fit Intelligence
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
              Understand why a candidate truly fits the role beyond keywords, titles, and ATS filters.
            </p>
          </div>

          {/* Candidate selector */}
          <div className="flex items-center gap-2 bg-muted/40 p-1.5 rounded-xl border border-border/50 max-w-md">
            {FIT_PROFILES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? "bg-background text-foreground shadow-sm border border-border/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                }`}
              >
                {p.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Intelligence Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35">
            <div className="space-y-1">
              <span className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                Role Understanding
              </span>
              <div className="font-display text-2xl font-bold text-gradient tabular-nums">{activeProfile.roleUnderstanding}%</div>
            </div>
            <div className="grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand">
              <Briefcase className="size-4.5" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35">
            <div className="space-y-1">
              <span className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                Candidate Understanding
              </span>
              <div className="font-display text-2xl font-bold text-gradient tabular-nums">{activeProfile.candidateUnderstanding}%</div>
            </div>
            <div className="grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand">
              <Layers className="size-4.5" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35">
            <div className="space-y-1">
              <span className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                Fit Confidence
              </span>
              <div className="font-display text-2xl font-bold text-gradient tabular-nums">{activeProfile.fitConfidence}%</div>
            </div>
            <div className="grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand">
              <Brain className="size-4.5 animate-pulse" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md p-5 flex items-center justify-between transition hover:border-brand/35">
            <div className="space-y-1">
              <span className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                Recruiter Trust
              </span>
              <div className="font-display text-2xl font-bold text-gradient tabular-nums">{activeProfile.recruiterTrust}%</div>
            </div>
            <div className="grid size-9 place-items-center rounded-xl bg-brand/5 border border-brand/10 text-brand">
              <ShieldCheck className="size-4.5" />
            </div>
          </div>
        </div>

        {/* Requirements split analysis */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Explicit Requirements */}
          <div className="rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Terminal className="size-4.5 text-muted-foreground" /> Explicit Requirements (Stated)
            </h3>
            
            <div className="space-y-3">
              {activeProfile.explicitRequires.map((r, idx) => (
                <div key={idx} className="p-3 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <Check className="size-3.5 text-green-600 shrink-0" />
                    <span>{r.skill}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground pl-5 leading-normal">{r.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implicit Requirements */}
          <div className="rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Sparkles className="size-4.5 text-brand" /> Implicit Requirements (Inferred)
            </h3>

            <div className="space-y-3">
              {activeProfile.implicitRequires.map((r, idx) => (
                <div key={idx} className="p-3 bg-brand/[0.02] border border-brand/15 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <Sparkles className="size-3.5 text-brand shrink-0 animate-pulse" />
                    <span>{r.skill}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground pl-5 leading-normal">{r.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What the Candidate Brings */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-5">
            <UserCheck className="size-4.5 text-brand" /> What The Candidate Actually Brings
          </h3>

          <div className="grid gap-4 md:grid-cols-5">
            {activeProfile.candidateCapabilities.map((cap, idx) => (
              <div key={idx} className="p-4 bg-background/50 border border-border/60 rounded-xl flex flex-col justify-between space-y-3 shadow-sm hover:border-brand/30 transition">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">{cap.title}</h4>
                  <p className="text-[9.5px] text-muted-foreground leading-normal">{cap.desc}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-[9.5px] font-mono font-medium">
                    <span>Alignment</span>
                    <span>{cap.score}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-brand" style={{ width: `${cap.score}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit vs Implicit Match Visual Panels */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Explicit Match Panel */}
          <div className="rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Check className="size-4.5 text-green-600" /> Explicit Keyword Matching
            </h3>

            <div className="grid gap-3 grid-cols-2">
              {activeProfile.explicitRequires.slice(0, 4).map((x) => (
                <div key={x.skill} className="p-3 bg-muted/30 border border-border/50 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">{x.skill}</span>
                  <div className="size-5 rounded-full bg-green-500/10 border border-green-500/20 grid place-items-center">
                    <Check className="size-3 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-muted-foreground leading-relaxed pt-2">
              Standard ATS checks look strictly at this panel, matching text tags literally and ignoring wider conceptual synonyms.
            </div>
          </div>

          {/* Implicit Match Panel */}
          <div className="rounded-2xl border border-border/65 bg-card/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
              <Sparkles className="size-4.5 text-brand" /> Implicit Success Pattern Matching
            </h3>

            <div className="space-y-2.5">
              {activeProfile.implicitMatch.map((m) => (
                <div key={m.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">{m.name}</span>
                    <span className="text-brand font-mono">{m.score}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden border border-border/45">
                    <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: `${m.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fit Intelligence Matrix */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-4">
            <Scale className="size-4.5 text-brand" /> Fit Intelligence Matrix
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs min-w-[600px]">
              <thead>
                <tr className="border-b border-border/40 bg-muted/20 text-muted-foreground font-semibold">
                  <th className="p-3 w-1/3">Role Requirement</th>
                  <th className="p-3 w-1/3 border-l border-border/30">Candidate Capability</th>
                  <th className="p-3 w-1/3 border-l border-border/30">Alignment Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 font-medium">
                {activeProfile.fitMatrix.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-3 text-muted-foreground">{item.roleReq}</td>
                    <td className="p-3 border-l border-border/30 text-foreground">{item.candCap}</td>
                    <td className="p-3 border-l border-border/30">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-brand font-semibold">{item.score}%</span>
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden max-w-[120px]">
                          <div className="h-full bg-brand" style={{ width: `${item.score}%` }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Capability Translation Engine */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-6">
            <Layers className="size-4.5 text-brand" /> How CVBlitz Interprets Transferable Skills
          </h3>

          <div className="relative grid grid-cols-11 items-center max-w-3xl mx-auto my-6">
            {/* Candidate Experience */}
            <div className="col-span-4 space-y-4 z-10">
              <div className="text-center font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Candidate Experience</div>
              {activeProfile.skillsMap.map((skill, idx) => (
                <div key={idx} className="p-3 bg-muted/40 border border-border/60 rounded-xl text-center text-xs font-medium text-muted-foreground h-11 flex items-center justify-center shadow-sm">
                  {skill.from}
                </div>
              ))}
            </div>

            {/* Connection dashes */}
            <div className="col-span-3 h-full relative">
              <svg className="absolute inset-0 w-full h-full" style={{ minHeight: "260px" }} viewBox="0 0 100 240" fill="none" preserveAspectRatio="none">
                <path d="M 0,22 L 100,22" stroke="#6366f1" strokeWidth="1.5" className="animated-flow-line" />
                <circle cx="50" cy="22" r="3" fill="#6366f1" />

                <path d="M 0,77 Q 50,77 100,77" stroke="#6366f1" strokeWidth="1.5" className="animated-flow-line" />
                <circle cx="50" cy="77" r="3" fill="#6366f1" />

                <path d="M 0,132 Q 50,132 100,132" stroke="#6366f1" strokeWidth="1.5" className="animated-flow-line" />
                <circle cx="50" cy="132" r="3" fill="#6366f1" />

                <path d="M 0,187 Q 50,187 100,187" stroke="#6366f1" strokeWidth="1.5" className="animated-flow-line" />
                <circle cx="50" cy="187" r="3" fill="#6366f1" />
              </svg>
            </div>

            {/* Equivalent Capability */}
            <div className="col-span-4 space-y-4 z-10">
              <div className="text-center font-mono text-[9px] uppercase tracking-wider text-brand font-bold">Equivalent Role Capability</div>
              {activeProfile.skillsMap.map((skill, idx) => (
                <div key={idx} className="p-3 bg-brand/5 border border-brand/20 rounded-xl text-center text-xs font-semibold text-foreground h-11 flex items-center justify-center shadow-sm">
                  {skill.to}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Radar Charts & Recruiter Reasoning Engine */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Radar Chart */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
            <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-4">
              <TrendingUp className="size-4.5 text-brand" /> Role Success Pattern Analysis
            </h3>

            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={activeProfile.radarData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#64748b", fontSize: 10, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 9 }} />
                  
                  <Radar
                    name={activeProfile.name}
                    dataKey="score"
                    stroke="#6366f1"
                    fill="rgba(99, 102, 241, 0.15)"
                    fillOpacity={0.5}
                    strokeWidth={2}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #cbd5e1",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Why This Candidate Fits */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3">
                <Brain className="size-4.5 text-brand" /> Why This Candidate Fits
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium bg-muted/20 p-4 rounded-xl border border-border/50">
                "{activeProfile.verdictReason}"
              </p>
            </div>

            {/* Recruiter Trust Layer */}
            <div className="p-4 border border-brand/15 bg-brand/[0.01] rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-brand/10 pb-2">
                <ShieldCheck className="size-4 text-brand animate-pulse" /> Recruiter Trust Layer
              </h4>
              
              <div className="grid grid-cols-2 gap-3 text-xs leading-normal">
                <div className="space-y-1">
                  <span className="text-[10px] text-muted-foreground block">Would ATS Recommend?</span>
                  <span className="font-bold text-red-500 flex items-center gap-1">
                    <X className="size-3.5 shrink-0" /> No (Term mismatch)
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-muted-foreground block">Would CVBlitz Recommend?</span>
                  <span className="font-bold text-green-600 flex items-center gap-1">
                    <Check className="size-3.5 shrink-0" /> Yes (High capability)
                  </span>
                </div>
              </div>

              <p className="text-[9.5px] text-muted-foreground border-t border-brand/10 pt-2 leading-relaxed">
                Traditional ATS systems evaluate keyword presence. CVBlitz evaluates demonstrated capability, transferable expertise, behavioral signals, and role success patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Fit Confidence Report */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-5">
            <Activity className="size-4.5 text-brand" /> Fit Confidence Report
          </h3>
          
          <div className="grid gap-4 sm:grid-cols-5 text-center">
            <div className="p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm">
              <div className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold">Technical Fit</div>
              <div className="text-2xl font-bold font-display text-foreground">{activeProfile.reportMetrics.techFit}%</div>
            </div>

            <div className="p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm">
              <div className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold">Role Fit</div>
              <div className="text-2xl font-bold font-display text-foreground">{activeProfile.reportMetrics.roleFit}%</div>
            </div>

            <div className="p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm">
              <div className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold">Behavioral Fit</div>
              <div className="text-2xl font-bold font-display text-foreground">{activeProfile.reportMetrics.behavioralFit}%</div>
            </div>

            <div className="p-3 bg-muted/30 border border-border/60 rounded-xl space-y-1.5 shadow-sm">
              <div className="text-[9.5px] uppercase tracking-wider text-muted-foreground font-semibold">Growth Fit</div>
              <div className="text-2xl font-bold font-display text-foreground">{activeProfile.reportMetrics.growthFit}%</div>
            </div>

            <div className="p-3 bg-brand/5 border border-brand/10 rounded-xl space-y-1.5 shadow-sm">
              <div className="text-[9.5px] uppercase tracking-wider text-brand font-bold">Ownership Fit</div>
              <div className="text-2xl font-bold font-display text-gradient">{activeProfile.reportMetrics.ownershipFit}%</div>
            </div>
          </div>
          
          <div className="mt-5 border-t border-border/40 pt-4 flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">Composite Recruiter Evaluation Confidence:</span>
            <span className="font-bold text-brand font-mono text-sm">{activeProfile.fitConfidence}%</span>
          </div>
        </div>

        {/* Final Intelligence Verdict */}
        <div className="rounded-2xl border border-brand bg-brand/[0.02] p-6 text-center space-y-4 max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" />
          
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-brand font-bold tracking-widest flex items-center justify-center gap-1">
              <ShieldCheck className="size-4 text-brand animate-pulse" /> CVBlitz Role-Fit Verdict
            </span>
            <h3 className="font-display text-xl font-bold">Overall Verdict: Strong Match</h3>
            <p className="text-sm font-semibold text-green-600">Surpassed all behavioral and technical parameters.</p>
          </div>

          <div className="max-w-xl mx-auto p-4 bg-background/80 border border-border/60 rounded-xl text-xs text-muted-foreground leading-relaxed">
            "This candidate demonstrates strong alignment with both the explicit requirements and the hidden success patterns of the role. While some keywords may be missing, the underlying capabilities, career trajectory, and production experience suggest a high probability of success."
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to={`/candidate/${activeProfile.id}`}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-brand text-white hover:scale-[1.01] px-5 text-sm font-semibold transition-all cursor-pointer shadow-sm"
            >
              <Brain className="size-4 text-white" /> View Candidate Report
            </Link>

            <button
              onClick={() => handleToggleShortlist(activeProfile.name)}
              className={`inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition cursor-pointer ${
                shortlisted.includes(activeProfile.name)
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              <Bookmark className="size-4" /> {shortlisted.includes(activeProfile.name) ? "Shortlisted" : "Add to Shortlist"}
            </button>
            
            <button
              onClick={() => handleCompare(activeProfile.name)}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Users className="size-4 text-muted-foreground" /> Compare Candidates
            </button>

            <button
              onClick={() => handleExportAnalysis(activeProfile.name)}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Download className="size-4 text-muted-foreground" /> Export Fit Analysis
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
