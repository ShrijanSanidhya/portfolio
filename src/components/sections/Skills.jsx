import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";
import { Layout, Server, BrainCircuit, Database, Wrench, Palette } from "lucide-react";

const groupIcons = {
  frontend: Layout, backend: Server, "ai / genai": BrainCircuit,
  database: Database, devtools: Wrench, creative: Palette,
};

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader label="04 — SKILLS" title="My Arsenal" />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
      >
        {portfolioData.skills.map((group, index) => {
          const Icon = groupIcons[group.group.toLowerCase()] || Layout;
          return (
            <motion.div
              key={group.group}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-card p-5 transition-all duration-300 group border"
              style={{
                background: "linear-gradient(160deg, rgba(24,24,35,0.95), rgba(13,13,20,0.96))",
                borderColor: "rgba(168,85,247,0.18)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent-dim border border-accent/30 flex items-center justify-center text-accent-light">
                  <Icon size={18} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-primary group-hover:text-accent-light transition-colors">
                  {group.group}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(168,85,247,0.3)', color: '#c084fc' }}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.12] text-text-secondary cursor-default transition-all duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
