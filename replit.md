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

## Color System (Agency CRO Audit - Jan 2026)

### Primary (Conversion-Driving)
| Color | Hex | Usage |
|-------|-----|-------|
| Orange | `#F39C12` | Book Now, primary CTAs, prices |
| Orange Hover | `#E67E22` | Hover states only (never static) |

### Secondary (Supporting Actions)
| Color | Hex | Usage |
|-------|-----|-------|
| WhatsApp Green | `#25D366` | WhatsApp CTA only |
| Call Gray | `#F3F4F6` | Phone CTA (neutral, non-competing) |

### Neutral Stack (90% of UI)
| Color | Usage |
|-------|-------|
| `gray-900` | Headings, dark hero backgrounds |
| `gray-600` | Body text |
| `gray-500` | Muted text |
| `gray-100` | Borders, inactive states |
| `gray-50` | Alternate backgrounds |
| `white` | Main canvas |

### Badge System (Tiered)
- **Tier 1 (Gradients)**: Most Wanted, Budget Pick, Premium MPV - conversion-critical
- **Tier 2 (Flat)**: City Favorite, SUV Favorite, Family Ready, Compact - informational only

### Forbidden Colors (Removed)
- ~~Secondary Blue `#3498DB`~~ - competed with orange
- ~~Accent Purple `#8E44AD`~~ - no use case
- ~~Accent Sky `#5DADE2`~~ - no use case

### Design Rules
1. Orange = conversion only (1-2 elements per screen max)
2. Neutrals = majority of UI (90%)
3. Gradients = rare & meaningful (Tier 1 badges only)
4. Phone CTA = neutral gray (low friction, don't oversell)
5. Premium cars = less flashy badges (restraint = luxury)

## Recent Changes
- Jan 2026: Full CRO color audit implementation
  - Removed blue, purple, sky colors from CSS variables
  - Phone icons/links changed to neutral gray
  - Tier 2 badges changed to flat colors (orange-50, amber-50, slate-100, gray-100)
  - "Why Choose Us" and "Our Fleet" badges changed to neutral gray
  - Icon backgrounds simplified from gradients to flat bg-orange-50
- Added Pickup & Visit Location section with embedded Google Map
- Complete migration from static HTML/Vite to Next.js 14+ with TypeScript
- Implemented Tailwind CSS v4 with @theme variables for design tokens
- Added Framer Motion animations for scroll effects and page transitions
- Created component library: Header, Footer, CarCard, AnimatedSection, Counter
- All 7 pages migrated: Home, About, Cars, Booking, FAQ, Contact, 404
