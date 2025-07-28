// Images and Files
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";
import linkedIn from "../assets/images/linkedIn.png";

// React Files
import SocialMediaButton from "./SocialMediaButton";

// Extensions
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
          <SocialMediaButton
            imgLink={github}
            socialMediaLink={"https://github.com/Typhoon1612"}
          />
        
          {/* Instagram */}
          <SocialMediaButton
            imgLink={linkedIn}
            socialMediaLink={
              "https://l1nk.dev/9LQEY"
            }
          />

          {/* Instagram */}
          <SocialMediaButton
            imgLink={instagram}
            socialMediaLink={
              "https://acesse.one/3T3co"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Introduction;
