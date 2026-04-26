import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const bannerStyles = {
  kavach: { bg: "linear-gradient(135deg, #0f172a, #1e293b)", accent: "#3b82f6" },
  voiceiq: { bg: "linear-gradient(135deg, #0c1524, #162032)", accent: "#64748b" },
  fitai: { bg: "linear-gradient(135deg, #0a1a0f, #132218)", accent: "#475569" },
};

export function ProjectCard({
  id,
  title,
  description,
  stack,
  github,
  demo,
  date,
  icon: Icon,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const style = bannerStyles[id] || bannerStyles.kavach;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-card rounded-xl overflow-hidden flex flex-col h-full transition-all duration-200"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isHovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
        backgroundColor: isHovered ? "#161f2e" : "#111827",
      }}
    >
      {/* Banner */}
      <div
        className="h-32 relative overflow-hidden flex items-center justify-center"
        style={{ background: style.bg }}
      >
        {/* Top accent strip */}
        <div
          className="absolute top-0 left-0 w-full h-[2px]"
          style={{ backgroundColor: style.accent }}
        />

        <Icon size={28} className="relative z-10 text-text-secondary" />

        {/* Date */}
        <span className="absolute top-3 right-3 font-mono text-[9px] text-text-tertiary">
          {date}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-sm text-text-primary mb-1">
          {title}
        </h3>
        <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
          {description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-text-tertiary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] text-text-secondary hover:text-text-primary flex items-center gap-1 transition-colors duration-200"
          >
            GitHub <span className="text-text-tertiary">→</span>
          </a>
          {demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] text-accent hover:text-text-primary flex items-center gap-1 transition-colors duration-200"
            >
              Demo <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
