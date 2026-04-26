import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ title, description, stack, github, demo, date, tag, icon: Icon, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass rounded-card overflow-hidden flex flex-col h-full transition-all duration-300 group"
      style={{
        borderColor: isHovered ? 'rgba(168,85,247,0.35)' : 'rgba(255,255,255,0.06)',
        boxShadow: isHovered ? '0 20px 60px rgba(168,85,247,0.12)' : '0 8px 25px rgba(0,0,0,0.15)'
      }}
    >
      {/* Banner */}
      <div className="h-48 relative overflow-hidden flex items-center justify-center border-b border-white/5">
        {image ? (
          <>
            <motion.img
              src={image}
              alt={`${title} preview`}
              className="absolute inset-0 w-full h-full object-cover"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.35 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-pink/5 to-transparent" />
            <motion.div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.08), transparent)" }}
              animate={isHovered ? { x: ["-100%", "200%"] } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              animate={isHovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={32} className="text-accent-light relative z-10" />
            </motion.div>
          </>
        )}

        <span className="absolute top-3 right-3 font-mono text-[9px] text-white/75 bg-black/45 px-2 py-0.5 rounded-md backdrop-blur-sm">{date}</span>
        <span className="absolute top-3 left-3 font-mono text-[10px] text-accent-light bg-black/45 px-2.5 py-0.5 rounded-md backdrop-blur-sm">{tag}</span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-text-primary mb-2 tracking-tight">{title}</h3>
        <p className="font-sans text-sm text-text-secondary leading-[1.7] mb-5 flex-1">{description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-bg-surface border border-border text-text-tertiary hover:text-accent-light hover:border-accent/30 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-4 border-t border-border">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] text-text-secondary hover:text-accent-light flex items-center gap-1.5 transition-colors"
          >
            <Github size={14} /> Source Code
          </a>
          {demo !== "#" && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2 }}
              className="font-mono text-[11px] text-accent-light hover:text-pink-light flex items-center gap-1.5 transition-colors ml-auto"
            >
              Live Demo <ExternalLink size={12} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
