import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainContorls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainContorls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className=" overflow-hidden relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainContorls}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
