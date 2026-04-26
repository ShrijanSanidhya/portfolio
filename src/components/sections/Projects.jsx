import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { scaleIn, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader
        label="03 — PROJECTS"
        title="Things I've Shipped"
        subtitle="Real projects. Real impact."
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div key={project.id} variants={scaleIn} custom={index}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
