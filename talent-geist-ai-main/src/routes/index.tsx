import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, ArrowRight, Github, Play, ShieldCheck, Brain, Network, Search,
  AlertTriangle, Activity, Zap, Database, GitBranch, Layers, TrendingUp,
  Check, X, Star, ChevronRight, Cpu, Eye, Workflow, BarChart3, Quote, Users, Scale,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CVBlitz — AI Talent Intelligence Engine" },
      { name: "description", content: "Rank the top 100 candidates from 100,000 profiles using career intelligence, behavioral signals, and recruiter-grade reasoning." },
      { property: "og:title", content: "CVBlitz — AI Talent Intelligence Engine" },
      { property: "og:description", content: "Discover hidden talent, eliminate noise, and rank candidates the way an elite recruiter would." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.2_265/0.35),transparent)] blur-3xl" />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,oklch(0.7_0.22_300/0.25),transparent)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-[radial-gradient(closest-side,oklch(0.6_0.2_220/0.2),transparent)] blur-3xl" />
      </div>

      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <RankingEngine />
      <Comparison />
      <Metrics />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  NAV  ───────────────────────────── */
function Nav() {
  const links = ["Features", "How It Works", "Ranking Engine", "Compare Engine", "Demo"];
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-display text-lg font-semibold tracking-tight">CVBlitz</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <Link to="/ats-blindspots" className="text-brand font-medium hover:opacity-90 transition-colors flex items-center gap-1">
            <Sparkles className="size-3.5" /> Blindspots
          </Link>
          <a href="#" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Github className="size-4" /> GitHub
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/analyze" className="group relative inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background hover:opacity-90 transition">
            Get Started <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow glow-brand">
      <Zap className="size-4 text-white" strokeWidth={2.5} />
    </div>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-card/60 transition">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            <Sparkles className="size-3.5 text-brand" />
            AI Talent Intelligence Engine
          </a>

          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Find the <span className="text-gradient">Top 100 Candidates</span>
            <br /> from 100,000 Profiles.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            CVBlitz goes beyond keyword matching to identify high-potential candidates using career intelligence, behavioral signals, production AI experience, and recruiter-grade reasoning.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/analyze" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-medium text-white glow-brand hover:scale-[1.02] transition">
              <Play className="size-4 fill-white" /> Try Live Demo
            </Link>
            <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 backdrop-blur-md px-6 py-3 text-sm font-medium hover:bg-card/70 transition">
              View Architecture <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Hero dashboard */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute -inset-x-8 -top-8 h-40 bg-gradient-to-b from-brand/20 to-transparent blur-3xl" />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative rounded-3xl glass-strong p-2 shadow-[0_50px_120px_-30px_oklch(0_0_0/0.6)]">
      <div className="rounded-2xl border border-border/60 bg-background/60 overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2.5 rounded-full bg-yellow-500/70" />
            <span className="size-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <Search className="size-3" /> cvblitz.ai / ranking → senior-ai-engineer
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-green-400 animate-pulse" /> Live
          </div>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-12">
          {/* Stats */}
          <div className="md:col-span-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatTile label="Candidates Analyzed" value="100,000" trend="+12k" />
            <StatTile label="Top Score" value="98.4%" accent />
            <StatTile label="Signals Evaluated" value="23+" />
            <StatTile label="Confidence" value="96%" />

            {/* Ranking list */}
            <div className="col-span-2 md:col-span-4 rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium">Live Candidate Ranking</div>
                <div className="font-mono text-[10px] text-muted-foreground">runtime · 4m 12s</div>
              </div>
              <div className="space-y-2">
                {HERO_CANDIDATES.map((c, i) => (
                  <RankRow key={c.name} rank={i + 1} {...c} highlight={i === 0} />
                ))}
              </div>
            </div>
          </div>

          {/* AI reasoning */}
          <div className="md:col-span-4 rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="grid size-7 place-items-center rounded-md bg-brand/15 text-brand">
                <Brain className="size-3.5" />
              </div>
              <div>
                <div className="text-sm font-medium">AI Reasoning</div>
                <div className="text-[11px] text-muted-foreground">Rank #1 · 98.4% match</div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "Production Embeddings Experience",
                "Vector Database Expertise",
                "Strong Python Engineering",
                "High Recruiter Response Rate",
                "Open Source Contributions",
              ].map((r, i) => (
                <div
                  key={r}
                  className="flex items-center gap-2 rounded-md border border-border/50 bg-background/40 px-2.5 py-2 text-xs"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Check className="size-3.5 text-brand" />
                  <span className="text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-brand/30 bg-brand/5 p-3 text-[11px] leading-relaxed text-muted-foreground">
              <span className="text-brand font-medium">Verdict:</span> Production-scale retrieval expertise and exceptional engagement signals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HERO_CANDIDATES = [
  { name: "A. Iyer", role: "Senior AI Engineer", score: 98.4, sigs: ["RAG", "vLLM", "Python"] },
  { name: "M. Chen", role: "ML Platform Lead", score: 96.1, sigs: ["MLOps", "Ray", "GCP"] },
  { name: "J. Okafor", role: "Applied Scientist", score: 94.7, sigs: ["NLP", "Retrieval"] },
  { name: "S. Rao", role: "Staff Engineer · AI", score: 93.2, sigs: ["LLM Eval", "Tooling"] },
];

function RankRow({ rank, name, role, score, sigs, highlight }: { rank: number; name: string; role: string; score: number; sigs: string[]; highlight?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 transition ${highlight ? "border-brand/40 bg-brand/5" : "border-border/40 bg-background/30"}`}>
      <div className="flex items-center gap-3">
        <div className={`grid size-7 place-items-center rounded-md font-mono text-xs font-medium ${highlight ? "bg-gradient-to-br from-brand to-brand-glow text-white" : "bg-card text-muted-foreground border border-border/60"}`}>
          {rank}
        </div>
        <div>
          <div className="text-sm font-medium leading-tight">{name}</div>
          <div className="text-[11px] text-muted-foreground">{role}</div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1.5">
        {sigs.map((s) => (
          <span key={s} className="rounded-full border border-border/60 bg-card/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{s}</span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-card">
          <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: `${score}%` }} />
        </div>
        <span className="font-mono text-xs tabular-nums">{score.toFixed(1)}</span>
      </div>
    </div>
  );
}

function StatTile({ label, value, trend, accent }: { label: string; value: string; trend?: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${accent ? "border-brand/40 bg-brand/5" : "border-border/60 bg-card/40"}`}>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className={`font-display text-2xl font-semibold tabular-nums ${accent ? "text-gradient" : ""}`}>{value}</div>
        {trend && <div className="font-mono text-[10px] text-green-400">↑ {trend}</div>}
      </div>
    </div>
  );
}


/* ─────────────────────────  PROBLEM  ───────────────────────── */
function Problem() {
  const cards = [
    { icon: Search, title: "Keyword Matching Misses Context", desc: "“Python” isn't the same as production Python engineering at scale." },
    { icon: Layers, title: "Job Titles Don't Reveal Capability", desc: "A title is a label. Capability is a pattern of work over time." },
    { icon: Eye, title: "Great Engineers Get Buried", desc: "The top 1% rarely have the most aggressive resumes." },
    { icon: AlertTriangle, title: "Fake Profiles Rise to the Top", desc: "Inflated credentials and synthetic timelines pollute pipelines." },
    { icon: Activity, title: "Recruiters Waste Hours", desc: "Hundreds of resumes reviewed, dozens of strong candidates missed." },
  ];
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="The Problem" title="Why Traditional Candidate Search Fails" />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 hover:border-brand/40 hover:bg-card/60 transition">
              <div className="mb-4 grid size-10 place-items-center rounded-lg bg-background/60 border border-border/60 text-brand">
                <c.icon className="size-5" />
              </div>
              <div className="font-display text-lg font-medium">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}

          {/* ATS vs AI comparison card */}
          <div className="md:col-span-2 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
            <div className="font-display text-lg font-medium">ATS vs Talent Intelligence</div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <X className="size-3.5 text-red-400" /> Traditional ATS
                </div>
                <div className="space-y-2 text-sm">
                  {["Resume keyword scoring", "Flat filter rules", "No reasoning"].map((t) => (
                    <div key={t} className="text-muted-foreground/80">— {t}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-brand/40 bg-brand/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-brand">
                  <Check className="size-3.5" /> CVBlitz
                </div>
                <div className="space-y-2 text-sm">
                  {["Contextual capability graph", "23+ behavioral signals", "Explainable AI ranking"].map((t) => (
                    <div key={t}>— {t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  HOW IT WORKS  ───────────────────── */
function HowItWorks() {
  const steps = [
    {
      icon: Database,
      tag: "Step 01",
      title: "Ingest Candidate Profiles",
      desc: "Analyze career history, skills, education, certifications, and behavioral signals.",
      bullets: ["Career History", "Skills", "Education", "Certifications", "Behavioral Signals"],
    },
    {
      icon: Network,
      tag: "Step 02",
      title: "Build Candidate Intelligence Graph",
      desc: "Extract production experience, technical depth, growth, leadership and hiring readiness.",
      bullets: ["Production Experience", "Technical Depth", "Career Growth", "Leadership Signals", "Hiring Readiness"],
    },
    {
      icon: ShieldCheck,
      tag: "Step 03",
      title: "Validate Profile Authenticity",
      desc: "Detect timeline inconsistencies, skill inflation, honeypots and suspicious patterns.",
      bullets: ["Timeline inconsistencies", "Skill inflation", "Honeypot candidates", "Suspicious patterns"],
    },
    {
      icon: BarChart3,
      tag: "Step 04",
      title: "Generate Recruiter-Grade Rankings",
      desc: "Return top candidates, confidence scores, AI reasoning, and explainable rankings.",
      bullets: ["Top Candidates", "Confidence Score", "AI Reasoning", "Ranking Explanation"],
    },
  ];
  return (
    <section id="how-it-works" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="How It Works" title="From 100,000 profiles to 100 ranked finalists." sub="A four-stage intelligence pipeline that builds a deep understanding of every candidate before ranking." />

        <div className="relative mt-16 grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.tag} className="relative rounded-2xl border border-border/60 bg-card/40 p-6 hover:border-brand/40 transition">
              <div className="flex items-start justify-between">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-glow/20 border border-brand/30 text-brand">
                  <s.icon className="size-5" />
                </div>
                <div className="font-mono text-[11px] tracking-wider text-muted-foreground">{s.tag}</div>
              </div>
              <div className="mt-5 font-display text-2xl font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.bullets.map((b) => (
                  <span key={b} className="rounded-md border border-border/60 bg-background/50 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {b}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute right-4 top-4 font-display text-7xl font-semibold text-white/[0.025]">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FEATURES  ───────────────────────── */
function Features() {
  const feats = [
    { icon: Cpu, title: "Multi-Signal Ranking Engine", desc: "Evaluate candidates based on custom weights for technical skills, behavioral activity, career growth, location fit, and authenticity." },
    { icon: Sparkles, title: "ATS Blindspot Analyzer", desc: "Expose exactly why traditional ATS keyword filters reject top talent and discover matching semantic equivalence.", link: "/ats-blindspots" },
    { icon: ShieldCheck, title: "Honeypot Timelines Detection", desc: "Proactively flags resume inflation, overlapping employment dates, and impossible experience claims." },
    { icon: Brain, title: "Explainable AI Verdicts", desc: "Recruiter-grade narrative assessments summarizing exactly why a candidate matched the target profile." },
    { icon: Scale, title: "Cohort Comparison Engine", desc: "Stack candidates side-by-side to compare profiles, timelines, skill gaps, and multi-signal metrics." },
    { icon: Layers, title: "Executive Intelligence Reports", desc: "Deep-dive detail reports featuring circular gauges, growth charts, risk notifications, and structured pagination." },
  ];
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Platform" title="Built for the way elite recruiters actually think." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
          {feats.map((f) => {
            const cardContent = (
              <>
                <div className="mb-5 grid size-10 place-items-center rounded-lg bg-card border border-border/60 text-brand">
                  <f.icon className="size-5" />
                </div>
                <div className="font-display text-lg font-medium">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-brand opacity-0 group-hover:opacity-100 transition">
                  {f.link ? "Open Analyzer" : "Learn more"} <ChevronRight className="size-3" />
                </div>
              </>
            );

            if (f.link) {
              return (
                <Link
                  key={f.title}
                  to={f.link}
                  className="group bg-background/80 p-7 hover:bg-card/60 transition block cursor-pointer"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={f.title} className="group bg-background/80 p-7 hover:bg-card/60 transition">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────  RANKING ENGINE  ────────────────────── */
function RankingEngine() {
  return (
    <section id="ranking-engine" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Ranking Engine" title="See the AI's verdict — and the reasoning behind it." />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Leaderboard */}
          <div className="lg:col-span-3 rounded-2xl glass p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-medium">Top Candidates</div>
                <div className="text-xs text-muted-foreground">Role · Senior AI Engineer (Retrieval)</div>
              </div>
              <div className="rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                100,000 → 100
              </div>
            </div>

            <div className="space-y-3">
              {LEADER.map((c, i) => (
                <LeaderRow key={c.name} rank={i + 1} {...c} />
              ))}
            </div>
          </div>

          {/* Detail card */}
          <div className="lg:col-span-2 rounded-2xl glass p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-brand">Rank #1</div>
                <div className="mt-1 font-display text-xl font-semibold">Senior AI Engineer</div>
                <div className="text-xs text-muted-foreground">8 yrs · Retrieval & Ranking systems</div>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl font-semibold text-gradient tabular-nums">98.4%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Match Score</div>
              </div>
            </div>

            <Block title="Strengths">
              {["Retrieval Systems", "Vector Databases", "Python Engineering", "Ranking Evaluation Frameworks"].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </Block>

            <Block title="Behavioral Signals">
              <div className="space-y-2">
                <Signal label="Recruiter Response Rate" value={92} />
                <Signal label="GitHub Activity (90d)" value={88} />
                <Signal label="Interview Completion" value={94} />
              </div>
            </Block>

            <Block title="Confidence">
              <div className="flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-card">
                  <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: "96%" }} />
                </div>
                <span className="font-mono text-sm tabular-nums">96%</span>
              </div>
            </Block>

            <div className="mt-5 rounded-xl border border-brand/30 bg-brand/5 p-4 text-sm leading-relaxed text-muted-foreground">
              <Quote className="mb-2 size-4 text-brand" />
              This candidate demonstrates production-scale retrieval expertise, strong engineering depth, and exceptional recruiter engagement signals.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LEADER = [
  { name: "Aanya Iyer", role: "Senior AI Engineer", score: 98.4, conf: 96 },
  { name: "Marcus Chen", role: "ML Platform Lead", score: 96.1, conf: 93 },
  { name: "Jules Okafor", role: "Applied Scientist", score: 94.7, conf: 91 },
  { name: "Sana Rao", role: "Staff Engineer · AI", score: 93.2, conf: 90 },
  { name: "Diego Alvarez", role: "Search Infra Engineer", score: 91.8, conf: 88 },
];

function LeaderRow({ rank, name, role, score, conf }: { rank: number; name: string; role: string; score: number; conf: number }) {
  const highlight = rank === 1;
  return (
    <div className={`grid grid-cols-12 items-center gap-3 rounded-xl border p-3.5 ${highlight ? "border-brand/40 bg-brand/5" : "border-border/60 bg-card/30"}`}>
      <div className="col-span-1 flex justify-center">
        <div className={`grid size-8 place-items-center rounded-lg font-mono text-sm font-semibold ${highlight ? "bg-gradient-to-br from-brand to-brand-glow text-white" : "bg-card border border-border/60 text-muted-foreground"}`}>
          {rank}
        </div>
      </div>
      <div className="col-span-5">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-[11px] text-muted-foreground">{role}</div>
      </div>
      <div className="col-span-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background">
          <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: `${score}%` }} />
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-end gap-3 font-mono text-xs tabular-nums">
        <span className="text-muted-foreground">conf {conf}%</span>
        <span className="font-display text-base font-semibold">{score}</span>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}
function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md border border-border/60 bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground">{children}</span>;
}
function Signal({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-44 text-muted-foreground">{label}</span>
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-card">
        <div className="h-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: `${value}%` }} />
      </div>
      <span className="font-mono tabular-nums">{value}</span>
    </div>
  );
}

/* ─────────────────────────  COMPARISON  ───────────────────────── */
function Comparison() {
  return (
    <section id="compare-engine" className="px-6 py-32 bg-muted/20 border-y border-border/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <SectionHeader
              eyebrow="Compare Engine"
              title="Compare Candidates Like an Elite Recruiter"
              sub="Stack up to 4 candidates side-by-side. Our intelligence graph builds multi-signal profiles, extracts requirement gap analysis, maps timelines, and generates AI-powered hiring verdicts."
            />
            
            <div className="space-y-4.5 text-xs text-muted-foreground leading-relaxed">
              <div className="flex gap-3">
                <div className="grid size-8 place-items-center rounded bg-brand/10 text-brand shrink-0">
                  <Activity className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Interactive Radar Comparison</h4>
                  <p className="mt-1">Inspect candidate alignment visually across Technical Fit, Behavioral Signals, Growth Potential, Authenticity, and Role Relevance.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="grid size-8 place-items-center rounded bg-brand/10 text-brand shrink-0">
                  <Check className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Contextual Requirement Match</h4>
                  <p className="mt-1">Instantly view missing vs found requirements based on contextual resume mapping instead of simple keyword checks.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="grid size-8 place-items-center rounded bg-brand/10 text-brand shrink-0">
                  <Brain className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Hiring Recommendations</h4>
                  <p className="mt-1">Get an explainable AI verdict detailing the winner and recommendation reasons, ready to present to stakeholders.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/analyze"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-95 transition"
              >
                Try Comparison Demo <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive mockup block */}
          <div className="lg:col-span-7 rounded-2xl border border-border/70 bg-card p-5 shadow-xl space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="grid size-6 place-items-center rounded bg-brand/15 text-brand">
                  <Users className="size-3.5" />
                </div>
                <span className="text-xs font-semibold">Cohort Comparison Board</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">3 Candidates Selected</span>
            </div>

            {/* Candidate summary cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { name: "Ira Vora", score: "77.9%", role: "Backend Engineer", color: "border-brand bg-brand/5" },
                { name: "Anil Bose", score: "68.2%", role: "Marketing Manager", color: "border-border/60 bg-muted/10" },
                { name: "Dmitry Vance", score: "Risk", role: "Principal Architect", color: "border-destructive/30 bg-destructive/5" },
              ].map((c) => (
                <div key={c.name} className={`rounded-xl border p-3 text-center ${c.color}`}>
                  <div className="text-[11px] font-bold truncate">{c.name}</div>
                  <div className="text-[9px] text-muted-foreground truncate">{c.role}</div>
                  <div className={`mt-2 font-mono text-xs font-bold ${c.score === "Risk" ? "text-destructive" : "text-brand"}`}>
                    {c.score === "Risk" ? "Honeypot" : c.score}
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison table mockup */}
            <div className="rounded-lg border border-border/40 bg-muted/10 overflow-hidden text-[10px]">
              <div className="grid grid-cols-4 bg-muted/20 border-b border-border/45 p-2 font-semibold text-muted-foreground">
                <div>Parameter</div>
                <div className="text-foreground">Ira Vora</div>
                <div>Anil Bose</div>
                <div>Dmitry V.</div>
              </div>
              <div className="divide-y divide-border/30">
                <div className="grid grid-cols-4 p-2">
                  <div className="font-medium text-muted-foreground">Technical Fit</div>
                  <div className="text-green-500 font-medium">85%</div>
                  <div className="text-amber-500">42%</div>
                  <div className="text-destructive font-medium">Flagged</div>
                </div>
                <div className="grid grid-cols-4 p-2">
                  <div className="font-medium text-muted-foreground">Response Rate</div>
                  <div className="font-mono">75%</div>
                  <div className="font-mono">26%</div>
                  <div className="font-mono text-destructive">45%</div>
                </div>
                <div className="grid grid-cols-4 p-2">
                  <div className="font-medium text-muted-foreground">Hiring Risk</div>
                  <div className="text-green-500">Low</div>
                  <div className="text-amber-500">Medium</div>
                  <div className="text-destructive font-bold">Critical</div>
                </div>
              </div>
            </div>

            {/* AI Recommendation Banner mockup */}
            <div className="rounded-xl border border-brand/30 bg-brand/5 p-3.5 space-y-2">
              <div className="flex items-center gap-1 text-[9px] font-mono text-brand font-bold uppercase">
                <Brain className="size-3" /> CVBlitz AI Recommendation
              </div>
              <div className="text-[11px] leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Ira Vora</strong> is the recommended candidate due to verified backend experience, a clean career history, and higher response rate compared to Anil Bose (low relevance) and Dmitry Vance (critical honeypot alert).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  METRICS  ───────────────────────── */
function Metrics() {
  const m = [
    { v: "100,000+", l: "Profiles Analyzed" },
    { v: "23+", l: "Behavioral Signals" },
    { v: "5 min", l: "Ranking Runtime" },
    { v: "100", l: "Best Candidates Selected" },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 p-10">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-4">
            {m.map((s) => (
              <div key={s.l} className="border-l border-border/60 pl-6 first:border-l-0 first:pl-0 md:border-l md:pl-6">
                <div className="font-display text-4xl font-semibold tracking-tight text-gradient md:text-5xl">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────  TESTIMONIALS  ──────────────────────── */
function Testimonials() {
  const t = [
    {
      quote: "We cut shortlist time from three days to under an hour. The AI surfaces engineers our ATS would never have ranked.",
      name: "Priya N.",
      role: "Head of Talent, Series B SaaS",
    },
    {
      quote: "The explainability is the killer feature. Every recommendation comes with reasoning a recruiter can actually defend in a debrief.",
      name: "Daniel R.",
      role: "Engineering Manager, FinTech",
    },
    {
      quote: "It found three exceptional ML engineers buried under noise — none of whom matched on keywords. That alone paid for the year.",
      name: "Eleanor M.",
      role: "VP People, AI Infra Startup",
    },
  ];
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Testimonials" title="Recruiters who hire the candidates everyone else missed." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.map((it) => (
            <div key={it.name} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed">{it.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-glow font-display text-sm font-semibold text-white">
                  {it.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{it.name}</div>
                  <div className="text-[11px] text-muted-foreground">{it.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────  FINAL CTA  ────────────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-card/30 p-12 text-center glow-brand">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-32 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              The Best Candidate Isn't <br /> Always the <span className="text-gradient">Most Obvious.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Discover hidden talent, eliminate noise, and rank candidates the way an elite recruiter would.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/analyze" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-medium text-white glow-brand hover:scale-[1.02] transition">
                Start Ranking Candidates <ArrowRight className="size-4" />
              </Link>
              <Link to="/analyze" className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-card/80 transition">
                <Play className="size-4" /> Try Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  FOOTER  ─────────────────────────── */
function Footer() {
  const cols = [
    { t: "Product", l: ["Features", "Ranking Engine", "Demo"] },
    { t: "Technology", l: ["Architecture", "Intelligence Graph", "Honeypot Detection"] },
    { t: "Resources", l: ["Documentation", "GitHub", "Changelog"] },
    { t: "Company", l: ["Privacy", "Terms", "Contact"] },
  ];
  return (
    <footer className="border-t border-border/60 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <LogoMark />
              <span className="font-display text-lg font-semibold tracking-tight">CVBlitz</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI talent intelligence for recruiters who refuse to miss exceptional candidates.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="grid size-9 place-items-center rounded-lg border border-border/60 bg-card/40 hover:bg-card/80 transition">
                <Github className="size-4" />
              </a>
              <a href="#" className="grid size-9 place-items-center rounded-lg border border-border/60 bg-card/40 hover:bg-card/80 transition">
                <Workflow className="size-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="text-muted-foreground hover:text-foreground transition">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} CVBlitz. Built for the Redrob Hackathon.</div>
          <div className="flex items-center gap-2 font-mono">
            <TrendingUp className="size-3.5 text-brand" /> ranking_engine · v1.0
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────  SHARED  ──────────────────────── */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="size-1 rounded-full bg-brand" /> {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}