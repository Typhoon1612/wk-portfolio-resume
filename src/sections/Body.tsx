//import ProfilePic from "../assets/profilePic.jpg";
import YellowPaper from "../assets/yellowPaper.png";
import ProfilePic from "../components/ProfilePicture.tsx";
import Introduction from "../components/Introduction.tsx";

 function Body () {
     return (
       <div className="section-1-background flex items-center pl-[15vh] pt-[10vh] gap-[150px] ">
         <ProfilePic />
         <Introduction />
       </div>
  )
}

export default Body