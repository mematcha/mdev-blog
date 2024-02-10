import MainHeader from "../components/Header/mainHeader";
import resume_pdf from "../assets/pdf/Resume_V4.1.pdf";
import SkillCarousel from "../components/Carousel/SkillCarousel";
import CarouselGeneral from "../components/Carousel/Carousel";
import CarouselTemplate from "../components/Carousel/CarouselTemplate";
import SideCard from "../components/SideCard/SideCard";
import { useContext, useEffect } from "react";
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
      title: "Developer Profiles",
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
        { text: "C", url: "#" },
      ],
    },
    {
      title: "Web Technologies",
      courses: [
        { text: "Angular", url: "#" },
        { text: "React", url: "#" },
        { text: "Node.js", url: "#" },
        { text: "Express.js", url: "#" },
        { text: "Nginx", url: "#" },
        { text: "Responsive Design", url: "#" },
        { text: "Progressive Web Apps (PWA)", url: "#" },
      ],
    },
    {
      title: "Databases",
      courses: [
        { text: "MongoDB", url: "#" },
        { text: "MySQL Server", url: "#" },
        { text: "Microsoft SQL Server", url: "#" },
      ],
    },
    {
      title: "Web Frameworks / Libraries",
      courses: [
        { text: "Tailwind CSS", url: "#" },
        { text: "Chart JS", url: "#" },
        { text: "React-ag-grid", url: "#" },
        { text: "Angular Material", url: "#" },
        { text: "Swing", url: "#" },
        { text: ".NET MVC", url: "#" },
        { text: "Lucene", url: "#" },
      ],
    },
    {
      title: "Machine Learning Frameworks / Libraries",
      courses: [
        { text: "Tensorflow", url: "#" },
        { text: "Pytorch", url: "#" },
        { text: "Keras", url: "#" },
        { text: "Numpy", url: "#" },
        { text: "Pandas", url: "#" },
        { text: "scikit-learn", url: "#" }
      ],
    },
    {
      title: "Cloud Services",
      courses: [
        { text: "AWS - S3", url: "#" },
        { text: "AWS - EC2", url: "#" },
        { text: "AWS - Route 53", url: "#" },
      ],
    },
    {
      title: "Version Control and Other Technologies",
      courses: [
        { text: "Azure DevOps", url: "#" },
        { text: "Git", url: "#" },
        { text: "GitHub", url: "#" },
        { text: "Linux", url: "#" },
        { text: "Slurm", url: "#" },
      ],
    },
  ];

  useEffect(()=>{
    document.title = "Sathwik Matcha | About Me";
  },[]);

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
            <div className="flex items-center justify-around h-36">
              <div className="profile-circle mb-[20px]">
                <img src={ProfileImg} alt="Image Not Loaded"></img>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-4 font-bold text-[24px]">About Me</div>
              <div>
                <p>
                  Hi! Sathwik Matcha over here. You can just call me just
                  Sathwik. 😊
                </p>
                <br></br>
                <p>
                  As a seasoned professional in Frontend Development and
                  Software Engineering with over two years of experience, I
                  specialize in crafting cutting-edge web applications using
                  frameworks like React and Angular. I excel in managing
                  large-scale projects in Agile environments, ensuring high
                  standards of code efficiency and quality. Additionally, I've
                  pursued coursework in Data Science, Parallel Computing, and
                  Deep Learning at Northeastern, enabling me to tackle complex
                  data analysis and implement advanced AI solutions. My
                  expertise lies at the intersection of frontend development,
                  software engineering, and data science, allowing me to drive
                  innovation and create impactful solutions in today's rapidly
                  evolving technological landscape.
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
              <div className="mb-4 font-bold text-[24px]">Why this blog?</div>
              <div>
                <p>
                  The main mission of this blog is to be a proper presentation
                  of knowledge rather than a simple mumble jumble of the latest
                  happenings in today's world of software development and
                  machine learning. I believe an organized notes, which can be
                  understood by others (taking inspiration from the Feynman
                  Principle) would help me understand these concepts more
                  clearly than ever before. I hope this attempt not only helps
                  me but also others in this arduous, but enthralling journey
                  into development.
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
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
