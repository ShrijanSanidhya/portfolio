import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "../../lib/motionVariants";
import { GlassCard as Card } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";

function AnimatedStatNumber({ value, isInView }) {
  const [count, setCount] = useState(0);
  
  const match = value.match(/(\d+)(.*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isInView || target === 0) return;
    
    let start = 0;
    const duration = 1500;
    const interval = 20;
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
    <span className="font-display font-semibold text-3xl text-text-primary">
      {count}{suffix}
    </span>
  );
}

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { personal } = portfolioData;

  const stats = [
    { num: "3+", label: "Projects" },
    { num: "2+", label: "Certifications" },
    { num: "10+", label: "Tech Tools" },
    { num: "1st", label: "Year @ NST" }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-24 px-[5%] max-w-5xl mx-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader 
        label="02 — ABOUT" 
        title="The Human Behind the Code" 
      />

      <div ref={ref} className="mt-12">
        {/* Stats Bar */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-card border border-border rounded-[12px] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              custom={i}
              className="flex-1 flex flex-col items-center justify-center py-6"
            >
              <AnimatedStatNumber value={stat.num} isInView={isInView} />
              <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid lg:grid-cols-2 gap-4">
          
          {/* Bio Card */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full"
          >
            <Card className="h-full">
              <span className="block font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-6">
                WHO I AM
              </span>
              
              <div className="space-y-4">
                {personal.bio.map((paragraph, i) => {
                  if (i === 0) {
                    const firstWord = paragraph.split(' ')[0];
                    const rest = paragraph.slice(firstWord.length);
                    return (
                      <p key={i} className="text-text-secondary font-sans text-sm leading-[1.75] mb-3">
                        <span className="text-text-primary font-medium">{firstWord}</span>{rest}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="text-text-secondary font-sans text-sm leading-[1.75] mb-3">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Quick Info Card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full"
          >
            <Card className="h-full">
              <span className="block font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-6">
                QUICK INFO
              </span>
              
              <div className="flex flex-col">
                {personal.quickInfo.map((info, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 py-3 border-b border-border last:border-0"
                  >
                    <span className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center text-[1.1rem]">
                      {info.icon}
                    </span>
                    <span className="font-mono text-[10px] text-text-tertiary uppercase min-w-[90px]">
                      {info.label}
                    </span>
                    <span className="font-sans text-sm text-text-secondary">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
