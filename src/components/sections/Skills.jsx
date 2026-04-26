import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <SectionHeader number="04" title="Technical Arsenal" />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {portfolioData.skills.map((skillGroup) => (
          <motion.div key={skillGroup.group} variants={fadeUp} className="relative p-6 rounded-2xl bg-surface border border-glass-border">
            <h3 className="font-syne text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-${skillGroup.color}`} />
              {skillGroup.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 rounded-lg bg-glass border border-white/5 font-dm text-[0.85rem] text-muted hover:text-white hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
