import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterProps {
  texts: string[];
  speed?: number;
}

export const useTypewriter = ({ 
  texts,
  speed = 50
}: UseTypewriterProps): [string[]] => {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(texts.map(() => ''));
  const [isTyping, setIsTyping] = useState(true);

  // Type out text
  useEffect(() => {
    const allComplete = displayedTexts.every((text, i) => text.length >= texts[i].length);
    
    if (!allComplete) {
      const timeout = setTimeout(() => {
        setDisplayedTexts(prev => prev.map((text, i) => {
          if (text.length < texts[i].length) {
            return texts[i].slice(0, text.length + 1);
          }
          return text;
        }));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedTexts, texts, speed]);

  return [displayedTexts];
};