'use client';

import { useState, useEffect, useCallback } from 'react';

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
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const currentPhrase = phrases[currentPhraseIndex];

  const handleTyping = useCallback(() => {
    if (isWaiting) return;

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      } else {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        setDisplayedText(displayedText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [displayedText, isDeleting, isWaiting, currentPhrase, pauseDuration, phrases.length]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      <span className="inline">{displayedText}</span>
      <span 
        className="inline-block w-[3px] h-[0.9em] bg-white ml-1 align-middle animate-pulse"
      />
    </span>
  );
}
