import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader label="04 — SKILLS" title="My Arsenal" />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-12"
      >
        {portfolioData.skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.group}
            variants={fadeUp}
            custom={index}
            className={`pb-6 ${
              index < portfolioData.skills.length - 1
                ? "border-b border-border mb-0"
                : ""
            }`}
          >
            {/* Group Title */}
            <span
              className={`block font-mono text-[10px] text-accent uppercase tracking-widest mb-3 ${
                index > 0 ? "mt-8" : ""
              }`}
            >
              {skillGroup.group}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {skillGroup.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "#94a3b8",
                  }}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface border border-border text-text-tertiary cursor-default transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
