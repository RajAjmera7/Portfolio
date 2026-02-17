# 🏗️ Project Architecture

## 📂 Folder Structure

```
New Portfolio/
│
├── 📁 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout (Navbar, Cursor, Metadata)
│   ├── page.tsx                     # Home page (All sections)
│   └── globals.css                  # Global styles & utilities
│
├── 📁 components/
│   │
│   ├── Navbar.tsx                   # Fixed navigation with smooth scroll
│   │
│   ├── 📁 sections/                 # Page sections
│   │   ├── Hero.tsx                 # Landing section with typing animation
│   │   ├── About.tsx                # About me section
│   │   ├── Skills.tsx               # Skills grid with icons
│   │   ├── Experience.tsx           # Timeline of work experience
│   │   ├── Projects.tsx             # Project cards with 3D hover
│   │   ├── Achievements.tsx         # Certification badges
│   │   └── Contact.tsx              # Contact form & social links
│   │
│   └── 📁 ui/                       # Reusable UI components
│       ├── CustomCursor.tsx         # Animated cursor with glow
│       └── BackgroundEffects.tsx    # Floating gradient blobs
│
├── 📁 lib/                          # Utility functions (empty for now)
│
├── 📁 public/                       # Static assets (images, fonts)
│
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── tailwind.config.js           # Tailwind customization
│   ├── postcss.config.js            # PostCSS config
│   ├── next.config.js               # Next.js config
│   ├── .eslintrc.json               # ESLint rules
│   └── .gitignore                   # Git ignore rules
│
└── 📄 Documentation
    ├── README.md                    # Project overview
    ├── SETUP_GUIDE.md               # Detailed setup instructions
    ├── QUICK_REFERENCE.md           # Quick reference card
    └── ARCHITECTURE.md              # This file
```

## 🔄 Data Flow

```
User Interaction
      ↓
   Navbar Click
      ↓
Smooth Scroll to Section
      ↓
Section Enters Viewport
      ↓
Framer Motion Detects (useInView)
      ↓
Animations Trigger
      ↓
Content Revealed
```

## 🎨 Component Hierarchy

```
RootLayout (layout.tsx)
├── CustomCursor
├── Navbar
└── Page (page.tsx)
    ├── BackgroundEffects
    ├── Hero
    ├── About
    ├── Skills
    ├── Experience
    ├── Projects
    ├── Achievements
    └── Contact
```

## 🎭 Animation System

### 1. Page Load Animations
- **Navbar**: Slides down from top
- **Hero**: Fade in with scale
- **Cursor**: Follows mouse immediately

### 2. Scroll Animations
- **useInView Hook**: Detects when section enters viewport
- **Trigger**: Animations start when section is 100px from viewport
- **Once**: Animations play only once (no repeat on scroll up)

### 3. Hover Animations
- **Scale**: Buttons and cards scale up
- **Glow**: Shadow intensity increases
- **3D Tilt**: Projects rotate based on mouse position
- **Color**: Text/background color transitions

### 4. Interaction Animations
- **Click**: Scale down (whileTap)
- **Form Focus**: Border color change
- **Menu Toggle**: Smooth height animation

## 🎨 Styling System

### Tailwind CSS
- **Utility-first**: Classes like `flex`, `text-center`, `p-4`
- **Responsive**: `md:`, `lg:` prefixes for breakpoints
- **Custom**: Extended in `tailwind.config.js`

### Custom CSS Classes (globals.css)
```css
.glass              → Glassmorphism effect
.glow-purple        → Purple shadow
.glow-cyan          → Cyan shadow
.text-glow          → Text shadow
.gradient-text      → Gradient text fill
```

### Framer Motion
- **motion.div**: Animated wrapper
- **initial**: Starting state
- **animate**: End state
- **transition**: Animation timing
- **whileHover**: Hover state
- **whileTap**: Click state

## 🔧 Technical Stack

### Core
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety

### Styling
- **Tailwind CSS**: Utility-first CSS
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

### Animation
- **Framer Motion**: Animation library
- **react-type-animation**: Typing effect

### Icons
- **react-icons**: Icon library (HeroIcons, SimpleIcons)

## 🎯 Key Features Implementation

### 1. Glassmorphism Navbar
```tsx
className="glass"  // backdrop-filter: blur(10px)
```

### 2. Smooth Scroll
```tsx
element.scrollIntoView({ behavior: 'smooth' })
```

### 3. Active Link Detection
```tsx
useEffect(() => {
  // Check which section is in viewport
  // Update active state
})
```

### 4. Custom Cursor
```tsx
// Track mouse position
// Animate two circles (dot + ring)
// Scale on hover over clickable elements
```

### 5. 3D Hover Cards
```tsx
// Calculate mouse position relative to card
// Apply rotateX and rotateY transforms
// Reset on mouse leave
```

### 6. Scroll Reveal
```tsx
const isInView = useInView(ref, { once: true })
animate={isInView ? { opacity: 1 } : {}}
```

## 📱 Responsive Design Strategy

### Mobile First
1. Design for mobile (320px+)
2. Add tablet styles (768px+)
3. Add desktop styles (1024px+)

### Breakpoint Usage
- **Navigation**: Hamburger menu on mobile, full menu on desktop
- **Grid**: 1 column → 2 columns → 3-4 columns
- **Typography**: Smaller on mobile, larger on desktop
- **Spacing**: Reduced padding on mobile

## 🚀 Performance Optimizations

### 1. Code Splitting
- Next.js automatically splits code by route
- Components lazy-loaded when needed

### 2. Image Optimization
- Use Next.js Image component (when adding images)
- Automatic WebP conversion
- Lazy loading by default

### 3. CSS Optimization
- Tailwind purges unused styles
- Critical CSS inlined
- Minimal custom CSS

### 4. Animation Performance
- GPU-accelerated transforms
- Will-change hints for smooth animations
- Reduced motion for accessibility

## 🔐 SEO Strategy

### Metadata (layout.tsx)
```tsx
title: "Raj Ajmera | Web Developer"
description: "Portfolio of..."
keywords: "Web Developer, MERN..."
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Section tags for content areas
- Alt text for images (when added)

### Performance
- Fast load times
- Mobile-friendly
- Accessible navigation

## 🎓 Best Practices Used

1. **Component Modularity**: Each section is a separate component
2. **Type Safety**: TypeScript for all files
3. **Consistent Naming**: PascalCase for components, camelCase for functions
4. **Clean Code**: No unused imports or variables
5. **Accessibility**: Semantic HTML, keyboard navigation
6. **Performance**: Optimized animations, lazy loading
7. **Maintainability**: Clear folder structure, documented code

## 🔄 Future Enhancements

Potential additions:
- Blog section with MDX
- Dark/Light theme toggle
- Project filtering by technology
- Testimonials section
- Analytics integration
- CMS integration (Sanity/Contentful)
- Email service integration (EmailJS/SendGrid)
- Image gallery with lightbox
- Resume download button
- Language switcher (i18n)

---

This architecture ensures scalability, maintainability, and premium quality! 🚀
