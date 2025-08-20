import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Description() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log("PP" + isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  });
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        className="px-[8vh] py-[5vh] flex flex-col justify-center gap-[5vh]"
      >
        <h1 className="text-white text-3xl lg:text-7xl font-black text-shadow-lg text-center ">
          About Me
        </h1>
        <p className="text-white text-[15px] lg:text-3xl font-normal text-shadow-lg text-justify">
          I'm a design-oriented individual with a background in computer
          science. My knowledge of programming complements my growing graphic
          design skills. I'm seeking an opportunity to further develop my
          artistic and logical mindset, at the same time contribute to impactful
          visual projects.
        </p>
      </motion.div>
    </>
  );
}

export default Description;
