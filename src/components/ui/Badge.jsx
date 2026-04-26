import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Badge({ children, className, ...props }) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-pill glass-card border-purple/30 shadow-[0_0_10px_rgba(124,58,237,0.1)] text-sm",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
