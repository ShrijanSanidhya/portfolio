import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certs", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled 
            ? "backdrop-blur-sm bg-bg/90 border-b border-border py-4" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-display font-semibold text-xl text-text-primary"
          >
            SS
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase() || activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        "font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 py-2 inline-block",
                        isActive ? "text-accent" : "text-text-tertiary hover:text-text-primary"
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Availability Pill (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-md border border-accent/30">
              <span className="text-accent font-mono text-[10px] uppercase tracking-wider">
                Available for Internships
              </span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-text-primary p-2 cursor-hover"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col gap-8 text-center list-none m-0 p-0">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
