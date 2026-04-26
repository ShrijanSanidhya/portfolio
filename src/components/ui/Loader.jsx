import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="font-display font-semibold text-5xl text-text-primary mb-8">
        SS
      </div>
      <div className="h-[2px] w-64 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
