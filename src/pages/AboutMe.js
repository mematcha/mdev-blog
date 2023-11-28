import MainHeader from "../components/mainHeader";

function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center">
        <MainHeader></MainHeader>
        <div className="ml-[05%] mr-[25%]">
          <div className="mb-4 font-bold text-[24px]">About Me</div>
          <div>
            <p>Hi! Sathwik over here.</p>
            <br></br>
            <p>
              I am a ML Enthusiast with a knack for Software Development, with
              an extensive knowledge of Frontend Development ranging from React
              to Angular with over two years of professional background,
              handling large-scale web projects used by thousands of daily
              active customers using Angular and React in Agile work settings.
              Proven ability to build platforms while maintaining high standards
              for code efficiency and quality.
            </p>
          </div>
          <div className="mb-4 font-bold text-[24px]">Technical Skills</div>
          <div>
            
          </div>
          <div className="mb-4 font-bold text-[24px]">Why MDev.Blog?</div>
          <div className="mb-4 font-bold text-[24px]">Resume</div>
          <div className="mb-4 font-bold text-[24px]">Contact</div>

        </div>
      </div>
    </>
  );
}
export default AboutMe;
