import { useState, useEffect, useRef } from 'react';

const DEFAULT = { typeSpeed: 80, deleteSpeed: 40, pauseDuration: 2000 };

export default function useTypewriter(phrases, opts = {}) {
  const { typeSpeed, deleteSpeed, pauseDuration } = { ...DEFAULT, ...opts };

  const [displayText, setDisplayText] = useState(phrases[0]);
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const phrase = phrases[idxRef.current];

      if (deletingRef.current) {
        charRef.current -= 1;
        if (charRef.current < 0) {
          deletingRef.current = false;
          idxRef.current = (idxRef.current + 1) % phrases.length;
          tick();
          return;
        }
        setDisplayText(phrase.slice(0, charRef.current));
        timerRef.current = setTimeout(tick, deleteSpeed);
      } else {
        charRef.current += 1;
        if (charRef.current >= phrase.length) {
          setDisplayText(phrase);
          deletingRef.current = true;
          timerRef.current = setTimeout(tick, pauseDuration);
          return;
        }
        setDisplayText(phrase.slice(0, charRef.current));
        timerRef.current = setTimeout(tick, typeSpeed);
      }
    };

    charRef.current = phrases[0].length;
    setDisplayText(phrases[0]);
    deletingRef.current = true;
    timerRef.current = setTimeout(tick, pauseDuration);

    return () => clearTimeout(timerRef.current);
  }, []);

  return { displayText };
}
