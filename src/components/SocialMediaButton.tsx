import { motion } from "framer-motion";

interface Props {
    imgLink: string,
    socialMediaLink: string,
}

function SocialMediaButton({imgLink, socialMediaLink} : Props) {
  return (
    <>
      <motion.div
        className="w-[50px] sm:w-[100px] text-black shadow-black shadow-md border-white border-[2px] sm:border-[5px] xl:border-[8px] place-items-center"
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
