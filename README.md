# Raj Ajmera - Premium Portfolio

A premium, fully animated developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Premium Design**
- Dark futuristic theme with neon purple & cyan accents
- Glassmorphism UI with blur effects
- Smooth animations and transitions
- Custom cursor with glow effect
- Animated gradient backgrounds

🎯 **Sections**
- Hero with typing animation
- About Me
- Skills with animated cards
- Experience timeline
- Featured projects with 3D hover effects
- Achievements & certifications
- Contact form with social links

🚀 **Tech Stack**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation with smooth scroll
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   └── ui/                 # UI components
│       ├── CustomCursor.tsx
│       └── BackgroundEffects.tsx
└── public/                 # Static assets
```

## Customization

### Personal Information
Update the content in each section component:
- `components/sections/Hero.tsx` - Name and roles
- `components/sections/About.tsx` - Bio and description
- `components/sections/Skills.tsx` - Skills and technologies
- `components/sections/Experience.tsx` - Work experience
- `components/sections/Projects.tsx` - Project details
- `components/sections/Achievements.tsx` - Certifications
- `components/sections/Contact.tsx` - Contact information

### Colors
Modify colors in `tailwind.config.js`:
```js
colors: {
  neon: {
    purple: '#9333ea',
    cyan: '#22d3ee',
  },
}
```

### Animations
Customize animations in component files using Framer Motion props.

## Performance

- Optimized with Next.js 14 App Router
- Server-side rendering for better SEO
- Lazy loading for images and components
- Minimal bundle size with tree shaking

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use any other hosting platform that supports Next.js.

## License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ by Raj Ajmera
