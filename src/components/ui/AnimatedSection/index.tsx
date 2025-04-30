import React from "react";
import { motion } from "framer-motion";

interface AnimationSectionProps {
  children: React.ReactNode;
}

function AnimatedSection({ children }: AnimationSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
