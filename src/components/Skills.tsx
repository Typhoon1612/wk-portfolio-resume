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
import javascript from "../assets/images/JavaScript.svg";
import kotlin from "../assets/images/Kotlin.svg";
import mysql from "../assets/images/MySQL.svg";
import sqlite from "../assets/images/SQLite.svg";
import firebase from "../assets/images/Firebase.svg";

// Brand icons for newly added skills
import {
  SiPhp,
  SiPython,
  SiSharp,
  SiGo,
  SiVuedotjs,
  SiNextdotjs,
  SiBootstrap,
  SiLaravel,
  SiDjango,
  SiAxios,
  SiPandas,
  SiAlibabacloud,
  SiCloudflare,
  SiVercel,
  SiRender,
  SiKubernetes,
  SiDocker,
  SiNginx,
  SiCypress,
  SiSelenium,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbApi, TbChartBar, TbDatabaseCog, TbRobot } from "react-icons/tb";

// Extensions
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, type ReactNode } from "react";

function brandIcon(label: string, node: ReactNode) {
  return (
    <span role="img" aria-label={label}>
      {node}
    </span>
  );
}

const skillIcons: ReactNode[] = [
  <img src={unity} alt="Unity" className="w-full h-full object-contain" />,
  <img src={react} alt="React" className="w-full h-full object-contain" />,
  <img src={flutter} alt="Flutter" className="w-full h-full object-contain" />,
  <img src={html} alt="HTML5" className="w-full h-full object-contain" />,
  <img src={css} alt="CSS3" className="w-full h-full object-contain" />,
  <img src={javascript} alt="JavaScript" className="w-full h-full object-contain" />,
  <img src={tailwindcss} alt="Tailwind CSS" className="w-full h-full object-contain" />,
  <img src={figma} alt="Figma" className="w-full h-full object-contain" />,
  <img src={kotlin} alt="Kotlin" className="w-full h-full object-contain" />,
  <img src={mysql} alt="MySQL" className="w-full h-full object-contain" />,
  <img src={sqlite} alt="SQLite" className="w-full h-full object-contain" />,
  <img src={firebase} alt="Firebase" className="w-full h-full object-contain" />,
  <img src={photoshop} alt="Photoshop" className="w-full h-full object-contain" />,
  <img src={illustrator} alt="Illustrator" className="w-full h-full object-contain" />,
  <img src={premierPro} alt="Premiere Pro" className="w-full h-full object-contain" />,
  <img src={afterEffects} alt="After Effects" className="w-full h-full object-contain" />,
  <img src={canva} alt="Canva" className="w-full h-full object-contain" />,
  <img src={procreate} alt="Procreate" className="w-full h-full object-contain" />,

  // Languages
  brandIcon("PHP", <SiPhp color="#777BB4" />),
  brandIcon("Python", <SiPython color="#3776AB" />),
  brandIcon("C#", <SiSharp color="#239120" />),
  brandIcon("Go", <SiGo color="#00ADD8" />),

  // Frontend frameworks
  brandIcon("Vue.js", <SiVuedotjs color="#4FC08D" />),
  brandIcon("Next.js", <SiNextdotjs color="#000000" />),
  brandIcon("Bootstrap", <SiBootstrap color="#7952B3" />),

  // Backend frameworks & APIs
  brandIcon("Laravel", <SiLaravel color="#FF2D20" />),
  brandIcon("Django", <SiDjango color="#0C4B33" />),
  brandIcon("Ent (Golang ORM)", <TbDatabaseCog color="#00ADD8" />),
  brandIcon("RESTful APIs", <TbApi color="#06B6D4" />),
  brandIcon("Axios / Ky.js", <SiAxios color="#5A29E4" />),

  // Data
  brandIcon("Power BI", <TbChartBar color="#F2C811" />),
  brandIcon("Pandas", <SiPandas color="#150458" />),
  brandIcon("Data Automation", <TbRobot color="#22C55E" />),

  // Cloud & DevOps
  brandIcon("AWS", <FaAws color="#FF9900" />),
  brandIcon("Alibaba Cloud", <SiAlibabacloud color="#FF6A00" />),
  brandIcon("Cloudflare", <SiCloudflare color="#F38020" />),
  brandIcon("Vercel", <SiVercel color="#000000" />),
  brandIcon("Render", <SiRender color="#46E3B7" />),
  brandIcon("Kubernetes", <SiKubernetes color="#326CE5" />),
  brandIcon("Docker", <SiDocker color="#2496ED" />),
  brandIcon("Nginx", <SiNginx color="#009639" />),
  brandIcon("Cypress", <SiCypress color="#17202C" />),
  brandIcon("Selenium", <SiSelenium color="#43B02A" />),
];

function Skills() {
  const titleRef = useRef(null);
  const iconsRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const iconsInView = useInView(iconsRef, { once: true });

  const titleControls = useAnimation();
  const bubbleControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (iconsInView) {
      bubbleControls.start((i: number) => ({
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 60,
          damping: 14,
          delay: i * 0.07,
        },
      }));
    }
  }, [iconsInView, bubbleControls]);

  // Generate stable random spawn positions for each bubble
  const randomOrigins = useMemo(
    () =>
      skillIcons.map(() => ({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 800,
        rotate: (Math.random() - 0.5) * 360,
        scale: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <div>
      <motion.div
        className="place-items-center pt-12 md:pt-20"
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

      <div
        ref={iconsRef}
        className="flex flex-wrap justify-center items-center gap-4 pt-[40px] px-[20px] md:pt-[60px] md:px-[60px] lg:px-[200px]"
      >
        {skillIcons.map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{
              x: randomOrigins[index].x,
              y: randomOrigins[index].y,
              opacity: 0,
              rotate: randomOrigins[index].rotate,
              scale: randomOrigins[index].scale,
            }}
            animate={bubbleControls}
          >
            <SkillBtnDrop icon={icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
