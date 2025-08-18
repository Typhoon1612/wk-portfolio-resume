// CSS
import "../App.css";

// Images
import SkillBtnDrop from "./SmallComponents/SkillBtnDrop";
import unity from "../assets/images/unity.png";
import react from "../assets/images/react.svg";
import flutter from "../assets/images/flutter.svg";
import html from "../assets/images/html5.svg";
import css from "../assets/images/CSS3.svg";
import tailwindcss from "../assets/images/Tailwind CSS.svg";
import photoshop from "../assets/images/photoshop.png";
import illustrator from "../assets/images/illustrator.png";
import premierPro from "../assets/images/premierePro.png";
import afterEffects from "../assets/images/afterEffects.png";
import canva from "../assets/images/canva.png";
import procreate from "../assets/images/procreate.png";
import figma from "../assets/images/Figma.svg";

// Extensions
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Skills() {
  const titleRef = useRef(null);
  const iconsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const iconsInView = useInView(iconsRef, { once: true });

  const titleControls = useAnimation();
  const iconsControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      console.log("Title" + titleInView);
      titleControls.start("visible");
    }
  }, [titleInView]);

  useEffect(() => {
    if (iconsInView) {
      console.log("Icon" + iconsInView);
      iconsControls.start("visible");
    }
  }, [iconsInView]);

  const skillIcons = [
    unity,
    react,
    flutter,
    html,
    css,
    tailwindcss,
    photoshop,
    illustrator,
    premierPro,
    afterEffects,
    canva,
    procreate,
    figma,
  ];

  return (
    <div>
      <motion.div
        className="place-items-center pt-30"
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={titleControls}
        transition={{ duration: 1 }}
      >
        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl italic underline font-black text-center text-shadow-[100px] text-white custom-outline decoration-[8px]"
        >
          My Skills
        </h1>
      </motion.div>

      <motion.div
        ref={iconsRef}
        className="flex flex-wrap justify-center items-center gap-4 pt-[50px] px-[35px] md:pt-[100px] lg:px-[250px]"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={iconsControls}
        transition={{ duration: 1 }}
      >
        {skillIcons.map((img, index) => {
          return <SkillBtnDrop key={index} imgLink={img} />;
        })}
      </motion.div>
    </div>
  );
}

export default Skills;
