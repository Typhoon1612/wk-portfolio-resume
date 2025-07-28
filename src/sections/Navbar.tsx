import WaterButton from "../components/WaterButton";
import wkPirateLogo from "../assets/images/wkPirateLogo.png";
import downloadIcon from "../assets/images/downloadIcon.svg";
import resume from "../assets/docs/resume.pdf";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-[10px] lg:px-40 pt-5 h-auto bg-transparent z-50 min-w-50">
        {/* Logo */}

        <img src={wkPirateLogo} alt="Wk_Pirates_Logo" className="w-20 lg:w-50" />

        {/* Button */}
        <div>
          <a href={resume} download="Wing_Kian_Resume.pdf">
            <WaterButton>
              <div className="flex justify-between gap-[5px] items-center">
                <img src={downloadIcon} alt="Wk_Pirates_Logo" className="w-[10px] opacity-0 md:w-8 md:opacity-100" />
                <p>Resume</p>
              </div>
            </WaterButton>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
