// ============================================================
// 📁 src/components/ui/ScrollReveal.jsx
// Wraps children with a Framer Motion fade-up animation
// that triggers when the element enters the viewport.
// ============================================================

import { motion } from 'framer-motion';

/**
 * @param {'up' | 'down' | 'left' | 'right' | 'fade'} direction
 * @param {number} delay - delay in seconds
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay     = 0,
  duration  = 0.6,
  className = '',
}) => {
  // Initial positions per direction
  const variants = {
    up:    { opacity: 0, y: 32 },
    down:  { opacity: 0, y: -32 },
    left:  { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
    fade:  { opacity: 0 },
  };

  const visible = {
    opacity: 1, x: 0, y: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={visible}
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
