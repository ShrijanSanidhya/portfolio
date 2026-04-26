import { useEffect, useState } from "react";

export function AnimatedText({ strings, interval = 2500, className }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentString = strings[index];

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
        timer = setTimeout(() => {}, 500);
      } else {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      }
    } else {
      if (text === currentString) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, interval);
      } else {
        timer = setTimeout(() => {
          setText(currentString.slice(0, text.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, strings, interval]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">_</span>
    </span>
  );
}
