import ProfilePic from "../assets/images/profilePic.jpg";

import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function ProfilePicture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log('PP' + isInView)
    if (isInView) {
      mainControls.start("visible");
    }
  });
  return (
    <motion.div
      ref={ref}
      className="flex w-[20vh] h-[30vh] md:w-[40vh] md:h-auto min-w-[15vh] bg-white items-center justify-center shadow-black shadow-md"
      variants={{
        hidden: { rotate: "0deg", opacity: 0 },
        visible: { rotate: "-10deg", opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 2 }}
    >
      <img
        src={ProfilePic}
        alt="ProfilePic"
        className=" w-[20vh] h-[30vh] md:w-[40vh] md:h-auto shadow-black shadow-md border-white border-[5px] lg:border-[10px]"
        style={{ transform: "rotate(10deg)" }}
      />
    </motion.div>
  );
}

export default ProfilePicture;
