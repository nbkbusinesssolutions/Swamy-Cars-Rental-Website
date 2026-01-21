# Swami Car Rentals

## Overview
A car rental website for Swami Car Rental in Goa, India. Migrated from static HTML/Vite to Next.js 14+ with App Router, TypeScript, Tailwind CSS v4 with @theme variables, and Framer Motion animations.

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header, Footer, WhatsAppButton
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with Tailwind v4 @theme
│   ├── about/page.tsx      # About page
│   ├── booking/page.tsx    # Booking page
│   ├── cars/page.tsx       # Cars page with filter
│   ├── contact/page.tsx    # Contact page with map
│   ├── faq/page.tsx        # FAQ page with accordion
│   └── not-found.tsx       # 404 page
├── components/             # Reusable React components
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   ├── CarCard.tsx         # Fleet car display card
│   ├── AnimatedSection.tsx # Framer Motion scroll animations
│   └── Counter.tsx         # Animated counter for stats
├── data/
│   └── fleet.ts            # Fleet data (7 cars with pricing)
└── lib/
    └── constants.ts        # Site constants (WhatsApp number, etc)

public/                     # Static assets
├── images/cars/            # Car images
├── images/hero/            # Hero section images
├── swamy-logo.webp         # Logo
└── favicon files           # Various favicon sizes

backup/                     # Original static HTML files (archived)
```

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @theme variables for design tokens
- **Animations**: Framer Motion for scroll-triggered and entry animations
- **Fonts**: Inter (body) + Space Grotesk (headings) via next/font

## Development
- **Dev server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start production**: `npm start`

## Key Features
- Responsive mobile-first design
- WhatsApp-based booking (instant messaging integration)
- Fleet filtering by category (Hatchbacks, SUVs, Family MPVs)
- Animated page transitions and scroll effects
- SEO optimized with structured data (JSON-LD)
- 4.9 Google rating badge, 500+ customer count

## User Preferences
- Preserve original design - no major visual changes
- Technical modernization only (migration to Next.js/TypeScript)
- Framer Motion for animations (replacing CSS animations)

## Recent Changes
- Jan 2026: Complete migration from static HTML/Vite to Next.js 14+ with TypeScript
- Implemented Tailwind CSS v4 with @theme variables for design tokens
- Added Framer Motion animations for scroll effects and page transitions
- Created component library: Header, Footer, CarCard, AnimatedSection, Counter
- All 7 pages migrated: Home, About, Cars, Booking, FAQ, Contact, 404
