import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { AnimatedText } from "../ui/AnimatedText";
import { portfolioData } from "../../data/portfolioData";
import { Badge } from "../ui/Badge";
import { ArrowDownRight, ExternalLink } from "lucide-react";

export function Hero() {
  const { personal, skills } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-[5%] max-w-[1400px] mx-auto">
      <div className="w-full lg:w-[60%] pr-0 lg:pr-[5%]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <Badge>
              <div className="w-2 h-2 bg-purple rounded-full animate-pulse" />
              <span>✦ Available for Internships</span>
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-syne text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-[1.1] tracking-tight mb-4">
            <span className="block text-white">Shrijan</span>
            <span className="block bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text text-transparent">
              Sanidhya
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="font-mono text-lg text-cyan mb-8 h-6 flex items-center">
            <AnimatedText strings={personal.taglines} interval={2000} />
          </motion.div>

          <motion.p variants={fadeUp} className="max-w-[480px] text-muted leading-[1.75] text-[0.95rem] mb-10">
            {personal.bio[1]}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-br from-purple to-purple-dark text-white font-medium hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] transition-all duration-300"
            >
              View My Work <ArrowDownRight size={18} />
            </a>
            <a
              href={portfolioData.contact.socials.find(s => s.name === "GitHub")?.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-cyan/40 text-cyan bg-transparent hover:bg-cyan/10 hover:border-cyan transition-all duration-300 font-medium"
            >
              GitHub <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:flex w-[40%] flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-[260px] h-[260px] flex items-center justify-center mb-6"
        >
          <div className="absolute inset-[-3px] rounded-full bg-[conic-gradient(from_0deg,var(--tw-gradient-stops))] from-purple via-cyan to-pink animate-[spin_4s_linear_infinite]" />
          <div className="relative w-full h-full bg-card rounded-full flex items-center justify-center z-10">
            <span className="font-syne text-[5rem] font-extrabold bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
              SS
            </span>
          </div>

          {["React", "GenAI", "Python", "Node.js"].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`absolute px-4 py-2 rounded-pill glass-card text-sm font-mono text-white z-20 animate-[bounce_3s_ease-in-out_infinite_alternate]`}
              style={{
                top: index === 0 ? '-10%' : index === 1 ? '20%' : index === 2 ? 'auto' : 'auto',
                bottom: index === 2 ? '10%' : index === 3 ? '-5%' : 'auto',
                left: index === 0 ? '0%' : index === 2 ? '-10%' : 'auto',
                right: index === 1 ? '-15%' : index === 3 ? '10%' : 'auto',
                animationDelay: `${index * 0.5}s`
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-[0.65rem] text-muted px-4 py-1.5 border border-dashed border-muted/40 rounded-pill"
        >
          [ drop your photo here ]
        </motion.div>
      </div>
    </section>
  );
}
