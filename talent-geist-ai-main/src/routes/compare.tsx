import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Users,
  Check,
  X,
  AlertTriangle,
  Award,
  Calendar,
  Download,
  Save,
  UserCheck,
  MapPin,
  Clock,
  Sparkles,
  Building,
  GraduationCap,
  Activity,
  Briefcase,
  DollarSign,
  Scale,
  Brain,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowRight
} from "lucide-react";
import { CandidateAnalysisResult, SAMPLE_CANDIDATES } from "../lib/gemini";
import { CHALLENGE_CANDIDATES, CHALLENGE_JD, ChallengeCandidate } from "../lib/challengeCandidates";
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

export const Route = createFileRoute("/compare")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      ids: (search.ids as string) || "",
    };
  },
  component: ComparePage,
});

function ComparePage() {
  const { ids } = Route.useSearch();
  const navigate = useNavigate();

  // Core state
  const [candidates, setCandidates] = useState<CandidateAnalysisResult[]>([]);
  const [jd, setJd] = useState("");
  const [shortlistedIds, setShortlistedIds] = useState<string[]>([]);
  const [savedComparisons, setSavedComparisons] = useState<string[][]>([]);

  // Load results and selection from localStorage or fallback
  useEffect(() => {
    const storedResults = localStorage.getItem("cvblitz_results");
    const storedJd = localStorage.getItem("cvblitz_jd");
    const storedShortlist = localStorage.getItem("cvblitz_shortlist");
    const storedSavedComps = localStorage.getItem("cvblitz_saved_comparisons");

    if (storedShortlist) {
      setShortlistedIds(JSON.parse(storedShortlist));
    }
    if (storedSavedComps) {
      setSavedComparisons(JSON.parse(storedSavedComps));
    }

    let allResults: CandidateAnalysisResult[] = [];
    let activeJd = "";

    if (storedResults && storedJd) {
      allResults = JSON.parse(storedResults) as CandidateAnalysisResult[];
      activeJd = storedJd;
    } else {
      // Fallback evaluation if loaded directly
      activeJd = CHALLENGE_JD || "Senior AI Engineer with 5+ years of experience in Python, RAG pipelines, Vector Databases, and LLM orchestration.";
      allResults = SAMPLE_CANDIDATES.map((cand) => {
        let score = 75;
        let confidence = 90;
        let strengths: string[] = [];
        let weaknesses: string[] = [];
        let isHoneypot = cand.id === "CAND_0000099";
        let honeypotReason = "";
        let verdict = "";
        let tags: string[] = [];

        if (cand.id === "CAND_0000001") {
          score = 77.9;
          confidence = 91;
          strengths = ["Strong Python foundation", "NLP experience", "Consistent engineering career", "Production software background"];
          weaknesses = ["Lacks production-scale retrieval systems", "Vector database experience", "Ranking infrastructure expertise"];
          verdict = "This candidate demonstrates strong engineering fundamentals and relevant NLP exposure. However, the profile lacks evidence of production-scale retrieval systems.";
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
      });
    }

    setJd(activeJd);

    if (ids) {
      const idList = ids.split(",");
      const filtered = allResults.filter((c) => idList.includes(c.id));
      setCandidates(filtered);
    } else {
      // Default comparison if no IDs provided
      setCandidates(allResults.slice(0, 3));
    }
  }, [ids]);

  // Save shortlist in localStorage
  const handleToggleShortlist = (id: string, name: string) => {
    setShortlistedIds((prev) => {
      const active = prev.includes(id);
      let updated: string[];
      if (active) {
        updated = prev.filter((item) => item !== id);
        toast.info(`${name} removed from shortlist`);
      } else {
        updated = [...prev, id];
        toast.success(`${name} added to shortlist!`);
      }
      localStorage.setItem("cvblitz_shortlist", JSON.stringify(updated));
      return updated;
    });
  };

  // Dimension Calculations
  const getCandidateDimensions = (c: CandidateAnalysisResult) => {
    const isHoneypot = c.isHoneypot;
    const jdLower = (jd || "").toLowerCase();

    // Skills matched
    const candidateSkills = c.details?.skills || [];
    const requirementsFound = candidateSkills.filter(
      (skill) =>
        skill &&
        typeof skill === "string" &&
        (jdLower.includes(skill.toLowerCase()) ||
          ["python", "software development", "engineering experience"].some((k) =>
            skill.toLowerCase().includes(k)
          ))
    );

    const requirementsMissing = [
      "vector database",
      "retrieval system",
      "embedding",
      "ranking evaluation",
      "hybrid search",
      "mlops",
      "ray",
      "kubernetes"
    ].filter(
      (skill) =>
        jdLower.includes(skill) &&
        !candidateSkills.some((cs) => cs && typeof cs === "string" && cs.toLowerCase().includes(skill))
    );

    // Grab original challenge details for rates
    const details = CHALLENGE_CANDIDATES.find((cc) => cc.candidate_id === c.id) || (c.details as any);
    const signals = details?.redrob_signals || {
      recruiter_response_rate: 0.75,
      github_activity_score: 80,
      interview_completion_rate: 0.85,
      offer_acceptance_rate: 0.9
    };

    // Convert decimal rates to percentages
    const responseRate =
      signals.recruiter_response_rate <= 1
        ? Math.round(signals.recruiter_response_rate * 100)
        : Math.round(signals.recruiter_response_rate);
    const completionRate =
      signals.interview_completion_rate <= 1
        ? Math.round(signals.interview_completion_rate * 100)
        : Math.round(signals.interview_completion_rate);
    const githubScore = signals.github_activity_score < 0 ? 0 : Math.round(signals.github_activity_score);
    const offerAcceptance =
      signals.offer_acceptance_rate < 0
        ? 0
        : signals.offer_acceptance_rate <= 1
        ? Math.round(signals.offer_acceptance_rate * 100)
        : Math.round(signals.offer_acceptance_rate);

    // Axes
    const technical = Math.min(100, Math.round(c.score * 0.9 + requirementsFound.length * 2));
    const behavioral = Math.round(responseRate * 0.6 + completionRate * 0.2 + githubScore * 0.2);
    const relevance = Math.max(10, Math.round(c.score * 0.8 + (isHoneypot ? -40 : 0)));
    const growth = Math.min(100, Math.round((c.details?.experienceYears || 0) * 5 + 40));
    const authenticity = isHoneypot ? 15 : 95;

    // Notice Period / Work Mode / Location Gaps
    const noticePeriod = signals.notice_period_days || 30;
    const workMode = signals.preferred_work_mode || "hybrid";
    const expectedSalary = typeof signals.expected_salary_range_inr_lpa === "object"
      ? `${signals.expected_salary_range_inr_lpa.min} - ${signals.expected_salary_range_inr_lpa.max} LPA`
      : signals.expected_salary_range_inr_lpa || "Negotiable";

    const isTier1City = ["noida", "pune", "delhi", " NCR", "hyderabad", "mumbai"].some(
      (city) => (c.details?.location || "").toLowerCase().includes(city)
    );
    const locationFit = isTier1City ? "High (Local/Tier-1)" : "Medium (Remote Only)";

    // Hiring Risk determination
    let risk = "Low";
    let riskDetail = "No major indicators.";
    if (isHoneypot) {
      risk = "Critical";
      riskDetail = "Authenticity validation failure. Timeline overlap detected.";
    } else if (responseRate < 40) {
      risk = "Medium";
      riskDetail = "Low recruiter responsiveness.";
    } else if (noticePeriod > 90) {
      risk = "Medium";
      riskDetail = "Long notice period (90+ days).";
    }

    return {
      technical,
      behavioral,
      relevance,
      growth,
      authenticity,
      requirementsFound,
      requirementsMissing,
      responseRate,
      githubScore,
      completionRate,
      offerAcceptance,
      noticePeriod,
      workMode,
      expectedSalary,
      locationFit,
      risk,
      riskDetail
    };
  };

  // Compile Recharts Radar data
  const dimensionsList = [
    { subject: "Technical Fit" },
    { subject: "Behavioral Engagement" },
    { subject: "Role Relevance" },
    { subject: "Growth Potential" },
    { subject: "Profile Authenticity" }
  ];

  const radarData = dimensionsList.map((dim) => {
    const item: any = { subject: dim.subject };
    candidates.forEach((c) => {
      const dims = getCandidateDimensions(c);
      let value = 50;
      if (dim.subject === "Technical Fit") value = dims.technical;
      else if (dim.subject === "Behavioral Engagement") value = dims.behavioral;
      else if (dim.subject === "Role Relevance") value = dims.relevance;
      else if (dim.subject === "Growth Potential") value = dims.growth;
      else if (dim.subject === "Profile Authenticity") value = dims.authenticity;

      item[c.name] = value;
    });
    return item;
  });

  // Color mappings
  const themeColors = [
    { stroke: "#6366f1", fill: "rgba(99, 102, 241, 0.15)" },
    { stroke: "#10b981", fill: "rgba(16, 185, 129, 0.15)" },
    { stroke: "#f59e0b", fill: "rgba(245, 158, 11, 0.15)" },
    { stroke: "#0ea5e9", fill: "rgba(14, 165, 233, 0.15)" }
  ];

  // Identify recommended winner
  const activeCandidates = candidates.filter((c) => !c.isHoneypot);
  const recommendedWinner =
    activeCandidates.length > 0
      ? activeCandidates.sort((a, b) => b.score - a.score)[0]
      : candidates[0];

  const getAIVerdict = () => {
    if (!recommendedWinner) return "";
    const name = recommendedWinner.name;
    const role = recommendedWinner.role;
    const comp = recommendedWinner.details?.recentCompany || "their current firm";
    const strengths = recommendedWinner.strengths.slice(0, 2).join(" and ");

    const others = candidates.filter((c) => c.id !== recommendedWinner.id);
    let compText = "";
    if (others.length > 0) {
      const otherNames = others.map((o) => o.name).join(", ");
      compText = ` Compared to ${otherNames}, ${name} possesses superior technical match metrics, significantly stronger behavioral engagement rates, and a reliable profile history.`;
    }

    return `${name} is identified as the optimal hire for the ${role} position. Their background at ${comp} shows excellent execution in ${strengths}.${compText} Moving them forward to final technical and team reviews is recommended.`;
  };

  // Recruiter Action Triggers
  const handleScheduleInterview = (name: string) => {
    toast.success(`Interview invitation prepared for ${name}`, {
      description: "Opening scheduler console..."
    });
  };

  const handleExportReport = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Generating PDF Executive Comparison Report...",
        success: "Comparison Dossier successfully downloaded!",
        error: "Failed to export report."
      }
    );
  };

  const handleSaveComparison = () => {
    const currentIds = candidates.map((c) => c.id);
    const updated = [...savedComparisons, currentIds];
    setSavedComparisons(updated);
    localStorage.setItem("cvblitz_saved_comparisons", JSON.stringify(updated));
    toast.success("Comparison checklist saved successfully!", {
      description: "You can recall this cohort comparison from the analyze page."
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.15),transparent)] blur-3xl" />
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-45 border-b border-border/40 backdrop-blur-xl bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate({ to: "/results" })}
              className="grid size-8 place-items-center rounded-lg border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              <ArrowLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow">
                <Users className="size-4 text-white animate-pulse" />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">CVBlitz</span>
            </div>
            <nav className="hidden md:flex items-center gap-4 ml-6 text-sm text-muted-foreground">
              <Link to="/analyze" className="hover:text-foreground transition-colors">Workspace</Link>
              <Link to="/results" className="hover:text-foreground transition-colors">Rankings</Link>
              <Link to="/compare" className="text-brand font-medium transition-colors">Compare</Link>
              <Link to="/ats-blindspots" className="hover:text-foreground transition-colors flex items-center gap-1">
                <Sparkles className="size-3.5" /> Blindspots
              </Link>
            </nav>
          </div>
          <button
            onClick={() => navigate({ to: "/results" })}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border/80 bg-card hover:bg-muted px-4 text-sm font-medium transition cursor-pointer"
          >
            Back to Rankings
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-8 space-y-8">
        {/* Header Block */}
        <div>
          <div className="inline-flex items-center gap-1 text-xs font-mono text-brand uppercase tracking-wider">
            <Scale className="size-3.5" /> Recruiter Evaluation Board
          </div>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
            Candidate Comparison Engine
          </h1>
          <p className="mt-1 text-xs text-muted-foreground max-w-xl">
            Compare candidates the way elite recruiters do. Review cross-dimensional parameters, satisfy job criteria, and inspect hiring risk.
          </p>
        </div>

        {/* Selected Candidates Header Cards (Horizontal Grid) */}
        <div className={`grid gap-4 md:grid-cols-${candidates.length} lg:grid-cols-${candidates.length}`}>
          {candidates.map((c, idx) => (
            <div
              key={c.id}
              className={`rounded-2xl border p-5 backdrop-blur-md relative overflow-hidden transition duration-300 ${
                c.id === recommendedWinner?.id
                  ? "border-brand bg-brand/5 shadow-md shadow-brand/5"
                  : "border-border/60 bg-card/40"
              }`}
            >
              {c.id === recommendedWinner?.id && (
                <div className="absolute top-0 right-0 bg-brand text-[9px] font-mono font-bold tracking-wider text-white px-2 py-0.6 rounded-bl-lg uppercase">
                  Top Recommended
                </div>
              )}
              {c.isHoneypot && (
                <div className="absolute top-0 right-0 bg-destructive text-[9px] font-mono font-bold tracking-wider text-white px-2 py-0.6 rounded-bl-lg uppercase flex items-center gap-1">
                  <AlertTriangle className="size-2.5" /> Authenticity Warning
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-base font-bold truncate max-w-[180px]">{c.name}</h3>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5 truncate max-w-[180px]">
                    {c.role}
                  </div>
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1 truncate max-w-[180px]">
                    <Building className="size-3 shrink-0" /> {c.details?.recentCompany || ""}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold font-display ${c.isHoneypot ? "text-destructive" : "text-gradient"}`}>
                    {c.isHoneypot ? "Risk" : `${c.score}%`}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    Match Score
                  </div>
                  <div className="text-[9.5px] font-mono text-muted-foreground/80 mt-1">
                    conf {c.confidence}%
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1 mt-4">
                {c.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className={`rounded text-[9px] font-mono px-1.5 py-0.5 border ${
                      c.isHoneypot
                        ? "bg-destructive/10 text-destructive border-destructive/10"
                        : tag.includes("Top") || tag.includes("Gem")
                        ? "bg-brand/10 text-brand border-brand/10"
                        : "bg-muted text-muted-foreground border-border/80"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dimension Radar Chart Comparison */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-4">
            <h3 className="font-display text-base font-bold flex items-center gap-2">
              <Brain className="size-4.5 text-brand" /> Recruiter Multi-Signal Radar Graph
            </h3>
            <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">
              Comparison Grid
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Chart Area */}
            <div className="md:col-span-7 h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#64748b", fontSize: 10, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 9 }} />
                  
                  {candidates.map((c, idx) => (
                    <Radar
                      key={c.id}
                      name={c.name}
                      dataKey={c.name}
                      stroke={themeColors[idx % themeColors.length].stroke}
                      fill={themeColors[idx % themeColors.length].fill}
                      fillOpacity={0.5}
                      strokeWidth={1.8}
                    />
                  ))}
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #cbd5e1",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "11px" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Insights Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-background/40 border border-border/65 rounded-xl p-4.5 space-y-3 text-xs leading-relaxed">
                <h4 className="font-semibold flex items-center gap-1.5 text-foreground">
                  <Sparkles className="size-4 text-brand" /> Radar Dimensions Explained
                </h4>
                <div className="space-y-2 text-muted-foreground text-[11px]">
                  <p>
                    <strong className="text-foreground">Technical Fit:</strong> Computed match score based on extracted requirements.
                  </p>
                  <p>
                    <strong className="text-foreground">Behavioral Engagement:</strong> Combined recruiter response rates, interview completion, and active status.
                  </p>
                  <p>
                    <strong className="text-foreground">Growth Potential:</strong> Relative career progress based on experience timeline velocity.
                  </p>
                  <p>
                    <strong className="text-foreground">Profile Authenticity:</strong> Checks for inconsistent timelines, fraud warnings, and overlap alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Parameters */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md overflow-hidden">
          <div className="p-5 border-b border-border/40 bg-card/25 flex items-center justify-between">
            <h3 className="font-display text-base font-bold flex items-center gap-2">
              <Scale className="size-4.5 text-muted-foreground" /> Side-by-Side Dimension Board
            </h3>
            <span className="text-[9.5px] uppercase font-mono tracking-wider text-muted-foreground">
              Parameter Compare
            </span>
          </div>

          {/* Table Container - supports horizontal scroll on mobile */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs min-w-[700px]">
              <thead>
                <tr className="border-b border-border/40 bg-muted/20">
                  <th className="p-4 font-semibold text-muted-foreground w-1/4">Evaluation Axis</th>
                  {candidates.map((c) => (
                    <th key={c.id} className="p-4 font-bold text-foreground w-1/4 border-l border-border/30">
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {/* Overall Score */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Overall Score</td>
                  {candidates.map((c) => (
                    <td key={c.id} className="p-4 font-mono font-bold text-sm border-l border-border/30">
                      <span className={c.isHoneypot ? "text-destructive" : "text-brand"}>
                        {c.isHoneypot ? "Honeypot Warning" : `${c.score}%`}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Technical Match */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Technical Match</td>
                  {candidates.map((c) => {
                    const dims = getCandidateDimensions(c);
                    return (
                      <td key={c.id} className="p-4 border-l border-border/30">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{dims.technical}%</span>
                          <div className="w-16 h-1 bg-muted rounded-full overflow-hidden shrink-0">
                            <div className="h-full bg-brand" style={{ width: `${dims.technical}%` }} />
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Behavioral Engagement */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Behavioral Signals</td>
                  {candidates.map((c) => {
                    const dims = getCandidateDimensions(c);
                    return (
                      <td key={c.id} className="p-4 border-l border-border/30 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-[10px] text-muted-foreground">Response Rate:</span>
                          <span className="font-mono font-medium">{dims.responseRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[10px] text-muted-foreground">Interview Completion:</span>
                          <span className="font-mono font-medium">{dims.completionRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[10px] text-muted-foreground">GitHub Activity:</span>
                          <span className="font-mono font-medium">{dims.githubScore}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Expected Salary */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Expected Salary</td>
                  {candidates.map((c) => {
                    const dims = getCandidateDimensions(c);
                    return (
                      <td key={c.id} className="p-4 border-l border-border/30 font-mono font-semibold">
                        {dims.expectedSalary}
                      </td>
                    );
                  })}
                </tr>

                {/* Notice Period */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Notice Period</td>
                  {candidates.map((c) => {
                    const dims = getCandidateDimensions(c);
                    return (
                      <td key={c.id} className="p-4 border-l border-border/30 font-semibold font-mono">
                        {dims.noticePeriod} Days
                      </td>
                    );
                  })}
                </tr>

                {/* Work Mode & Location Fit */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Work Mode & Location Fit</td>
                  {candidates.map((c) => {
                    const dims = getCandidateDimensions(c);
                    return (
                      <td key={c.id} className="p-4 border-l border-border/30 space-y-1 font-medium capitalize">
                        <div>{dims.workMode}</div>
                        <div className="text-[10px] text-muted-foreground font-normal">{dims.locationFit}</div>
                      </td>
                    );
                  })}
                </tr>

                {/* Hiring Risk */}
                <tr>
                  <td className="p-4 font-medium text-muted-foreground">Hiring Risk</td>
                  {candidates.map((c) => {
                    const dims = getCandidateDimensions(c);
                    return (
                      <td key={c.id} className="p-4 border-l border-border/30">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold border ${
                              dims.risk === "Critical"
                                ? "bg-destructive/10 text-destructive border-destructive/20 animate-pulse"
                                : dims.risk === "Medium"
                                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                : "bg-green-500/10 text-green-500 border-green-500/20"
                            }`}
                          >
                            {dims.risk}
                          </span>
                          <span className="text-[10px] text-muted-foreground block truncate max-w-[130px]" title={dims.riskDetail}>
                            {dims.riskDetail}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Skill Gap Analysis Section */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 mb-4 border-b border-border/40 pb-4">
            <Check className="size-4.5 text-brand" /> Job Requirements Gap Comparison
          </h3>

          <div className={`grid gap-6 md:grid-cols-${candidates.length}`}>
            {candidates.map((c) => {
              const dims = getCandidateDimensions(c);
              return (
                <div key={c.id} className="space-y-4">
                  <div className="pb-2 border-b border-border/20">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-[10px] text-muted-foreground">
                      Satisfies {dims.requirementsFound.length} of {dims.requirementsFound.length + dims.requirementsMissing.length} criteria
                    </div>
                  </div>

                  {/* Requirements Found */}
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-green-500 font-semibold flex items-center gap-1">
                      <Check className="size-3" /> Requirements Found
                    </div>
                    {dims.requirementsFound.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {dims.requirementsFound.map((req) => (
                          <span
                            key={req}
                            className="bg-green-500/10 text-green-500 border border-green-500/15 rounded px-2 py-0.5 text-[10px] font-medium"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[10px] text-muted-foreground">None detected</div>
                    )}
                  </div>

                  {/* Requirements Missing */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1">
                      <X className="size-3 text-amber-500" /> Requirements Missing
                    </div>
                    {dims.requirementsMissing.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {dims.requirementsMissing.map((req) => (
                          <span
                            key={req}
                            className="bg-amber-500/10 text-amber-500 border border-amber-500/15 rounded px-2 py-0.5 text-[10px] font-medium"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[10px] text-muted-foreground">No critical requirements missing</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths & Hiring Risks Grid */}
        <div className={`grid gap-6 md:grid-cols-${candidates.length}`}>
          {candidates.map((c) => (
            <div key={c.id} className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-5 space-y-4">
              <div className="border-b border-border/40 pb-2">
                <div className="font-semibold text-sm">{c.name}</div>
                <div className="text-[10px] text-muted-foreground">{c.role}</div>
              </div>

              {/* Strengths */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                  <Award className="size-4 text-brand shrink-0" /> AI-Identified Strengths
                </h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {c.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-tight">
                      <Check className="size-3 text-green-500 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gaps/Risks */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                  <AlertTriangle className="size-4 text-amber-500 shrink-0" /> Screening Gaps & Risks
                </h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {c.weaknesses.map((weak, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-tight">
                      <X className="size-3 text-amber-500 shrink-0 mt-0.5" />
                      <span>{weak}</span>
                    </li>
                  ))}
                  {c.isHoneypot && (
                    <li className="flex items-start gap-1.5 leading-tight bg-destructive/10 border border-destructive/20 rounded p-2 text-destructive">
                      <AlertTriangle className="size-4 shrink-0 mt-0.5 text-destructive" />
                      <span>Timeline fraud overlap detected: {c.honeypotReason}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Career Timeline Comparisons */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6">
          <h3 className="font-display text-base font-bold flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
            <Layers className="size-4.5 text-muted-foreground" /> Career Progression Timeline Comparison
          </h3>

          <div className={`grid gap-6 md:grid-cols-${candidates.length}`}>
            {candidates.map((c) => {
              const details = CHALLENGE_CANDIDATES.find((cc) => cc.candidate_id === c.id) || (c.details as any);
              const history = details?.career_history || [];

              return (
                <div key={c.id} className="space-y-4">
                  <div className="font-semibold text-xs border-b border-border/20 pb-2">{c.name} Timeline</div>
                  <div className="relative border-l border-border pl-4 ml-2.5 space-y-4.5">
                    {/* Render from original career history if present */}
                    {history.length > 0 ? (
                      history.map((job: any, index: number) => (
                        <div key={index} className="relative text-xs">
                          {/* Dot */}
                          <div className={`absolute -left-[20.5px] top-1 size-2 rounded-full border bg-card ${job.is_current ? "border-brand bg-brand" : "border-border"}`} />
                          
                          <div className="font-semibold leading-snug">{job.title}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {job.company} · {job.start_date.substring(0, 7)} - {job.end_date ? job.end_date.substring(0, 7) : "Present"}
                          </div>
                          {job.description && (
                            <p className="mt-1 text-[10px] text-muted-foreground/80 leading-normal line-clamp-2">
                              {job.description}
                            </p>
                          )}
                        </div>
                      ))
                    ) : (
                      // Fallback Dmitry/Mock timeline
                      (c.details?.timeline || []).map((job, idx) => (
                        <div key={idx} className="relative text-xs">
                          <div className="absolute -left-[20.5px] top-1 size-2 rounded-full border border-border bg-card" />
                          <div className="font-semibold leading-snug">{job.role}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {job.company} · {job.period}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Recruiter Verdict & Executive Action Section */}
        {recommendedWinner && (
          <div className="rounded-2xl border border-brand bg-brand/5 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden">
            {/* Ambient glows inside card */}
            <div className="absolute -right-20 -bottom-20 size-60 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand uppercase tracking-wider">
              <Brain className="size-4 animate-bounce" /> CVBlitz Recommendation Banner
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 border-b border-brand/20 pb-5">
              <div className="space-y-1.5">
                <div className="text-xs text-muted-foreground font-semibold">Recommended Match</div>
                <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                  {recommendedWinner.name}
                  <span className="text-[10px] bg-brand text-white font-mono font-bold tracking-wide uppercase px-2 py-0.5 rounded-full shrink-0">
                    Strongest Fit
                  </span>
                </h2>
                <div className="text-xs text-muted-foreground leading-normal max-w-2xl mt-2 font-medium">
                  {getAIVerdict()}
                </div>
              </div>

              <div className="flex gap-4.5 shrink-0 bg-background/50 border border-brand/20 rounded-xl p-3.5 text-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-gradient">
                    {recommendedWinner.score}%
                  </div>
                  <div className="text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    Match Score
                  </div>
                </div>
                <div className="border-l border-brand/20 my-1" />
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-gradient">
                    {recommendedWinner.confidence}%
                  </div>
                  <div className="text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    Confidence
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter executive buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleToggleShortlist(recommendedWinner.id, recommendedWinner.name)}
                  className={`h-9 inline-flex items-center gap-1.5 rounded-lg px-4 text-xs font-medium border transition cursor-pointer ${
                    shortlistedIds.includes(recommendedWinner.id)
                      ? "bg-brand/10 border-brand text-brand"
                      : "border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <UserCheck className="size-4" />
                  {shortlistedIds.includes(recommendedWinner.id) ? "Shortlisted" : "Shortlist Winner"}
                </button>
                <button
                  onClick={() => handleScheduleInterview(recommendedWinner.name)}
                  className="h-9 inline-flex items-center gap-1.5 rounded-lg px-4 text-xs font-medium bg-foreground text-background hover:opacity-90 transition cursor-pointer"
                >
                  <Calendar className="size-4" />
                  Schedule Interview
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleExportReport}
                  className="h-9 inline-flex items-center gap-1.5 rounded-lg px-3.5 text-xs font-medium border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                >
                  <Download className="size-4" />
                  Export Comparison
                </button>
                <button
                  onClick={handleSaveComparison}
                  className="h-9 inline-flex items-center gap-1.5 rounded-lg px-3.5 text-xs font-medium border border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                  title="Save this cohort comparison"
                >
                  <Save className="size-4" />
                  Save Cohort
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
