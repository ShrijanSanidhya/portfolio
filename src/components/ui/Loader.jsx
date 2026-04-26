import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="font-syne font-black text-7xl bg-gradient-to-r from-purple via-cyan to-pink bg-clip-text text-transparent mb-8">
        SS
      </div>
      <div className="h-[2px] w-64 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple to-cyan rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
