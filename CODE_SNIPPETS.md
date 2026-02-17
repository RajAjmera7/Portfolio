# 🎨 Code Snippets & Examples

Quick copy-paste snippets for common customizations.

## 🎭 Animation Snippets

### Fade In from Bottom
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

### Fade In from Left
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

### Scale Up on Load
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Hover Scale Effect
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Staggered Children Animation
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Infinite Floating Animation
```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Floating element
</motion.div>
```

## 🎨 Styling Snippets

### Glassmorphism Card
```tsx
<div className="glass p-6 rounded-2xl">
  Content
</div>
```

### Gradient Text
```tsx
<h1 className="gradient-text text-4xl font-bold">
  Gradient Text
</h1>
```

### Gradient Button
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-white font-semibold">
  Click Me
</button>
```

### Glow Effect on Hover
```tsx
<div className="glass hover:glow-purple transition-all duration-300">
  Hover me
</div>
```

### Gradient Border
```tsx
<div className="p-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl">
  <div className="bg-black rounded-2xl p-6">
    Content with gradient border
  </div>
</div>
```

## 🔧 Component Snippets

### Add New Skill
```tsx
// In components/sections/Skills.tsx, add to skills array:
{
  name: 'Python',
  icon: SiPython,
  color: '#3776AB'
}
```

### Add New Project
```tsx
// In components/sections/Projects.tsx, add to projects array:
{
  title: 'Your Project Name',
  description: 'Brief description of your project',
  tech: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://yourproject.com',
  gradient: 'from-blue-600 to-purple-600',
}
```

### Add New Experience
```tsx
// In components/sections/Experience.tsx, add to experiences array:
{
  company: 'Company Name',
  role: 'Your Role',
  duration: '6 months',
  description: 'What you did at this company',
}
```

### Add New Achievement
```tsx
// In components/sections/Achievements.tsx, add to achievements array:
{
  title: 'Your Achievement',
  icon: HiAcademicCap,
  color: 'from-blue-500 to-cyan-500',
}
```

## 📱 Responsive Snippets

### Hide on Mobile, Show on Desktop
```tsx
<div className="hidden md:block">
  Desktop only content
</div>
```

### Show on Mobile, Hide on Desktop
```tsx
<div className="block md:hidden">
  Mobile only content
</div>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

### Responsive Text Size
```tsx
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Responsive heading
</h1>
```

### Responsive Padding
```tsx
<div className="px-4 md:px-8 lg:px-16">
  Content with responsive padding
</div>
```

## 🎯 Interactive Snippets

### Smooth Scroll to Section
```tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

<button onClick={() => scrollToSection('contact')}>
  Contact Me
</button>
```

### Copy to Clipboard
```tsx
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  alert('Copied to clipboard!')
}

<button onClick={() => copyToClipboard('your@email.com')}>
  Copy Email
</button>
```

### Open Link in New Tab
```tsx
<a
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-neon-cyan hover:text-neon-purple transition-colors"
>
  GitHub
</a>
```

## 🎨 Custom Gradient Combinations

### Purple to Cyan (Default)
```tsx
className="bg-gradient-to-r from-neon-purple to-neon-cyan"
```

### Blue to Purple
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

### Pink to Orange
```tsx
className="bg-gradient-to-r from-pink-500 to-orange-500"
```

### Green to Teal
```tsx
className="bg-gradient-to-r from-green-500 to-teal-500"
```

### Diagonal Gradient
```tsx
className="bg-gradient-to-br from-neon-purple to-neon-cyan"
```

### Radial Gradient
```tsx
className="bg-gradient-radial from-neon-purple to-transparent"
```

## 🔄 Loading States

### Simple Spinner
```tsx
<motion.div
  className="w-8 h-8 border-4 border-neon-purple border-t-transparent rounded-full"
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
/>
```

### Pulse Animation
```tsx
<motion.div
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="w-4 h-4 bg-neon-cyan rounded-full"
/>
```

## 🎭 Hover Effects

### Glow on Hover
```tsx
<motion.div
  whileHover={{
    boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)"
  }}
  className="glass p-6 rounded-2xl"
>
  Hover me
</motion.div>
```

### Lift on Hover
```tsx
<motion.div
  whileHover={{ y: -10 }}
  transition={{ duration: 0.3 }}
  className="glass p-6 rounded-2xl"
>
  Hover me
</motion.div>
```

### Rotate on Hover
```tsx
<motion.div
  whileHover={{ rotate: 5 }}
  transition={{ duration: 0.3 }}
>
  Hover me
</motion.div>
```

## 📝 Form Snippets

### Input Field with Icon
```tsx
<div className="relative">
  <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input
    type="email"
    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none text-white"
    placeholder="your@email.com"
  />
</div>
```

### Textarea
```tsx
<textarea
  rows={5}
  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none text-white resize-none"
  placeholder="Your message..."
/>
```

### Submit Button
```tsx
<motion.button
  type="submit"
  className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl font-semibold text-white"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Send Message
</motion.button>
```

## 🎨 Icon Usage

### Import Icons
```tsx
import { HiMail, HiUser, HiCode } from 'react-icons/hi'
import { SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si'
```

### Use Icons
```tsx
<HiMail className="text-2xl text-neon-cyan" />
<SiReact className="text-4xl" style={{ color: '#61DAFB' }} />
```

## 🎯 Scroll Detection

### Detect Scroll Position
```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### Scroll to Top Button
```tsx
<motion.button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  ↑
</motion.button>
```

## 💡 Pro Tips

### Combine Multiple Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  whileHover={{ scale: 1.05, rotate: 2 }}
  transition={{ duration: 0.5 }}
>
  Multi-animation element
</motion.div>
```

### Conditional Animation
```tsx
<motion.div
  animate={isActive ? { scale: 1.2 } : { scale: 1 }}
  transition={{ duration: 0.3 }}
>
  Conditional animation
</motion.div>
```

### Sequential Animations
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  Appears after 0.5s
</motion.div>
```

---

**Usage**: Copy any snippet and paste it into your components. Adjust values as needed!

**Need more?** Check Framer Motion docs: https://www.framer.com/motion/
