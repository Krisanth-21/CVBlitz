# ⚡️ CVBlitz — Next-Gen AI Talent Intelligence Engine

CVBlitz is a high-fidelity AI-powered talent acquisition workspace designed for Series A founding teams and elite recruiter workflows. Built on **React 19**, **TypeScript**, and the **TanStack Start/Router** framework, it goes beyond simple keyword-matching to surface top-tier candidates using contextual AI evaluation, multi-signal analysis, and automated profile fraud (honeypot) validation.

CVBlitz is fully optimized to tackle the complex candidate ranking requirements of the **Redrob AI Hackathon Challenge**—processing massive pools of candidates, detecting timeline inconsistencies, and providing explainable AI verdicts at scale.

---

## 🏗️ System Architecture

CVBlitz is split into a robust, high-performance client-side rendering environment and a server-side route architecture powered by TanStack Start.

```
┌──────────────────────────────────────────────────────────────────┐
│                          Recruiter UI                            │
│  (Analysis Workspace ──► Leaderboard ──► Comparison ──► Reports) │
└─────────────────────────────────┬────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│                   Contextual Matching Engine                     │
│  (Real-Time Weight Configurations & Match Metrics Sliders)        │
└─────────────────────────────────┬────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────┴────────────────────────────────┐
│                   Honeypot & Fraud Detector                      │
│ (Anachronism Checker ──► Timeline Overlaps ──► Profile Auditing)  │
└─────────────────────────────────┬────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────┴────────────────────────────────┐
│                       AI Orchestration                           │
│        (Google Gemini 2.5 Flash API / Local Fallback)            │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Platform Views & Features

### 1. **Candidate Analysis Workspace (`/analyze`)**
*   **Gemini JD Parser**: Paste any job description. CVBlitz uses the **Gemini 2.5 Flash API** to extract required competencies, core technologies, and domain terms.
*   **Recruiter Weight Controls**: Customize match algorithms in real-time. Sliders allow recruiters to balance:
    *   *Technical Skills Fit*
    *   *Behavioral Signals (engagement history)*
    *   *Career Growth Trajectory*
    *   *Location Fit & Commute Preferences*
    *   *Profile Authenticity & Trust*
*   **Ingestion Simulator**: Drag-and-drop file mock parser showing profile counts, parsing speed, and active data hygiene verification.
*   **Stepped Loading Pipeline**: Renders a premium, glassmorphic loading animation tracking pipeline progress (`Parsing` ➔ `Extracting` ➔ `Detecting Honeypots` ➔ `Scoring` ➔ `Rankings` ➔ `Dossiers`).

### 2. **Talent Intelligence Rankings (`/results`)**
*   **Interactive Recruiter Leaderboard**: Rank-ordered list displaying match scores, roles, and contextual candidate status tags (`Top Match`, `Hidden Gem`, `Honeypot Flagged`).
*   **Side-by-Side Selector**: Mark checkboxes on candidate cards to pin 2 to 4 candidates for in-depth comparative analytics.
*   **AI Dossier Drawers**: Slide out any candidate profile to view:
    *   *AI Verdict*: A concise explanation of their alignment.
    *   *Strengths & Gaps*: Highlighted skills matched against JD requirements.
    *   *Authenticity Timeline Audit*: An interactive timeline showing overlap issues or suspicious claims.
    *   *Behavioral Sparklines*: Quick visual charts showing Git activity and responsiveness.

### 3. **Candidate Comparison Engine (`/compare`)**
*   **Side-by-Side Matrix**: Grid aligning candidates' match parameters side-by-side.
*   **Recharts Radar Comparison**: Dynamic vector visualization plotting multiple dimensions of candidate performance (Technical Fit, Behavioral Signals, Growth Potential, Location Fit, and Authenticity).
*   **Requirement Checklist**: Clear indicators of candidate competencies (green checks for core skills, amber warnings for missing prerequisites).
*   **AI Recruiter Verdict Banner**: Automatically designates the overall best candidate with an AI-generated paragraph justifying the decision.
*   **Shortlist & Action Center**: Direct triggers for scheduling interviews, adding to candidate shortlists, or exporting reports.

### 4. **Detailed Candidate Report (`/candidate/[id]`)**
*   **Radial SVG Gauges**: High-fidelity animated dashboard meters visualizing:
    *   *Recruiter Response Rate*
    *   *GitHub Activity Score*
    *   *Interview Completion Rate*
    *   *Offer Acceptance Rate*
*   **Notice Period & Compensation Metadata**: Transparent mapping of salary expectations (in INR LPA), relocation willingness, and preferred work modes.
*   **Career Timeline**: An editorial-grade vertical timeline mapping candidate job histories, durations, and role details.

---

## 🛡️ Honeypot & Timeline Fraud Detection

A core feature of CVBlitz is its **Honeypot Detection Protocol**. To address simulated fraud (such as the ~80 impossible profiles embedded in the Redrob dataset), CVBlitz automatically analyzes candidate histories for inconsistencies:

1.  **Timeline Overlaps**: Flags candidate profiles claiming simultaneous full-time positions.
2.  **Anachronisms**: Automatically flags claims of experience using software prior to its release (e.g. Dmitry Vance's profile claiming 12 years of PyTorch experience, which was released in late 2016).
3.  **Severity Warning UI**: Flags honeypots with an attention-grabbing warning badge and filters them to relevance tier 0, preventing fraudulent profiles from ranking top of recruiter search pools.

---

## 🛠️ Technology Stack

*   **UI Core**: React 19, TypeScript
*   **Framework**: TanStack Start / Router (modern file-based routing and Server Side Rendering)
*   **AI Engine**: Google Gemini 2.5 Flash (via secure server endpoints)
*   **Data Visualization**: Recharts (Radar Charts) & Custom Radial SVGs
*   **Styles**: Vanilla CSS + Tailwind CSS v4 (Glassmorphic cards, custom gradient typography, sleek transitions)
*   **Persistence**: LocalStorage states for mock pipeline evaluations

---

## 📂 Repository Structure

The project code is modular, well-structured, and strictly separated:

```
├── [PUB] India_runs_data_and_ai_challenge/   # The Redrob 100K candidate dataset (ignored)
├── DESIGN-cohere.md                          # Design spec & brand guidelines (Cohere-editorial style)
├── hackathon_analysis.md                     # Deep analysis of the Redrob AI Hackathon rules
└── talent-geist-ai-main/                     # Main Web Application
    ├── public/                               # Static assets
    ├── src/
    │   ├── components/
    │   │   └── ui/                           # Reusable layout and style components
    │   ├── hooks/                            # Custom state & logic hooks
    │   ├── lib/
    │   │   ├── challengeCandidates.ts        # Pre-processed challenge datasets
    │   │   └── gemini.ts                     # Gemini 2.5 Flash API connector & fallback engines
    │   ├── routes/                           # Page Routes (TanStack Router)
    │   │   ├── __root.tsx                    # Root template, Navigation and Footer
    │   │   ├── index.tsx                     # Landing Page
    │   │   ├── analyze.tsx                   # Ingestion & JD Workspace
    │   │   ├── results.tsx                   # Leaderboard & AI Dossier
    │   │   ├── compare.tsx                   # Comparison & Radar graphs
    │   │   └── candidate.$id.tsx             # Candidate Dossier Page
    │   ├── router.tsx                        # Router instance
    │   ├── server.ts                         # Server handler for TanStack Start
    │   ├── start.ts                          # Client entry point
    │   └── styles.css                        # Styling rules & custom utilities
    ├── .env.example                          # Environment variables template
    ├── package.json                          # Dependencies & NPM scripts
    └── tsconfig.json                         # TypeScript configuration
```

---

## 📦 Getting Started & Installation

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** or **Bun** installed on your local machine.

### 2. Installation
Navigate into the web application folder and install the dependencies:
```bash
cd talent-geist-ai-main
npm install
```

### 3. Environment Configuration
Create a `.env` file in the `talent-geist-ai-main` directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
> [!NOTE]
> CVBlitz includes an **offline evaluation mode** featuring mock AI evaluations mapped to the Redrob dataset. If no API key is specified, the application will fallback to local processing without crashing.

### 4. Run Development Server
Fire up the local Vite server:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 5. Build for Production
To compile client and SSR builds:
```bash
npm run build
```

---

## 🏆 Redrob Hackathon Rules Met

*   **Performance Budget**: Evaluates candidates instantly using local preprocessing algorithms to filter honeypots and segment candidates prior to LLM reranking, adhering to the ≤5-minute CPU constraint.
*   **Honeypot Gatekeeping**: Incorporates multi-step timeline verification to filter fake profiles.
*   **Justified Rankings**: Automatically outputs detailed, context-aware 1-2 sentence recruiter-grade verdicts explaining candidate ranking scores.
