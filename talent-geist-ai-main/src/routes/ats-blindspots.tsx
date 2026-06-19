import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/Header";
import { triggerFileDownload } from "../lib/utils";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  TrendingUp,
  Brain,
  ShieldCheck,
  Check,
  X,
  AlertTriangle,
  Award,
  ChevronRight,
  Info,
  Download,
  Share2,
  Bookmark,
  Users,
  Search,
  BookOpen,
  ArrowRight,
  Activity,
  Award as MedalIcon,
  HelpCircle,
  AlertCircle,
  Layers,
  UserCheck,
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

export const Route = createFileRoute("/ats-blindspots")({
  component: ATSBlindspotPage,
});

interface CandidateProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  atsRank: number;
  cvbRank: number;
  difference: number;
  confidence: number;
  keywordMatch: number;
  capabilityMatch: number;
  similarityScore: number;
  atsReasons: string[];
  cvbReasons: string[];
  failedToUnderstand: string;
  hiddenTalentReport: string;
  verdictReason: string;
  skillsMap: { from: string; to: string }[];
  radarData: { subject: string; score: number }[];
  similarityPatterns: string[];
}

const CANDIDATE_PROFILES: CandidateProfile[] = [
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
      { from: "Recommendation Systems", to: "Retrieval Systems" },
      { from: "Search Infrastructure", to: "Ranking Systems" },
      { from: "Feature Engineering", to: "Embeddings Pipeline Design" },
      { from: "Data Quality Systems", to: "Evaluation Frameworks" }
    ],
    radarData: [
      { subject: "Career Growth", score: 88 },
      { subject: "Technical Ownership", score: 92 },
      { subject: "Product Thinking", score: 85 },
      { subject: "Learning Velocity", score: 94 },
      { subject: "Engineering Depth", score: 90 }
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
      { from: "Open Source Libs", to: "Advanced Algorithm Design" },
      { from: "Custom Container Hacks", to: "Infrastructure Engineering" },
      { from: "Assembly Optimization", to: "Performance Scaling" },
      { from: "Scripting & Automation", to: "CI/CD & MLOps Pipelines" }
    ],
    radarData: [
      { subject: "Career Growth", score: 72 },
      { subject: "Technical Ownership", score: 95 },
      { subject: "Product Thinking", score: 65 },
      { subject: "Learning Velocity", score: 98 },
      { subject: "Engineering Depth", score: 97 }
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
      { from: "Similarity Research", to: "Vector Search & Embeddings" },
      { from: "Clinical Forecasting", to: "Production Predictive Models" },
      { from: "Offline Model Evals", to: "Ranking Evaluation Frameworks" },
      { from: "Algorithmic Math", to: "Custom LLM Fine-Tuning" }
    ],
    radarData: [
      { subject: "Career Growth", score: 80 },
      { subject: "Technical Ownership", score: 85 },
      { subject: "Product Thinking", score: 78 },
      { subject: "Learning Velocity", score: 95 },
      { subject: "Engineering Depth", score: 96 }
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
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCandidate = CANDIDATE_PROFILES[selectedIdx];
  const [shortlisted, setShortlisted] = useState<string[]>([]);

  const handleToggleShortlist = (name: string) => {
    setShortlisted(prev => {
      const exists = prev.includes(name);
      if (exists) {
        toast.info(`${name} removed from shortlist`);
        return prev.filter(n => n !== name);
      } else {
        toast.success(`${name} added to shortlist!`, {
          description: "This candidate has been flagged for recruiter review."
        });
        return [...prev, name];
      }
    });
  };

  const handleExportReport = (name: string) => {
    const profile = CANDIDATE_PROFILES.find(p => p.name === name);
    if (!profile) {
      toast.error("Profile not found.");
      return;
    }

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          const atsReasonsStr = profile.atsReasons.map(r => `- ${r}`).join('\n');
          const cvbReasonsStr = profile.cvbReasons.map(r => `- ${r}`).join('\n');
          const skillsMapStr = profile.skillsMap.map(s => `- **${s.from}** ➔ **${s.to}**`).join('\n');
          const radarDataStr = profile.radarData.map(r => `- **${r.subject}**: ${r.score}/100`).join('\n');

          const content = `# CVBlitz ATS Blindspot Discovery Report

Recruiter dossier showcasing lexical match gaps for **${profile.name}**
Generated: ${new Date().toLocaleDateString()}

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
          triggerFileDownload(`${profile.name.replace(/\s+/g, '_')}_ats_discovery_report.md`, content);
          resolve(true);
        }, 1200);
      }),
      {
        loading: `Generating ATS Blindspot dossier for ${name}...`,
        success: `ATS Discovery Report downloaded for ${name}!`,
        error: "Failed to export report."
      }
    );
  };

  const handleCompareCandidate = (name: string) => {
    toast.success(`Staging ${name} for comparison against top rankers.`, {
      description: "Redirecting to compare dashboard..."
    });
    // Redirect to compare page with the candidate loaded
    setTimeout(() => {
      navigate({ to: "/compare" });
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground pb-24">
      {/* Dynamic inline styles for SVG animation */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animated-dash-line {
          stroke-dasharray: 6, 4;
          animation: dash 1.5s linear infinite;
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
              <Brain className="size-3.5 animate-pulse" /> Core CVBlitz Philosophy
            </div>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
              ATS Blindspot Analyzer
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
              Discover candidates traditional ATS systems would overlook — and understand exactly why CVBlitz surfaced them.
            </p>
          </div>

          {/* Candidate selector */}
          <div className="flex items-center gap-2 bg-muted/40 p-1.5 rounded-xl border border-border/50 max-w-md">
            {CANDIDATE_PROFILES.map((p, idx) => (
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

        {/* Hero Insight Card */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
          
          <div className="grid gap-6 md:grid-cols-4 items-center">
            <div className="space-y-1.5">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                <Info className="size-3" /> Candidate Highlighted
              </div>
              <h2 className="font-display text-2xl font-bold">{activeCandidate.name}</h2>
              <p className="text-xs text-muted-foreground">{activeCandidate.role} at <span className="font-medium text-foreground">{activeCandidate.company}</span></p>
            </div>

            <div className="grid grid-cols-3 md:col-span-3 gap-4 border-l border-border/40 pl-0 md:pl-6">
              <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/10 text-center">
                <div className="text-[9px] uppercase tracking-wider text-red-500/80 font-bold">ATS Rank</div>
                <div className="mt-1 font-display text-2xl font-bold text-red-500">#{activeCandidate.atsRank}</div>
              </div>

              <div className="p-3 bg-green-500/5 rounded-xl border border-green-500/15 text-center">
                <div className="text-[9px] uppercase tracking-wider text-green-500/80 font-bold">CVBlitz Rank</div>
                <div className="mt-1 font-display text-2xl font-bold text-green-600">#{activeCandidate.cvbRank}</div>
              </div>

              <div className="p-3 bg-brand/5 rounded-xl border border-brand/10 text-center relative overflow-hidden">
                <div className="text-[9px] uppercase tracking-wider text-brand font-bold">Ranking Gap</div>
                <div className="mt-1 font-display text-2xl font-bold text-gradient">+{activeCandidate.difference}</div>
                <div className="text-[8px] text-muted-foreground">Positions Gained</div>
              </div>
            </div>
          </div>

          {/* Ranking Gap Visualizer */}
          <div className="mt-6 pt-4 border-t border-border/40">
            <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5 font-medium">
              <span>ATS FILTER (Rejected Zone)</span>
              <span className="text-brand font-semibold">Hidden Talent Confidence: {activeCandidate.confidence}%</span>
              <span>CVBLITZ RECOMMEND (Top Candidates)</span>
            </div>
            <div className="relative h-4 bg-muted/60 rounded-full overflow-hidden border border-border/40 p-0.5">
              {/* ATS Zone */}
              <div className="absolute top-0.5 left-0.5 bottom-0.5 bg-red-500/20 rounded-full flex items-center justify-center text-[8px] text-red-600 font-bold px-3 transition-all duration-500" style={{ width: "35%" }}>
                ATS Filtered
              </div>
              {/* Gap Connector */}
              <div className="absolute top-0.5 bottom-0.5 bg-gradient-to-r from-red-500/20 via-brand/40 to-green-500/30 transition-all duration-500" style={{ left: "35%", width: "50%" }}>
                <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              {/* CVBlitz Zone */}
              <div className="absolute top-0.5 right-0.5 bottom-0.5 bg-green-500/20 rounded-full flex items-center justify-center text-[8px] text-green-600 font-bold px-3 transition-all duration-500" style={{ width: "15%" }}>
                Surfaced
              </div>

              {/* Indicator Dot */}
              <div className="absolute top-1/2 size-3.5 bg-brand rounded-full shadow border-2 border-background -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out" style={{ left: "87%" }}>
                <div className="absolute inset-0 rounded-full bg-brand animate-ping opacity-75" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Comparison Section (Split Screen Layout) */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT SIDE: Traditional ATS Analysis */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.01] backdrop-blur-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-red-500/10 pb-4">
              <div className="space-y-0.5">
                <span className="text-[9.5px] uppercase font-mono tracking-wider text-red-500 font-bold">Traditional ATS Filter</span>
                <h3 className="font-display text-lg font-bold text-foreground">Parser Keyword Scan</h3>
              </div>
              <span className="rounded-full bg-red-500/10 px-3 py-1 font-mono text-xs text-red-500 border border-red-500/15 font-semibold">
                Status: Rejected
              </span>
            </div>

            <div className="p-4 bg-red-500/[0.02] border border-red-500/5 rounded-xl space-y-3">
              <h4 className="text-xs font-semibold text-red-500/90 flex items-center gap-1.5">
                <AlertCircle className="size-4 shrink-0" /> ATS Elimination Triggers
              </h4>
              <ul className="space-y-2.5 text-xs">
                {activeCandidate.atsReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-[11px] text-muted-foreground/80 leading-relaxed border-t border-red-500/5 pt-3">
              Traditional ATS algorithms evaluate profile suitability based strictly on string frequency and exact lexicon mapping, failing to identify matching semantic experience.
            </div>
          </div>

          {/* RIGHT SIDE: CVBlitz Intelligence Analysis */}
          <div className="rounded-2xl border border-green-500/20 bg-green-500/[0.01] backdrop-blur-md p-6 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500/10 border-l border-b border-green-500/20 text-[9px] font-mono text-green-600 font-bold px-2 py-0.5 uppercase tracking-wider rounded-bl-lg">
              Semantic Discovery
            </div>

            <div className="flex items-center justify-between border-b border-green-500/10 pb-4">
              <div className="space-y-0.5">
                <span className="text-[9.5px] uppercase font-mono tracking-wider text-green-600 font-bold">CVBlitz Intelligence</span>
                <h3 className="font-display text-lg font-bold text-foreground">Capability Matching</h3>
              </div>
              <span className="rounded-full bg-green-500/10 px-3 py-1 font-mono text-xs text-green-600 border border-green-500/15 font-semibold">
                Status: Strong Candidate
              </span>
            </div>

            <div className="p-4 bg-green-500/[0.02] border border-green-500/5 rounded-xl space-y-3">
              <h4 className="text-xs font-semibold text-green-600/90 flex items-center gap-1.5">
                <Sparkles className="size-4 text-green-600 shrink-0" /> Surfaced Credentials
              </h4>
              <ul className="space-y-2.5 text-xs">
                {activeCandidate.cvbReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <Check className="size-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[11px] text-muted-foreground/80 leading-relaxed border-t border-green-500/5 pt-3">
              CVBlitz parses work descriptions contextually, evaluating career histories, production responsibilities, and system design complexity.
            </div>
          </div>
        </div>

        {/* Blindspot Intelligence Engine */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {/* What ATS Failed to Understand */}
          <div className="md:col-span-2 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold flex items-center gap-2 border-b border-border/40 pb-3">
                <Brain className="size-5 text-brand" /> What ATS Failed To Understand
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {activeCandidate.failedToUnderstand}
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-background/50 border border-border/50 rounded-xl flex items-start gap-3">
              <Info className="size-4 text-brand shrink-0 mt-0.5" />
              <div className="text-[11px] text-muted-foreground leading-relaxed">
                <strong>Why this matters:</strong> Recruiters miss out on up to 74% of high-potential hires because keywords like "Vector Search" are often omitted in favor of descriptive project achievements like "built customized cosine similarity index for medical text databases."
              </div>
            </div>
          </div>

          {/* Keyword vs Capability Analysis */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between">
            <h3 className="font-display text-lg font-bold border-b border-border/40 pb-3">
              Keyword vs Capability
            </h3>
            
            <div className="space-y-6 my-auto py-4">
              {/* Keyword Match */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Keyword Match (ATS Focus)</span>
                  <span className="text-red-500 font-mono">{activeCandidate.keywordMatch}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden border border-border/40">
                  <div className="h-full bg-red-400 transition-all duration-700" style={{ width: `${activeCandidate.keywordMatch}%` }} />
                </div>
                <div className="text-[9px] text-muted-foreground">ATS Focus: Exact terminology match density</div>
              </div>

              {/* Capability Match */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-foreground">Capability Match (CVBlitz Focus)</span>
                  <span className="text-brand font-mono">{activeCandidate.capabilityMatch}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden border border-border/40">
                  <div className="h-full bg-gradient-to-r from-brand to-brand-glow transition-all duration-700" style={{ width: `${activeCandidate.capabilityMatch}%` }} />
                </div>
                <div className="text-[9px] text-muted-foreground font-medium">CVBlitz Focus: Demonstrated capabilities & trajectory</div>
              </div>
            </div>

            <div className="border-t border-border/40 pt-3 text-[10px] text-center text-muted-foreground">
              A massive <span className="font-semibold text-brand">+{activeCandidate.capabilityMatch - activeCandidate.keywordMatch}% matching gap</span> surfaced.
            </div>
          </div>
        </div>

        {/* Transferable Skills Mapping (Visually interactive diagram) */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-lg font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-6">
            <Layers className="size-5 text-brand" /> Transferable Capability Mapping
          </h3>

          <div className="relative grid grid-cols-11 items-center max-w-3xl mx-auto my-6">
            {/* Left Box (Candidate Experience) */}
            <div className="col-span-4 space-y-4 z-10">
              <div className="text-center font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Candidate Experience</div>
              {activeCandidate.skillsMap.map((skill, idx) => (
                <div key={idx} className="p-3 bg-muted/40 border border-border/60 rounded-xl text-center text-xs font-medium text-muted-foreground h-11 flex items-center justify-center shadow-sm">
                  {skill.from}
                </div>
              ))}
            </div>

            {/* Middle Connecting Graph (SVG dashes) */}
            <div className="col-span-3 h-full relative">
              <svg className="absolute inset-0 w-full h-full" style={{ minHeight: "260px" }} viewBox="0 0 100 240" fill="none" preserveAspectRatio="none">
                <path d="M 0,22 L 100,22" stroke="#6366f1" strokeWidth="1.5" className="animated-dash-line" />
                <circle cx="50" cy="22" r="3" fill="#6366f1" />

                <path d="M 0,77 Q 50,77 100,77" stroke="#6366f1" strokeWidth="1.5" className="animated-dash-line" />
                <circle cx="50" cy="77" r="3" fill="#6366f1" />

                <path d="M 0,132 Q 50,132 100,132" stroke="#6366f1" strokeWidth="1.5" className="animated-dash-line" />
                <circle cx="50" cy="132" r="3" fill="#6366f1" />

                <path d="M 0,187 Q 50,187 100,187" stroke="#6366f1" strokeWidth="1.5" className="animated-dash-line" />
                <circle cx="50" cy="187" r="3" fill="#6366f1" />
              </svg>
            </div>

            {/* Right Box (Equivalent Competency) */}
            <div className="col-span-4 space-y-4 z-10">
              <div className="text-center font-mono text-[9px] uppercase tracking-wider text-brand font-bold">Equivalent Capability</div>
              {activeCandidate.skillsMap.map((skill, idx) => (
                <div key={idx} className="p-3 bg-brand/5 border border-brand/20 rounded-xl text-center text-xs font-semibold text-foreground h-11 flex items-center justify-center shadow-sm">
                  {skill.to}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-[10px] text-muted-foreground mt-4">
            CVBlitz matches conceptual synonym structures to mapping profiles, uncovering skills traditional semantic filters skip.
          </div>
        </div>

        {/* Radar Chart & Success Pattern Similarity */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Radar Chart */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
            <h3 className="font-display text-lg font-bold flex items-center gap-2 border-b border-border/40 pb-3 mb-4">
              <TrendingUp className="size-5 text-brand" /> Career Pattern Recognition
            </h3>
            
            <div className="h-[260px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={activeCandidate.radarData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#64748b", fontSize: 10, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 9 }} />
                  
                  <Radar
                    name={activeCandidate.name}
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

          {/* Success Pattern & Talent Report */}
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <UserCheck className="size-5 text-green-600" /> Similar To Successful Hires
                </h3>
                <span className="rounded bg-green-500/10 px-2 py-0.5 font-mono text-xs text-green-600 border border-green-500/15 font-semibold">
                  Match: {activeCandidate.similarityScore}%
                </span>
              </div>

              <ul className="space-y-2.5 text-xs">
                {activeCandidate.similarityPatterns.map((pat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="size-4 text-green-600 shrink-0" />
                    <span className="text-foreground/80">{pat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1.5">
              <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                <MedalIcon className="size-4 text-brand shrink-0" /> Hidden Talent Report
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {activeCandidate.hiddenTalentReport}
              </p>
            </div>
          </div>
        </div>

        {/* ATS Failure Reasons vs Capability Discovery Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* ATS Failure Reasons */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">ATS Failure Categories</h3>
            <div className="grid gap-3 grid-cols-2">
              <div className="p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Keyword Dependency</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Filters candidates strictly based on lexical match frequency instead of conceptual understanding.</p>
              </div>
              <div className="p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Title Bias</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Fails to match equivalent job titles (e.g., matching "Platform Craftsman" to "AI Software Engineer").</p>
              </div>
              <div className="p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Title Mismatch</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Excludes candidates whose current job title lacks target keywords regardless of actual responsibilities.</p>
              </div>
              <div className="p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Missing Buzzwords</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Instantly filters profiles lacking specific product names (e.g., "Pinecone" or "LangChain").</p>
              </div>
              <div className="p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Non-Linear Career</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Downranks candidates who transition from data engineering, research, or adjacent platforms.</p>
              </div>
              <div className="p-4 bg-muted/40 border border-border/50 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Skills Ignored</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Fails to map transferable core competence such as custom indexing to database engineering.</p>
              </div>
            </div>
          </div>

          {/* Capability Discovery Section */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">CVBlitz Capability Discovery</h3>
            <div className="grid gap-3 grid-cols-2">
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Production Engineering</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Validates scaling experience by parsing description context (e.g. throughput, uptime metrics).</p>
              </div>
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">System Design</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Identifies high architectural complexity by looking at stack interactions, pipeline logs, and integrations.</p>
              </div>
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Technical Leadership</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Flags mentorship, code reviews, and project ownership regardless of formal management titles.</p>
              </div>
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Learning Agility</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Analyzes candidate speed in acquiring new toolsets based on timeline transitions.</p>
              </div>
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Growth Trajectory</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">Measures career velocity, responsibilities ownership, and company stages progression.</p>
              </div>
              <div className="p-4 bg-brand/5 border border-brand/10 rounded-xl space-y-1">
                <h4 className="text-xs font-semibold text-foreground">Ownership Mindset</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Scans candidate text for expressions of end-to-end accountability and feature delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Intelligence Verdict */}
        <div className="rounded-2xl border border-brand bg-brand/[0.02] p-6 text-center space-y-4 max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-glow to-brand" />
          
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-brand font-bold tracking-widest flex items-center justify-center gap-1">
              <ShieldCheck className="size-4 text-brand animate-pulse" /> CVBlitz Discovery Verdict
            </span>
            <h3 className="font-display text-xl font-bold">Traditional ATS would reject this candidate.</h3>
            <p className="text-sm font-semibold text-green-600">CVBlitz recommends immediate recruiter review.</p>
          </div>

          <div className="max-w-xl mx-auto p-4 bg-background/80 border border-border/60 rounded-xl text-xs text-muted-foreground leading-relaxed">
            "{activeCandidate.verdictReason}"
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to={`/candidate/${activeCandidate.id}`}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-brand text-white hover:scale-[1.01] px-5 text-sm font-semibold transition-all cursor-pointer shadow-sm"
            >
              <Brain className="size-4 text-white" /> View Candidate Report
            </Link>

            <button
              onClick={() => handleToggleShortlist(activeCandidate.name)}
              className={`inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition cursor-pointer ${
                shortlisted.includes(activeCandidate.name)
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              <Bookmark className="size-4" /> {shortlisted.includes(activeCandidate.name) ? "Shortlisted" : "Shortlist Candidate"}
            </button>
            
            <button
              onClick={() => handleCompareCandidate(activeCandidate.name)}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Users className="size-4 text-muted-foreground" /> Compare Against Top Candidates
            </button>

            <button
              onClick={() => handleExportReport(activeCandidate.name)}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-5 text-sm font-medium transition cursor-pointer"
            >
              <Download className="size-4 text-muted-foreground" /> Export Discovery Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
