\# AGENTS.md — 363 Soil Mechanics App (MVP)



This file defines non-negotiable rules and project conventions for any agentic coding work.



\## 1) Goal (MVP)

Build a cross-platform MVP (iOS/Android/Web) for \*\*363 Soil Mechanics App\*\* with a consistent, premium-playful UI.

UI source of truth:

\- `docs/UI\_HANDOFF.md`

\- PNG screens in `design/` (filenames listed in the handoff doc)



\## 2) Required Workflow

1\) \*\*Plan first\*\*: Provide a clear implementation plan (files/routes/components) before writing code.

2\) \*\*Wait for approval\*\*: Do not start coding until the plan is approved.

3\) \*\*Small, reviewable diffs\*\*: Implement in small increments (navigation shell → screens → state → polish).

4\) \*\*Do not redesign\*\*: Match the existing PNG UI set; consistency > invention.



\## 3) Tech Stack (Preferred)

\- Expo (React Native) + TypeScript

\- Expo Router (file-based routing)

\- Local-first data (JSON / optional markdown) + AsyncStorage for persistence

\- Expo Notifications for daily reminders

\- Optional: React Context + reducer for global state (streak/XP/progress)



If alternatives are proposed, justify them briefly and keep changes minimal.



\## 4) Non-Negotiables (UI)

\### Bottom Navigation (Strict)

\- Exactly \*\*4 tabs\*\*: \*\*Notes, Labs, Learn, Quiz\*\*

\- Same labels, same icons, same order, same sizing/spacing across ALL tab-root screens.

\- No alternate nav variants (no 5 tabs, no center floating button, no Home/Practice/Glossary/Profile/Rank/Progress).

\- Settings/Notifications/Error are NOT bottom tabs.



\### Visual Consistency

\- Keep palette/typography/radius/shadows consistent with the PNGs.

\- Use a small elevation system (card vs dock vs modal).

\- Avoid heavy shadows, harsh neon gradients, or new visual systems.



\### Mascot Requirement

\- Beaver mascot must be used for error/loading states.

\- \*\*Engineering hard hat is required\*\* (as shown in `10-Connection error.png`).

\- Do not use Duolingo assets; keep it original.



\## 5) Source Files (Design)

\- PNGs are in `design/` with the current filenames (some include spaces/typos).

\- Do not rename PNG files unless explicitly requested; code should reference routes/components, not filenames.



\## 6) Routes (Target Names)

Use clean route names regardless of PNG filenames:



Tabs:

\- `/notes` (Notes Home)

\- `/labs` (Labs Home)

\- `/learn` (Learn Roadmap)

\- `/quiz` (Daily Quiz Entry)



Details/Flows:

\- `/notes/detail`

\- `/labs/detail`

\- `/learn/lesson`

\- `/learn/lesson/feedback` (overlay/state)

\- `/settings`

\- `/modal/notifications`

\- `/error/connection`

\- `/loading`



\## 7) Code Conventions

\- TypeScript strictness as feasible; avoid `any`.

\- Create reusable UI primitives:

&nbsp; - `BottomTabBar`, `AppHeader`, `Card`, `Button`, `Chip/SegmentedControl`,

&nbsp;   `ProgressBar`, `Modal`, `FeedbackSheet`

\- Keep theme tokens in a single module (colors, spacing, radius, elevation).

\- Prefer composition over duplication; keep screens thin.



\## 8) Data \& Persistence (MVP)

\- Store locally:

&nbsp; - streak

&nbsp; - XP

&nbsp; - basic progress per topic/lab/lesson

\- No account requirement.

\- Leaderboard can be local-only preview (optional).



\## 9) Commands (Expected)

\- Install: `npm install`

\- Run: `npx expo start`

\- If present:

&nbsp; - `npm run lint`

&nbsp; - `npm run typecheck`



If you add lint/typecheck scripts, document them in README.



\## 10) Definition of Done (Per Increment)

\- App runs on iOS/Android/Web.

\- Navigation works; bottom nav is consistent everywhere.

\- Screen UI matches the handoff PNGs closely (layout/spacing/typography).

\- Local persistence for streak/XP works.

\- No obvious visual regressions between screens.
 feat/phase-0-1-scaffold-8266443009613216044
=======



main
