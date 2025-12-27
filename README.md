# 🧥 Try-Fit — Project Initialization & Folder Structure
## 📌 Project Overview

Try-Fit is a try-at-home clothing e-commerce platform where users can explore outfits and virtually try them before purchasing.
This repository sets up the base Next.js (TypeScript) structure that will be extended in future sprints.

### 🛠️ Tech Stack

- Next.js (App Router)

- TypeScript

- ESLint

- Node.js

### 📂 Folder Structure
src/
├── app/          # Application routes and pages (App Router)
│   ├── page.tsx  # Home page
│   ├── layout.tsx # Root layout
│
├── components/   # Reusable UI components (buttons, cards, navbar)
│
├── lib/          # Utility functions, helpers, and configurations
│
public/           # Static assets (images, icons)

#### Folder Explanation

app/
Contains all routes and pages using Next.js App Router.
Each folder represents a route, improving clarity and scalability.

components/
Stores reusable UI components to avoid duplication and keep UI logic clean.

lib/
Holds helper functions, constants, and configurations shared across the app.

public/
Stores static assets that can be accessed directly by the browser.

### 🧠 Naming Conventions

Components use PascalCase (e.g., Navbar.tsx)

Utility files use camelCase (e.g., formatDate.ts)

Folder names are lowercase and descriptive

### 🚀 Setup Instructions

1️⃣ Install Dependencies
- npm install

2️⃣ Run the Development Server
- npm run dev

3️⃣ Open in Browser

- Visit 👉 http://localhost:3000

## 📸 Local Run Screenshot

![Try-Fit running locally](./screenshots/sprint-1-local-run.png)

### 🔍 Reflection: Why This Structure?

- Separates routing, UI, and logic, making the codebase easy to understand.

- Encourages reusability and cleaner commits in team collaboration.

- Scales well as new features, pages, and APIs are added in future sprints.

- Reduces merge conflicts by keeping responsibilities clearly divided.

- This structure forms a strong foundation for building a large-scale full-stack application in upcoming sprints.

### ✅ Sprint-1 Outcome

- Next.js TypeScript project initialized successfully

- Standard folder structure implemented

- Project runs locally without errors

- Ready for feature development in future sprints

## 🧪 TypeScript & ESLint Configuration

### Strict TypeScript
Strict mode is enabled to catch type-related errors at compile time, reducing runtime bugs and enforcing safer code.

### ESLint + Prettier
ESLint ensures code quality rules like no unused variables and consistent syntax, while Prettier enforces uniform formatting across the codebase.

### Pre-Commit Hooks
Husky and lint-staged prevent commits with lint or formatting errors, ensuring consistent and clean code across the team.

### Verification
Lint rules were tested by intentionally committing invalid code, which failed until the issues were fixed.


## 🌱 Environment Variable Management

### Environment Files
- `.env.local` stores sensitive credentials and is ignored by Git.
- `.env.example` documents all required environment variables with placeholder values.

### Server vs Client Variables
- Server-only variables (e.g., DATABASE_URL) are accessed securely on the server.
- Client-safe variables are prefixed with NEXT_PUBLIC_ and can be used in browser code.

### Security Practices
- Secrets are never committed to the repository.
- Only documented variables are exposed, preventing accidental leaks.
- `.env.example` allows easy project setup across environments.

### Verification
Environment variables were tested locally using process.env with correct scoping.


## 🌿 Team Branching & PR Workflow

### Branch Naming Convention

This project follows a consistent branch naming strategy to keep work organized and traceable:

- feature/<feature-name> – New features or enhancements
- fix/<bug-name> – Bug fixes
- chore/<task-name> – Maintenance tasks, configuration, tooling
- docs/<update-name> – Documentation updates

#### Examples
- feature/user-auth
- fix/navbar-overflow
- chore/eslint-config
- docs/update-readme

All contributors are expected to follow this convention for every new branch.

### Pull Request Workflow

All changes are merged via Pull Requests.
Direct pushes to the main branch are restricted to ensure code review and quality checks.

## 🔍 Code Review Checklist

- Branch follows naming conventions
- Code follows project structure and naming rules
- Feature or fix tested locally
- No console errors or warnings
- ESLint and Prettier checks pass
- No secrets or environment variables exposed
- Documentation updated if needed
