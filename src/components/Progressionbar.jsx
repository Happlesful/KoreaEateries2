import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Progressionbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 z-50 origin-left bg-cyan-700"
      style={{ scaleX }}
    />
  );
};

export default Progressionbar;
