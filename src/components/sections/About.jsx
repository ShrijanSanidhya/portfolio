import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "../../lib/motionVariants";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";

function AnimatedStatNumber({ value, isInView }) {
  const [count, setCount] = useState(0);
  
  // Extract number and suffix
  const match = value.match(/(\d+)(.*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isInView || target === 0) return;
    
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const interval = 20; // run every 20ms
    const step = target / (duration / interval);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="font-syne font-black text-4xl bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { personal } = portfolioData;

  const stats = [
    { num: "3+", label: "Projects Shipped" },
    { num: "2+", label: "Certifications" },
    { num: "10+", label: "Tech Stack Tools" },
    { num: "1st", label: "Year @ NST" }
  ];

  return (
    <section id="about" className="py-24 px-[5%] max-w-[1400px] mx-auto relative overflow-hidden">
      <SectionHeader 
        label="02 — ABOUT" 
        title="The Human Behind the Code" 
        labelColor="text-purple" 
      />

      <div ref={ref}>
        {/* Stats Bar */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-card rounded-glass flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              custom={i}
              className="flex-1 flex flex-col items-center justify-center py-8 hover:bg-white/[0.02] transition-colors"
            >
              <AnimatedStatNumber value={stat.num} isInView={isInView} />
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Bio Card */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full"
          >
            <GlassCard topAccent={true} className="h-full">
              <span className="block font-mono text-[10px] text-cyan uppercase tracking-[0.2em] mb-6">
                WHO I AM
              </span>
              
              <div className="space-y-4">
                {personal.bio.map((paragraph, i) => {
                  if (i === 0) {
                    const firstWord = paragraph.split(' ')[0];
                    const rest = paragraph.slice(firstWord.length);
                    return (
                      <p key={i} className="text-white/60 font-dm text-sm leading-[1.85] mb-3">
                        <span className="text-white font-medium">{firstWord}</span>{rest}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="text-white/60 font-dm text-sm leading-[1.85] mb-3">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Info Card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full"
          >
            <GlassCard topAccent={true} className="h-full">
              <span className="block font-mono text-[10px] text-amber uppercase tracking-[0.2em] mb-6">
                QUICK INFO
              </span>
              
              <div className="flex flex-col">
                {personal.quickInfo.map((info, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[1.1rem]">
                      {info.icon}
                    </span>
                    <span className="font-mono text-[10px] text-white/40 uppercase min-w-[90px]">
                      {info.label}
                    </span>
                    <span className="font-dm text-sm text-white/80">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
