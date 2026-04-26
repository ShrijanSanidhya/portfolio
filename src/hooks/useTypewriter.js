import { useState, useEffect } from 'react';

export function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentString = strings[index];

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
        timer = setTimeout(() => {}, 500);
      } else {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayText === currentString) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseTime]);

  return { displayText, isDeleting };
}
