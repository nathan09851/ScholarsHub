
This message describes an enterprise architecture (Next.js, Kubernetes, microservices, Prometheus, etc.) that does not match this project. This is a Lovable project: React + Vite + Tailwind on the frontend with Lovable Cloud (Supabase) as the backend. I can't migrate to Next.js, Node microservices, Docker/K8s, or self-hosted Postgres/Redis here — those aren't supported in this stack.

That said, many of the *principles* in your blueprint can absolutely be applied to this site (Scholar's Hub Goa). Let me propose a realistic, scoped plan that delivers the high-impact items within Lovable's stack.

## What I can realistically do in this project

**Frontend (React + Vite + Tailwind)**
- SEO: rich meta tags, Open Graph image, JSON-LD `LocalBusiness` + `EducationalOrganization` schema, sitemap.xml, canonical URLs
- Performance: lazy-load routes with `React.lazy` + `Suspense`, image lazy-loading, skeleton loaders (replace spinners), code-splitting per page
- UX: inline form validation (react-hook-form + zod), optimistic UI for any forms, scroll animations polish
- Accessibility (WCAG AA): aria-labels on icon buttons, keyboard nav audit, focus-visible rings, contrast check, semantic landmarks

**Backend (Lovable Cloud)**
- Auth (only if needed) via Supabase email/password + Google
- Tables with RLS policies (proper user-roles pattern, not role-on-profile)
- Edge functions for any server logic (e.g., contact form → email, payment confirmation logging)
- Input validation with zod inside edge functions
- Rate limiting at the edge function level

**Observability / Quality**
- Vitest is already set up — expand unit test coverage for components and utils
- Structured logging inside edge functions
- Error boundary at the App root

## What I cannot do here
- Switch to Next.js / SSR (Vite SPA only)
- Docker, Kubernetes, ECS, self-hosted Postgres/Redis
- Prometheus/Grafana/ELK, GitHub Actions pipelines, Vault/Secrets Manager
- Microservices, RabbitMQ, multi-region infra
- Auth0/Keycloak (use Lovable Cloud auth instead)

## Suggested first concrete slice (Phase 1 for *this* site)

Since the full blueprint is huge, I recommend starting with what gives Scholar's Hub the biggest visible win:

1. **SEO pass** — per-page `<title>`/meta/OG tags, JSON-LD `LocalBusiness` schema with address, phone, rating (5.0/40 reviews), `sitemap.xml`, `canonical` links.
2. **Performance pass** — route-level `React.lazy`, replace any spinners with `Skeleton`, add `loading="lazy"` + width/height to images.
3. **Accessibility pass** — aria-labels on the WhatsApp FAB and icon-only buttons, focus-visible styles, contrast audit.
4. **Error boundary + 404 polish**.

No backend / auth / database is needed yet — the site is currently informational.

## Question before I build

Which slice do you want first? Pick one (or say "all of Phase 1"):

- **A. SEO + structured data** (best for Google ranking — pairs perfectly with the Google reviews work we just did)
- **B. Performance + skeletons + lazy routes**
- **C. Accessibility audit + fixes**
- **D. All of Phase 1 above, in one go**

Also: do you want to add any *actual feature* that needs the backend (e.g., a contact/enquiry form that emails you, a student login area, online enrollment)? If yes, tell me which — I'll fold it in.
