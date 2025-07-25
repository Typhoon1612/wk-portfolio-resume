import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col ">
          <p className="text-shadow-lg font-bold text-7xl">Hi, I am</p>
          <h1 className="text-white text-9xl font-black text-shadow-lg custom-outline">
            YAP WING KIAN
          </h1>
        </div>

        {/* Buttons */}
        <div className="pl-[50px] flex gap-[60px]">
          {/* Github */}
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
              href="https://github.com/Typhoon1612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="p-[5px]"/>
            </a>
          </motion.div>
          {/* Instagram */}
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
              href="https://www.instagram.com/brushforfreedom?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instgram" className="p-[5px]"/>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
