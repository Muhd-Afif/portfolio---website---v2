# PRD — Muhammad Afif Portfolio

## Original Problem Statement
Modern, minimalist, dark cinematic portfolio for Muhammad Afif, an Interactive Multimedia student applying for internships. Sections: sticky navbar, cinematic hero, About + stats, Selected Work (6 projects) with editorial project detail, Skills & Tools, Education timeline, Resume CTA, Contact with form, footer. Award-worthy motion: masked hero reveal, framer-motion scroll reveals, lenis smooth scroll, editorial marquee. Aesthetic: near-black bg, white type, single electric-blue accent, Space Grotesk + Inter.

## Architecture
- **Frontend**: React (CRA/craco) + Tailwind + framer-motion + lenis + react-fast-marquee + lucide-react. Content-driven from `src/data/portfolio.js` (easy to edit). Components in `src/components/`, motion variants in `src/lib/motion.js`, scroll helper in `src/lib/useScrollTo.js`.
- **Backend**: FastAPI + MongoDB (motor). `/api/contact` POST+GET with EmailStr validation.
- **DB**: `contact_messages` collection.

## User Persona
Recruiters / studios reviewing an Interactive Multimedia intern candidate.

## Implemented (2026-08-18)
- Full single-page portfolio: Navbar (blur-on-scroll, Let's Talk), cinematic Hero (masked line reveal + parallax abstract visual), About + stats, editorial marquee ribbon, Selected Work grid (6 projects, hover zoom/arrow), full-screen ProjectDetail modal (overview/objective/role/tools/process/outcome/gallery), Skills & Tools, Education timeline, Resume CTA, Contact form (posts to backend), Footer.
- Backend contact endpoint storing messages; resume PDF placeholder at `/resume-muhammad-afif.pdf`.
- SEO metadata + lenis smooth scrolling. Tested E2E: backend 100%, frontend 100%.

## Backlog / Remaining
- **P1**: Replace placeholder project images + portrait + resume PDF with Afif's real assets.
- **P2**: Real contact details (email/LinkedIn/location) in `src/data/portfolio.js`.
- **P2**: Optional admin view for submitted messages / email notifications.

## Next Tasks
- Swap in real media and contact info when provided by the user.
