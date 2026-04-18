# Platform Roadmap

## What changed in this repo now

This repo was originally a straightforward Vite marketing site. The current upgrade pushes it toward a more production-ready foundation without forcing a risky full rewrite in one pass.

The implemented improvements are:

- Stronger visual system and mobile responsiveness
- More coherent page structure and clearer parent journeys
- Inline form validation and a reusable inquiry component
- Supabase-backed edge function intake design
- RLS-locked inquiry storage design
- CI coverage for typecheck, lint, test, and build
- Static security headers for deployment targets that support them

## Recommended architecture path

### Phase 1: Mature the current app

Use the current repo as a hardened front end with a secure intake workflow:

- Vite + React front end
- Supabase Edge Functions for intake and lightweight workflows
- PostgreSQL via Supabase
- RLS on all public-facing data tables
- GitHub Actions for verification gates

This phase is fast to ship and much safer than a one-shot rewrite.

### Phase 2: Move to SSR where it matters

When SEO, dynamic content, and operational complexity increase, migrate the front end to Next.js:

- Next.js App Router
- Server-side metadata and route rendering
- Server actions or route handlers for controlled writes
- Better control over caching and performance budgets

The UI patterns and data contracts added in this repo are designed to make that migration easier.

### Phase 3: Strengthen the backend into modules or services

As traffic and scope grow:

- Split inquiry intake, CRM sync, notifications, and payments into explicit modules
- Add Redis for caching and rate-limit state where needed
- Introduce message-driven workflows for follow-up automation
- Layer in monitoring, dashboards, and alerting

## Security baseline

The minimum recommended production baseline is:

- HTTPS everywhere
- HSTS at the host layer
- CSP with the narrowest practical allowlist
- RLS on exposed data tables
- Service-role writes only from trusted server contexts
- Input validation on both client and server
- Rate limiting and abuse monitoring
- No service secrets in browser code

## Infrastructure target

Target stack over time:

- Frontend: Next.js on Vercel or equivalent edge-capable host
- Backend: Node modular monolith or edge + service split
- Database: PostgreSQL
- Cache: Redis
- Monitoring: Grafana, logs, uptime checks
- CI/CD: GitHub Actions

## Why this path is stronger

The core idea is to shift from a site that only looks better to a site that also behaves like a product:

- stronger information hierarchy
- stronger trust and conversion flow
- stronger operational clarity
- stronger backend guardrails
- stronger verification before deployment
