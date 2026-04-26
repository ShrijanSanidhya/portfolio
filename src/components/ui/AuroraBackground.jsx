import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob 1: Purple */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#7c3aed] opacity-12 blur-[120px] rounded-full mix-blend-screen"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 100, -50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2: Cyan */}
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#06b6d4] opacity-8 blur-[100px] rounded-full mix-blend-screen"
        animate={{
          x: [100, -150, 100],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3: Pink */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#ec4899] opacity-6 blur-[80px] rounded-full mix-blend-screen"
        animate={{
          x: [-50, 200, -50],
          y: [200, -50, 200],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
