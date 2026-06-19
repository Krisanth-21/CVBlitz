import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Zap,
  ArrowLeft,
  Search,
  Check,
  X,
  AlertTriangle,
  UserCheck,
  Mail,
  Calendar,
  Download,
  Brain,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  MapPin,
  Clock,
  Sparkles,
  Building,
  GraduationCap,
  Activity,
  Users
} from "lucide-react";
import { CandidateAnalysisResult, SAMPLE_CANDIDATES } from "../lib/gemini";
import { toast } from "sonner";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
});

function ResultsPage() {
  const navigate = useNavigate();

  // Loaded state
  const [results, setResults] = useState<CandidateAnalysisResult[]>([]);
  const [jd, setJd] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateAnalysisResult | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [filterHoneypots, setFilterHoneypots] = useState(false);
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);

  const handleToggleCompare = (id: string) => {
    setSelectedCompareIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        return prev.filter((x) => x !== id);
      } else {
        if (prev.length >= 4) {
          toast.warning("Maximum of 4 candidates can be compared side-by-side.");
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  // Load results from localStorage
  useEffect(() => {
    const storedResults = localStorage.getItem("cvblitz_results");
    const storedJd = localStorage.getItem("cvblitz_jd");

    if (storedResults && storedJd) {
      const parsedResults = JSON.parse(storedResults) as CandidateAnalysisResult[];
      setResults(parsedResults);
      setJd(storedJd);
      if (parsedResults.length > 0) {
        setSelectedCandidate(parsedResults[0]);
      }
    } else {
      // Fallback: If page is loaded directly, run fallback analysis
      // for a default job description
      const defaultJd = "Senior AI Engineer with 5+ years of experience in Python, RAG pipelines, Vector Databases, and LLM orchestration.";
      const defaultResults = SAMPLE_CANDIDATES.map((cand) => {
        let score = 75;
        let confidence = 90;
        let strengths: string[] = [];
        let weaknesses: string[] = [];
        let isHoneypot = false;
        let honeypotReason = "";
        let verdict = "";
        let tags: string[] = [];

        if (cand.id === "cand_1") {
          score = 98.4;
          confidence = 96;
          strengths = ["Production scale retrieval systems", "Deep Vector Database expertise", "Strong Python engineering core", "Exceptional recruiter engagement"];
          weaknesses = ["Mainly experienced in hybrid/SF locations"];
          verdict = "Exceptional fit. Deep understanding of search systems and embeddings matched with an active, highly responsive profile.";
          tags = ["Top Match", "Hidden Gem", "Strong Behavioral Signal"];
        } else if (cand.id === "cand_2") {
          score = 95.1;
          confidence = 93;
          strengths = ["MLOps infrastructure at scale", "Ray, Kubernetes & CUDA core competency", "Solid track record of engineering leadership"];
          weaknesses = ["Less focused on raw retrieval systems/LLM application layers"];
          verdict = "Excellent candidate for platform and infrastructure. Possesses critical MLOps scaling skills but less NLP specific.";
          tags = ["Top Match", "Infrastructure Lead"];
        } else if (cand.id === "cand_3") {
          score = 93.7;
          confidence = 94;
          strengths = ["Ph.D. NLP research background", "Ranking evaluation systems", "High-quality academic citations", "Strong GitHub activity"];
          weaknesses = ["Fewer years of non-academic industrial production experience"];
          verdict = "Top tier analytical and research depth in NLP and semantic search. Highly responsive and engaged.";
          tags = ["Academic Excellence", "Strong Behavioral Signal"];
        } else if (cand.id === "cand_4") {
          score = 92.2;
          confidence = 90;
          strengths = ["Staff-level engineering experience", "LLM evaluation and validation frameworks", "Fully remote work capability"];
          weaknesses = ["Slightly lower Github activity recently"];
          verdict = "Experienced staff engineer with solid LLM evaluation background. Offers strategic depth and remote maturity.";
          tags = ["Staff Level", "LLM Expert"];
        } else if (cand.id === "cand_5") {
          score = 62.0;
          confidence = 85;
          strengths = ["Active learner", "Good foundational Python skills", "Eager to learn ML frameworks"];
          weaknesses = ["Lacks production engineering experience", "Minimal expertise in vector DBs or RAG pipelines"];
          verdict = "Too junior for a senior role. Good basic coding foundations but lacks scale and AI-specific production experience.";
          tags = ["Junior Profile"];
        } else if (cand.id === "cand_6") {
          score = 42.5;
          confidence = 95;
          strengths = ["High keywords matching (PyTorch, Vector DBs, AI)"];
          weaknesses = ["Severe timeline inconsistencies", "Simultaneous full-time employment roles", "Impossible claim of 12 years of PyTorch"];
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

  const handleShortlist = (id: string, name: string) => {
    setShortlistedIds((prev) => {
      const isShortlisted = prev.includes(id);
      if (isShortlisted) {
        toast.info(`${name} removed from shortlist`);
        return prev.filter((item) => item !== id);
      } else {
        toast.success(`${name} added to shortlist!`, {
          description: "Candidate is now tagged for recruitment screening."
        });
        return [...prev, id];
      }
    });
  };

  const handleScheduleInterview = (name: string) => {
    toast.success(`Interview invitation prepared for ${name}`, {
      description: "Opening scheduler modal..."
    });
  };

  const handleDownloadDossier = (name: string) => {
    toast.success(`Generating PDF Dossier for ${name}...`, {
      description: "Recruiter-grade summary download started."
    });
  };

  // Filters candidates based on search query and honeypot toggle
  const filteredCandidates = results.filter((c) => {
    const nameLower = (c.name || c.details?.name || "").toLowerCase();
    const roleLower = (c.role || c.details?.role || "").toLowerCase();
    const queryLower = searchQuery.toLowerCase();
    
    const matchesSearch =
      nameLower.includes(queryLower) ||
      roleLower.includes(queryLower) ||
      (c.details?.skills || []).some((s) => s && typeof s === "string" && s.toLowerCase().includes(queryLower));
    
    if (filterHoneypots) {
      return matchesSearch && !c.isHoneypot;
    }
    return matchesSearch;
  });

  const honeypotsCount = results.filter((c) => c.isHoneypot).length;
  const bestMatchScore = results.length > 0 ? results[0].score : 0;
  const verifiedCount = results.filter((c) => !c.isHoneypot).length;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.15),transparent)] blur-3xl" />
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border/40 backdrop-blur-xl bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate({ to: "/analyze" })}
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
          <button
            onClick={() => navigate({ to: "/analyze" })}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-4 text-sm font-medium transition cursor-pointer"
          >
            Run New Analysis
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-8">
        
        {/* Results Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider">
              <Brain className="size-3.5" /> Intelligence Graph Compiled
            </div>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
              Talent Intelligence Rankings
            </h1>
            <p className="mt-1.5 text-xs text-muted-foreground max-w-2xl truncate">
              Job Description: <span className="font-mono text-foreground/80">{jd}</span>
            </p>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Best Match Score</div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-2xl font-bold text-gradient tabular-nums">{bestMatchScore}%</span>
              <span className="text-[10px] text-green-500 font-mono font-medium">Top Match</span>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Candidates Analyzed</div>
            <div className="mt-1 font-display text-2xl font-bold tabular-nums">100,000</div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Honeypots Flagged</div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className={`font-display text-2xl font-bold tabular-nums ${honeypotsCount > 0 ? "text-destructive" : ""}`}>
                {honeypotsCount}
              </span>
              {honeypotsCount > 0 && (
                <span className="rounded bg-destructive/10 px-1 py-0.5 font-mono text-[9px] text-destructive flex items-center gap-0.5">
                  <AlertTriangle className="size-2.5" /> Warning
                </span>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Verified Candidates</div>
            <div className="mt-1 font-display text-2xl font-bold tabular-nums">
              {verifiedCount} <span className="text-sm font-medium text-muted-foreground">/ {results.length}</span>
            </div>
          </div>
        </div>

        {/* Two Column Results Layout */}
        <div className="grid gap-6 md:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: Leaderboard List (col-span-7) */}
          <div className="md:col-span-6 lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, role or skill..."
                    className="w-full h-9 rounded-lg border border-border/60 bg-background/55 pl-9 pr-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand/40"
                  />
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-muted-foreground hover:text-foreground transition select-none">
                  <input
                    type="checkbox"
                    checked={filterHoneypots}
                    onChange={() => setFilterHoneypots(!filterHoneypots)}
                    className="rounded border-border text-brand focus:ring-brand size-3.5"
                  />
                  Hide Honeypots
                </label>
              </div>

              {/* Candidates Grid/List */}
              <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
                {filteredCandidates.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <AlertTriangle className="size-8 mx-auto mb-2 text-muted-foreground/60" />
                    <p className="text-sm">No candidates match your filters.</p>
                  </div>
                ) : (
                  filteredCandidates.map((cand, index) => {
                    const isSelected = selectedCandidate?.id === cand.id;
                    const isShortlisted = shortlistedIds.includes(cand.id);

                    return (
                      <div
                        key={cand.id}
                        onClick={() => setSelectedCandidate(cand)}
                        className={`grid grid-cols-12 items-center gap-2 rounded-xl border p-3 cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "border-brand/50 bg-brand/5 shadow-sm"
                            : "border-border/60 bg-background/30 hover:border-brand/20 hover:bg-background/70"
                        }`}
                      >
                        {/* Compare Checkbox */}
                        <div className="col-span-1 flex justify-center" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={selectedCompareIds.includes(cand.id)}
                            onChange={() => handleToggleCompare(cand.id)}
                            className="rounded border-border text-brand focus:ring-brand size-3.5 cursor-pointer accent-brand"
                            title="Select for comparison"
                          />
                        </div>

                        {/* Rank Circle */}
                        <div className="col-span-1.5 flex justify-center">
                          <div
                            className={`grid size-7.5 place-items-center rounded-lg font-mono text-xs font-semibold ${
                              cand.isHoneypot
                                ? "bg-destructive/10 text-destructive border border-destructive/20"
                                : isSelected
                                ? "bg-gradient-to-br from-brand to-brand-glow text-white"
                                : "bg-card border border-border/70 text-muted-foreground"
                            }`}
                          >
                            {cand.isHoneypot ? "!" : index + 1}
                          </div>
                        </div>

                        {/* Name & Role */}
                        <div className="col-span-5.5 sm:col-span-6">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold leading-tight">{cand.name}</span>
                            {isShortlisted && (
                              <span className="rounded-full bg-brand/10 text-[9px] text-brand font-mono font-medium px-1.5 py-0.2">
                                Shortlisted
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">{cand.role} · {cand.details?.recentCompany || ""}</div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {cand.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className={`rounded px-1.5 py-0.5 text-[9px] font-mono font-medium ${
                                  cand.isHoneypot
                                    ? "bg-destructive/10 text-destructive border border-destructive/10"
                                    : tag.includes("Top") || tag.includes("Gem")
                                    ? "bg-brand/10 text-brand border border-brand/10"
                                    : "bg-muted text-muted-foreground border border-border/80"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Scores */}
                        <div className="col-span-4 sm:col-span-3.5 flex flex-col items-end gap-1.5">
                          <div className="flex items-baseline gap-1">
                            <span className="font-mono text-xs text-muted-foreground">match</span>
                            <span className={`font-display text-sm font-bold tabular-nums ${cand.isHoneypot ? "text-destructive" : ""}`}>
                              {cand.score.toFixed(1)}%
                            </span>
                          </div>
                          
                          {/* Visual mini bar */}
                          <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                cand.isHoneypot
                                  ? "bg-destructive"
                                  : "bg-gradient-to-r from-brand to-brand-glow"
                              }`}
                              style={{ width: `${cand.score}%` }}
                            />
                          </div>
                          <span className="font-mono text-[9px] text-muted-foreground/80 tabular-nums">
                            conf {cand.confidence}%
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Selected Candidate Details (col-span-5) */}
          <div className="md:col-span-6 lg:col-span-5">
            {selectedCandidate ? (
              <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                
                {/* Details Header */}
                <div className="flex items-start justify-between border-b border-border/40 pb-4">
                  <div>
                    <h2 className="font-display text-xl font-bold flex items-center gap-1.5">
                      {selectedCandidate.name}
                      {shortlistedIds.includes(selectedCandidate.id) && (
                        <UserCheck className="size-4 text-brand" />
                      )}
                    </h2>
                    <div className="text-xs text-muted-foreground mt-0.5">{selectedCandidate.role}</div>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
                      <MapPin className="size-3" /> {selectedCandidate.details?.location || ""}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`font-display text-3xl font-bold text-gradient tabular-nums ${selectedCandidate.isHoneypot ? "text-destructive" : ""}`}>
                      {selectedCandidate.isHoneypot ? "Honeypot" : `${selectedCandidate.score}%`}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">Match Score</div>
                  </div>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap gap-1">
                  {selectedCandidate.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded px-2 py-0.5 text-[10px] font-mono font-medium ${
                        selectedCandidate.isHoneypot
                          ? "bg-destructive/10 text-destructive border border-destructive/20"
                          : "bg-brand/10 text-brand border border-brand/20"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* AI Reasoning Verdict */}
                <div className="rounded-xl border border-brand/25 bg-brand/5 p-4 relative overflow-hidden">
                  <div className="absolute top-3 right-3 text-brand/25">
                    <Brain className="size-10" />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-brand font-bold flex items-center gap-1 mb-1.5">
                    <Brain className="size-3.5" /> AI Intelligence Verdict
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans italic">
                    "{selectedCandidate.verdict}"
                  </p>
                </div>

                {/* Authenticity Warning / Success */}
                {selectedCandidate.isHoneypot ? (
                  <div className="rounded-xl border border-destructive/35 bg-destructive/5 p-4 flex items-start gap-3">
                    <div className="grid size-8 place-items-center rounded-lg bg-destructive/10 text-destructive border border-destructive/20 shrink-0">
                      <AlertTriangle className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-destructive">Profile Fraud Flagged</div>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                        {selectedCandidate.honeypotReason}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 flex items-start gap-3">
                    <div className="grid size-8 place-items-center rounded-lg bg-green-500/10 text-green-600 border border-green-500/20 shrink-0">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-green-600">Profile Authenticity Verified</div>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed font-mono">
                        No overlapping jobs or timeline discrepancies detected. Responsive profile.
                      </p>
                    </div>
                  </div>
                )}

                {/* Strengths & Weaknesses */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                      <Check className="size-3.5 text-green-500" /> Strengths
                    </div>
                    <ul className="space-y-1.5">
                      {selectedCandidate.strengths.map((str, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                      <X className="size-3.5 text-muted-foreground" /> Gaps & Weaknesses
                    </div>
                    <ul className="space-y-1.5">
                      {selectedCandidate.weaknesses.map((weak, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
                          <span className="text-muted-foreground/80 mt-0.5">•</span>
                          <span>{weak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 border-t border-border/40 pt-4 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
                    <Building className="size-4 text-muted-foreground shrink-0" />
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Recent Company</div>
                      <div className="font-semibold">{selectedCandidate.details?.recentCompany || ""}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
                    <GraduationCap className="size-4 text-muted-foreground shrink-0" />
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Education</div>
                      <div className="font-semibold truncate max-w-[140px]">{selectedCandidate.details?.education || ""}</div>
                    </div>
                  </div>
                </div>

                {/* Behavioral Signals */}
                <div className="space-y-3.5 border-t border-border/40 pt-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                    <Activity className="size-3.5 text-brand" /> Behavioral Signals
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Recruiter Response Rate", value: selectedCandidate.details?.behavioralSignals?.recruiterResponseRate || 0 },
                      { label: "GitHub Activity (90d)", value: selectedCandidate.details?.behavioralSignals?.githubActivity90d || 0 },
                      { label: "Interview Completion Rate", value: selectedCandidate.details?.behavioralSignals?.interviewCompletionRate || 0 }
                    ].map((sig) => (
                      <div key={sig.label} className="space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{sig.label}</span>
                          <span className="font-mono font-semibold tabular-nums">{sig.value}%</span>
                        </div>
                        <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand to-brand-glow rounded-full"
                            style={{ width: `${sig.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Timeline */}
                <div className="space-y-3 border-t border-border/40 pt-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                    <Layers className="size-3.5 text-muted-foreground" /> Career Timeline
                  </div>
                  <div className="relative border-l border-border/80 pl-4 ml-2.5 space-y-4">
                    {(selectedCandidate.details?.timeline || []).map((item, idx) => (
                      <div key={idx} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[20.5px] top-1.5 size-2 rounded-full border border-border bg-card" />
                        
                        <div className="text-xs font-semibold leading-tight">{item.role}</div>
                        <div className="text-[10px] text-muted-foreground font-medium mt-0.5">{item.company} · {item.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Full Report Button */}
                <div className="border-t border-border/40 pt-4">
                  <Link
                    to={`/candidate/${selectedCandidate.id}`}
                    className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-lg text-xs font-semibold bg-brand text-white hover:scale-[1.01] transition-all cursor-pointer shadow-sm"
                  >
                    <Brain className="size-4" />
                    View Full Intelligence Report
                  </Link>
                </div>

                {/* Actions Footer */}
                <div className="border-t border-border/40 pt-1 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => handleShortlist(selectedCandidate.id, selectedCandidate.name)}
                    className={`flex-1 h-10 inline-flex items-center justify-center gap-2 rounded-lg text-xs font-medium border transition cursor-pointer ${
                      shortlistedIds.includes(selectedCandidate.id)
                        ? "border-brand/40 bg-brand/10 text-brand"
                        : "border-border/80 bg-background hover:bg-muted text-foreground"
                    }`}
                  >
                    <UserCheck className="size-4" />
                    {shortlistedIds.includes(selectedCandidate.id) ? "Shortlisted" : "Shortlist Candidate"}
                  </button>

                  <button
                    onClick={() => handleScheduleInterview(selectedCandidate.name)}
                    className="flex-1 h-10 inline-flex items-center justify-center gap-2 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition cursor-pointer"
                  >
                    <Calendar className="size-4" />
                    Schedule Interview
                  </button>

                  <button
                    onClick={() => handleDownloadDossier(selectedCandidate.name)}
                    className="grid place-items-center size-10 border border-border/80 bg-background hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition shrink-0 cursor-pointer"
                    title="Download Talent Dossier"
                  >
                    <Download className="size-4" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="rounded-2xl border border-border/60 bg-card/20 p-12 text-center text-muted-foreground">
                <Brain className="size-10 mx-auto mb-2 text-muted-foreground/45" />
                Select a candidate to view AI reasoning dossier.
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Floating Compare Action Bar */}
      {selectedCompareIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="rounded-2xl border border-border/80 bg-card/85 backdrop-blur-xl p-3 shadow-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="grid size-8 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                <Users className="size-4.5" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-foreground">{selectedCompareIds.length} of 4 selected</div>
                <div className="text-muted-foreground text-[10px]">Select 2 to 4 candidates to compare</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setSelectedCompareIds([])}
                className="h-8 rounded-lg px-2.5 text-xs font-medium border border-border bg-background hover:bg-muted transition cursor-pointer text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
              <button
                disabled={selectedCompareIds.length < 2}
                onClick={() => {
                  navigate({
                    to: "/compare",
                    search: { ids: selectedCompareIds.join(",") }
                  });
                }}
                className={`h-8 rounded-lg px-3.5 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                  selectedCompareIds.length >= 2
                    ? "bg-brand text-white shadow-sm hover:opacity-90 active:scale-95 cursor-pointer"
                    : "bg-muted text-muted-foreground border border-border cursor-not-allowed"
                }`}
              >
                Compare
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
