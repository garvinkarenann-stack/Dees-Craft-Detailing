# Craft Car Detailing — PRD

## Original Problem Statement
Build a website highlighting my business "Craft Car Detailing" featuring a woman owned a woman run business detailing the interior of cars.

## User Choices
- One-page landing site: hero, about, services, gallery, testimonials, contact form
- Working contact form that saves enquiries (viewable later); email sending deferred
- Elegant, premium high-end craft service aesthetic; award-worthy (Awwwards-level) art direction with kinetic hero, masked line reveal, editorial marquee, numbered manifesto chapters, framer-motion + lenis motion

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth scroll) + sonner toasts + axios
- Backend: FastAPI, routes prefixed /api
- DB: MongoDB via MONGO_URL/DB_NAME env vars; `enquiries` collection
- Endpoints: POST /api/enquiries, GET /api/enquiries, GET /api/ (health)

## User Personas
- Luxury car owner seeking premium interior detailing
- Business owner (woman) reviewing booking enquiries via the Atelier Ledger

## Implemented (2026-07)
- Kinetic hero: masked line-by-line serif reveal, mouse-reactive 3D tilt + spotlight card, scroll parallax backdrop
- Obsidian/cognac/gold art direction; Playfair Display + Outfit + JetBrains Mono; grain overlay
- Slow editorial marquee ribbon of brand values
- Manifesto: three numbered chapters with scroll reveals and clipped photography
- Services: four interactive package accordions with "Reserve this Ritual" pre-fill into enquiry form
- Gallery: asymmetric spotlight grid with lightbox modal
- Testimonials: auto-rotating editorial quote carousel with controls
- Enquiry form: name/email/phone/vehicle/condition/package/date/notes, saved to MongoDB, toast feedback
- Atelier Ledger: footer link opens admin viewer modal listing all enquiries
- Lenis momentum scrolling, framer-motion reveals throughout, data-testids on all interactive elements

## Backlog
- P0: Email notifications on new enquiry (Resend integration)
- P1: Before/after comparison slider in gallery
- P2: Password protection for Atelier Ledger
- P2: Instagram/social feed integration, online payment/deposit via Stripe

## Real Business Details (added 2026-07)
- 9 Third Street, Unit 1, West St. Paul, Manitoba
- 1-204-999-9010 — By Appointment Only
- Basic Detail $100; Pet Hair/Oil/Sap Removal add-on from $25; Odor Removal add-on from $25

## Next Tasks
1. Add Resend email notifications for new enquiries
2. Add before/after slider to gallery
3. Password-protect the Atelier Ledger
