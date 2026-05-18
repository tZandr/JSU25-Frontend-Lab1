# Recipe App

A recipe management web app built with React and TypeScript. Browse, search, filter, create, edit, and delete recipes — all powered by a live REST API.

---

## Features

- **Browse** a list of recipes fetched from a public API on load
- **Search** recipes by name with live filtering as you type
- **Filter** by difficulty (Easy / Medium / Hard)
- **View** full recipe details including ingredients and step-by-step instructions
- **Create** new recipes with a form that includes a live image preview and dynamic ingredient/instruction lists
- **Edit** any recipe inline — fields become inputs, with a draft/cancel pattern so no changes are committed until you save
- **Delete** recipes with a confirmation step to prevent accidents

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 with TypeScript (strict mode) |
| Routing | React Router DOM v7 |
| Build tool | Vite |
| Styling | Plain CSS with custom properties |
| API | [DummyJSON Recipes](https://dummyjson.com/recipes) |

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173` by default.

```bash
npm run build   # production build
npm run preview # preview the production build locally
```

---

## Project Structure

```
src/
├── components/     # Reusable UI components (card, modal, form, search, filter)
├── hooks/          # API logic — fetch, create, update, delete
├── pages/          # Home and RecipeCreate page components
├── layouts/        # MainLayout wrapper for routing
├── types/          # TypeScript type definitions
└── router.tsx      # Route configuration
```

---

## How CRUD Works

**Create** — Fill in the form at `/new` and click Save. The recipe is POST'd to the API, then prepended to the list on the home screen without a full reload.

**Read** — Recipes are fetched from the API on mount via a custom `useFetchRecipes` hook. Loading and error states are handled separately.

**Update** — Click any recipe to open the modal, then hit Edit. All fields switch to inputs/textareas. Changes are held in a local draft until you save (PUT) or cancel, which restores the original.

**Delete** — From the modal, click Delete. A confirmation prompt appears before the DELETE request is sent and the recipe is removed from the list.

---

## Known Limitations

- Uses DummyJSON as a mock API — changes don't persist between sessions
- No pagination; all recipes are loaded at once
- No authentication
