import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= offset && rect.bottom >= offset) {
            current = id;
            break;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection, offset]);

  return activeSection;
}
