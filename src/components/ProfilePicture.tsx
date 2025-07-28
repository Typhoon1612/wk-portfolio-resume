import ProfilePic from "../assets/images/profilePic.jpg";
import { motion } from "framer-motion";

function ProfilePicture() {
  return (
    <motion.div
      className="flex w-[20vh] h-[30vh] md:w-[40vh] md:h-auto min-w-[15vh] bg-white items-center justify-center shadow-black shadow-md"
      initial={{
        rotate: "0deg",
        opacity: 0,
      }}
      animate={{ rotate: "-10deg", opacity: 1 }}
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
