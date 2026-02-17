# 🚀 Setup & Customization Guide

## Quick Start

### 1. Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section (components/sections/Hero.tsx)
- Line 18: Change "Raj Ajmera" to your name
- Lines 27-33: Update roles in TypeAnimation

#### 2. About Section (components/sections/About.tsx)
- Lines 28-38: Update your bio, CGPA, and description

#### 3. Skills Section (components/sections/Skills.tsx)
- Lines 8-14: Add/remove skills with icons and colors

#### 4. Experience Section (components/sections/Experience.tsx)
- Lines 8-19: Update company names, roles, duration, and descriptions

#### 5. Projects Section (components/sections/Projects.tsx)
- Lines 8-26: Update project details, tech stack, and links

#### 6. Achievements Section (components/sections/Achievements.tsx)
- Lines 8-32: Update certifications and achievements

#### 7. Contact Section (components/sections/Contact.tsx)
- Lines 48-52: Update email address
- Lines 56-60: Update LinkedIn URL
- Lines 64-68: Update GitHub URL

### Update Navbar Logo
File: `components/Navbar.tsx`
- Line 51: Change "Raj Ajmera" to your name

### Update Page Metadata
File: `app/layout.tsx`
- Lines 11-14: Update title, description, and keywords

## 🎯 Key Features Explained

### 1. Glassmorphism Effect
- Applied via `glass` class
- Defined in `app/globals.css`

### 2. Gradient Text
- Applied via `gradient-text` class
- Purple to cyan gradient

### 3. Custom Cursor
- Automatically tracks mouse movement
- Neon purple dot + cyan ring

### 4. Smooth Scroll Navigation
- Click navbar links to scroll to sections
- Active section highlighted automatically

### 5. 3D Hover Cards (Projects)
- Mouse movement creates 3D tilt effect
- Implemented with rotateX/rotateY transforms

### 6. Animated Timeline (Experience)
- Vertical line animates on scroll
- Cards slide in from left/right

### 7. Typing Animation (Hero)
- Cycles through roles automatically
- Uses react-type-animation library

## 🎨 Color Customization

### Primary Colors
File: `tailwind.config.js`
```js
colors: {
  neon: {
    purple: '#9333ea',  // Change this
    cyan: '#22d3ee',    // Change this
  },
}
```

### Background Gradients
File: `components/ui/BackgroundEffects.tsx`
- Lines 8-12: Purple gradient blob
- Lines 13-17: Cyan gradient blob
- Lines 18-22: Purple gradient blob

## 📱 Responsive Design

All sections are fully responsive:
- Mobile: Single column layout
- Tablet: 2 columns for cards
- Desktop: Full multi-column layout

## 🚀 Performance Tips

1. **Images**: Add images to `public/` folder
2. **Fonts**: Using Inter font (Google Fonts)
3. **Icons**: Using react-icons (tree-shaken)
4. **Animations**: Optimized with Framer Motion

## 🔧 Common Issues

### Issue: Animations not working
**Solution**: Make sure Framer Motion is installed
```bash
npm install framer-motion
```

### Issue: Icons not showing
**Solution**: Install react-icons
```bash
npm install react-icons
```

### Issue: Styles not applying
**Solution**: Restart dev server
```bash
npm run dev
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

### Other Platforms
- Ensure Node.js 18+ support
- Set build command: `npm run build`
- Set start command: `npm start`

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 💡 Tips for Awwwards-Level Quality

1. **Smooth Animations**: Keep duration between 0.3-0.8s
2. **Consistent Spacing**: Use Tailwind's spacing scale
3. **Color Harmony**: Stick to 2-3 main colors
4. **Typography**: Use 2-3 font sizes max per section
5. **White Space**: Don't overcrowd sections
6. **Performance**: Keep animations at 60fps
7. **Accessibility**: Ensure good contrast ratios

## 🎨 Advanced Customization

### Add New Section
1. Create file in `components/sections/`
2. Import in `app/page.tsx`
3. Add link to `components/Navbar.tsx`

### Change Animation Speed
Modify `transition` prop in motion components:
```tsx
transition={{ duration: 0.8 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

### Add Parallax Effect
Use Framer Motion's `useScroll` hook:
```tsx
const { scrollYProgress } = useScroll()
```

---

Need help? Check the README.md or Next.js documentation!
