\# 363 Soil Mechanics App — UI Handoff (MVP)



This document is the single source of truth for implementing the MVP UI based on the Stitch designs located under `design/`.



\## 1) Source Files (Screens)



All screens are PNG exports stored in `design/` with the following filenames:



1\. `1-Notes Home page.png` — Notes Home (topics list + continue card + chips)

2\. `2-Notes Detail.png` — Notes Detail (reading view + figure blocks)

3\. `3-Labs Home.png` — Labs Home (labs list + streak/progress cards)

4\. `4-.png` — Lab Detail (tabbed/segmented steps: Goal/Apparatus/Procedure; MVP lab page)

5\. `5-Lesson Excercise.png` — Lesson Exercise (matching exercise UI + “Explain Why” panel)

6\. `6-Lesson Match terms.png` — Match Terms feedback overlay/state (success sheet + explanation)

7\. `7- Daily Quiz Entry.png` — Daily Quiz Entry (daily challenge start screen)

8\. `8-Notification.png` — Notification permission / enable notifications modal

9\. `9-Settings.png` — Settings screen (toggles / notification preferences)

10\. `10-Connection error.png` — Connection Lost / Network Error screen (beaver mascot with engineering hard hat)



Notes:

\- Some filenames contain typos/spaces; keep them as-is for now. Engineering implementation should use clean route/component names (see Section 3).

\- The beaver mascot must be reused for the loading/sync experience and error states. The engineering hard hat is required.



\## 2) MVP Navigation Model



\### Bottom Tab Navigation (Global)

The app uses a single standardized bottom tab bar with \*\*exactly 4 tabs\*\*:

\- \*\*Notes\*\*

\- \*\*Labs\*\*

\- \*\*Learn\*\*

\- \*\*Quiz\*\*



Non-negotiables:

\- The bottom navigation must look and behave identically across all tab-root screens.

\- Same labels, same icons, same spacing, same active/inactive states everywhere.

\- Do not introduce alternate bottom nav variants (e.g., 5 tabs, center floating button, Home/Practice/Glossary/Profile/Rank/Progress).

\- Global screens (Settings/Notifications modal/Error) are not tabs; they are accessed via header actions or modal presentation.



\### Screen Flow (MVP)

\*\*Notes\*\*

\- Notes Home → Notes Detail



\*\*Labs\*\*

\- Labs Home → Lab Detail



\*\*Learn\*\*

\- Learn Home (Roadmap) → Lesson Exercise → Match Terms feedback overlay/state



\*\*Quiz\*\*

\- Daily Quiz Entry → (Quiz session is a simplified version for MVP) → Results can reuse existing result patterns if available; otherwise keep within the Daily Quiz flow.



\*\*Global\*\*

\- Notification Permission modal can appear on first launch or when enabling reminders.

\- Settings accessible via a header icon (top-right), not a bottom tab.

\- Connection Lost / Network Error appears as an error route/state when network calls fail.

\- Loading/Sync screen should exist and be consistent with the visual language (see Section 5).



\## 3) Recommended Route Names (Engineering)



Use clean, consistent route identifiers regardless of PNG filenames:



\- Tabs:

&nbsp; - `/notes` (Notes Home)

&nbsp; - `/labs` (Labs Home)

&nbsp; - `/learn` (Learn Home / roadmap)

&nbsp; - `/quiz` (Daily Quiz Entry)



\- Notes:

&nbsp; - `/notes/detail` (Notes Detail)



\- Labs:

&nbsp; - `/labs/detail` (Lab Detail)



\- Learn:

&nbsp; - `/learn/lesson` (Lesson Exercise)

&nbsp; - `/learn/lesson/feedback` (Match Terms feedback overlay/state)



\- Global:

&nbsp; - `/settings` (Settings)

&nbsp; - `/modal/notifications` (Notification permission modal)

&nbsp; - `/error/connection` (Connection Lost / Network Error)

&nbsp; - `/loading` (Loading/Sync)



\## 4) Visual System (Do Not Drift)



\### Design Intent

\- Style target: \*\*playful-premium\*\* with \*\*elegant, “Daily Challenge-level”\*\* softness.

\- Clean hierarchy, generous whitespace, rounded surfaces, subtle depth.



\### Colors

\- Keep the existing palette from the PNGs.

\- No random palette shifts between screens.

\- Accents are primarily mint/teal; additional accent colors may be used for badges/status but must remain consistent.



\### Typography

\- Modern sans-serif with clear hierarchy.

\- Headings bold/strong; body text highly readable.

\- Keep sizing and weight consistent across screens.



\### Elevation / Shadows

\- Use soft, ambient shadows (premium).

\- Avoid heavy drop shadows or harsh borders.

\- Define a small elevation scale (e.g., card vs floating dock vs modal).



\### Components (MVP Inventory)

Implement these as reusable components from day one:

\- `BottomTabBar` (standardized, identical across all tab roots)

\- `AppHeader` (title + right-side actions)

\- `Card` (base container)

\- `Chip` / `SegmentedControl` (filters/tabs)

\- `PrimaryButton` / `SecondaryButton`

\- `ProgressBar` (thin)

\- `Toast/FeedbackSheet` (for lesson feedback like `6-Lesson Match terms.png`)

\- `Modal` (for notifications permission)



\## 5) Gamification \& States (MVP)



\### Local-first gamification

\- \*\*Streak\*\* and \*\*XP\*\* stored locally (no account required).

\- Basic progress indicators on Notes/Labs/Learn.



\### Required UI States

\- Loading state (global and per-screen if needed)

\- Error state (Connection Lost screen)

\- Success/feedback (lesson feedback overlay)



\### Loading / Sync Screen (Required)

\- Implement a dedicated Loading/Sync screen consistent with the UI style.

\- Must feature the beaver mascot with an engineering hard hat (same character style as `10-Connection error.png`).



\## 6) Implementation Constraints (MVP)



\- Prioritize consistency over adding new features.

\- Reuse components; do not create screen-specific one-off UI patterns.

\- Keep bottom navigation unified; do not fork it per screen.

\- Keep visual styling aligned to the PNG set; avoid redesign.



\## 7) Open Items / Known Gaps



\- A separate Quiz Session and Quiz Results screen PNG is not currently included in this folder. For MVP, implement a simple in-flow quiz session screen and reuse the same visual language as `7- Daily Quiz Entry.png`.

\- File `4-.png` should be renamed later to a descriptive filename (e.g., `4-Lab Detail.png`) after initial implementation is stable.



