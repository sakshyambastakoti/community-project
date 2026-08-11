# Project PRAYASH — Web Design & UI System Specification

> **Organization**: RoboYuwa Nepal  
> **Project**: Project PRAYASH 2026 — 9-Day Rural Technology & Community Innovation Camp  
> **Document Type**: Technical Web Design & UI/UX Design System Specification  
> **Version**: 1.0.0  

---

## 1. Executive Summary & Design Philosophy

**Project PRAYASH** is a 9-day intensive rural technology and community innovation camp in Nepal designed for 40–50 rural school students across 8–10 teams. The web portal functions as both an interactive digital experience for stakeholders and an official, print-ready institutional proposal document.

### Core Design Pillars
1. **Institutional Credibility & Academic Excellence**: Editorial typography and structured grid systems evoke the gravitas of an official university or NGO technical proposal.
2. **Warm Earthy Modernism**: A warm paper background palette (`#F7F5EE` / `#EFECE2`) combined with crisp white cards (`#FFFFFF`) and rich brand red accents (`#D92626`) provides high legibility and a premium feel.
3. **Dual-Purpose Presentation (Screen & Print)**: Engineered to function seamlessly as an immersive single-page web experience and cleanly format as a multi-page PDF document via `@media print`.
4. **Interactive Clarity**: Smooth micro-interactions, scroll progress tracking, active navigation highlighting, and rich component cards ensure effortless navigation of complex curriculum and budget data.

---

## 2. Design System Tokens (`design-system.css`)

### 2.1 Color Palette

| Token Name | Hex Code | HSL / RGB | Usage & Context |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#F7F5EE` | `hsl(45, 33%, 95%)` | Page canvas background (Warm Paper) |
| `--bg-secondary` | `#EFECE2` | `hsl(45, 27%, 91%)` | Alternate section background & cards |
| `--bg-surface` | `#FFFFFF` | `hsl(0, 0%, 100%)` | Card surface & interactive containers |
| `--bg-dark` | `#16181B` | `hsl(210, 12%, 10%)` | Dark mode sections & footer background |
| `--bg-dark-surface` | `#202428` | `hsl(210, 11%, 14%)` | Elevated cards within dark mode sections |
| `--text-primary` | `#1A1A1A` | `hsl(0, 0%, 10%)` | Main headings & high-contrast text |
| `--text-secondary` | `#4A4E54` | `hsl(216, 7%, 31%)` | Body copy & descriptive paragraphs |
| `--text-muted` | `#737880` | `hsl(216, 5%, 48%)` | Metadata, captions & subtle labels |
| `--brand-red` | `#D92626` | `hsl(0, 70%, 50%)` | Primary brand accent, CTAs & active states |
| `--brand-red-dark` | `#AD1919` | `hsl(0, 75%, 39%)` | Hover states & dark background accents |
| `--brand-red-light` | `#FDF0F0` | `hsl(0, 67%, 97%)` | Subtle red badges & alert fills |
| `--brand-gold` | `#C59B27` | `hsl(44, 67%, 46%)` | Award badges & highlight callouts |
| `--brand-navy` | `#1B2A4A` | `hsl(221, 46%, 20%)` | Institutional headings & secondary accents |
| `--border-subtle` | `#E2DFD2` | `hsl(45, 20%, 85%)` | Standard card & section borders |
| `--border-strong` | `#C8C4B5` | `hsl(45, 17%, 75%)` | Heavy dividers & focus rings |
| `--border-dark` | `#2E3339` | `hsl(213, 11%, 20%)` | Dividers in dark sections |

---

### 2.2 Typography Scale

The font pairing creates an editorial yet technological balance:

- **Display & Headings**: `Cormorant Garamond` (Serif) — Elegant, institutional, authoritative.
- **Body & Controls**: `Plus Jakarta Sans` (Sans-serif) — Highly legible, modern, crisp interface font.
- **Code & Metrics**: `JetBrains Mono` (Monospace) — Technical specs, numerical data, JSON schema snippets.

```css
/* Typography Scale Hierarchy */
.heading-display   => clamp(2.5rem, 5vw, 4.5rem)   /* Cormorant Garamond 700 */
.heading-primary   => clamp(2rem, 3.5vw, 3.25rem)  /* Cormorant Garamond 700 */
.heading-secondary => clamp(1.4rem, 2.5vw, 2.1rem)  /* Cormorant Garamond 600 */
.heading-tertiary  => clamp(1.15rem, 1.8vw, 1.4rem) /* Plus Jakarta Sans 700 */
.lead-text         => 1.2rem / 1.7 line-height      /* Plus Jakarta Sans 400 */
body               => 1.0rem / 1.65 line-height     /* Plus Jakarta Sans 400 */
```

---

### 2.3 Spacing Scale & Elevation

```css
/* Spacing System */
--space-xs:  0.5rem;   /* 8px  */
--space-sm:  1rem;     /* 16px */
--space-md:  1.5rem;   /* 24px */
--space-lg:  2.5rem;   /* 40px */
--space-xl:  4rem;     /* 64px */
--space-2xl: 6rem;    /* 96px */

/* Corner Radius Scale */
--radius-sm: 4px;      /* Buttons, tags, badges */
--radius-md: 8px;      /* Standard cards, inputs */
--radius-lg: 12px;     /* Modals, feature containers */
--radius-full: 9999px; /* Pill buttons, avatars */

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.03);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.08);
```

---

## 3. UI Components & Layout Specs (`components.css`)

### 3.1 Header & Sticky Navigation
- **Height**: `80px` (`var(--header-height)`).
- **Background**: Glassmorphism translucent fill `rgba(247, 245, 238, 0.92)` with `backdrop-filter: blur(10px)`.
- **Scroll Indicator**: 3px fixed progress bar attached to header bottom (`--brand-red`) dynamically bound to document scroll position.
- **Brand Identity**: RoboYuwa official logo image + dual-line typography (`ROBOYUWA` / `PROJECT PRAYASH 2026`).

### 3.2 Hero Banner & Program Highlights
- **Layout**: Asymmetric 2-column grid (`1fr 340px`).
- **Left Column**: Institutional tags, massive Cormorant Garamond title, mission tagline box, and 4-up metric cards (Duration, Students, Budget, Teams).
- **Right Column**: Embedded RoboYuwa official badge container with red top accent border (`border-top: 4px solid var(--brand-red)`).

### 3.3 9-Day Interactive Curriculum Timeline
- **Structure**: Vertical timeline grid with continuous vertical accent line and day nodes.
- **Day Cards**: White surface cards displaying:
  - Day Number & Theme Title
  - Major Outcome badge
  - Theoretical & Practical Breakdown
  - Community Problem Hunt / Innovation milestones

### 3.4 Equipment & Budget Matrix
- **Data Representation**: Structured tables and visual cards.
- **Budget Cards**: Breakdown of the NPR 85,000 budget across 5 key allocations:
  1. Student Electronics Kits (NPR 35,000)
  2. Tools & Shared Equipment (NPR 15,000)
  3. Community Exhibition & Demos (NPR 12,000)
  4. Workbooks & Learning Resources (NPR 10,000)
  5. Logistics & Contingency (NPR 13,000)
- **Table Styling**: Subtle borders, alternating row fills, monospace numerical alignment.

---

## 4. Print & PDF Export Architecture (`print.css`)

The interface includes a dedicated `@media print` engine allowing users to export the website directly to a formal proposal PDF document.

### Print Key Adaptations:
1. **Hidden UI**: Navigation headers, scroll bars, floating buttons, and mobile menus are hidden (`display: none !important`).
2. **Official Document Header**: Displays RoboYuwa Nepal official letterhead, reference number (`RY/PRAYASH/2026/PROP-01`), and proposal date.
3. **Page Breaks**: Uses `break-inside: avoid` and `page-break-after: always` to ensure sections split logically across printed pages.
4. **Color Adjustments**: Converts dark section backgrounds to high-contrast monochrome fills with crisp borders to conserve ink while remaining readable.

---

## 5. JavaScript Interactive Engine (`app.js`, `projects.js`, `timeline.js`)

- **`app.js`**: Handles mobile drawer navigation, smooth anchor scrolling, scroll progress calculation, sticky header transitions, and print trigger binding.
- **`timeline.js`**: Manages interactive filtering and tab switches for the 9-day curriculum days.
- **`projects.js`**: Controls interactive community project showcases (Water, Energy, Safety, Agriculture, Waste management).

---

## 6. Directory Structure & Asset Organization

```
roboyuwa/
├── css/
│   ├── design-system.css  # Core tokens, CSS variables, typography & resets
│   ├── components.css     # UI components, layout sections, navigation & cards
│   └── print.css          # Dedicated print & PDF generation stylesheet
├── js/
│   ├── app.js             # General UI interactivity & scroll listeners
│   ├── projects.js        # Dynamic project filter & detail modals
│   └── timeline.js        # 9-day interactive curriculum timeline logic
├── images/
│   └── roboyuwalogo.jpg   # Official RoboYuwa logo asset
├── index.html             # Main single-page web portal & proposal structure
├── context.txt            # Project Prayash proposal source context & specs
└── web_design.md          # Technical Web Design & UI System Specification
```

---

## 7. Responsive Breakpoints

| Breakpoint Name | Min / Max Width | Primary Layout Modifications |
| :--- | :--- | :--- |
| **Desktop Wide** | `1200px+` | Full 2-column hero, 4-column metric grids, side-by-side timeline details |
| **Tablet** | `768px – 1199px` | Stacked hero grid, 2-column metric cards, adjusted navigation spacing |
| **Mobile** | `< 768px` | Mobile burger menu drawer enabled, single column stack, touch-optimized cards |

```css
@media (max-width: 768px) {
  .hero-grid-wrap { grid-template-columns: 1fr; }
  .nav-links { display: none; } /* Replaced by hamburger menu drawer */
  .mobile-menu-toggle { display: block; }
}
```

---

*Specification maintained by RoboYuwa Nepal Engineering Team for Project PRAYASH 2026.*
