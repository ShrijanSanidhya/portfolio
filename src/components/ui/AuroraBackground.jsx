import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Purple blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #a855f7, transparent 70%)',
          top: '-10%',
          right: '-5%',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pink blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #ec4899, transparent 70%)',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small accent blob */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #c084fc, transparent 70%)',
          top: '40%',
          left: '50%',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
