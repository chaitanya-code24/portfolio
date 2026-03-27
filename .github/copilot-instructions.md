# Chaitanya's Portfolio - Coding Instructions

## Project Overview

This is a modern portfolio website showcasing three AI-powered and full-stack projects:
1. **BlinqTrack AI** - Intelligent expense tracker
2. **ChatDock** - Real-time chat application  
3. **AI Resume Builder Pro** - Serverless resume builder

The portfolio is built with Next.js 16+, TypeScript, and Tailwind CSS, fully optimized for Vercel deployment.

## Technology Stack

- **Framework**: Next.js 16.2.1 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3+
- **UI Components**: React 19+
- **Deployment**: Vercel (serverless)
- **Package Manager**: npm

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   ├── globals.css          # Global Tailwind styles
│   │   ├── page.tsx             # Home page with hero section
│   │   └── projects/
│   │       └── page.tsx         # Projects grid page
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar (client component)
│   │   └── ProjectCard.tsx      # Reusable project card component
│   └── data/
│       └── projects.ts          # Projects configuration data
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Key Features Implemented

### 1. Navigation Component
- Sticky navbar with responsive design
- Active route highlighting
- Dark mode support
- Links to home and projects pages

### 2. Projects Showcase
- Dynamic project grid layout
- Project cards with descriptions, tags, and technologies
- Direct links to GitHub repos
- Live demo links when available
- Responsive design (1-3 columns based on screen size)

### 3. SEO Optimization
- Metadata in layout.tsx with description and keywords
- Open Graph tags for social sharing
- Proper heading hierarchy
- Semantic HTML

### 4. Responsive Design
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Touch-friendly buttons and links
- Optimized for all screen sizes

### 5. Performance
- Static site generation (SSG)
- Turbopack for lightning-fast builds
- Optimized images with Next.js Image component
- Zero JavaScript in production where possible

## Development Workflow

### Running Development Server
```bash
npm run dev
```
Server runs on `http://localhost:3000`

### Building for Production
```bash
npm run build  # Creates optimized build
npm start      # Serves production build locally
```

### Linting
```bash
npm run lint   # Check code with ESLint
```

## Adding New Projects

To showcase a new project, add an entry to the `projects` array in `src/data/projects.ts`:

```typescript
{
  id: 4,
  title: "Project Name",
  shortDescription: "One-line description",
  description: "Detailed description of the project",
  github: "https://github.com/username/repo",
  demo: "https://deployed-project.com", // Optional
  tags: ["Category1", "Category2"],
  technologies: ["Tech1", "Tech2", "Tech3"],
}
```

## Customization Guide

### Update Portfolio Info
Edit `src/app/layout.tsx` metadata section:
- Change title and description
- Update Open Graph image URL
- Add your domain URL

### Modify Colors & Theme
- Primary color: Change `from-blue-600` and `to-purple-600` gradient classes
- Use Tailwind color palette in component files
- Customize in `tailwind.config.ts` if needed

### Update Navigation Links
Edit links array in `src/components/Navbar.tsx`

### Change Hero Section
Modify content in `src/app/page.tsx` Home component

### Styling Approach
- Use Tailwind utility classes for all styling
- Dark mode: Use `dark:` prefix for dark mode variants
- Custom styles: Add to `src/app/globals.css` if needed

## Vercel Deployment

### Prerequisites
- GitHub account with your repository
- Vercel account (free tier available)

### One-Click Deployment
1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Select your repository
4. Click "Deploy"

### Environment Variables
No environment variables required for this portfolio.

### Post-Deployment
- Update metadata URLs in `src/app/layout.tsx`
- Set custom domain in Vercel dashboard
- Configure DNS settings if using custom domain

## Best Practices

### Code Style
- Use TypeScript for type safety
- Follow Next.js app router conventions
- Use arrow functions for components
- Destructure props in components

### Performance
- Use `next/link` for internal navigation
- Optimize images with `next/image`
- Lazy load components when possible
- Keep bundle size minimal

### Accessibility
- Use semantic HTML elements
- Provide alt text for images
- Ensure color contrast ratios
- Support keyboard navigation

### SEO
- Include descriptive page titles
- Use proper heading hierarchy
- Add meta descriptions
- Include Open Graph tags

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint checks |
| `npm start` | Run production server |

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000 or use different port
npm run dev -- -p 3001
```

### Build Errors
1. Clear `.next` folder: `rm -rf .next`
2. Clear `node_modules`: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### TypeScript Errors
Run `npm run build` to see full type errors

## Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add skill showcase section
- [ ] Implement filter/search for projects
- [ ] Add testimonials section
- [ ] Add animations with Framer Motion
- [ ] Add syntax highlighting for code samples
- [ ] Implement RSS feed for blog

## External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vercel Deployment](https://vercel.com/docs)

## Notes for AI Assistants

- Always use `src/` directory for source code
- Maintain TypeScript strict mode
- Update metadata when adding new pages
- Use client-side components sparsely (prefer server components)
- Test responsive design on multiple breakpoints
- Verify all external links are valid
