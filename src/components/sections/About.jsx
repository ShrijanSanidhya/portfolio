import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { slideLeft, slideRight } from "../../lib/motionVariants";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { personal } = portfolioData;

  return (
    <>
      <div className="w-full bg-surface border-y border-glass-border flex flex-col md:flex-row px-[5%] py-6 md:py-0">
        {[
          { num: "3+", label: "Projects Shipped" },
          { num: "2+", label: "Certifications" },
          { num: "10+", label: "Tech Stack Tools" },
          { num: "1st", label: "Year @ NST" }
        ].map((stat, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-center py-6 md:py-8 border-b md:border-b-0 md:border-r border-glass-border last:border-0 transition-colors hover:bg-glass rounded-xl cursor-default">
            <span className="font-syne text-[2.2rem] font-extrabold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent mb-2">
              {stat.num}
            </span>
            <span className="font-mono text-[0.7rem] text-muted uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <section id="about" className="py-24 px-[5%] max-w-[1400px] mx-auto relative overflow-hidden">
        <SectionHeader number="02" title="The Human Behind the Code" />

        <div ref={ref} className="flex flex-col lg:flex-row gap-6">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1"
          >
            <GlassCard className="relative h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple to-cyan" />
              <span className="block font-mono text-[0.65rem] text-cyan uppercase mb-6">Who I Am</span>
              <div className="space-y-6">
                {personal.bio.map((paragraph, i) => (
                  <p key={i} className="text-[0.92rem] text-white leading-[1.8]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1"
          >
            <GlassCard className="h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple to-cyan" />
              <span className="block font-mono text-[0.65rem] text-amber uppercase mb-6">Quick Info</span>
              
              <div className="flex flex-col">
                {personal.quickInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                    <span className="w-8 h-8 rounded-full bg-glass flex items-center justify-center text-sm">
                      {info.icon}
                    </span>
                    <span className="font-mono text-[0.68rem] text-muted uppercase w-20 shrink-0">
                      {info.label}
                    </span>
                    <span className="font-dm text-[0.85rem] text-white">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
