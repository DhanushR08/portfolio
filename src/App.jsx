// ============================================================
// 📁 src/App.jsx
// Root component. Composes all sections in order and wires up:
//  • Loading screen
//  • Theme management (dark/light)
//  • Custom cursor
//  • Noise overlay background texture
// ============================================================

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// ─── Components ──────────────────────────────────────────────
import LoadingScreen  from './components/LoadingScreen';
import CustomCursor   from './components/CustomCursor';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Experience     from './components/Experience';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

// ─── Hook ────────────────────────────────────────────────────
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Control loading screen visibility
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* ─── Custom cursor (desktop only via CSS) ──────── */}
      <CustomCursor />

      {/* ─── Loading screen shown until animation ends ──── */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* ─── Main portfolio (hidden until load completes) ─ */}
      {!loading && (
        <div className="noise-overlay relative min-h-screen">

          {/* Sticky navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Page sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
