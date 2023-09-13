import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const maxScale = 2;
  const maxHeight = 150;
  const maxWidth = 150;

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, maxScale]);
  const height = useTransform(scale, [0, maxScale], [100, maxHeight]);
  const width = useTransform(scale, [0, maxScale], [100, maxWidth]);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex justify-center items-center w-60 h-60 bg-blue-300">
        <motion.div
          className="w-30 h-30 overflow-hidden rounded-lg bg-slate-300"
          style={{ scale }}
        >
          <motion.span
            className="w-44 h-44 overflow-hidden bg-violet-50 flex justify-center items-center"
            style={{ scaleY: scrollYProgress }}
          >
            Scroll
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Scroll;
