import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useActiveSection } from "./hooks/useActiveSection";
import { Loader } from "./components/ui/Loader";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const sectionIds = ["hero", "about", "projects", "skills", "certifications", "contact"];
  const activeSection = useActiveSection(sectionIds, 300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      
      <AnimatePresence>
        {showLoader && <Loader />}
      </AnimatePresence>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
