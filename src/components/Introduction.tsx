// Images and Files
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";
import linkedIn from "../assets/images/linkedIn.png";

// React Files
import SocialMediaButton from "./SmallComponents/SocialMediaButton";

// Extensions
import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Introduction() {
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
      <motion.div
        className="flex flex-col gap-[50px] z-20"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ ease: easeOut, duration: 2 }}
      >
        <div className="flex flex-col ">
          <p className="text-shadow-lg font-bold text-3xl lg:text-6xl text-center md:text-start">
            Hi, I am
          </p>
          <h1 className="text-white text-5xl lg:text-9xl font-black text-shadow-lg custom-outline text-center md:text-start">
            YAP WING KIAN
          </h1>
        </div>

        {/* Buttons */}
        <div className="pl-[0px] lg:pl-[50px] flex gap-[60px] justify-center md:justify-start">
          {/* Github */}
          <SocialMediaButton
            imgLink={github}
            socialMediaLink={"https://github.com/Typhoon1612"}
          />

          {/* Linked In */}
          <SocialMediaButton
            imgLink={linkedIn}
            socialMediaLink={"https://l1nk.dev/9LQEY"}
          />

          {/* Instagram */}
          <SocialMediaButton
            imgLink={instagram}
            socialMediaLink={"https://acesse.one/3T3co"}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Introduction;
