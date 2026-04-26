import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, topAccent, ...props }) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-glass p-6 sm:p-8 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {topAccent && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple via-cyan to-transparent" />
      )}
      {children}
    </motion.div>
  );
}
