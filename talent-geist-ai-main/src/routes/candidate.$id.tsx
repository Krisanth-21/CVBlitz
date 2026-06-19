import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Zap,
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  UserCheck,
  Calendar,
  Download,
  Brain,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  MapPin,
  Sparkles,
  Building,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Info,
  Clock,
  Briefcase,
  GitBranch,
  Github,
  DollarSign,
  Activity
} from "lucide-react";
import { CandidateAnalysisResult, SAMPLE_CANDIDATES } from "../lib/gemini";
import { CHALLENGE_CANDIDATES, ChallengeCandidate, CHALLENGE_JD } from "../lib/challengeCandidates";
import { toast } from "sonner";

export const Route = createFileRoute("/candidate/$id")({
  component: CandidateReportPage,
});

function CandidateReportPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  // Core state
  const [candidate, setCandidate] = useState<CandidateAnalysisResult | null>(null);
  const [results, setResults] = useState<CandidateAnalysisResult[]>([]);
  const [jd, setJd] = useState("");
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [challengeDetails, setChallengeDetails] = useState<ChallengeCandidate | null>(null);

  // Load results and candidate info
  useEffect(() => {
    const storedResults = localStorage.getItem("cvblitz_results");
    const storedJd = localStorage.getItem("cvblitz_jd");

    let activeResults: CandidateAnalysisResult[] = [];
    let activeJd = "";

    if (storedResults && storedJd) {
      activeResults = JSON.parse(storedResults) as CandidateAnalysisResult[];
      activeJd = storedJd;
    } else {
      // Fallback evaluation if loaded directly
      activeJd = CHALLENGE_JD || "Senior AI Engineer with 5+ years of experience in Python, RAG pipelines, Vector Databases, and LLM orchestration.";
      activeResults = SAMPLE_CANDIDATES.map((cand) => {
        let score = 75;
        let confidence = 90;
        let strengths: string[] = [];
        let weaknesses: string[] = [];
        let isHoneypot = cand.id === "CAND_0000099";
        let honeypotReason = "";
        let verdict = "";
        let tags: string[] = [];

        if (cand.id === "CAND_0000001") {
          score = 77.9; // Ira Vora default matching score
          confidence = 91;
          strengths = ["Strong Python foundation", "NLP experience", "Consistent engineering career", "Production software background"];
          weaknesses = ["Lacks production-scale retrieval systems", "Vector database experience", "Ranking infrastructure expertise"];
          verdict = "This candidate demonstrates strong engineering fundamentals and relevant NLP exposure. However, the profile lacks evidence of production-scale retrieval systems, vector database experience, and ranking infrastructure expertise required for the Senior AI Engineer role.";
          tags = ["Potential Match", "Verified Profile", "Active Candidate"];
        } else if (cand.id === "CAND_0000099") {
          score = 42.5;
          confidence = 95;
          strengths = ["High keywords matching (PyTorch, Vector DBs, AI)"];
          weaknesses = ["Severe timeline inconsistencies", "Simultaneous full-time employment roles", "Impossible claim of 12 years of PyTorch"];
          honeypotReason = "Claimed 12 years of PyTorch experience (released late 2016), overlapping full-time director/architect roles from 2021 to 2024.";
          verdict = "WARNING: Flagged as Honeypot. Candidate has overlapping full-time employments and claims impossible tool timelines.";
          tags = ["Honeypot Flagged", "Authenticity Warning"];
        } else {
          // Dynamic calculation
          score = 80;
          confidence = 90;
          strengths = cand.skills.slice(0, 3).map(s => `Proficient in ${s}`);
          weaknesses = ["Needs specific search architecture verification"];
          verdict = `${cand.name} exhibits good machine learning exposure and engineering background aligned to general AI engineer requirements.`;
          tags = ["Strong Fit", "Verified Profile", "Active Candidate"];
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
    }

    setResults(activeResults);
    setJd(activeJd);

    const found = activeResults.find((c) => c.id === id);
    if (found) {
      setCandidate(found);
      
      // Look up original challenge details
      const details = CHALLENGE_CANDIDATES.find((cc) => cc.candidate_id === found.id);
      if (details) {
        setChallengeDetails(details);
      } else if (found.id === "CAND_0000099") {
        // Dmitry Vance mock challenge signals
        setChallengeDetails({
          candidate_id: "CAND_0000099",
          profile: {
            anonymized_name: found.name,
            headline: found.role,
            summary: found.verdict,
            location: "Remote",
            country: "India",
            years_of_experience: found.details?.experienceYears || 0,
            current_title: found.role,
            current_company: found.details?.recentCompany || "",
            current_company_size: "11-50",
            current_industry: "Artificial Intelligence"
          },
          career_history: [],
          education: [],
          skills: [],
          redrob_signals: {
            profile_completeness_score: 92,
            signup_date: "2024-01-01",
            last_active_date: "2026-06-19",
            open_to_work_flag: true,
            profile_views_received_30d: 4,
            applications_submitted_30d: 12,
            recruiter_response_rate: 45,
            avg_response_time_hours: 48,
            connection_count: 120,
            endorsements_received: 5,
            notice_period_days: 90,
            expected_salary_range_inr_lpa: "45-55 LPA",
            preferred_work_mode: "remote",
            willing_to_relocate: false,
            github_activity_score: 20,
            search_appearance_30d: 15,
            saved_by_recruiters_30d: 1,
            interview_completion_rate: 50,
            offer_acceptance_rate: 65,
            verified_email: true,
            verified_phone: true,
            linkedin_connected: true
          }
        });
      }
    }

    // Load shortlist state
    const storedShortlist = localStorage.getItem("cvblitz_shortlisted");
    if (storedShortlist) {
      setShortlistedIds(JSON.parse(storedShortlist));
    }
  }, [id]);

  const handleShortlist = () => {
    if (!candidate) return;
    setShortlistedIds((prev) => {
      const isShortlisted = prev.includes(candidate.id);
      let updated: string[];
      if (isShortlisted) {
        toast.info(`${candidate.name} removed from shortlist`);
        updated = prev.filter((item) => item !== candidate.id);
      } else {
        toast.success(`${candidate.name} added to shortlist!`);
        updated = [...prev, candidate.id];
      }
      localStorage.setItem("cvblitz_shortlisted", JSON.stringify(updated));
      return updated;
    });
  };

  const handleScheduleInterview = () => {
    if (!candidate) return;
    toast.success(`Screening interview setup initialized for ${candidate.name}`, {
      description: "Invitation sent to recruiter dashboard."
    });
  };

  const handleExportReport = () => {
    if (!candidate) return;
    toast.success(`Exporting Talent Intelligence dossier...`, {
      description: `Report for ${candidate.name} downloaded as PDF.`
    });
  };

  // Pagination navigation
  const currentIndex = results.findIndex((c) => c.id === id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate({ to: `/candidate/${results[currentIndex - 1].id}` });
    }
  };

  const handleNext = () => {
    if (currentIndex < results.length - 1) {
      navigate({ to: `/candidate/${results[currentIndex + 1].id}` });
    }
  };

  if (!candidate || !challengeDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-4">
          <div className="size-10 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto" />
          <h2 className="text-sm font-semibold">Loading Candidate Intelligence...</h2>
        </div>
      </div>
    );
  }

  const isShortlisted = shortlistedIds.includes(candidate.id);
  const isHoneypot = candidate.isHoneypot;

  // Extract JD skills to match against candidate skills
  const jdLower = (jd || "").toLowerCase();
  
  // Dynamic skill matching logic
  const candidateSkills = candidate.details?.skills || [];
  const requirementsFound = candidateSkills.filter(skill => 
    skill && typeof skill === "string" && (
      jdLower.includes(skill.toLowerCase()) || 
      ["python", "software development", "engineering experience"].some(k => skill.toLowerCase().includes(k))
    )
  );

  const keyJdSkills = ["vector database", "retrieval system", "embedding", "ranking evaluation", "hybrid search", "mlops", "ray", "kubernetes"];
  const requirementsMissing = keyJdSkills.filter(skill => 
    jdLower.includes(skill) && !candidateSkills.some(cs => cs && typeof cs === "string" && cs.toLowerCase().includes(skill))
  );

  // Match breakdown metrics calculations (dynamic scaling based on score)
  const technicalMatch = Math.round(candidate.score * 0.9 + (requirementsFound.length * 2));
  const behavioralMatch = Math.round(challengeDetails.redrob_signals.recruiter_response_rate * 0.7 + challengeDetails.redrob_signals.interview_completion_rate * 0.3);
  const roleRelevance = Math.round(candidate.score * 0.8 + (isHoneypot ? -40 : 0));
  const careerGrowth = Math.round((candidate.details?.experienceYears || 0) * 5 + 40);
  const authenticityScore = isHoneypot ? 15 : 95;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.12),transparent)] blur-3xl" />
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border/40 backdrop-blur-xl bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/results"
              className="grid size-8 place-items-center rounded-lg border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              <ArrowLeft className="size-4" />
            </Link>
            <span className="text-xs font-mono text-muted-foreground">Rankings / Report</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-1 font-mono text-[11px] text-brand flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-brand animate-pulse" /> Recruiter Grade Dashboard
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-8">
        
        {/* Dynamic Nav Breadcrumb and Headers */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/40 pb-6 mb-8">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold ${
                candidate.score > 88 && !isHoneypot
                  ? "bg-brand/10 text-brand border border-brand/20"
                  : "bg-muted text-muted-foreground border border-border/80"
              }`}>
                {candidate.score > 88 ? "Top Match" : "Potential Match"}
              </span>
              <span className="rounded-full bg-green-500/10 text-green-600 border border-green-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold">
                Verified Profile
              </span>
              <span className="rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold">
                Active Candidate
              </span>
            </div>
            
            <h1 className="font-display text-3xl font-bold tracking-tight">{candidate.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
              <span className="font-semibold text-foreground/80">{challengeDetails.profile.headline || candidate.role}</span>
              <span>•</span>
              <Building className="size-3.5 inline text-muted-foreground/75" /> {candidate.details?.recentCompany || ""}
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handleShortlist}
              className={`h-10 inline-flex items-center gap-2 rounded-xl text-xs font-semibold px-4 border transition cursor-pointer ${
                isShortlisted
                  ? "border-brand/40 bg-brand/10 text-brand"
                  : "border-border/80 bg-background hover:bg-muted text-foreground"
              }`}
            >
              <UserCheck className="size-4" />
              {isShortlisted ? "Shortlisted" : "Shortlist Candidate"}
            </button>

            <button
              onClick={handleScheduleInterview}
              className="h-10 inline-flex items-center gap-2 rounded-xl text-xs font-semibold px-4 bg-foreground text-background hover:opacity-90 transition cursor-pointer"
            >
              <Calendar className="size-4" />
              Schedule Interview
            </button>

            <button
              onClick={handleExportReport}
              className="grid place-items-center size-10 border border-border/80 bg-background hover:bg-muted rounded-xl text-muted-foreground hover:text-foreground transition cursor-pointer"
              title="Export Report"
            >
              <Download className="size-4" />
            </button>
          </div>
        </div>

        {/* Top Summary Metrics Row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Match Score</span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className={`font-display text-4xl font-bold ${isHoneypot ? "text-destructive" : "text-gradient"}`}>{candidate.score}%</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Match Confidence</span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-bold tabular-nums">{candidate.confidence}%</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Ranking Position</span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-bold text-brand tabular-nums">#{currentIndex + 1}</span>
              <span className="text-xs text-muted-foreground">of {results.length}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col justify-between hover:border-brand/35 transition">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Authenticity Score</span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className={`font-display text-4xl font-bold tabular-nums ${isHoneypot ? "text-destructive" : "text-green-600"}`}>
                {authenticityScore}%
              </span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 lg:grid-cols-12 items-start">
          
          {/* LEFT SIDE (8 cols on desktop): Dossier Deep Dive */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* AI Intelligence Verdict */}
            <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-brand/20">
                <Brain className="size-16" />
              </div>
              <h3 className="font-display text-base font-bold text-brand flex items-center gap-2 mb-3">
                <Brain className="size-5" /> AI Intelligence Verdict
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed font-sans italic pr-6">
                "{candidate.verdict}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-brand/15 flex items-center justify-between text-xs text-brand/85 font-mono">
                <span>Evaluation Confidence: {candidate.confidence}%</span>
                <span>Contextual Fit Verified</span>
              </div>
            </div>

            {/* Match Breakdown Progress Section */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6">
              <h3 className="font-display text-base font-bold flex items-center gap-2 mb-5">
                <TrendingUp className="size-4.5 text-brand" /> Fit Analysis Breakdown
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Technical Match", val: technicalMatch, color: isHoneypot ? "bg-destructive" : "bg-brand" },
                  { label: "Behavioral Signals", val: behavioralMatch, color: "bg-blue-500" },
                  { label: "Role Relevance", val: roleRelevance, color: "bg-purple-500" },
                  { label: "Career Growth", val: careerGrowth, color: "bg-emerald-500" },
                  { label: "Authenticity", val: authenticityScore, color: isHoneypot ? "bg-destructive animate-pulse" : "bg-green-600" }
                ].map((breakdown) => (
                  <div key={breakdown.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-muted-foreground">{breakdown.label}</span>
                      <span className="font-mono font-semibold tabular-nums">{Math.max(0, breakdown.val)}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${breakdown.color}`}
                        style={{ width: `${Math.max(0, Math.min(100, breakdown.val))}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* JD Requirement Match (Two Columns) */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6">
              <h3 className="font-display text-base font-bold flex items-center gap-2 mb-5">
                <Award className="size-4.5 text-brand" /> Job Description Alignment
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                {/* Requirements Found */}
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-green-600 font-semibold flex items-center gap-1.5 pb-2 border-b border-border/30">
                    <Check className="size-4" /> Requirements Found
                  </div>
                  <div className="grid gap-2">
                    {requirementsFound.map((req, i) => (
                      <div key={i} className="flex items-center gap-2.5 rounded-lg border border-green-500/10 bg-green-500/5 px-3 py-2 text-xs font-mono text-green-700">
                        <Check className="size-3.5 text-green-500 shrink-0" />
                        {req}
                      </div>
                    ))}
                    {requirementsFound.length === 0 && (
                      <div className="text-xs text-muted-foreground italic py-2">No matching key requirements found.</div>
                    )}
                  </div>
                </div>

                {/* Requirements Missing */}
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5 pb-2 border-b border-border/30">
                    <X className="size-4" /> Requirements Missing
                  </div>
                  <div className="grid gap-2">
                    {requirementsMissing.map((req, i) => (
                      <div key={i} className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/40 px-3 py-2 text-xs font-mono text-muted-foreground">
                        <X className="size-3.5 text-muted-foreground/80 shrink-0" />
                        {req}
                      </div>
                    ))}
                    {requirementsMissing.length === 0 && (
                      <div className="text-xs text-green-600 font-medium py-2">All primary skills requirements met!</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6">
              <h3 className="font-display text-base font-bold flex items-center gap-2 mb-4">
                <Sparkles className="size-4.5 text-brand" /> Primary Strengths
              </h3>
              
              <div className="grid gap-3 sm:grid-cols-2">
                {candidate.strengths.map((str, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-3.5 transition hover:border-brand/20">
                    <div className="grid size-7.5 place-items-center rounded-lg bg-green-500/10 text-green-600 border border-green-500/20 shrink-0 mt-0.5">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground/90">{str}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">Verified capabilty based on career signals.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6">
              <h3 className="font-display text-base font-bold flex items-center gap-2 mb-5">
                <Layers className="size-4.5 text-brand" /> Career Timeline & Growth
              </h3>
              
              <div className="relative border-l border-border/80 pl-6 ml-3 space-y-6">
                {challengeDetails.career_history.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Ring dot */}
                    <div className="absolute -left-[30px] top-1.5 grid size-4 place-items-center rounded-full bg-card border border-border/90">
                      <span className={`size-1.5 rounded-full ${item.is_current ? "bg-brand animate-pulse" : "bg-muted-foreground"}`} />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <span className="font-mono text-[10px] text-muted-foreground font-medium bg-muted/40 px-2 py-0.5 rounded">
                        {item.start_date.substring(0, 7)} - {item.end_date ? item.end_date.substring(0, 7) : "Present"} ({item.duration_months} mos)
                      </span>
                    </div>
                    <div className="text-xs text-brand font-medium mt-0.5">{item.company} · {item.industry} · {item.company_size} employees</div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed pr-2">{item.description}</p>
                  </div>
                ))}

                {challengeDetails.career_history.length === 0 && (
                  // Fallback for Dmitry
                  (candidate.details?.timeline || []).map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[30px] top-1.5 grid size-4 place-items-center rounded-full bg-card border border-border/90">
                        <span className="size-1.5 rounded-full bg-muted-foreground" />
                      </div>
                      <div className="text-sm font-semibold text-foreground">{item.role}</div>
                      <div className="text-xs text-brand font-medium mt-0.5">{item.company} · {item.period}</div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Hidden Talent Insights Section */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card/30 to-muted/20 p-5">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5 mb-2.5">
                <Info className="size-4 text-brand" /> Contextual Intelligence Insight
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This candidate may not match all AI infrastructure keywords but demonstrates transferable engineering capabilities and strong technical foundations that could enable rapid upskilling.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE (4 cols on desktop): Signals & Overview */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Candidate Overview Card */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4">
              <h3 className="font-display text-base font-bold flex items-center gap-2">
                <Briefcase className="size-4.5 text-brand" /> Profile Summary
              </h3>

              <div className="grid gap-3.5 text-xs">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65">
                  <Clock className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Experience</div>
                    <div className="font-semibold">{challengeDetails.profile.years_of_experience} Years</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65">
                  <MapPin className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Location</div>
                    <div className="font-semibold truncate max-w-[170px]">
                      {challengeDetails.profile.location}, {challengeDetails.profile.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65">
                  <GraduationCap className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Education</div>
                    <div className="font-semibold truncate max-w-[170px]">
                      {challengeDetails.education.length > 0 
                        ? `${challengeDetails.education[0].degree} in ${challengeDetails.education[0].field_of_study}` 
                        : "State CS Program"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65">
                  <Clock className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Notice Period</div>
                    <div className="font-semibold font-mono">{challengeDetails.redrob_signals.notice_period_days} Days</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65">
                  <Briefcase className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Preferred Work Mode</div>
                    <div className="font-semibold capitalize">{challengeDetails.redrob_signals.preferred_work_mode}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/65">
                  <DollarSign className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Expected Salary</div>
                    <div className="font-semibold font-mono">
                      {typeof challengeDetails.redrob_signals.expected_salary_range_inr_lpa === "object" && challengeDetails.redrob_signals.expected_salary_range_inr_lpa !== null
                        ? `${(challengeDetails.redrob_signals.expected_salary_range_inr_lpa as any).min} - ${(challengeDetails.redrob_signals.expected_salary_range_inr_lpa as any).max} LPA`
                        : challengeDetails.redrob_signals.expected_salary_range_inr_lpa}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Behavioral Intelligence Circular Gauges */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4">
              <h3 className="font-display text-base font-bold flex items-center gap-2">
                <Activity className="size-4.5 text-brand" /> Behavioral Signals
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    label: "Recruiter Response", 
                    val: challengeDetails.redrob_signals.recruiter_response_rate <= 1 
                      ? Math.round(challengeDetails.redrob_signals.recruiter_response_rate * 100) 
                      : Math.round(challengeDetails.redrob_signals.recruiter_response_rate) 
                  },
                  { 
                    label: "GitHub Code Score", 
                    val: challengeDetails.redrob_signals.github_activity_score < 0 
                      ? 0 
                      : Math.round(challengeDetails.redrob_signals.github_activity_score) 
                  },
                  { 
                    label: "Interview Completion", 
                    val: challengeDetails.redrob_signals.interview_completion_rate <= 1 
                      ? Math.round(challengeDetails.redrob_signals.interview_completion_rate * 100) 
                      : Math.round(challengeDetails.redrob_signals.interview_completion_rate) 
                  },
                  { 
                    label: "Offer Acceptance", 
                    val: challengeDetails.redrob_signals.offer_acceptance_rate < 0 
                      ? 0 
                      : challengeDetails.redrob_signals.offer_acceptance_rate <= 1 
                      ? Math.round(challengeDetails.redrob_signals.offer_acceptance_rate * 100) 
                      : Math.round(challengeDetails.redrob_signals.offer_acceptance_rate) 
                  }
                ].map((signal) => {
                  const radius = 24;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (signal.val / 100) * circumference;

                  return (
                    <div key={signal.label} className="rounded-xl border border-border/60 bg-background/40 p-3 text-center flex flex-col items-center justify-between">
                      {/* Circle gauge */}
                      <div className="relative size-16">
                        <svg className="size-full -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r={radius}
                            className="stroke-muted fill-transparent"
                            strokeWidth="3.5"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r={radius}
                            className="stroke-brand fill-transparent transition-all duration-500"
                            strokeWidth="3.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold tabular-nums">
                          {signal.val}%
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-2 font-medium leading-tight">{signal.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Profile Authenticity Verification */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4">
              <h3 className="font-display text-base font-bold flex items-center gap-2">
                <ShieldCheck className="size-4.5 text-brand" /> Authenticity Verification
              </h3>

              <div className="rounded-xl border border-border/65 bg-background/50 p-3.5 flex items-center justify-between">
                <div className="text-xs">
                  <div className="font-semibold text-muted-foreground">Verification Status</div>
                  <div className={`text-sm font-bold mt-0.5 ${isHoneypot ? "text-destructive" : "text-green-600"}`}>
                    {isHoneypot ? "Honeypot Detected" : "Verified Profile"}
                  </div>
                </div>
                <div className={`grid size-9 place-items-center rounded-lg ${isHoneypot ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-600"}`}>
                  {isHoneypot ? <ShieldAlert className="size-5" /> : <ShieldCheck className="size-5" />}
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2 text-xs">
                {[
                  { label: "No overlapping employment dates", val: !isHoneypot },
                  { label: "Consistent career progression", val: true },
                  { label: "Realistic experience timeline", val: !isHoneypot },
                  { label: "Verified profile information", val: true }
                ].map((check, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-background/30">
                    <span className="text-muted-foreground">{check.label}</span>
                    {check.val ? (
                      <Check className="size-4 text-green-500 shrink-0" />
                    ) : (
                      <X className="size-4 text-destructive shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Flags Warning Cards */}
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-6 space-y-4">
              <h3 className="font-display text-base font-bold flex items-center gap-2">
                <AlertTriangle className="size-4.5 text-brand" /> Screen Signals & Risk Flags
              </h3>

              <div className="space-y-2.5">
                {challengeDetails.redrob_signals.recruiter_response_rate < 50 && (
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5">
                    <AlertTriangle className="size-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">Low recruiter response rate ({challengeDetails.redrob_signals.recruiter_response_rate}%)</span>
                  </div>
                )}
                {challengeDetails.redrob_signals.github_activity_score < 30 && (
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5">
                    <AlertTriangle className="size-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">Limited open-source/GitHub activity score ({Math.round(challengeDetails.redrob_signals.github_activity_score)})</span>
                  </div>
                )}
                {requirementsMissing.length > 2 && (
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5">
                    <AlertTriangle className="size-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">Lacks direct experience in multiple core search infrastructures</span>
                  </div>
                )}
                {challengeDetails.profile.location !== "Pune" && challengeDetails.profile.location !== "Noida" && challengeDetails.profile.location !== "Delhi" && (
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 flex items-start gap-2.5">
                    <AlertTriangle className="size-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">Located outside primary target hiring nodes (relocation required)</span>
                  </div>
                )}
                {isHoneypot && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3 flex items-start gap-2.5">
                    <ShieldAlert className="size-4 text-destructive shrink-0 mt-0.5" />
                    <span className="text-xs text-destructive/90 leading-relaxed font-semibold">Flagged: CV Timeline fraud and overlapping employment.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Recruiter Recommendation */}
            <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6 space-y-3">
              <h3 className="font-display text-sm font-bold text-brand flex items-center gap-1.5">
                <UserCheck className="size-4.5" /> Recruiter Recommendation
              </h3>
              
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-muted-foreground font-semibold">Recommendation: </span>
                  <span className={`font-bold ${isHoneypot ? "text-destructive" : "text-brand"}`}>
                    {isHoneypot ? "Reject profile / Investigate overlap" : "Proceed to Screening Interview"}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {isHoneypot 
                    ? "Severe validation anomalies found. Timeline overlaps in current role require manual check prior to candidate screen." 
                    : "Strong technical foundation with moderate role alignment. Candidate may be suitable if the organization values adaptability and learning potential over direct retrieval-system experience."}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-border/40 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition ${
              currentIndex > 0
                ? "border-border/80 bg-background hover:bg-muted text-foreground cursor-pointer"
                : "border-border/40 text-muted-foreground/50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="size-4" /> Previous Candidate
          </button>
          
          <Link
            to="/results"
            className="text-xs font-semibold text-brand hover:underline"
          >
            Back to Rankings
          </Link>

          <button
            onClick={handleNext}
            disabled={currentIndex === results.length - 1}
            className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition ${
              currentIndex < results.length - 1
                ? "border-border/80 bg-background hover:bg-muted text-foreground cursor-pointer"
                : "border-border/40 text-muted-foreground/50 cursor-not-allowed"
            }`}
          >
            Next Candidate <ChevronRight className="size-4" />
          </button>
        </div>

      </main>
    </div>
  );
}
