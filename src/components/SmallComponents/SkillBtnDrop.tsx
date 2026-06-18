import type { ReactNode } from "react";
import "../../App.css";

interface props {
  icon: ReactNode;
}

function SkillBtnDrop({ icon }: props) {
  const btnCSS = "bg-blue-400 skill-drop flex items-center justify-center";
  return (
    <div className={btnCSS}>
      <div
        className="flex items-center justify-center w-[45px] h-[45px] md:w-[60px] md:h-[60px] text-[45px] md:text-[60px]"
        style={{ transform: "rotate(10deg)" }}
      >
        {icon}
      </div>
    </div>
  );
}

export default SkillBtnDrop;
