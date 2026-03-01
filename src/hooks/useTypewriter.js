// ============================================================
// 📁 src/hooks/useTypewriter.js
// Typewriter effect hook. Cycles through an array of strings,
// typing and deleting each one with configurable speeds.
// ============================================================

import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (
  words = [],
  typeSpeed   = 80,
  deleteSpeed = 50,
  pauseTime   = 2000,
) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);
  const timeoutRef                    = useRef(null);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (isDeleting) {
        // Delete one character
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        // Type one character
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText === currentWord) {
          // Full word typed — pause then start deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return displayText;
};
