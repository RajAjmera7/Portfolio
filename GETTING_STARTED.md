# 🚀 Getting Started - Quick Guide

## Step 1: Install Dependencies (2 minutes)

Open your terminal in this folder and run:

```bash
npm install
```

Wait for all packages to download and install.

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

You should see:
```
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

## Step 3: Open in Browser

Go to: **http://localhost:3000**

You should see your portfolio with:
- ✅ Animated hero section with typing effect
- ✅ Glassmorphism navbar
- ✅ Custom cursor following your mouse
- ✅ All sections with smooth animations

## Step 4: Customize Your Content

### Quick Wins (15 minutes):

1. **Update Your Name**
   - Open `components/sections/Hero.tsx`
   - Line 18: Change "Raj Ajmera" to your name
   - Open `components/Navbar.tsx`
   - Line 51: Change "Raj Ajmera" to your name

2. **Update Your Roles**
   - Open `components/sections/Hero.tsx`
   - Lines 27-33: Change the roles in TypeAnimation

3. **Update Your Bio**
   - Open `components/sections/About.tsx`
   - Lines 28-38: Write your own bio

4. **Update Contact Info**
   - Open `components/sections/Contact.tsx`
   - Update email, LinkedIn, and GitHub links

### Save and See Changes

The page will automatically reload when you save files!

## Step 5: Test Everything

- ✅ Click navbar links - should scroll smoothly
- ✅ Hover over cards - should have glow effects
- ✅ Open mobile view - hamburger menu should work
- ✅ Scroll down - sections should animate in

## Step 6: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

## 🎯 What's Next?

### For Detailed Customization:
📖 Read `CUSTOMIZATION_CHECKLIST.md` - Step-by-step guide

### For Code Examples:
💻 Read `CODE_SNIPPETS.md` - Copy-paste snippets

### For Quick Reference:
⚡ Read `QUICK_REFERENCE.md` - Commands and tips

### For Understanding Structure:
🏗️ Read `ARCHITECTURE.md` - How everything works

## 🆘 Common Issues

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "Port 3000 is already in use"
**Solution**: 
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Issue: "Module not found"
**Solution**: 
```bash
rm -rf node_modules
npm install
```

### Issue: Changes not showing
**Solution**: 
- Save the file (Ctrl+S / Cmd+S)
- Refresh browser (Ctrl+R / Cmd+R)
- Restart dev server (Ctrl+C, then `npm run dev`)

## 📚 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Icons**: https://react-icons.github.io/react-icons/

## 🎨 Design Inspiration

Your portfolio is inspired by:
- Apple's design language
- Stripe's animations
- Awwwards-winning websites

## 🚀 Deployment (When Ready)

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 2: Netlify
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

## ✅ Checklist Before Deployment

- [ ] Updated all personal information
- [ ] Tested on mobile and desktop
- [ ] All links work correctly
- [ ] No console errors
- [ ] Ran `npm run build` successfully
- [ ] Proofread all text

## 🎉 You're All Set!

Your premium portfolio is ready to impress recruiters and clients!

**Time to complete basic setup**: ~30 minutes
**Time to fully customize**: 2-4 hours

---

**Need Help?** 
- Check other documentation files
- Google your error message
- Ask on Stack Overflow
- Check Next.js documentation

**Good luck with your portfolio!** 🚀✨
