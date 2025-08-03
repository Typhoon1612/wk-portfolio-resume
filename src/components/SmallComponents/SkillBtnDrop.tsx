import type { ReactNode } from "react";
import "../../App.css";

interface props {
  imgLink: string;
}

function SkillBtnDrop({ imgLink }: props) {
  const btnCSS = "bg-blue-400 skill-drop flex items-center justify-center";
  return (
    <div className={btnCSS}>
      <img
        src={imgLink}
        alt="UnityPic"
        className=" w-[45px] h-[45px] md:w-[60px] md:h-[60px]"
        style={{ transform: "rotate(10deg)" }}
      />
    </div>
  );
}

export default SkillBtnDrop;
