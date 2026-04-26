import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, topAccent, ...props }) {
  return (
    <motion.div
      className={cn(
        "glass rounded-card p-6 relative overflow-hidden group transition-all duration-300 hover:border-border-hover hover:bg-bg-hover",
        className
      )}
      {...props}
    >
      {topAccent && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-accent" />
      )}
      {children}
    </motion.div>
  );
}
