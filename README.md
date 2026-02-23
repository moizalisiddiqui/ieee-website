# IEEE Student Branch Website + TechNova 2026

A cinematic, high-performance website for IEEE Student Branch featuring the TechNova 2026 mega hackathon sub-experience.

## Tech Stack

- **Next.js 14+** (App Router, Static Export)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — cinematic animations
- **TypeScript** — type-safe codebase
- Google Fonts (Syne + DM Sans + JetBrains Mono)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production (static export)
npm run build
```

The static export is generated in the `/out` folder, ready to deploy to Netlify or any static host.

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

Or drag-and-drop the `/out` folder to Netlify.

## Project Structure

```
app/
├── layout.tsx          # Root layout (shared navbar + footer)
├── page.tsx            # Homepage
├── events/page.tsx     # Events timeline
├── team/page.tsx       # Core team grid
├── gallery/page.tsx    # Masonry gallery with lightbox
└── technova/
    ├── layout.tsx      # TechNova-specific layout
    ├── page.tsx        # TechNova main cinematic page
    ├── ai-dominion/    # AI cluster (4 modules)
    ├── builders-arena/ # Builder's cluster (3 modules)
    ├── data-warfare/   # Data cluster (2 modules)
    ├── immersive-zone/ # Gaming cluster (2 modules)
    └── fyp-expo/       # FYP showcase

components/
├── Navbar.tsx          # Glassmorphism navbar
├── Footer.tsx          # Animated star footer
├── Preloader.tsx       # Route-aware preloader
├── PageTransition.tsx  # Framer Motion route transitions
├── AnimatedSection.tsx # Scroll-reveal wrapper
├── GlassCard.tsx       # Reusable glass card
├── Counter.tsx         # Animated number counter
├── Countdown.tsx       # Live countdown timer
├── EventsTimeline.tsx  # Alternating timeline
├── TeamGrid.tsx        # Team card grid
├── GalleryGrid.tsx     # Masonry gallery + lightbox
└── technova/
    ├── TechNovaNav.tsx      # TechNova navbar
    ├── TechNovaFooter.tsx   # TechNova footer
    ├── Starfield.tsx        # Canvas starfield animation
    ├── OrbitSystem.tsx      # Galaxy cluster navigation
    └── ClusterPageLayout.tsx # Shared cluster page template
```

## Customization

### Updating Content
- **Team**: Edit `components/TeamGrid.tsx` — add real names, roles, initials
- **Events**: Edit `components/EventsTimeline.tsx`
- **Sponsors**: Edit `components/sections/SponsorsSection.tsx`
- **Countdown date**: Edit `components/Countdown.tsx` (TARGET constant)
- **Registration links**: Search for `forms.google.com` and replace with real form URLs

### Updating Images
- Team photos: Add images to `/public/images/team/` and update `TeamGrid.tsx`
- Gallery: Replace placeholder divs in `GalleryGrid.tsx` with `<Image>` components
- Event banners: Add to `/public/images/events/`

### Theme Colors
All theme variables are in `styles/globals.css` under CSS custom properties.

## Performance

- Static export — no server required
- Canvas-based animations (no heavy videos)
- Lazy-loaded sections via `useInView`
- Google Fonts preloaded
- Lighthouse target: 90+
