# Data Architecture

This document explains the data architecture for the 363 Soil Mechanics App, covering the distinction between static seed content and dynamic, persisted user data.

## 1. Seed Content (Static)

The content provided in `src/data/seed.ts` is considered static and is bundled with the application. This includes:

-   **Notes:** The core reading material.
-   **Labs:** The definitions and procedures for each lab.
-   **Lessons:** The structure and content of the learning modules.
-   **Quiz Questions:** The pool of questions for the daily quiz.

This content is not intended to be modified by the user and is not written to AsyncStorage.

## 2. Persisted User Data (Dynamic)

User-specific data is stored locally on the device using AsyncStorage. This data is managed via the helper functions in `src/storage/storage.ts` and identified by the keys in `src/storage/keys.ts`.

### Bookmarks

-   **Key:** `BOOKMARKS_NOTES`
-   **Storage Method:** We store a simple array of `note.id` strings. This is highly efficient, as we do not need to duplicate the static note content in storage. When the app loads, it can read the bookmarked IDs and cross-reference them with the static `notes` array from `seed.ts`.
    -   Example: `['note-1', 'note-5']`

### Progress

-   **Keys:** `PROGRESS_LABS`, `PROGRESS_LESSONS`
-   **Storage Method:** Progress is stored as a key-value map (or record), where the key is the `id` of the lab or lesson and the value is the user's progress (e.g., a number from 0 to 1 for labs).
    -   Example: `{ "lab-1": 0.75, "lab-2": 1 }`

## 3. Extending Labs

The `Lab` interface in `src/types/models.ts` is designed to be extensible.

-   The `steps` object currently contains `goal`, `apparatus`, and `procedure`.
-   The `futureStepsPlaceholder: {}` property is included as a forward-compatible way to signal that more steps (e.g., "Data Analysis," "Reporting") can be added to the data model in the future without requiring a redesign of the UI components that consume this data. New UI components can be built to render these new steps when they are added to the seed data.
