import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motionVariants";

export function SectionHeader({ number, title }) {
  return (
    <motion.div 
      className="mb-16"
      variants={fadeUp}
    >
      <span className="block font-mono text-xs text-purple tracking-widest mb-4">
        {number} — {title.toUpperCase()}
      </span>
      <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white">
        {title}
      </h2>
    </motion.div>
  );
}
