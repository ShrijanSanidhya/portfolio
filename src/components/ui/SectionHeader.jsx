import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motionVariants";

export function SectionHeader({ label, number, title, subtitle }) {
  const displayLabel = label || `${number} — ${title.toUpperCase()}`;

  return (
    <motion.div 
      className="mb-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className={`block font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3`}>
        {displayLabel}
      </span>
      <h2 className="font-display font-semibold text-3xl text-text-primary tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary font-sans text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
