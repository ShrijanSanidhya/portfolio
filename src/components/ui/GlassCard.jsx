import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, topAccent, ...props }) {
  return (
    <motion.div
      className={cn(
        "bg-card border border-border rounded-[12px] p-6 relative overflow-hidden transition-colors duration-200 hover:bg-hover hover:border-border-hover",
        className
      )}
      {...props}
    >
      {topAccent && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />
      )}
      {children}
    </motion.div>
  );
}
