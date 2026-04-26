import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useTypewriter } from "../../hooks/useTypewriter";
import { fadeUp, staggerContainer, scaleIn } from "../../lib/motionVariants";

export function Hero() {
  const { titles, description } = portfolioData.hero;
  const currentTitle = useTypewriter(titles, 100, 2000);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16 relative">
      <div className="flex flex-col-reverse lg:flex-row w-full gap-16 lg:gap-8 items-center">

        {/* LEFT — Content */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Label */}
          <span className="block font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-6">
            Full-Stack Developer &amp; GenAI Engineer
          </span>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="font-display font-semibold text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.1] mb-4"
          >
            Shrijan
            <br />
            Sanidhya
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="font-mono text-sm text-text-secondary mb-6 h-[24px]"
          >
            <span className="text-accent">→ </span>
            {currentTitle}
            <span className="inline-block w-[1px] h-[14px] bg-text-secondary ml-0.5 align-middle animate-pulse" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="max-w-md text-text-secondary font-sans text-sm leading-[1.8] mb-8"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -1, boxShadow: "0 4px 14px rgba(59,130,246,0.25)" }}
              transition={{ duration: 0.2 }}
              className="bg-accent hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-hover"
            >
              View Work
            </motion.a>
            <motion.a
              href={portfolioData.contact?.socials?.find(s => s.name.toLowerCase() === 'github')?.url || '#'}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="border border-border hover:border-border-hover text-text-secondary hover:text-text-primary text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-hover"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Avatar */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Avatar */}
          <div className="w-48 h-48 rounded-full border border-[rgba(59,130,246,0.25)] flex items-center justify-center">
            <div className="w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full bg-card flex items-center justify-center">
              <span className="font-display font-semibold text-4xl text-text-primary">SS</span>
            </div>
          </div>

          {/* Info below avatar */}
          <span className="font-sans font-medium text-sm text-text-primary mt-4">
            Shrijan Sanidhya
          </span>
          <span className="font-mono text-[10px] text-text-tertiary mt-1">
            B.Tech AI · NST Rishihood
          </span>

          {/* Status pill */}
          <div className="border border-border rounded-full px-3 py-1 mt-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            <span className="font-mono text-[10px] text-text-secondary">
              Open to opportunities
            </span>
          </div>
        </motion.div>

      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="font-mono text-[10px] text-text-tertiary opacity-50">
          scroll ↓
        </span>
      </div>
    </section>
  );
}
