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
            ? "backdrop-blur-2xl bg-bg/80 border-b border-white/[0.06] py-4" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-[5%] flex justify-between items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-syne font-black text-xl bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent"
          >
            SS
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase() || activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      className={cn(
                        "font-mono text-xs uppercase tracking-widest transition-colors duration-200 py-2 inline-block",
                        isActive ? "text-cyan" : "text-white/50 hover:text-white"
                      )}
                    >
                      {link.name}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Availability Pill (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-pill bg-purple/10 border border-purple/30">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className="text-purple-light font-mono text-[10px] uppercase tracking-wider">
                Available for Internships
              </span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-white p-2"
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
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
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
                    className="font-syne text-3xl font-bold text-white hover:text-cyan transition-colors"
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
