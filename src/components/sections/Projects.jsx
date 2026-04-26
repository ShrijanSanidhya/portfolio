import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { scaleIn, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <SectionHeader 
        label="03 — PROJECTS" 
        title="Things I've Shipped" 
        subtitle="Real projects. Real AI. Real impact." 
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div key={project.id} variants={scaleIn} custom={index}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
