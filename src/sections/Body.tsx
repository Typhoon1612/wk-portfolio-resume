import ProfilePic from "../components/ProfilePicture.tsx";
import Introduction from "../components/Introduction.tsx";

 function Body () {
     return (
       <div className="section-1-background flex flex-col md:flex-row items-center justify-center h-screen  pl-[0vh] md:pl-[10vh] pt-[5vh] md:pt-[8vh] gap-[50px] lg:gap-[150px] xl:gap-[250px] ">
         <ProfilePic />
         <Introduction />
       </div>
  )
}

export default Body

