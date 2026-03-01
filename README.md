# 🚀 Developer Portfolio — Dhanush R

A **modern, production-ready** developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion.  
Featuring dark mode, smooth animations, a custom cursor, a typewriter hero, project modals, and a fully responsive layout.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌗 Dark / Light Mode | Persisted in `localStorage`, toggled from the navbar |
| 🎬 Framer Motion | Page load, scroll reveal, hover, and layout animations |
| ⌨️ Typewriter Hero | Cycles through multiple role titles |
| 🗂️ Project Modal | Click any card for a full-detail overlay |
| 🔍 Skill Progress Bars | Animated on scroll entry with category tabs |
| 📅 Timeline Experience | Alternating left/right desktop layout |
| 📬 Contact Form | Frontend validation + email-sending placeholder |
| 🖱️ Custom Cursor | Dot + ring combo, scales on hover (desktop only) |
| 📱 Fully Responsive | Mobile-first with hamburger nav |
| 🔤 SEO-friendly | Open Graph + Twitter card meta tags in `index.html` |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── avatar.jpg          ← Add your photo here
│   ├── resume.pdf          ← Add your resume here
│   └── projects/
│       ├── nosily.png      ← Project screenshots
│       └── mediscan.png
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx        # Reusable button (primary / outline / ghost)
│   │   │   ├── SectionTitle.jsx  # Section heading with gradient underline
│   │   │   └── ScrollReveal.jsx  # Framer Motion viewport wrapper
│   │   ├── Navbar.jsx            # Sticky nav, mobile menu, dark mode toggle
│   │   ├── Hero.jsx              # Full-screen hero with typewriter
│   │   ├── About.jsx             # Profile image, bio, stat cards
│   │   ├── Skills.jsx            # Category tabs + progress bars
│   │   ├── Projects.jsx          # Grid, filter, card, modal
│   │   ├── Experience.jsx        # Alternating timeline
│   │   ├── Contact.jsx           # Validated form + social links
│   │   ├── Footer.jsx            # Copyright + back-to-top
│   │   ├── LoadingScreen.jsx     # Animated intro loader
│   │   └── CustomCursor.jsx      # Dot + ring cursor (desktop)
│   │
│   ├── data/
│   │   └── portfolioData.js      # ⭐ ALL CONTENT LIVES HERE — edit this!
│   │
│   ├── hooks/
│   │   ├── useTheme.js           # Dark/light mode state + localStorage
│   │   ├── useScrollSpy.js       # Active nav link detection
│   │   └── useTypewriter.js      # Typewriter animation hook
│   │
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind + global styles
│
├── index.html                    # HTML shell with SEO meta tags + fonts
├── tailwind.config.js            # Custom colors, fonts, animations
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** v18+ and **npm** v9+

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 🎨 Customization Guide

### Step 1 — Update your personal info
Open **`src/data/portfolioData.js`** and edit all values:

```js
export const personalInfo = {
  name:      'Your Name',
  role:      'Your Role',
  tagline:   'Your tagline',
  email:     'your@email.com',
  github:    'https://github.com/yourusername',
  linkedin:  'https://linkedin.com/in/yourhandle',
  twitter:   'https://twitter.com/yourhandle',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/avatar.jpg',
};
```

> **All sections** (About, Skills, Projects, Experience, Contact) pull their data from this single file.

### Step 2 — Add your assets
Place these in the `/public` folder:
- `avatar.jpg` — Your profile photo (square, 400×400px recommended)
- `resume.pdf` — Your resume (linked to Download Resume button)
- `projects/` — Screenshot images for each project card

### Step 3 — Add email functionality to the Contact form
Open `src/components/Contact.jsx` and find the `handleSubmit` function.  

**Option A — Formspree (easiest, free tier):**
```bash
# No extra install needed — just POST to Formspree
```
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
});
```

**Option B — EmailJS:**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY');
```

### Step 4 — Tweak colors & fonts
Open `tailwind.config.js`:
```js
colors: {
  primary: { DEFAULT: '#00D4FF', ... },  // Change main accent color
  accent:  { DEFAULT: '#FF6B35', ... },  // Change secondary accent
},
fontFamily: {
  mono:    ['"Space Mono"', 'monospace'],
  sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
  display: ['"Syne"', 'sans-serif'],
},
```

---

## 🌐 Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
```

### GitHub Pages (with Vite base)
In `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
Then push to `gh-pages` branch or configure GitHub Actions.

---

## 🔧 Tech Stack

| Tech | Purpose |
|---|---|
| [React 18](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | Animations & transitions |
| [React Icons](https://react-icons.github.io) | Icon library |

---

## 📜 License

MIT — free to use and customize for your personal portfolio.

---

Made with ☕ by **Dhanush R**
