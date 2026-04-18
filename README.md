# Schoolars Hub Website

Schoolars Hub is a Vite + React + TypeScript marketing and inquiry site for a Goa-based tuition centre. This version focuses on three goals:

1. A stronger UI and UX for parents on desktop and mobile
2. A safer inquiry and enrollment path backed by Supabase
3. A cleaner path from the current SPA into a more mature platform architecture

## Current stack

- Frontend: Vite, React, TypeScript, Tailwind, shadcn/ui
- Data and backend integration: Supabase client + Edge Functions
- Validation: Zod + React Hook Form
- Async state: TanStack Query
- Testing: Vitest + Testing Library
- CI: GitHub Actions

## Local development

```bash
npm ci
npm run dev
```

Production checks:

```bash
npx tsc --noEmit
npm run lint
npm run test
npm run build
```

## Environment

Copy `.env.example` to `.env` and set:

- `VITE_SITE_URL`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_INQUIRY_FUNCTION`

## Secure inquiry backend

The repo now includes:

- `supabase/migrations/202604190145_create_inquiry_requests.sql`
- `supabase/functions/submit-inquiry/index.ts`

The intended production flow is:

1. Frontend validates form input with Zod.
2. The client invokes the `submit-inquiry` edge function.
3. The edge function validates again, checks basic request limits, fingerprints traffic, and inserts using the service role.
4. The `inquiry_requests` table stays locked behind RLS with no direct public access.

### Deploy the Supabase pieces

Run these after authenticating with Supabase CLI and linking the project:

```bash
supabase db push
supabase functions deploy submit-inquiry
```

Recommended secrets for the function:

- `SUPABASE_SERVICE_ROLE_KEY`
- `ALLOWED_ORIGINS`

## Security improvements included

- CSP, referrer policy, permissions policy, and HSTS-ready header file
- Validated inquiry submission with server-side revalidation
- RLS-locked storage table for intake requests
- Basic rate limiting in the edge function
- Reduced reliance on vague client-only contact flows

## Architecture direction

The codebase is still a Vite SPA today, but it now includes a cleaner stepping stone toward the larger platform target:

- Phase 1: Hardened SPA + Supabase edge backend + modular service layer
- Phase 2: Next.js SSR frontend + modular Node backend or expanded edge/service split
- Phase 3: Service extraction, cache tier, and deeper observability

See [docs/platform-roadmap.md](./docs/platform-roadmap.md) for the fuller plan.
