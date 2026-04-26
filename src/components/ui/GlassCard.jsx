import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, ...props }) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-glass p-6 sm:p-8",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
