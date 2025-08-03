import ProfilePic from "../components/ProfilePicture.tsx";
import Introduction from "../components/Introduction.tsx";
import Sky from "../assets/images/sky.png";
import Sea from "../assets/images/underTheSea.png";
import { Parallax } from "react-parallax";
import Skills from "../components/Skills.tsx";


function Body() {

  return (
    <>
      <Parallax
        strength={800}
        bgImageStyle={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          filter: "grayscale(0.2)"
        }}
        blur={1}
        //bgClassName="bg-cover, bg-center, bg-no-repeat"
        bgImage={Sky}
      >
        <div className="flex flex-col md:flex-row items-center justify-center h-screen pl-[0vh] md:pl-[10vh] pt-[5vh] md:pt-[8vh] gap-[50px] lg:gap-[150px] xl:gap-[250px]">
          <ProfilePic />
          <Introduction />
        </div>
      </Parallax>
      <Parallax
        strength={800}
        bgImageStyle={{ height: "100vh", width: "100%", objectFit: "cover",}}
        bgImage={Sea}
      >
        <div className="h-screen">
          <Skills />
        </div>
      </Parallax>
    </>
  );
}

export default Body;
