import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motionVariants";

export function SectionHeader({ label, number, title, labelColor = "text-purple", subtitle }) {
  const displayLabel = label || `${number} — ${title.toUpperCase()}`;

  return (
    <motion.div 
      className="mb-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className={`block font-mono text-xs ${labelColor} tracking-widest mb-4`}>
        {displayLabel}
      </span>
      <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/40 font-dm text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
