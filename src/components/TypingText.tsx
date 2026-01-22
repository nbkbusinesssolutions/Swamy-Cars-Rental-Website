'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingText({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = '',
}: TypingTextProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        const typeTimer = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(typeTimer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (charIndex > 0) {
        const deleteTimer = setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(deleteTimer);
      } else {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span 
        className="inline-block w-[3px] h-[0.85em] bg-current ml-1 align-middle animate-blink"
        aria-hidden="true"
      />
    </span>
  );
}
