# Production Deployment Checklist

## Pre-Merge Requirements

### 1. Preview Deployment Verification
- [ ] GitHub PR created with changes
- [ ] Vercel preview deployment completes successfully
- [ ] Click Vercel preview URL from PR checks
- [ ] Manually verify UI looks correct on preview

### 2. Automated Smoke Tests
- [ ] E2E workflow passes in GitHub Actions
- [ ] All smoke tests green:
  - Homepage loads with correct title
  - "View fees and enroll" button → payments page
  - Payments page shows fee plans (INR 700, INR 1,000)
  - Navigation bar contains all key links
  - Inquiry form accessible

### 3. Manual QA Checklist
- [ ] Test on desktop Chrome/Firefox
- [ ] Test on mobile viewport (dev tools)
- [ ] Verify all forms submit correctly
- [ ] Check all external links work
- [ ] Verify responsive layout on all pages

### 4. Code Quality Gates
- [ ] TypeScript typecheck passes
- [ ] ESLint passes with no errors
- [ ] Unit tests (Vitest) pass
- [ ] Build completes without warnings

## Merge & Deploy

- [ ] All above items checked
- [ ] PR approved by reviewer
- [ ] Merge to `main`
- [ ] Vercel production deploy completes
- [ ] Verify production URL: live site working

## Post-Deploy

- [ ] Smoke tests pass on production
- [ ] Google Analytics/monitoring shows no errors
- [ ] Test critical user journey: Home → Payments → Inquiry

---

## Vercel Project

**Project ID:** `prj_MBqUJr3Q4bQQ6QB9Fb3Z86NkXlXe`

### Preview URLs
- PR previews: `https://<branch-name>-<hash>.vercel.app`
- Production: `https://<your-domain>.vercel.app`

### Commands
```bash
# Run local dev + smoke tests
npm run dev
npm run test:e2e

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Run tests with UI mode
npm run test:e2e:ui
```

---

## GitHub Actions Workflows

| Workflow | Triggers On | Purpose |
|----------|-------------|---------|
| `web` | Push to main, PR | Typecheck, lint, unit tests, build |
| `e2e` | Push to main, PR | Playwright smoke tests against dev server |

**Rule:** Never merge to `main` until both workflows pass ✅
