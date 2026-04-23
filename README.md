# AccelerateAI

A React web application for an AI career education platform. Built with Vite, React 19, and Tailwind CSS v4.

## Features

- **Home** — Hero section, program cards, testimonial carousel, salary growth charts, FAQ accordion, and enrollment CTA
- **Programs** — Six AI career tracks with skill tags, audience, duration, and salary data
- **About** — Mission statement, company values, and team profiles
- **Blog** — Article listings with categories and read-time estimates
- **Jobs Portal** — Job board with search, filters, and partner company listings
- **Auth** — Sign in and registration forms with program selection

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Lucide React | latest |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation with Programs dropdown
│   ├── Hero.jsx            # Landing hero with stats and floating cards
│   ├── Programs.jsx        # Program track cards grid
│   ├── SocialProof.jsx     # Stats counters + testimonial carousel
│   ├── CareerSection.jsx   # Salary chart, project portfolio, placement info
│   ├── FAQ.jsx             # Accordion FAQ
│   ├── CTA.jsx             # Enrollment call-to-action banner
│   ├── Footer.jsx          # Site footer with links
│   ├── AboutPage.jsx       # About page
│   ├── BlogPage.jsx        # Blog listing page
│   ├── JobsPage.jsx        # Jobs portal page
│   └── AuthPage.jsx        # Sign in / Register page
├── App.jsx                 # Root component and client-side routing
├── main.jsx                # React entry point
└── index.css               # Global styles and Tailwind imports
```

## Navigation

Client-side routing is handled via component state in `App.jsx` — no external router dependency. Each page component is rendered based on the active route string, keeping the bundle lean and the routing logic straightforward.
