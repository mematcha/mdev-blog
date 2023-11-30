import MainHeader from "../components/mainHeader";
import resume_pdf from "../assets/pdf/Resume_V4.1.pdf";
import SkillCarousel from "../components/Carousel/SkillCarousel";
import CarouselGeneral from "../components/Carousel/Carousel";

function AboutMe() {

  const openResume=()=>{
    window.open(resume_pdf,'_blank');
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <MainHeader></MainHeader>
        <div className="ml-[05%] mr-[25%] text-justify">
          <div className="mb-4">
            <div className="mb-4 font-bold text-[24px]">About Me</div>
            <div>
              <p>Hi! Sathwik Matcha over here. You can call me just Sathwik. 😊</p>
              <br></br>
              <p>
                I am a Machine Learning Enthusiast with a knack for Software Development, with
                an extensive knowledge of Frontend Development ranging from
                React to Angular with over two years of professional background,
                handling large-scale web projects used by thousands of daily
                active customers using Angular and React in Agile work settings.
                Proven ability to build platforms while maintaining high
                standards for code efficiency and quality.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-4 font-bold text-[24px]">Technical Skills</div>
            <div>
              <SkillCarousel></SkillCarousel>
              {/* <CarouselGeneral></CarouselGeneral> */}
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-4 font-bold text-[24px]">Why MDev.Blog?</div>
            <div>
              <p>
                The main mission of this blog is to be a proper presentation of
                knowledge rather than a simple mumble jumble of the latest
                happenings in a space. The gap between what we want to learn and
                what is being presented has no correlation in the modern social
                media space. I hope this website bridges the gap between the
                two.
              </p>
              <br></br>
              <p>
                I wish to keep this website focused more on the learning, while I do intend to post the latest happenings, 
                I wish to keep it distinct from the actual learning aspects. My focus areas revolve around Software Development, 
                Machine Learning and Data Science. 
              </p>
            </div>
          </div>
          <div>
            <div className="mb-4 font-bold text-[24px]">Resume</div>
            <div className="p-4 mb-4 border-2 rounded" onClick={openResume}>View Resume</div>
          </div>
          <div>
            <div className="mb-4 font-bold text-[24px]">Contact</div>
            <div>Email</div>
            <div>LinkedIn</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
