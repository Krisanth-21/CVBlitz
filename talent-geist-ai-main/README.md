# ⚡️ CVBlitz — AI Talent Intelligence Engine

CVBlitz is a next-generation AI-powered recruitment intelligence workspace and ranking dashboard. Built for Series A founding teams and elite recruiters, it filters out keyword-matching noise and surfaces high-potential talent through contextual reasoning, behavioral indicators, and candidate authenticity validation.

---

## 🚀 Key Features

### 1. **Candidate Analysis Workspace (`/analyze`)**
- **Requirements Extraction**: Automatically parses job descriptions in real-time using the **Google Gemini API** to extract required skills, keywords, and domain concepts.
- **Dynamic Weight Configurations**: Allows recruiters to set exact custom weights for matching:
  - *Technical Skills*
  - *Behavioral Signals*
  - *Career Growth Trajectory*
  - *Location Fit & Commute cadence*
  - *Profile Authenticity*
- **Ingestion Simulator**: Drag-and-drop JSON/PDF dataset parser detailing profile counts, parsing speed, and data quality check.
- **Pipeline Progress Overlay**: Renders a premium, stepped loader animation mapping the backend pipeline (Parsing -> Extracting -> Detecting Honeypots -> Scoring -> Rankings -> Dossiers).

### 2. **Talent Intelligence Rankings (`/results`)**
- **Dynamic Leaderboard**: Lists candidates sorted by matching scores with badges like `Top Match`, `Hidden Gem`, and `Honeypot Flagged`.
- **AI Dossier Panel**: A side-drawer providing:
  - **AI Reasoning Verdict**: Contextual summary explaining why the candidate was ranked.
  - **Strengths & Weaknesses**: Bullet points mapping credentials to requirements.
  - **Authenticity Audit**: Timeline checks indicating overlapping roles or impossible experience claims.
  - **Behavioral Sparklines**: Metrics for response rates and active commits.
  - **Vertical Career Progressions**: Visual job history.

### 3. **Candidate Comparison Engine (`/compare`)**
- **Side-by-Side Analysis**: Stacks 2 to 4 candidates in a comparative layout.
- **Interactive Recharts Radar Graph**: Visualizes multi-signal alignments across *Technical Fit*, *Behavioral Engagement*, *Role Relevance*, *Growth Potential*, and *Profile Authenticity*.
- **Job Requirements Checklists**: Displays green checks for found skills and amber crosses for missing skills.
- **AI Recruiter Verdict Banner**: Highlights the top recommended candidate and generates a detailed comparison narrative justifying the choice.
- **Executive Actions**: Triggers for shortlisting, scheduling interviews, and exporting reports.

### 4. **Detailed Candidate Intelligence Report (`/candidate/[id]`)**
- **Radial SVG Gauges**: High-fidelity animated gauges displaying Recruiter Response Rate, GitHub Activity Score, Interview Completion, and Offer Acceptance rates.
- **Timeline & Growth**: Maps career progression milestones, notice periods, salary expectations, and relocation statuses.
- **Hiring Risks & Adaptability Warnings**: Alerts for long notice periods, low response rates, and upskilling opportunities.

---

## 🛠 Tech Stack

- **Core**: React 19, TypeScript
- **Framework**: TanStack Start / Router (file-based routing & SSR)
- **AI Orchestration**: Google Gemini 2.5 Flash API (fetched securely via server/env key)
- **Data Visualization**: Recharts (Interactive Radar Charts)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS + Tailwind CSS v4 (Glassmorphic cards, custom gradient text, glowing indicators)
- **State Management**: Persisted LocalStorage states for mock pipeline persistence

---

## 📦 Getting Started

### 1. Prerequisites
Ensure you have Node.js and `npm` installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd talent-geist-ai-main
npm install
```

### 3. Configure API Key
Create a `.env` file in the root of the project and specify your Google Gemini API Key:
```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```
*(If no API Key is provided, the platform automatically falls back to an offline matching engine featuring mock evaluations based on the Redrob Hackathon Challenge dataset).*

### 4. Local Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to try it out.

### 5. Production Compilation
Build the production bundle for client and SSR environments:
```bash
npm run build
```

---

## 🛡 Honeypot Detection Protocol
CVBlitz features timeline fraud detection designed to catch inflated profiles.
- **Timeline Overlaps**: Flags candidate profiles claiming simultaneous full-time positions.
- **Anachronisms**: Automatically flags claims of experience using software prior to its release (e.g. Dmitry Vance's profile claiming 12 years of PyTorch experience, which was released in late 2016).
