import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";

export function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="certifications" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <SectionHeader number="05" title="Certifications" />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioData.certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <motion.div key={cert.title} variants={fadeUp}>
              <GlassCard className="h-full flex flex-col hover:border-white/20 transition-colors relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${cert.color}/10 text-${cert.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="font-mono text-[0.7rem] text-muted uppercase">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                <p className="text-[0.9rem] text-white/80 leading-relaxed mb-6">
                  {cert.description}
                </p>
                <div className="mt-auto flex gap-2">
                  {cert.tags.map(tag => (
                    <span key={tag} className="font-mono text-[0.65rem] px-2 py-1 rounded bg-white/5 text-muted uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
