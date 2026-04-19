# Schoolars Hub — CI/CD Setup Guide

Complete pipeline: Lint → Typecheck → Test → Build → Preview Deploy → 
Production Deploy → Smoke Test → Release.

---

## 1. GitHub Repository Secrets

Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**.

Add these secrets:

| Secret Name | Where to get it | Required by |
|---|---|---|
| `VERCEL_TOKEN` | vercel.com → Account Settings → Tokens | deploy.yml, preview.yml |
| `VERCEL_ORG_ID` | `.vercel/project.json` after `vercel link` | deploy.yml, preview.yml |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after `vercel link` | deploy.yml, preview.yml |
| `VITE_SUPABASE_URL` | Supabase dashboard → Project Settings → API | ci.yml (build) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase dashboard → Project Settings → API | ci.yml (build) |

### How to get Vercel IDs

```bash
# Install Vercel CLI globally
npm i -g vercel

# Link your project (run in project root)
vercel link

# This creates .vercel/project.json — open it and copy:
# { "projectId": "...", "orgId": "..." }
```

> **Important:** Add `.vercel/` to your `.gitignore` — never commit it.

---

## 2. GitHub Branch Protection Rules

Go to **Settings → Branches → Add rule** for the `main` branch.

Enable these settings:

- ✅ Require a pull request before merging
  - ✅ Require approvals: **1**
  - ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - Add required checks:
    - `CI passed` (from ci.yml)
    - `Deploy PR preview` (from preview.yml)
    - `Dependency audit` (from security.yml)
    - `Secret scan` (from security.yml)
    - `Check no .env committed` (from security.yml)
- ✅ Require branches to be up to date before merging
- ✅ Do not allow bypassing the above settings

---

## 3. Enable Dependabot

Go to **Settings → Security → Enable Dependabot alerts** and 
**Enable Dependabot security updates**.

The `.github/dependabot.yml` file handles the rest — it will 
automatically open PRs every Monday for outdated packages.

---

## 4. Enable CodeQL

Go to **Security → Code scanning → Set up code scanning**.
Select "CodeQL Analysis" — or just push the `security.yml` workflow, 
which handles it automatically.

---

## 5. Copy files to your repo

```
Copy these files into your repo root:
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              ← Lint + Type + Test + Build
│   │   ├── preview.yml         ← PR preview deploys + Lighthouse
│   │   ├── deploy.yml          ← Production deploy + smoke test + release
│   │   ├── security.yml        ← Audit + secret scan + CodeQL
│   │   └── stale.yml           ← Auto-close stale PRs/issues
│   ├── dependabot.yml          ← Auto dependency updates
│   └── pull_request_template.md
├── .lighthouserc.json          ← Performance budget thresholds
└── vitest.config.ts            ← Updated with coverage config
```

---

## 6. Update package.json scripts

Merge these scripts into your existing `package.json`:

```json
"scripts": {
  "typecheck": "tsc --noEmit --project tsconfig.app.json",
  "test:coverage": "vitest run --coverage",
  "ci": "npm run lint && npm run typecheck && npm run test:coverage && npm run build"
}
```

---

## 7. Install coverage provider

```bash
npm install -D @vitest/coverage-v8
```

---

## Workflow Trigger Summary

| Event | Workflows triggered |
|---|---|
| Push to any branch | `ci.yml` |
| PR opened/updated | `ci.yml` + `preview.yml` + `security.yml` |
| PR merged to `main` | `deploy.yml` (prod deploy + smoke test + release) |
| Every Monday 08:00 UTC | `security.yml` (scheduled audit) |
| Every day 01:00 UTC | `stale.yml` |

---

## Estimated CI Time per PR

| Job | Time |
|---|---|
| Install (cached) | ~20s |
| Lint | ~30s |
| Typecheck | ~45s |
| Tests | ~30s |
| Build | ~60s |
| Preview deploy | ~90s |
| Lighthouse audit | ~60s |
| **Total** | **~5–6 min** |
