import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <SectionHeader number="03" title="Featured Projects" />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {portfolioData.projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div key={project.id} variants={fadeUp}>
              <GlassCard className="h-full flex flex-col group hover:border-white/20 transition-colors relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-1" 
                  style={{ backgroundColor: project.accent }} 
                />
                
                <div className="flex justify-between items-start mb-6 pt-2">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-bg/50 border border-white/10"
                    style={{ color: project.accent }}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider block mb-2">
                    {project.date} • {project.tag}
                  </span>
                  <h3 className="font-syne text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[0.9rem] text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6 space-y-2">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span style={{ color: project.accent }}>▹</span>
                      <span className="text-[0.85rem] text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="font-mono text-[0.7rem] px-2 py-1 rounded bg-white/5 text-muted"
                    >
                      {tech}
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
