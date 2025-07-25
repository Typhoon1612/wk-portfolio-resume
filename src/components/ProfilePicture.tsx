import ProfilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

function ProfilePicture() {
  return (
    <motion.div
      className="flex w-[400px] h-[540px] min-w-[350px] bg-white items-center justify-center shadow-black shadow-md"
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
        className="w-[40vh] shadow-black shadow-md border-white border-[10px]"
        style={{ transform: "rotate(10deg)" }}
      />
    </motion.div>
  );
}

export default ProfilePicture;
