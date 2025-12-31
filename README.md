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

## 🐳 Docker & Compose Setup for Local Development

### Dockerfile
The Dockerfile defines how the Next.js application is built and run inside a container using a Node.js Alpine image.

### Docker Compose
Docker Compose is used to run the full local stack:
- Next.js application
- PostgreSQL database
- Redis cache

All services run on a shared Docker network, enabling seamless communication.

### Networks & Volumes
- A custom bridge network allows containers to communicate securely.
- A Docker volume is used to persist PostgreSQL data across restarts.

### Environment Variables
Environment variables are injected into containers using Docker Compose to configure database and cache connections.

### Verification
The setup was verified by running all containers using docker-compose and confirming that the application, database, and Redis services were running successfully.

### Reflection
Docker Compose ensures consistent local environments across the team, simplifies onboarding, and reduces configuration-related bugs.


## 🗄️ PostgreSQL Schema Design

### Core Entities
- User: Represents customers using the platform
- Product: Clothing items available for try-fit
- Category: Groups products logically
- Order: Try-fit request placed by a user
- OrderItem: Junction table for products in an order

### Relationships & Constraints
- One-to-many between User and Order
- One-to-many between Category and Product
- Many-to-many between Order and Product via OrderItem
- Unique constraints on email and category name
- Cascading deletes to maintain referential integrity

### Normalization
The schema follows 1NF, 2NF, and 3NF by eliminating redundancy and isolating relationships into separate tables.

### Verification
Migrations were applied successfully using Prisma, and sample seed data was inserted and verified using Prisma Studio.

### Scalability Reflection
This schema supports scalability by separating concerns, indexing key relationships, and allowing efficient queries for users, orders, and products even as data volume grows.

## 🧬 Prisma ORM Setup & Client Initialization (2.14)

Prisma ORM is used as the database access layer for the TryFit application,
providing type-safe and reliable interaction with the PostgreSQL database.

### Setup Overview
- Prisma was installed and initialized in the `/prisma` directory
- Database models were defined in `schema.prisma`
- Prisma Client was generated using `npx prisma generate`
- A singleton Prisma Client was configured in `src/lib/prisma.ts` to prevent
  multiple instances during development

### Prisma Client Usage in Next.js
Prisma Client is imported and used inside a Next.js server component to fetch
data from PostgreSQL:

```ts
import { prisma } from "../lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}


## 🗄️ Database Migrations & Seed Scripts (2.15)

### Migration Workflow
Prisma Migrate is used to version-control database schema changes.
Each migration generates SQL files inside `prisma/migrations/`.

Commands used:
- `npx prisma migrate dev --name init_schema`
- `npx prisma migrate reset`

This ensures the database schema can be recreated consistently across environments.

### Reset & Rollback Strategy
The `prisma migrate reset` command is used during development to:
- Drop all tables
- Reapply all migrations
- Re-run seed scripts

This keeps the local database clean while preserving migration history.

### Seed Script
A reproducible seed script is defined in `prisma/seed.ts` and executed using:
- `npx prisma db seed`

Idempotency is handled using `upsert` to prevent duplicate records.

### Verification
- Migration files generated successfully
- Seed data inserted correctly
- Data verified using Prisma Studio

### Reflection
In production, migrations should be tested in staging first,
with database backups taken before applying schema changes.
This minimizes the risk of data loss or corruption.


## 🔄 Transactions & Query Optimisation (2.16)

### Transactions
I implemented Prisma transactions to ensure atomic database operations.  
A real-world order placement flow was used:

- Create order
- Create order items
- Decrement product stock

All operations are wrapped in a Prisma `$transaction`.  
If any step fails (e.g., insufficient stock), the entire transaction is rolled back automatically.

### Rollback Handling
Transactions are wrapped in `try-catch` blocks.  
Rollback was verified by intentionally triggering an error, confirming no partial writes occurred.

### Query Optimisation
To improve performance and avoid over-fetching:
- Used `select` instead of `include`
- Applied pagination with `take`
- Used `createMany` for bulk inserts

### Indexes
Indexes were added for frequently queried fields:

- `Order.userId`
- `Order.status + createdAt`

This improves filtering and sorting performance for common queries.

### Performance Monitoring
Prisma query logging was enabled using:

```bash
DEBUG="prisma:query" npm run dev

## Global API Response Handler

TryFit uses a centralized API response handler to ensure all backend
endpoints return consistent and predictable responses.

### Unified Response Format

#### Success Response
```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [],
  "timestamp": "2025-12-30T10:00:00Z"
}


## Input Validation with Zod

We use Zod to validate all incoming API requests before executing business logic.

### Example – Authentication Validation
- Ensures valid email format
- Enforces minimum password length
- Prevents missing or malformed request data
- Protects database from invalid input

### Benefits
- Prevents bad data
- Improves DX with clear error messages
- Same schema reusable in frontend forms

## Authorization Middleware

We use a centralized authorization middleware to protect API routes based on user roles and active sessions.

### Example – Role-Based Access Control (RBAC)
- Validates JWT token for every protected request
- Allows all authenticated users to access `/api/users`
- Restricts `/api/admin` routes to admin users only
- Blocks access if token is missing, invalid, or role is insufficient

### Benefits
- Enforces least-privilege principle
- Prevents unauthorized access to sensitive routes
- Centralized security logic across the app
- Easy to extend for new roles (admin, editor, moderator)


## Error Handling Middleware

We implemented a centralized error handling system to manage all API errors consistently across the application.

### Logger Utility
- Logs errors and info messages in structured JSON format
- Includes level, message, metadata, and timestamp
- Helps with debugging and production monitoring

### Centralized Error Handler
- Single `handleError()` function used across API routes
- Differentiates behavior based on environment:
  - Development → detailed message + stack trace
  - Production → safe, user-friendly message only

### Example – API Error Handling
- Errors are caught inside route handlers
- Logged internally with full context
- Returned to users in a secure format

### Benefits
- Consistent error responses
- Better debugging with structured logs
- Improved user trust by hiding sensitive data
- Easily extensible for custom errors (AuthError, ValidationError)


## Redis Caching Layer

We implemented Redis caching using the **cache-aside pattern** to reduce API latency
for frequently accessed resources like user lists.

### Cached Resource
- Users list (`/api/users`)
- Reason: Frequently accessed, read-heavy endpoint

### TTL Policy
- Cache duration: **60 seconds**
- Prevents stale data while improving performance

### Cache Invalidation
- Cache cleared when user data updates
- Ensures cache coherence with database

### Performance Observation
- Cache Miss: ~120 ms (DB fetch)
- Cache Hit: ~10 ms (Redis fetch)

### Reflection
Caching improves performance significantly but introduces stale-data risks.
By combining TTL + explicit invalidation, we maintain cache coherence while
benefiting from low-latency responses.


## Page Routing & Dynamic Routes

### Route Structure
- Public Routes:
  - `/login`
  - `/news`
- Protected Routes:
  - `/dashboard`
  - `/products`
- Dynamic Routes:
  - `/product/[id]`

### Implementation Details
- Implemented routing using Next.js App Router
- Dynamic routes created using folder-based `[id]` segments
- Middleware protects restricted routes using JWT validation
- Shared layout provides consistent navigation
- Custom 404 page added using `not-found.tsx`

### Reflection
Dynamic routing enables scalable URLs for products and users.  
Middleware ensures secure access control while maintaining smooth navigation.  
Custom 404 handling improves user experience and error recovery.


## Layout and Component Architecture

### Component Structure
LayoutWrapper  
→ Header (Navbar)  
→ Sidebar  
→ Page Content  

### Reusable Components
- Header: Global navigation
- Sidebar: Page navigation
- LayoutWrapper: Shared layout
- Button: Reusable UI element

### Benefits
- Reusability across pages
- Consistent UI
- Easy scalability

### Accessibility
- Semantic HTML
- Keyboard-friendly navigation
