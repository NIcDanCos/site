# Portfolio Site

Terminal-inspired design aesthetic with a creative package.json CV presentation. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Terminal-Styled Interface** - Cyberpunk-inspired design with animated gradient backgrounds and glow effects
- **Interactive CV Display** - Skills and experience presented as a package.json file with rotating job titles
- **Project Showcase** - Grid-based project gallery with access tracking and email gating
- **Contact Integration** - Form submissions stored in Supabase backend
- **Dark Theme** - Color palette with cyan-purple accents
- **Fully Responsive** - Mobile-optimized with refined breakpoints
- **Smooth Animations** - Custom Tailwind animations for fade-ins, gradients, and transitions

## Tech Stack

**Frontend**
- React 18 with TypeScript
- Vite for blazing-fast builds
- Tailwind CSS with custom animations
- shadcn/ui component library
- React Router for navigation

**State Management**
- TanStack React Query for server state
- React Hook Form for form handling
- Zod for schema validation

**Backend**
- Supabase (PostgreSQL, Authentication)
- Project access tracking with daily limits
- Contact message storage

**UI Libraries**
- Lucide React for icons
- Recharts for data visualization
- Embla Carousel
- Sonner for toast notifications

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start on `http://localhost:8080`

## Available Scripts

```bash
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui component library
│   ├── Hero/                  # Hero section components
│   │   ├── TerminalHeader.tsx      # Rotating title animation
│   │   ├── PackageJson.tsx         # CV display component
│   │   └── ...
│   ├── ContactModal.tsx       # Contact form
│   ├── EmailGateModal.tsx     # Project access gate
│   └── ...
├── pages/
│   ├── Index.tsx              # Home page
│   ├── Projects.tsx           # Projects showcase
│   └── NotFound.tsx           # 404 page
├── hooks/                     # Custom React hooks
├── lib/                       # Utilities and configuration
└── types/                     # TypeScript type definitions
```

## Design System

**Colors**
- Primary: Cyan (`#00D9FF`)
- Accent: Purple (`#8B5CF6`)
- Background: Deep Navy (`#0a0e27`)
- Foreground: Light Gray (`#e0e0e0`)

**Typography**
- Primary Font: JetBrains Mono, Fira Code (monospace)

**Animations**
- Fade in, gradient shifts, cursor blink
- Glow pulse, wave effects
- Title rotation and gradient transitions

## Configuration

The project uses path aliases for cleaner imports:

```typescript
import { Component } from '@/components/Component'
```

TypeScript is configured with relaxed settings for rapid development. Update `tsconfig.json` for stricter type checking if needed.

## Deployment

Build the project for production:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to deploy to any static hosting service:

- **Vercel** - Recommended for Vite projects
- **Netlify** - Great CI/CD integration
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable CDN solution

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

Private project - All rights reserved

---

**Built with 💙 by Nic Dan Cos & Claude & Lovable**
