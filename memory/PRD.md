# PRD — Muhd Afif Portfolio

## Original Problem Statement
Premium, minimalist, cinematic portfolio for Muhd Afif, an Interactive Multimedia student / Multimedia Designer applying for internships. Later upgraded to a BLACK + BLUE premium interactive experience aimed at recruiters.

## Architecture
- **Frontend**: React (CRA/craco) + Tailwind + framer-motion + lenis (smooth scroll) + react-fast-marquee + lucide-react. Content-driven from `src/data/portfolio.js`. Motion variants in `src/lib/motion.js`; helpers `useScrollTo`, `useActiveSection`.
- **Backend**: FastAPI + MongoDB (motor). `/api/contact` POST+GET with EmailStr validation. `contact_messages` collection.
- **Color system**: bg #050505, secondary #080D18, electric blue #2563FF, bright blue #00A8FF, text #F5F7FA, secondary #94A3B8. Blue used strategically as accent; black dominant.

## User Persona
Recruiters / creative studios reviewing a Multimedia Design intern candidate.

## Implemented
- 2026-08: Full single-page portfolio — Navbar, cinematic Hero, About + stats, editorial marquee Ribbon, Selected Work grid (4 projects) with full-screen ProjectDetail modal (overview/objective/role/tools/process/outcome/gallery + optional YouTube video + poster masonry layout), Skills & Tools, Education timeline, Resume CTA, Contact form (stores to MongoDB), Footer. SEO metadata. Real assets: AF logo (transparent PNG), portrait, resume PDF, Muar photos + video, 4 advertising posters.
- 2026-08 (Upgrade): BLACK + BLUE premium redesign — new color system + ambient blue background, desktop-only custom cursor (VIEW state on projects), magnetic CTAs, active-section navbar with blue underline, 3D-tilt project cards with blue hover, interactive software cards, blue timeline nodes, "Multimedia Designer" kinetic hero title, "View Resume" CTAs (open PDF new tab), Contact "Let's Work Together." with Resume channel, richer footer with social links. Verified 100% (backend 5/5, frontend all breakpoints, no console errors / overflow; cursor desktop-only).

## Backlog / Remaining (all optional/cosmetic)
- **P2**: Re-upload resume PDF named for "Muhd Afif" (current file downloads as MUHAMMAD AFIF BIN AZHAR).
- **P2**: Rebalance the 4-poster desktop masonry / de-duplicate hero vs gallery[0] in Graphic Design.
- **P2**: CustomCursor resize listener (edge case when resizing across 1024px).
- **P2**: Optional chaining on ProjectDetail project.gallery/tools for future projects.

## Next Tasks
- Swap in any additional real project media / posters as the user provides them.
