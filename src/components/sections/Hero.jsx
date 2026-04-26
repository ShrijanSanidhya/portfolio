import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useTypewriter } from "../../hooks/useTypewriter";
import { fadeUp, staggerContainer, fadeIn } from "../../lib/motionVariants";
import { ArrowDownRight, ExternalLink, ChevronDown } from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;
  const { displayText } = useTypewriter(personal.taglines);

  const floatingPills = [
    { text: "React", top: "-10%", left: "0%", delay: 0, duration: 3 },
    { text: "GenAI", top: "15%", right: "-15%", delay: 0.5, duration: 3.5 },
    { text: "Python", bottom: "10%", left: "-10%", delay: 1, duration: 4 },
    { text: "Node.js", bottom: "-5%", right: "10%", delay: 1.5, duration: 4.5 }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20 px-[5%] max-w-[1400px] mx-auto">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* Left Column - 55% on lg */}
        <motion.div 
          className="w-full lg:w-[55%] flex flex-col items-start z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Availability Badge */}
          <motion.div 
            variants={fadeUp} 
            custom={0}
            className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 rounded-pill px-4 py-1.5 w-fit mb-6"
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-purple-light"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-mono text-[11px] text-purple-light uppercase tracking-widest">
              ✦ Available for Internships
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeUp} 
            custom={1}
            className="font-syne font-black leading-[1.0] tracking-[-3px] mb-4"
          >
            <span className="block text-white text-[4rem] lg:text-[6rem]">Shrijan</span>
            <span className="block bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text text-transparent text-[4rem] lg:text-[6rem]">
              Sanidhya
            </span>
          </motion.h1>

          {/* Typewriter Line */}
          <motion.div variants={fadeUp} custom={2} className="mb-5 h-8 flex items-center">
            <span className="font-mono text-cyan text-lg lg:text-xl">
              {displayText}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyan ml-0.5"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={fadeUp} 
            custom={3}
            className="max-w-[480px] text-white/60 font-dm leading-[1.8] text-[0.93rem] mb-8"
          >
            I build intelligent web applications that go beyond the screen. 
            My work lives at the intersection of high-end frontend and GenAI innovation — 
            turning complex ideas into sleek, AI-enhanced digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp} 
            custom={4}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{ boxShadow: "0 0 0 rgba(124,58,237,0)" }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 16px 40px rgba(124,58,237,0.45)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 rgba(124,58,237,0)"}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple to-purple-dark text-white font-dm font-semibold text-sm px-7 py-3.5 rounded-xl transition-shadow duration-300"
            >
              View My Work <ArrowDownRight size={18} />
            </motion.a>
            <motion.a
              href={portfolioData.contact.socials.find(s => s.name === "GitHub")?.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="inline-flex items-center justify-center gap-2 border border-cyan/30 text-cyan bg-transparent hover:bg-cyan/10 hover:border-cyan text-sm font-dm font-semibold px-7 py-3.5 rounded-xl transition-colors duration-300"
            >
              GitHub <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - 45% on lg */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col items-center justify-center relative mt-12 lg:mt-0"
          variants={fadeIn}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Avatar Container */}
          <div className="w-[280px] h-[280px] rounded-full relative flex items-center justify-center mb-8">
            
            {/* Spinning Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #f59e0b, #7c3aed)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Circle / Image */}
            <div className="absolute inset-[3px] rounded-full bg-card flex items-center justify-center overflow-hidden z-10">
              {/* Initials (replace with img when ready) */}
              <span className="font-syne font-black text-6xl bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">
                SS
              </span>
              {/* <img src={photoUrl} className="w-full h-full object-cover rounded-full" alt="Shrijan Sanidhya" /> */}
            </div>

            {/* Floating Skill Pills */}
            {floatingPills.map((pill, i) => (
              <motion.div
                key={pill.text}
                className="absolute glass-card rounded-pill px-3 py-1.5 font-mono text-xs text-white/70 whitespace-nowrap z-20"
                style={{ top: pill.top, bottom: pill.bottom, left: pill.left, right: pill.right }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: pill.duration, repeat: Infinity, ease: "easeInOut", delay: pill.delay }}
              >
                {pill.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">scroll</span>
        <ChevronDown size={16} className="text-white/30" />
      </motion.div>
    </section>
  );
}
