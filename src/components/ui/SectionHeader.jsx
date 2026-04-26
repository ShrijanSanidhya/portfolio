import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motionVariants";

export function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      className="mb-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="block font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3">
        {label}
      </span>
      <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight mb-2">
        <span className="text-text-primary">{title.split(' ').slice(0, -1).join(' ')} </span>
        <span className="text-gradient bg-gradient-accent">{title.split(' ').slice(-1)}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary font-sans text-base mt-1">{subtitle}</p>
      )}
    </motion.div>
  );
}
