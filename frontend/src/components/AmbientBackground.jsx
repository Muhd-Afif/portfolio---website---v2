import { motion } from "framer-motion";

// Extremely subtle blue ambient lighting. Sits behind all content.
export const AmbientBackground = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-[#050505] to-[#050505]" />
    <motion.div
      className="absolute -top-56 left-[15%] h-[42rem] w-[42rem] rounded-full bg-[#2563FF] opacity-[0.07] blur-[150px]"
      animate={{ x: [0, 70, 0], y: [0, 44, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-10rem] right-[12%] h-[36rem] w-[36rem] rounded-full bg-[#00A8FF] opacity-[0.05] blur-[150px]"
      animate={{ x: [0, -60, 0], y: [0, -34, 0] }}
      transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);
