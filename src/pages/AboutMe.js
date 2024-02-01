import MainHeader from "../components/Header/mainHeader";
import resume_pdf from "../assets/pdf/Resume_V4.1.pdf";
import SkillCarousel from "../components/Carousel/SkillCarousel";
import CarouselGeneral from "../components/Carousel/Carousel";
import CarouselTemplate from "../components/Carousel/CarouselTemplate";
import SideCard from "../components/SideCard/SideCard";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import ProfileImg from "../assets/profile_image.jpg";

function AboutMe() {
  const openResume = () => {
    window.open(resume_pdf, "_blank");
  };
  const { theme } = useContext(ThemeContext);
  const contactObj = [
    {
      title: "Social & Email",
      courses: [
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/sathwik-matcha/",
        },
        {
          text: "Threads",
          url: "https://www.threads.net/@mematcha9",
        },
        {
          text: "matcha.s@northeastern.edu",
          url: "mailto:matcha.s@northeastern.edu",
        },
        {
          text: "",
          url: "",
        },
      ],
    },
    {
      title: "Developer",
      courses: [
        {
          text: "Github",
          url: "https://github.com/mematcha",
        },
        {
          text: "Kaggle",
          url: "https://www.kaggle.com/mematcha9",
        },
        {
          text: "Leetcode",
          url: "https://leetcode.com/mematcha/",
        },
      ],
    },
  ];
  const resumeObj = [
    {
      title: "Programming Languages",
      courses: [
        { text: "Javascript", url: "#" },
        { text: "Typescript", url: "#" },
        { text: "Java", url: "#" },
        { text: "Python", url: "#" },
        { text: "R", url: "#" },
        { text: "C++", url: "#" },
      ],
    },
    {
      title: "Web Technologies",
      courses: [
        { text: "Angular", url: "#" },
        { text: "React TS", url: "#" },
        { text: "Node.js", url: "#" },
        { text: "Express.js", url: "#" },
        { text: "Responsive Design", url: "#" },
        { text: "Progressive Web Apps (PWA)", url: "#" },
      ],
    },
    {
      title: "Databases",
      courses: [
        { text: "MongoDB", url: "#" },
        { text: "MySQL", url: "#" },
        { text: "Microsoft SQL Server", url: "#" },
      ],
    },
    {
      title: "Frameworks / Libraries",
      courses: [
        { text: "Tensorflow", url: "#" },
        { text: "Pytorch", url: "#" },
        { text: "Swing", url: "#" },
        { text: ".NET MVC", url: "#" },
        { text: "Lucene", url: "#" },
        { text: "Tailwind CSS", url: "#" },
        { text: "Chart JS", url: "#" },
        { text: "React-ag-grid", url: "#" },
        { text: "Angular Material", url: "#" },
      ],
    },
    {
      title: "Version Control",
      courses: [
        { text: "Azure DevOps", url: "#" },
        { text: "Git", url: "#" },
        { text: "GitHub", url: "#" },
      ],
    },
  ];
  const aboutMeArr = [
    "About Me",
    "Technical Skills",
    "Why MDev.Blog?",
    "Resume",
  ];

  const openLink = (link) => {
    if (link == "linkedin") {
      window.open("https://www.linkedin.com/in/sathwik-matcha/", "_blank");
    }
    if (link == "github") {
      window.open("https://github.com/mematcha", "_blank");
    }
    if (link == "kaggle") {
      window.open("https://www.kaggle.com/mematcha", "_blank");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`body-center fixed flex justify-center top-0 left-0 ${
            theme == "dark" ? "dark-shadow" : "shadow"
          } bg-white z-10`}
        >
          <MainHeader></MainHeader>
        </div>
        <div className="flex flex-row ml-[10%] mr-[0%] text-justify">
          <div className="w-[90%] pt-24">
            <div className="flex items-center justify-around h-24">
              <div className="profile-circle">
                <img src={ProfileImg} alt="Image Not Loaded"></img>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-4 font-bold text-[24px]">About Me</div>
              <div>
                <p>
                  Hi! Sathwik Matcha over here. You can call me just Sathwik. 😊
                </p>
                <br></br>
                <p>
                  I am a Machine Learning Enthusiast with a knack for Software
                  Development, with an extensive knowledge of Frontend
                  Development ranging from React to Angular with over two years
                  of professional background, handling large-scale web projects
                  used by thousands of daily active customers using Angular and
                  React in Agile work settings. Proven ability to build
                  platforms while maintaining high standards for code efficiency
                  and quality.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-4 font-bold text-[24px]">Technical Skills</div>
              <div>
                {/* <SkillCarousel></SkillCarousel> */}
                <CarouselGeneral
                  element={<CarouselTemplate></CarouselTemplate>}
                  data={resumeObj}
                  settings={{
                    showDots: true,
                    showArrows: true,
                  }}
                ></CarouselGeneral>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-4 font-bold text-[24px]">Why MDev.Blog?</div>
              <div>
                <p>
                  The main mission of this blog is to be a proper presentation
                  of knowledge rather than a simple mumble jumble of the latest
                  happenings in a space. The gap between what we want to learn
                  and what is being presented has no correlation in the modern
                  social media space. I hope this website bridges the gap
                  between the two.
                </p>
                <br></br>
                <p>
                  I wish to keep this website focused more on the learning,
                  while I do intend to post the latest happenings, I wish to
                  keep it distinct from the actual learning aspects. My focus
                  areas revolve around Software Development, Machine Learning
                  and Data Science.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4 font-bold text-[24px]">Resume</div>
              <div
                className="p-4 mb-4 border-2 rounded cursor-pointer"
                onClick={openResume}
              >
                View Resume
              </div>
            </div>
            <div>
              <div className="mb-4 font-bold text-[24px]">Contact</div>

              <div>
                <CarouselGeneral
                  element={<CarouselTemplate></CarouselTemplate>}
                  data={contactObj}
                  settings={{
                    showDots: true,
                    showArrows: true,
                  }}
                ></CarouselGeneral>
              </div>
            </div>
            {/* <div>
              <div className="mb-4 font-bold text-[24px]">Contact</div>
              <div className="">Email</div>
              <div>LinkedIn</div>
              <div>Github</div>
              <div>Kaggle</div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
