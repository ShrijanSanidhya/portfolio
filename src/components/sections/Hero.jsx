import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useTypewriter } from "../../hooks/useTypewriter";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

export function Hero() {
  const { titles, description } = portfolioData.hero;
  const { displayText } = useTypewriter(titles, 100, 40, 2000);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24 pb-16 relative">
      <div className="flex flex-col-reverse lg:flex-row w-full gap-12 lg:gap-8 items-center">

        {/* LEFT — Content */}
        <motion.div
          className="w-full lg:w-[55%]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-[10px] text-accent-light uppercase tracking-widest">
              Available for Internships
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4"
          >
            <span className="text-text-primary">Hi, I'm </span>
            <span className="text-gradient bg-gradient-accent">Shrijan</span>
            <span className="text-text-primary">.</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="font-mono text-sm text-text-secondary mb-6 h-[24px] flex items-center"
          >
            <span className="text-pink mr-2">→</span>
            <span>{displayText}</span>
            <motion.span
              className="inline-block w-[2px] h-[16px] bg-accent ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="max-w-lg text-text-secondary font-sans text-base leading-[1.8] mb-10"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(168,85,247,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-accent text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-accent/20"
            >
              View My Work
            </motion.a>
            <motion.a
              href={portfolioData.contact?.socials?.find(s => s.name.toLowerCase() === 'github')?.url || '#'}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="glass text-text-secondary hover:text-text-primary px-7 py-3 rounded-full text-sm font-medium transition-all"
            >
              GitHub ↗
            </motion.a>
          </motion.div>

          {/* Tech pills */}
          <motion.div variants={fadeUp} custom={5} className="flex flex-wrap gap-2 mt-8">
            {["React", "Node.js", "GenAI", "MongoDB", "LangChain"].map((tech, i) => (
              <motion.span
                key={tech}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                className="glass rounded-full px-3 py-1 font-mono text-[10px] text-text-tertiary border border-border"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Coding Girl Illustration */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-10 blur-3xl scale-110" />
            
            {/* Floating animation on the image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative z-10 w-[320px] md:w-[400px] lg:w-[440px] aspect-square overflow-hidden rounded-[34px]">
                <img
                  src="/coding-girl.png"
                  alt="Animated coding girl illustration"
                  className="w-full h-full object-cover scale-[1.17] drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] text-text-tertiary">scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-accent/40 to-transparent" />
      </motion.div>
    </section>
  );
}
