import WaterButton from "../components/WaterButton";
import wkPirateLogo from "../assets/wkPirateLogo.png";
import downloadIcon from "../assets/downloadIcon.svg";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-40 pt-5 h-auto bg-transparent z-50 ">
        {/* Logo */}

        <img src={wkPirateLogo} alt="Wk_Pirates_Logo" className="w-50" />

        {/* Button */}
        <div>
          <WaterButton>
            <div className="flex justify-between gap-[5px] items-center">
              <img src={downloadIcon} alt="Wk_Pirates_Logo" className="w-8" />
              <p>Resume</p>
            </div>
          </WaterButton>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
