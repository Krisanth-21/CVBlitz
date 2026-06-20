import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Terminal,
  Award,
  Scale,
  Sparkles,
  Brain,
  Cpu,
  Menu,
  X,
  ShieldCheck,
  Search,
  Command,
  Check,
  Building,
  User,
  Settings,
  Database,
  Activity,
  Globe,
  ChevronRight,
  ShieldAlert,
  Lock,
  LogOut,
  ExternalLink
} from "lucide-react";
import { SAMPLE_CANDIDATES, Candidate } from "../lib/gemini";
import { toast } from "sonner";

interface HeaderProps {
  showBack?: boolean;
  backTo?: string;
}

export function Header({ showBack = false, backTo = "/analyze" }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Command palette search state
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [searchIndex, setSearchIndex] = useState(0);

  // Refs for closing popovers on click outside
  const workspaceRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Workspaces list
  const workspaces = [
    { id: "india-data", name: "Prod · India Data & AI", description: "100k+ engineering profiles", active: true },
    { id: "mock-sandbox", name: "Mock Sandbox Pool", description: "Synthetic test data (100 profiles)", active: false },
    { id: "archive-global", name: "Archive · Global Talent", description: "H1 2026 data", active: false }
  ];
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0]);

  const navLinks = [
    { to: "/analyze", label: "Workspace", icon: Terminal, count: null },
    { to: "/results", label: "Rankings", icon: Award, count: null },
    { to: "/compare", label: "Compare", icon: Scale, count: null },
    { to: "/ats-blindspots", label: "ATS Blindspots", icon: Sparkles, count: "New" },
    { to: "/fit-intelligence", label: "Fit Intelligence", icon: Brain, count: null },
    { to: "/methodology", label: "Methodology", icon: Cpu, count: null },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (workspaceRef.current && !workspaceRef.current.contains(event.target as Node)) {
        setWorkspaceOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut listener for Command Palette (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter candidates for command palette
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCandidates([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = SAMPLE_CANDIDATES.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.role.toLowerCase().includes(query) ||
        c.skills.some((s) => s.toLowerCase().includes(query))
    ).slice(0, 5); // Limit to top 5 results
    setFilteredCandidates(filtered);
    setSearchIndex(0);
  }, [searchQuery]);

  const handleWorkspaceChange = (ws: typeof workspaces[0]) => {
    if (ws.id === activeWorkspace.id) return;
    setActiveWorkspace(ws);
    setWorkspaceOpen(false);
    toast.success(`Switched active pool to: ${ws.name}`);
  };

  const handleCommandPaletteSelect = (candidateId: string) => {
    setCommandPaletteOpen(false);
    setSearchQuery("");
    navigate({ to: `/candidate/${candidateId}` as any });
  };

  return (
    <>
      {/* Floating Island Header Container */}
      <div className="sticky top-0 z-50 w-full flex justify-center py-4 px-4 md:px-6 pointer-events-none">
        <header className="flex items-center justify-between px-6 py-2.5 bg-background/80 backdrop-blur-md rounded-full border border-border/40 shadow-lg w-full max-w-7xl pointer-events-auto relative z-10 transition-all duration-300">
          
          {/* ZONE 1 (LEFT): Logo, Back Button & Workspace Selector */}
          <div className="flex items-center gap-3">
            {showBack && (
              <button
                onClick={() => navigate({ to: backTo as any })}
                className="grid size-8 place-items-center rounded-full border border-border/70 bg-card hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer shadow-sm"
                title="Go Back"
              >
                <ArrowLeft className="size-4" />
              </button>
            )}

            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <motion.div
                className="relative flex size-8.5 items-center justify-center rounded-xl bg-primary text-white shadow-sm ring-1 ring-white/10"
                whileHover={{ rotate: 8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 2L7 18H16L13 30L25 14H16L19 2Z" fill="url(#logo_grad)" />
                  <defs>
                    <linearGradient id="logo_grad" x1="7" y1="2" x2="25" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff7759" />
                      <stop offset="1" stopColor="#1863dc" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold leading-none tracking-tight text-foreground">CVBlitz</span>
                <span className="mt-0.5 font-mono text-[8px] font-bold text-muted-foreground uppercase tracking-widest">STARK v4</span>
              </div>
            </Link>

            <span className="hidden sm:inline text-border/80">|</span>

            {/* Vercel-style Workspace Switcher */}
            <div className="relative" ref={workspaceRef}>
              <button
                onClick={() => setWorkspaceOpen(!workspaceOpen)}
                className="flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/30 hover:bg-secondary/60 px-3 py-1 font-mono text-[10px] text-foreground font-bold shadow-inner cursor-pointer transition-colors"
              >
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="truncate max-w-[120px]">{activeWorkspace.name}</span>
                <ChevronRight className={`size-3 text-muted-foreground transition-transform duration-200 ${workspaceOpen ? "rotate-90" : "rotate-0"}`} />
              </button>

              <AnimatePresence>
                {workspaceOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-64 rounded-2xl border border-border bg-card p-2.5 shadow-xl z-50 text-xs"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="px-2 py-1.5 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-wider">
                      Switch Candidate Pool
                    </div>
                    <div className="mt-1.5 space-y-1">
                      {workspaces.map((ws) => {
                        const isSelected = ws.id === activeWorkspace.id;
                        return (
                          <button
                            key={ws.id}
                            onClick={() => handleWorkspaceChange(ws)}
                            className={`w-full flex items-start gap-2.5 rounded-xl p-2 text-left transition-colors cursor-pointer ${
                              isSelected ? "bg-secondary text-foreground" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <div className="mt-0.5 size-4 flex items-center justify-center">
                              {isSelected ? <Check className="size-3.5 text-brand" /> : <Database className="size-3.5 text-muted-foreground" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold truncate">{ws.name}</div>
                              <div className="text-[10px] text-muted-foreground truncate">{ws.description}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ZONE 2 (CENTER): Desktop Navigation Links with animated hover pill */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Sliding active background indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeHeaderTab"
                      className="absolute inset-0 bg-secondary rounded-full -z-10 shadow-sm border border-border/20"
                      transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    />
                  )}
                  <Icon className="size-3.5" />
                  <span>{link.label}</span>
                  {link.count && (
                    <span className={`ml-1.5 px-2 py-0.5 text-[8px] font-sans font-bold tracking-wider rounded-full border ${
                      link.count === "New"
                        ? "bg-brand/10 text-brand border-brand/20 uppercase"
                        : "bg-muted-foreground/10 text-muted-foreground border-transparent"
                    }`}>
                      {link.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3 (RIGHT): Search Button, Status, Action & Avatar */}
          <div className="flex items-center gap-3">
            {/* Search Input Trigger Command Palette */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden md:flex items-center gap-2 rounded-full border border-border bg-muted/40 hover:bg-muted/80 text-muted-foreground hover:text-foreground text-xs px-3.5 py-1.5 font-medium transition cursor-pointer shadow-sm"
            >
              <Search className="size-3.5" />
              <span>Search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border/80 bg-background px-1.5 text-[9px] font-mono font-bold text-muted-foreground select-none">
                <Command className="size-2.5" />K
              </kbd>
            </button>

            {/* Profile & Developer Popover Trigger */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="relative flex size-8 items-center justify-center rounded-full border border-border bg-card hover:bg-secondary cursor-pointer shadow-sm overflow-hidden"
              >
                <div className="size-6 rounded-full bg-gradient-to-br from-brand/20 to-brand-glow/20 flex items-center justify-center font-mono text-[10px] font-bold text-brand">
                  K
                </div>
                <div className="absolute bottom-0 right-0 size-2.5 rounded-full border border-card bg-emerald-500" />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-72 rounded-2xl border border-border bg-card p-3 shadow-xl z-50 text-xs text-foreground"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2.5 pb-2.5 mb-2.5 border-b border-border/50">
                      <div className="size-9 rounded-full bg-gradient-to-br from-brand/20 to-brand-glow/20 flex items-center justify-center font-mono text-sm font-bold text-brand">
                        K
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold truncate">Krisanth (Admin)</div>
                        <div className="text-[10px] text-muted-foreground truncate">krisanth@cvblitz.ai</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-3 bg-secondary/30 rounded-xl p-2 font-mono text-[10px]">
                      <div>
                        <div className="text-muted-foreground">API Latency</div>
                        <div className="font-bold text-foreground mt-0.5">42ms (India-S)</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">API Usage</div>
                        <div className="font-bold text-foreground mt-0.5">4,812 / 100k</div>
                      </div>
                    </div>

                    {/* Actions List */}
                    <div className="space-y-0.5">
                      <button
                        onClick={() => { setProfileOpen(false); navigate({ to: "/analyze" as any }); }}
                        className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-muted text-left transition-colors cursor-pointer"
                      >
                        <Settings className="size-3.5 text-muted-foreground" />
                        <span>Platform Settings</span>
                      </button>
                      <button
                        onClick={() => { setProfileOpen(false); navigate({ to: "/methodology" as any }); }}
                        className="w-full flex items-center gap-2 rounded-lg px-2.5 py-2 hover:bg-muted text-left transition-colors cursor-pointer"
                      >
                        <ShieldCheck className="size-3.5 text-muted-foreground" />
                        <span>Security & Trust Report</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-between rounded-lg px-2.5 py-2 hover:bg-muted text-left transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Activity className="size-3.5 text-muted-foreground" />
                          <span>System Logs</span>
                        </span>
                        <ExternalLink className="size-3 text-muted-foreground" />
                      </a>
                    </div>

                    <div className="border-t border-border/50 mt-2.5 pt-2.5">
                      <button
                        onClick={() => { setProfileOpen(false); toast.info("Mock logging out..."); }}
                        className="w-full flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-destructive/10 text-destructive text-left transition-colors cursor-pointer font-medium"
                      >
                        <LogOut className="size-3.5" />
                        <span>Sign Out Session</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden grid size-8.5 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 pt-24 px-6 lg:hidden flex flex-col justify-between"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header controls for Mobile */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-primary text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                    <path d="M19 2L7 18H16L13 30L25 14H16L19 2Z" fill="url(#m_logo_grad)" />
                    <defs>
                      <linearGradient id="m_logo_grad" x1="7" y1="2" x2="25" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ff7759" />
                        <stop offset="1" stopColor="#1863dc" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-display text-sm font-bold text-foreground">CVBlitz</span>
              </div>
              <button
                className="grid size-8.5 place-items-center rounded-full border border-border bg-card text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="size-4.5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 pt-4 overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive = currentPath === link.to;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-4.5" />
                        <span>{link.label}</span>
                      </div>
                      {link.count && (
                        <span className={`px-2 py-0.5 text-[9px] font-sans font-bold rounded-full border ${
                          link.count === "New"
                            ? "bg-brand/10 text-brand border-brand/20 uppercase"
                            : "bg-muted-foreground/10 text-muted-foreground border-transparent"
                        }`}>
                          {link.count}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer Status & CTA */}
            <motion.div
              className="border-t border-border/40 py-6 mt-6 flex flex-col gap-3.5 bg-background"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="flex items-center justify-between px-4 py-2 font-mono text-[10px] text-muted-foreground bg-secondary/40 rounded-xl">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ENVIRONMENT</span>
                </span>
                <span className="font-bold text-foreground">SANDBOX INDIA</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate({ to: "/analyze" });
                }}
                className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow-md"
              >
                <ShieldCheck className="size-4" />
                <span>Run New Analysis</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMMAND PALETTE INTERACTIVE DIALOG MODAL (CMD+K / SEARCH) */}
      <AnimatePresence>
        {commandPaletteOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandPaletteOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden text-foreground"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 border-b border-border/60">
                <Search className="size-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Search candidates, routes, or documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 text-sm bg-transparent outline-none border-none text-foreground placeholder-muted-foreground"
                  autoFocus
                />
                <button
                  onClick={() => setCommandPaletteOpen(false)}
                  className="px-2 py-1 text-[10px] bg-secondary hover:bg-muted text-muted-foreground rounded-lg transition-colors cursor-pointer"
                >
                  ESC
                </button>
              </div>

              {/* Suggestions / Results */}
              <div className="max-h-96 overflow-y-auto p-2.5">
                {/* Search query results */}
                {searchQuery.trim() !== "" ? (
                  <div>
                    <div className="px-2.5 py-1 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-wider">
                      Matches ({filteredCandidates.length})
                    </div>
                    {filteredCandidates.length > 0 ? (
                      <div className="mt-1 space-y-0.5">
                        {filteredCandidates.map((c, index) => (
                          <button
                            key={c.id}
                            onClick={() => handleCommandPaletteSelect(c.id)}
                            className={`w-full flex items-center justify-between rounded-xl p-2.5 transition-colors text-left cursor-pointer ${
                              index === searchIndex ? "bg-secondary text-foreground" : "hover:bg-muted/40 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-lg bg-brand/5 border border-brand/20 flex items-center justify-center text-xs font-mono font-bold text-brand shrink-0">
                                {c.name.split(" ").map(n => n[0]).join("")}
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-foreground truncate">{c.name}</div>
                                <div className="text-[10px] text-muted-foreground truncate">{c.role} · {c.experienceYears}y exp</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                {c.skills.slice(0, 2).map((s) => (
                                  <span key={s} className="px-1.5 py-0.5 bg-background border border-border/80 rounded font-mono text-[9px]">{s}</span>
                                ))}
                              </div>
                              <ChevronRight className="size-3.5 text-muted-foreground" />
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-muted-foreground flex flex-col items-center justify-center gap-2">
                        <ShieldAlert className="size-8 text-muted-foreground/60" />
                        <span>No candidates found matching "{searchQuery}"</span>
                      </div>
                    )}
                  </div>
                ) : (
                  // Default Quick Links
                  <div className="space-y-4">
                    <div>
                      <div className="px-2.5 py-1 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-wider">
                        Navigation Shortcuts
                      </div>
                      <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                        {navLinks.map((link) => {
                          const Icon = link.icon;
                          return (
                            <button
                              key={link.to}
                              onClick={() => { setCommandPaletteOpen(false); navigate({ to: link.to as any }); }}
                              className="flex items-center gap-2.5 rounded-xl p-2.5 border border-border/50 hover:bg-secondary/40 text-left transition-colors cursor-pointer text-xs"
                            >
                              <Icon className="size-4 text-muted-foreground" />
                              <span className="font-semibold text-muted-foreground hover:text-foreground">{link.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="px-2.5 py-1 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-wider">
                        Recent Search Tags
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1.5 px-2">
                        {["Senior AI Engineer", "Vector Database", "RAG", "PyTorch Expert", "Honeypot Profiles", "Low response rate"].map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="px-2.5 py-1 bg-secondary/50 hover:bg-secondary border border-border/40 rounded-full font-mono text-[10px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-secondary/30 border-t border-border/50 flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span>Use</span>
                  <span className="px-1 py-0.5 bg-background border border-border rounded">↑↓</span>
                  <span>to navigate</span>
                  <span className="px-1 py-0.5 bg-background border border-border rounded">Enter</span>
                  <span>to select</span>
                </span>
                <span>CVBlitz Intelligent Query Engine</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
