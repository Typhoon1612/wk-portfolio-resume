import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    imgLink: string,
    socialMediaLink: string,
}

function SocialMediaButton({imgLink, socialMediaLink} : Props) {
  return (
    <>
      <motion.div
        className="w-[80px] text-black shadow-black shadow-md border-white border-[3px]"
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <a
          href={socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgLink} alt="github" className="p-[5px]" />
        </a>
      </motion.div>
    </>
  );
}

export default SocialMediaButton;
