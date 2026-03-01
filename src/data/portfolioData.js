// ============================================================
// 📁 src/data/portfolioData.js
// Complete Portfolio Data Configuration
// Update this file to customize your entire portfolio
// ============================================================

// ─── Personal Information ────────────────────────────────────
import nosilyImg from '../assets/projects/flat-vector-illustration.png';
import medai from '../assets/projects/mediscanai.png';
export const personalInfo = {
  name:       'Dhanush R',
  role:       'Full Stack Developer',
  tagline:    'Building clean, scalable, and maintainable applications — one component at a time.',
  location:   'Chennai, Tamil Nadu, India',
  email:      'dhanushrraja12@gmail.com',
  phone:      '+91 9790807351',
  resumeUrl:  '/resume.pdf',
  avatarUrl:  '/avatar.jpg',
  socials: {
    github:   'https://github.com/DhanushR08',
    linkedin: 'https://linkedin.com/in/dhanush-r79a097298',
    twitter:  'https://twitter.com/yourhandle',
    portfolio: 'https://your-portfolio.com',
  },
};

// ─── About Section ──────────────────────────────────────────
export const aboutStats = [
  { 
    label: 'Years Coding',    
    value: '2+',  
    icon: '⚡',
    description: 'Active in web development'
  },
  { 
    label: 'Projects Built',  
    value: '5+',  
    icon: '🛠️',
    description: 'From concept to deployment'
  },
  { 
    label: 'Technologies',    
    value: '12+', 
    icon: '🚀',
    description: 'Full stack ecosystem'
  },
  { 
    label: 'IEEE Paper',      
    value: '1',   
    icon: '📄',
    description: 'Research published'
  },
];

export const aboutSummary = `Dedicated 3rd year B.Tech IT student at Panimalar Engineering College
with a solid foundation in Core Java and Object-Oriented Programming.
Hands-on experience in frontend development using React, Tailwind CSS, and
modern web technologies. Currently pursuing backend development with a strong
understanding of REST APIs, MVC architecture, and HTTP/JSON concepts while
learning Spring Boot. Passionate about building clean, user-friendly
applications and growing as a full-stack developer.`;

// ─── Skills Section ─────────────────────────────────────────
export const skills = {
  frontend: [
    { name: 'React',        level: 80, icon: '⚛️',  description: 'Components, Hooks, Context' },
    { name: 'JavaScript',   level: 78, icon: '🟨', description: 'ES6+, DOM, Async' },
    { name: 'Tailwind CSS', level: 85, icon: '🎨', description: 'Utility-first styling' },
    { name: 'HTML & CSS',   level: 90, icon: '🌐', description: 'Semantic, Responsive' },
    { name: 'Bootstrap',    level: 72, icon: '🅱️', description: 'Grid, Components' },
  ],
  backend: [
    { name: 'Java (OOP)',   level: 80, icon: '☕', description: 'OOP, Collections' },
    { name: 'Spring Boot',  level: 45, icon: '🌱', description: 'REST APIs, JPA' },
    { name: 'REST APIs',    level: 60, icon: '🔗', description: 'Design, Integration' },
    { name: 'Python',       level: 40, icon: '🐍', description: 'Basics, Libraries' },
  ],
  database: [
    { name: 'SQL',          level: 65, icon: '🗄️', description: 'Queries, Optimization' },
    { name: 'MySQL',        level: 60, icon: '🐬', description: 'Database Design' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 75, icon: '🐙', description: 'Version Control' },
    { name: 'VS Code',      level: 90, icon: '🖥️', description: 'Extensions, Debugging' },
    { name: 'Figma',        level: 50, icon: '🎯', description: 'UI Design' },
  ],
};

// ─── Projects Section ───────────────────────────────────────
// category: 'Frontend' | 'Backend' | 'Fullstack' | 'Research'
export const projects = [
  {
    id: 1,
    title:       'Nosily — Music Streaming App',
    category:    'Frontend',
    description: 'A music streaming web application built with React and Tailwind CSS. Features a clean, modular component architecture with state management for music playback and playlist interactions.',
    longDesc:    'Nosily is a fully responsive music streaming app designed with a focus on UI/UX excellence. Built using React functional components, custom hooks for audio control, and Tailwind CSS for pixel-perfect styling. Implements context API for global state management of the current track, queue, and playback status. Users can browse music, create playlists, and enjoy smooth playback experience.',
    tech:        ['React', 'Tailwind CSS', 'Framer Motion', 'Context API', 'Local Storage'],
    github:      'https://github.com/DhanushR08/NOSILY',
    live:        'https://nosily-music.vercel.app',
     image: nosilyImg,
       featured:    true,
    stats: {
      lines: 2500,
      components: 15,
      timeToComplete: '2 weeks'
    }
  },
  {
    id: 2,
    title:       'Mediscan AI — Medical Scan Analysis',
    category:    'Research',
    description: 'IEEE published research project: an AI-powered system for automated analysis of X-rays using hybrid CNN + Vision Transformer models and NLP-based medical report generation.',
    longDesc:    'Mediscan AI is an AI-based system designed to automate the analysis of medical X-ray images. The system utilises a hybrid architecture combining Convolutional Neural Networks (CNN) and Vision Transformers (ViT) for detecting medical abnormalities with 94.5% accuracy. Integrated BioBERT/ClinicalBERT NLP models generate structured, readable medical reports in minutes instead of hours. The project was published as an IEEE research paper and won 3rd place at Zephoria\'25 National Symposium.',
    tech:        ['Python', 'TensorFlow', 'CNN', 'Vision Transformer', 'BioBERT', 'NLP', 'Flask'],
    github:      'https://github.com/DhanushR08/MediscanAI',
    live:        '',
    image:      medai,
    featured:    true,
    stats: {
      accuracy: '94.5%',
      models: 2,
      researchPaper: 'IEEE Xplore'
    }
  },
  {
    id: 3,
    title:       'Portfolio Website',
    category:    'Frontend',
    description: 'This very portfolio — a modern, responsive developer portfolio built with React, Tailwind CSS, and Framer Motion featuring dark mode, smooth animations, and SEO optimization.',
    longDesc:    'Built from scratch using Vite + React with a focus on performance and aesthetics. Features include dark/light mode toggle with persistent storage, scroll reveal animations powered by Framer Motion, smooth page transitions, responsive design for all devices, contact form integration, and modular component architecture for easy customization and future updates.',
    tech:        ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router', 'EmailJS'],
    github:      'https://github.com/DhanushR08/portfolio',
    live:        'https://dhanush-portfolio.vercel.app',
    image:       'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    featured:    false,
    stats: {
      lightningScore: 95,
      performanceScore: 96,
      accessibility: 98
    }
  },
  {
    id: 4,
    title:       'Task Management Dashboard',
    category:    'Fullstack',
    description: 'Full-stack task management application with real-time updates, user authentication, and drag-and-drop interface.',
    longDesc:    'A comprehensive task management system built with React frontend and Node.js backend. Features real-time synchronization using WebSockets, JWT-based authentication, MongoDB for data persistence, and an intuitive drag-and-drop interface for organizing tasks by status and priority.',
    tech:        ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    github:      'https://github.com/DhanushR08/task-manager',
    live:        'https://task-manager-app.vercel.app',
    image:       'https://copilot.microsoft.com/th/id/BCO.87bf1628-7693-4d26-a1c4-7e7a84c1bf51.png',
    featured:    false,
    stats: {
      users: '100+',
      tasks: '1000+',
      uptime: '99.9%'
    }
  },
  {
    id: 5,
    title:       'E-Commerce Dashboard',
    category:    'Fullstack',
    description: 'Modern dashboard for managing online store inventory, sales analytics, and customer management with real-time data visualization.',
    longDesc:    'A comprehensive e-commerce admin dashboard featuring real-time sales analytics, inventory management system, customer database, order tracking, and interactive charts using Recharts. Built with React for frontend and Node.js/Express for backend APIs with MongoDB database.',
    tech:        ['React', 'Node.js', 'MongoDB', 'Recharts', 'Stripe API', 'Tailwind CSS'],
    github:      'https://github.com/DhanushR08/ecommerce-dashboard',
    live:        'https://ecommerce-dashboard.vercel.app',
    image:       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    featured:    false,
    stats: {
      products: '500+',
      transactions: '5000+',
      revenue: '$50K+'
    }
  },
];

// ─── Experience Section ─────────────────────────────────────
export const experience = [
  {
    id:       1,
    role:     'Frontend Intern',
    company:  'Pumo Technovation',
    duration: 'Feb 2025 – Apr 2025',
    type:     'Internship',
    location: 'Remote',
    bullets: [
      'Gained hands-on experience with HTML, CSS, JavaScript, Bootstrap, and React in a real-world project environment.',
      'Built a responsive web application with a focus on UI design, component-based development, and usability.',
      'Applied React fundamentals — components, props, and state — to create dynamic user interfaces.',
      'Developed a basic understanding of Python for backend logic and API integration concepts.',
      'Worked on frontend best practices, application flow, UI consistency, and version control using Git.',
    ],
  },
  {
    id:       2,
    role:     'B.Tech Information Technology',
    company:  'Panimalar Engineering College',
    duration: '2023 – 2027 (Expected)',
    type:     'Education',
    location: 'Chennai, India',
    bullets: [
      'CGPA: 8.26 — consistently maintaining strong academic performance.',
      'Relevant coursework: Data Structures & Algorithms, OOP, Database Management, Software Engineering.',
      'Self-learning: Java Backend Development, Spring Boot, Software Testing, AI/ML fundamentals.',
      'Active participant in national-level symposiums and paper presentations.',
    ],
  },
];

// ─── Certifications ─────────────────────────────────────────
export const certifications = [
  {
    id:       1,
    name:     'Oracle Cloud Infrastructure 2025 Foundations Professional',
    issuer:   'Oracle',
    validity: 'Sep 2025 – Oct 2027',
    credentialUrl: 'https://www.oracle.com/credentials',
    skills:   ['Cloud', 'Infrastructure', 'OCI'],
  },
  {
    id:       2,
    name:     'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    issuer:   'Oracle',
    validity: 'Jul 2024 – Jul 2026',
    credentialUrl: 'https://www.oracle.com/credentials',
    skills:   ['AI/ML', 'Cloud', 'Generative AI'],
  },
  {
    id:       3,
    name:     'React.js Advanced Patterns',
    issuer:   'Udemy',
    validity: 'Completed',
    credentialUrl: '',
    skills:   ['React', 'Hooks', 'Performance'],
  },
];

// ─── Achievements ───────────────────────────────────────────
export const achievements = [
  {
    id:     1,
    title:  'IEEE Paper Publication — 2025',
    desc:   'Co-authored "Mediscan AI: AI-Powered Medical Scan Analysis System", published in IEEE.',
    date:   'Jan 2025',
    icon:   '📄',
  },
  {
    id:     2,
    title:  '3rd Place — Zephoria\'25 National Symposium',
    desc:   'Secured 3rd place at national-level paper presentation competition for Mediscan AI project.',
    date:   'Dec 2024',
    icon:   '🏆',
  },
  {
    id:     3,
    title:  'Best Frontend Project — College Fest',
    desc:   'Won best project award for Nosily Music Streaming App in technical fest.',
    date:   'Nov 2024',
    icon:   '⭐',
  },
];

// ─── Navigation Links ───────────────────────────────────────
export const navLinks = [
  { label: 'Home',       href: '#hero',       icon: '🏠' },
  { label: 'About',      href: '#about',      icon: '👤' },
  { label: 'Skills',     href: '#skills',     icon: '⚡' },
  { label: 'Projects',   href: '#projects',   icon: '🛠️' },
  { label: 'Experience', href: '#experience', icon: '💼' },
  { label: 'Contact',    href: '#contact',    icon: '✉️' },
];

// ─── Contact Information ────────────────────────────────────
export const contactInfo = {
  email:   'dhanushrraja12@gmail.com',
  phone:   '+91 XXXXXXXXXX',
  address: 'Chennai, Tamil Nadu, India',
  socials: [
    { 
      name: 'GitHub', 
      url: 'https://github.com/DhanushR08', 
      icon: '🐙' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/dhanush-r79a097298', 
      icon: '💼' 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/yourhandle', 
      icon: '🐦' 
    },
  ],
};

// ─── Testimonials (Optional) ────────────────────────────────
export const testimonials = [
  {
    id:     1,
    author: 'John Doe',
    role:   'Project Manager',
    text:   'Dhanush delivered an excellent frontend solution that exceeded our expectations. Great attention to detail!',
    image:  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    id:     2,
    author: 'Jane Smith',
    role:   'Tech Lead',
    text:   'Working with Dhanush on the backend integration was smooth. He understands both frontend and backend well.',
    image:  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
];

// ─── SEO Metadata ───────────────────────────────────────────
export const seoMetadata = {
  title:       'Dhanush R - Full Stack Developer Portfolio',
  description: 'Full Stack Developer specializing in React, Node.js, and AI/ML. View my projects, skills, and experience.',
  keywords:    ['Developer', 'React', 'Node.js', 'Full Stack', 'Portfolio', 'Chennai'],
  author:      'Dhanush R',
  ogImage:     'https://your-domain.com/og-image.png',
};

export default {
  personalInfo,
  aboutStats,
  aboutSummary,
  skills,
  projects,
  experience,
  certifications,
  achievements,
  navLinks,
  contactInfo,
  testimonials,
  seoMetadata,
};