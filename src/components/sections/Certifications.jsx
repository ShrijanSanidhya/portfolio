import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard as Card } from "../ui/GlassCard";
import { CalendarDays } from "lucide-react";

export function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section 
      id="certifications" 
      className="py-24 px-[5%] max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader 
        label="05 — CERTS" 
        title="Certified & Learning" 
      />

      <motion.div 
        ref={ref} 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-4 mt-12"
      >
        {portfolioData.certifications.map((cert, index) => {
          const Icon = cert.icon;

          return (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              custom={index}
              className="h-full"
            >
              <Card className="p-0 overflow-hidden h-full flex flex-col">
                
                {/* Top Band */}
                <div className="h-24 relative overflow-hidden flex items-center justify-center bg-bg">
                  <div className="absolute inset-0 bg-accent-dim" />
                  <Icon size={40} className="relative z-10 text-accent" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="inline-flex px-2.5 py-1 bg-surface border border-border rounded-md font-mono text-[10px] text-accent w-fit">
                    {cert.issuer}
                  </div>
                  
                  <h3 className="font-display font-semibold text-base text-text-primary mt-3 mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-text-secondary leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-1.5 mt-3 font-mono text-[11px] text-text-tertiary">
                    <CalendarDays size={12} />
                    {cert.date}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cert.tags.map(tag => (
                      <motion.span 
                        key={tag}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(59,130,246,0.1)',
                          borderColor: 'rgba(59,130,246,0.2)'
                        }}
                        className="font-mono text-[10px] px-2 py-1 rounded-md bg-surface border border-border text-text-tertiary cursor-default transition-colors duration-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
