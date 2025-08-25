import aiyuJelly from "../assets/images/portfolios/aiyu_jelly.png";
import charmander from "../assets/images/portfolios/charmander.png";
import haorenHandsome from "../assets/images/portfolios/haoren_handsome.jpg";
import haorrenCardOne from "../assets/images/portfolios/haorren_card.jpg";
import haorrenCardTwo from "../assets/images/portfolios/haorren_card_2.jpg";
import lemonTea from "../assets/images/portfolios/lemon_tea.png";
import miloDinasaur from "../assets/images/portfolios/milo_dinasaur.png";
import wkMagazine from "../assets/images/portfolios/wk_magazine.jpg";
import oniPotatoLogo from "../assets/images/portfolios/OniPotato.png";
import eceStampCard from "../assets/images/portfolios/ECE Stamp Card.png";
import bffOne from "../assets/images/portfolios/Brush_For_Freedom_PSD.png";
import allasGame from "../assets/images/portfolios/Allas_Game_Logo.png";
import wkPiratesLogo from "../assets/images/portfolios/wk_pirates.png";
import rentosiruLogo from "../assets/images/portfolios/Rentosiru.png";
import chicCutOne from "../assets/images/portfolios/ChiC Cut with Words.png";
import eceMerdekaPoster from "../assets/images/portfolios/Ece_Merdeka_Poster.png";


import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const images = [
  aiyuJelly,
  charmander,
  haorenHandsome,
  haorrenCardOne,
  haorrenCardTwo,
  lemonTea,
  miloDinasaur,
  wkMagazine,
  oniPotatoLogo,
  eceStampCard,
  bffOne,
  allasGame,
  wkPiratesLogo,
  rentosiruLogo,
  chicCutOne,
  eceMerdekaPoster
];

function PinterestLayout() {
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

  return (
    <div className="px-[8vh] py-[10vh] flex flex-col gap-[60px]">
      <motion.h1
        ref={titleRef}
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={titleControls}
        transition={{ duration: 1 }}
        className="text-white text-3xl lg:text-7xl font-black text-shadow-lg text-center "
      >
        Branding Portfolios
      </motion.h1>
      <motion.div ref={iconsRef}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={iconsControls}
            transition={{ duration: 1, ease:easeIn }} className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-[1em]">
        {images.map((src, i) => (
          <div
            key={i}
            className="mb-4 break-inside-avoid"
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full rounded-xl shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default PinterestLayout;
