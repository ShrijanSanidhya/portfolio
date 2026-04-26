import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Exact mouse position for the dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring animated position for the ring
  const springConfig = { damping: 25, stiffness: 250 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth <= 768) return;

    const manageMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const manageMouseOver = (e) => {
      // Check if we're hovering a clickable element or element with .cursor-hover
      const isClickable = e.target.tagName.toLowerCase() === 'a' || 
                          e.target.tagName.toLowerCase() === 'button' ||
                          e.target.closest('a') ||
                          e.target.closest('button') ||
                          e.target.classList.contains('cursor-hover') ||
                          e.target.closest('.cursor-hover');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
    };
  }, [mouseX, mouseY]);

  // If on mobile/touch device, don't render custom cursor
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      {/* Small exact dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing spring ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
