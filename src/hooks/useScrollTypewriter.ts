import { useState, useEffect, useRef } from 'react';
import { useTypewriter } from './useTypewriter';

interface UseScrollTypewriterProps {
  texts: string[];
  speed?: number;
}

export const useScrollTypewriter = ({ texts, speed }: UseScrollTypewriterProps) => {
  const [shouldStart, setShouldStart] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const [displayedTexts] = useTypewriter({
    texts: shouldStart ? texts : texts.map(() => ''),
    speed
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [displayedTexts, elementRef] as const;
};