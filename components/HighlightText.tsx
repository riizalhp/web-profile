import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type HighlightTextProps = { children: ReactNode };

const HighlightText = ({ children }: HighlightTextProps) => {
  return (
    <span className="relative inline-block">
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] w-full bg-black"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      {children}
    </span>
  );
};

export default HighlightText;