\# IMPLEMENTATION\_PLAN.md — 363 Soil Mechanics App (MVP)



This is the execution plan for building the MVP from `docs/UI\_HANDOFF.md` and the PNGs in `design/`.

Principles:

\- Consistency over invention

\- Plan → approve → implement in small diffs

\- Bottom nav is strictly standardized (4 tabs: Notes/Labs/Learn/Quiz)



---



\## Phase 0 — Repo + Tooling Baseline (Foundation)



\### 0.1 Create app scaffold

\- Initialize Expo + TypeScript project

\- Add Expo Router

\- Ensure runs on iOS/Android/Web



\*\*Deliverables\*\*

\- Running app shell

\- Basic folder structure

\- No UI polish yet, but stable



\### 0.2 Project structure

Create a clean structure aligned to the UI handoff:



/app

/(tabs)

notes.tsx

labs.tsx

learn.tsx

quiz.tsx

/notes

detail.tsx

/labs

detail.tsx

/learn

lesson.tsx

feedback.tsx

/settings.tsx

/modal

notifications.tsx

/error

connection.tsx

/loading.tsx



/src

/ui

AppHeader.tsx

BottomTabBar.tsx

Card.tsx

Button.tsx

Chip.tsx

ProgressBar.tsx

FeedbackSheet.tsx

ModalShell.tsx

/theme

tokens.ts

ThemeProvider.tsx (optional)

/data

seed.ts

/storage

keys.ts

storage.ts





\*\*Deliverables\*\*

\- Folders created

\- Minimal placeholder components compile



---



\## Phase 1 — Navigation + Theme Tokens (Non-negotiables)



\### 1.1 Bottom tabs (strict)

Implement \*\*one\*\* bottom tab component used by all tab roots:

\- Tabs: Notes, Labs, Learn, Quiz

\- Same labels/icons/order/active state everywhere

\- No alternate nav variants



\*\*Acceptance\*\*

\- All 4 tabs navigate correctly

\- Bottom nav looks identical on each tab root



\### 1.2 Theme tokens + elevation

Implement tokens matching the PNG style:

\- colors, spacing, radius, typography, elevation/shadows

\- keep small elevation scale: card / floating dock / modal



\*\*Acceptance\*\*

\- Reusable primitives: Card, Button, Chip, ProgressBar

\- Styling consistent across tabs



---



\## Phase 2 — Screen Implementation (Match PNGs)



Implement screens in this order (fastest visible progress, minimal dependencies):



\### 2.1 Notes

\- `/(tabs)/notes` matches `1-Notes Home page.png`

\- `notes/detail` matches `2-Notes Detail.png`

\- Basic local content placeholders (hardcoded or JSON)

\- Bookmark toggle (local persistence)



\*\*Acceptance\*\*

\- Notes Home → Notes Detail works

\- Bookmark persists after restart

\- Sticky CTA present



\### 2.2 Labs

\- `/(tabs)/labs` matches `3-Labs Home.png`

\- `labs/detail` matches `4-.png`

\- Segmented steps (Goal/Apparatus/Procedure) with consistent styling

\- CTA flows



\*\*Acceptance\*\*

\- Labs Home → Lab Detail works

\- Step tabs switch reliably



\### 2.3 Learn

\- `/(tabs)/learn` matches learn roadmap PNG (use current consolidated output)

\- `learn/lesson` matches `5-Lesson Excercise.png`

\- `learn/lesson/feedback` matches `6-Lesson Match terms.png` (overlay/sheet)

\- Basic exercise state machine (local)



\*\*Acceptance\*\*

\- Learn → Lesson → Feedback state works

\- Feedback sheet looks consistent



\### 2.4 Quiz

\- `/(tabs)/quiz` matches `7- Daily Quiz Entry.png`

\- MVP quiz session screen (simple, consistent style)

\- Results screen can be lightweight if not provided as PNG; follow same visual language



\*\*Acceptance\*\*

\- Daily Quiz Entry → session → results flow works

\- XP/streak update (local)



---



\## Phase 3 — Global Screens + System States



\### 3.1 Notifications (modal)

\- `/modal/notifications` matches `8-Notification.png`

\- Implement permission flow + schedule daily reminder (Expo Notifications)

\- Settings screen updates reminder time and toggle



\*\*Acceptance\*\*

\- Enable/disable reminders works

\- Reminder time persists



\### 3.2 Settings

\- `/settings` matches `9-Settings.png`

\- Toggles + notification preferences (MVP)



\*\*Acceptance\*\*

\- Settings changes persist



\### 3.3 Error + Loading

\- `/error/connection` matches `10-Connection error.png`

\- `/loading` (required): beaver mascot with engineering hard hat (original art; no Duolingo assets)



\*\*Acceptance\*\*

\- Error screen reachable and consistent

\- Loading screen exists and is used for app-level loading states



---



\## Phase 4 — Polish (MVP-hardening)



\- Ensure all screens use the same primitives and tokens

\- Add loading/empty/error states where relevant

\- Reduce duplication, refactor UI primitives

\- Basic accessibility (tap targets, contrast, focus for web)

\- Performance: avoid heavy rerenders; keep lists efficient



\*\*Acceptance\*\*

\- Consistent look across all screens

\- No obvious regressions

\- Runs on web/mobile reliably



---



\## Verification Checklist (Every Phase)

\- App boots: `npx expo start`

\- Tabs: Notes/Labs/Learn/Quiz present and consistent

\- No TypeScript errors

\- UI matches PNG layout and style closely

\- Local persistence works for streak/XP/bookmarks
feat/phase-0-1-scaffold-8266443009613216044
=======



 main
