# ⚡ Quick Reference Card

## 🚀 Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 📁 Key Files to Customize

| File | What to Change |
|------|----------------|
| `components/sections/Hero.tsx` | Name, roles, tagline |
| `components/sections/About.tsx` | Bio, CGPA, description |
| `components/sections/Skills.tsx` | Skills list with icons |
| `components/sections/Experience.tsx` | Work experience |
| `components/sections/Projects.tsx` | Project details & links |
| `components/sections/Achievements.tsx` | Certifications |
| `components/sections/Contact.tsx` | Email, LinkedIn, GitHub |
| `components/Navbar.tsx` | Logo/name |
| `app/layout.tsx` | SEO metadata |

## 🎨 Design Tokens

### Colors
- **Neon Purple**: `#9333ea` - Primary accent
- **Neon Cyan**: `#22d3ee` - Secondary accent
- **Background**: `#0a0a0a` - Dark base
- **Text**: `#ffffff` - White

### Tailwind Classes
- `glass` - Glassmorphism effect
- `gradient-text` - Purple to cyan gradient text
- `glow-purple` - Purple glow shadow
- `glow-cyan` - Cyan glow shadow
- `text-glow` - Text shadow effect

## 🎭 Animation Patterns

### Fade In
```tsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Scale Up
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### 3D Tilt
```tsx
style={{
  transform: `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`
}}
```

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `framer-motion` | Animations |
| `react-icons` | Icon library |
| `react-type-animation` | Typing effect |
| `tailwindcss` | Styling |

## 🔗 Section IDs (for navigation)

- `#home` - Hero section
- `#about` - About Me
- `#skills` - Skills
- `#experience` - Experience
- `#projects` - Projects
- `#achievements` - Achievements
- `#contact` - Contact

## 🎯 Features Checklist

- ✅ Fixed glassmorphism navbar
- ✅ Smooth scroll navigation
- ✅ Active link highlighting
- ✅ Mobile hamburger menu
- ✅ Custom cursor with glow
- ✅ Typing animation in hero
- ✅ Scroll reveal animations
- ✅ 3D hover cards
- ✅ Animated timeline
- ✅ Gradient backgrounds
- ✅ Contact form
- ✅ Fully responsive
- ✅ SEO optimized

## 🌐 Deployment URLs

- **Vercel**: https://vercel.com/new
- **Netlify**: https://app.netlify.com/
- **GitHub Pages**: Requires static export

## 💡 Pro Tips

1. **Performance**: Keep animations under 1 second
2. **Accessibility**: Test with keyboard navigation
3. **SEO**: Update metadata in `layout.tsx`
4. **Images**: Use Next.js Image component for optimization
5. **Testing**: Test on mobile devices
6. **Git**: Commit regularly with clear messages

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Use `npm run dev -- -p 3001` |
| Styles not loading | Clear `.next` folder and restart |
| Build errors | Check TypeScript errors with `npm run lint` |
| Slow animations | Reduce `duration` in transitions |

## 📱 Responsive Breakpoints

- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)

## 🎨 Gradient Combinations

```css
from-neon-purple to-neon-cyan    /* Primary gradient */
from-purple-600 to-blue-600      /* Cool gradient */
from-cyan-600 to-purple-600      /* Reverse gradient */
```

---

**Need more help?** Check `SETUP_GUIDE.md` or `README.md`
