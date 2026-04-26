import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({
  title,
  description,
  features,
  stack,
  github,
  demo,
  date,
  tag,
  color,
  icon: Icon,
  accent,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card rounded-glass overflow-hidden cursor-pointer flex flex-col h-full transition-colors duration-300"
      style={{
        border: `1px solid ${isHovered ? accent + "66" : "rgba(255,255,255,0.08)"}`
      }}
    >
      {/* Banner */}
      <div className="h-40 relative overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(135deg, ${accent}, transparent)` }}
        />
        
        <Icon size={48} style={{ color: accent }} className="relative z-10" />

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: accent,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Badges */}
        <div className="absolute top-3 right-3 px-2 py-1 glass-card rounded-pill font-mono text-[10px] text-white/70">
          {date}
        </div>
        <div 
          className="absolute top-3 left-3 px-2 py-1 rounded-pill font-mono text-[10px] bg-white/10"
          style={{ color: accent }}
        >
          {tag}
        </div>
        <div className="absolute bottom-3 left-3 px-2 py-1 rounded-pill border border-dashed border-white/20 font-mono text-[9px] text-white/20">
          [ Add Screenshot ]
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-syne font-bold text-base text-white mb-1">{title}</h3>
        <p className="font-dm text-sm text-white/55 leading-[1.7] mb-4">
          {description}
        </p>

        <div className="mb-4">
          {features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-white/45 font-dm mb-1">
              <div 
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: accent }}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {stack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ 
                backgroundColor: accent + "1a",
                color: accent,
                borderColor: accent + "4d"
              }}
              className="font-mono text-[10px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-white/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Button Row */}
        <div className="flex gap-4 mt-5 pt-4 border-t border-white/[0.06]">
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 2 }}
            className="font-mono text-[11px] text-cyan/70 hover:text-cyan flex items-center gap-1 transition-colors"
          >
            GitHub <Github size={12} />
          </motion.a>
          {demo !== "#" && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2 }}
              style={{ color: accent }}
              className="font-mono text-[11px] flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              Live Demo <ExternalLink size={12} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
