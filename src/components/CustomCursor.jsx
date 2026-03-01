// ============================================================
// 📁 src/components/CustomCursor.jsx
// Optional custom cursor that follows the mouse. Shows a small
// dot + ring combo. Hidden on touch devices via CSS.
// ============================================================

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX  = 0;
    let ringY  = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform  = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    // Ring follows with smooth lerp
    const animate = () => {
      ringX += (mouseX - ringX - 18) * 0.12;
      ringY += (mouseY - ringY - 18) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    };

    // Grow ring on hoverable elements
    const onEnter = () => {
      ring.style.width  = '56px';
      ring.style.height = '56px';
      ring.style.transform = `translate(${ringX - 10}px, ${ringY - 10}px)`;
    };
    const onLeave = () => {
      ring.style.width  = '36px';
      ring.style.height = '36px';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="custom-cursor"      />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;
