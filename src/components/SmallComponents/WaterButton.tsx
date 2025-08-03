import type { ReactNode } from "react";
import "../../App.css";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

function WaterButton({ children }: Props) {
  return (
    <>
      <motion.div
        className="water-drop cursor-pointer"
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.3,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default WaterButton;
