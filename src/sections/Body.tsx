import ProfilePic from "../components/ProfilePicture.tsx";
import Introduction from "../components/Introduction.tsx";

 function Body () {
     return (
       <div className="section-1-background flex-row place-items-center md:items-center md:flex justify-center pl-[0vh] md:pl-[10vh] pt-[20vh] md:pt-[8vh] gap-[50px] lg:gap-[150px] xl:gap-[250px] ">
         <ProfilePic />
         <Introduction />
       </div>
  )
}

export default Body

