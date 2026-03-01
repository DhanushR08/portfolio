// ============================================================
// 📁 src/components/ui/Button.jsx
// Reusable button with primary (glow) and outline variants.
// ============================================================

import { motion } from 'framer-motion';

/**
 * @param {'primary' | 'outline' | 'ghost'} variant
 */
const Button = ({
  children,
  variant  = 'primary',
  href,
  onClick,
  className = '',
  download,
  target,
  rel,
  icon,
}) => {
  // ─── Variant styles ─────────────────────────────────────────
  const variants = {
    primary: `
      bg-primary text-surface font-semibold
      hover:bg-primary-dark shadow-glow hover:shadow-glow-lg
      active:scale-95
    `,
    outline: `
      border border-primary text-primary
      hover:bg-primary hover:text-surface
      active:scale-95
    `,
    ghost: `
      text-[var(--text-muted)] hover:text-primary
      active:scale-95
    `,
  };

  const base = `
    inline-flex items-center gap-2 px-6 py-3 rounded-lg
    text-sm font-sans transition-all duration-200
    ${variants[variant]} ${className}
  `;

  // ─── Render as link or button ────────────────────────────────
  const El = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <El
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        className={base}
      >
        {icon && <span className="text-base">{icon}</span>}
        {children}
      </El>
    </motion.div>
  );
};

export default Button;
