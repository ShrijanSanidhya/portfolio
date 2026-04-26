import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Badge({ children, className, ...props }) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-surface font-mono text-[11px] text-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
