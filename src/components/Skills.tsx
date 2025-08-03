// CSS
import "../App.css";

// Images
import SkillBtnDrop from "./SmallComponents/SkillBtnDrop";
import unity from "../assets/images/unity.png";
import react from "../assets/images/react.svg";
import flutter from "../assets/images/flutter.svg";
import html from "../assets/images/html5.svg";
import css from "../assets/images/CSS3.svg";
import js from "../assets/images/JavaScript.svg";
import tailwindcss from "../assets/images/Tailwind CSS.svg";
import kotlin from "../assets/images/Kotlin.svg";
import mysql from "../assets/images/MySQL.svg";
import firebase from "../assets/images/Firebase.svg";
import sqlite from "../assets/images/SQLite.svg";
import figma from "../assets/images/Figma.svg";

// Extensions
import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });
  return (
    <div ref={ref}>
      <div>
        <motion.div
          className="place-items-center pt-30"
          variants={{
            hidden: { opacity: 0, x: 500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 5 }}
        >
          <h1 className="text-7xl md:text-9xl italic underline font-black text-center text-shadow-[100px] text-white custom-outline decoration-[8px]">
            My Skills
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 pt-[50px] px-[35px] md:pt-[100px] lg:px-[250px]"
          variants={{
            hidden: { opacity: 0, scale: 0},
            visible: { opacity: 1, scale: 1},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 5, delay: 0.5}}
        >
          <SkillBtnDrop imgLink={unity} />
          <SkillBtnDrop imgLink={react} />
          <SkillBtnDrop imgLink={flutter} />
          <SkillBtnDrop imgLink={html} />
          <SkillBtnDrop imgLink={css} />
          <SkillBtnDrop imgLink={js} />
          <SkillBtnDrop imgLink={tailwindcss} />
          <SkillBtnDrop imgLink={kotlin} />
          <SkillBtnDrop imgLink={mysql} />
          <SkillBtnDrop imgLink={firebase} />
          <SkillBtnDrop imgLink={sqlite} />
          <SkillBtnDrop imgLink={figma} />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
