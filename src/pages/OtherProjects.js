import { DeviceContext } from "../DeviceContext";
import { ThemeContext } from "../ThemeContext";
import MainHeader from "../components/Header/mainHeader";
import { useContext, useEffect, useState } from "react";

const PROJECTS_LIST = [
  {
    title: "Personal Blog",
    description:
      "A Blog focused on Software Development and Deep Learning, with a focus on presenting content in an organized manner",
    url: "https://github.com/mematcha/mdev-blog",
    status: "Completed",
  },
  {
    title: "Amazon Reviews Dataset Analysis",
    description:
      "A Scientific Analysis of Data Containing thousands of mixed reviews of different products in the 'Beauty' category on the Amazon.com website, implemented for classification using Exploratory Data Analysis",
    url: "https://github.com/mematcha/amazon-reviews-dataset-analysis",
    status: "Completed",
  },
  // {
  //   title: "Weather Forecast Analysis",
  //   description:
  //     "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
  //   url: "https://github.com/mematcha/nfl-updates-app",
  //   status: "Completed",
  // },
  // {
  //   title: "Parallel Program Implementation",
  //   description:
  //     "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
  //   url: "https://github.com/mematcha/nfl-updates-app",
  //   status: "In Progress",
  // },
  {
    title: "Machine Learning Model for Task based language learning",
    description:
      "A Generative Text and Prompt Model for task based language learning based on users abilities and interests.",
    url: "https://github.com/mematcha/basa-app",
    status: "In Progress",
  },
  {
    title: "NFL Updates App / Sports Updates App",
    description:
      "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "In Progress",
  },
  {
    title: "Neosheets",
    description:
      "An Web Application for data scientists and analysts to create smart tables for accurate analysis and smoother presentation using AI",
    url: "#",
    status: "Planning",
  },
  {
    title: "Diya",
    description:
      "A platform for UX/UI Designers and Developers to interact, integrate and build applications at ease using AI tools with guidelines on coding standards, color and UX theory.  ",
    url: "#",
    status: "Planning",
  },
];

function OtherProjects() {
  const { theme, setNewTheme } = useContext(ThemeContext);
  const { deviceType, role } = useContext(DeviceContext);
  const [activeState, setActiveState]=useState("");
  useEffect(() => {
    document.title = "Sathwik Matcha | Projects";
  }, []);

  const [projectsList, setProjectsList] = useState(PROJECTS_LIST);
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const activate = (state)=>{
    setActiveState(state);
    const newProjectsList = PROJECTS_LIST.filter((project)=>(project.status==state));
    setProjectsList(newProjectsList);
  }

  return (
    <div className="flex flex-col">
      <div
        className={`body-center fixed flex justify-center top-0 left-0 ${theme=="dark"?"dark-shadow":"shadow"} bg-white z-10`}
        style={{ backgroundColor: `${theme == "light" ? "#fff" : "#1e1e1e"}` }}
      >
        <MainHeader></MainHeader>
      </div>
      <div className={`slider-project-status flex flex-row justify-around mb-4 p-2 fixed top-[48px]  w-[100%] z-5 ${theme=="dark"?"bg-darkTheme dark-shadow":"bg-white shadow"}`}>
        <span className={`p-2 bg-red-500 ${activeState=="Planning"?"underline":""}`} onClick={(e)=>{activate("Planning")}}>Planning</span>
        <span className={`p-2 bg-yellow-500 ${activeState=="In Progress"?"underline":""}`} onClick={(e)=>{activate("In Progress")}}>In Progress</span>
        <span className={`p-2 bg-green-500 ${activeState=="Completed"?"underline":""}`} onClick={(e)=>{activate("Completed")}}>Completed</span>
      </div>
      <div className="relative pt-40 pb-[-10] ml-[10%] mr-[10%] mb-[100px]">
        {projectsList.map((project) => (
          <div
            className={`p-2 mb-2 cursor-pointer transition hover:scale-105 duration-300 ${
              project.status == "In Progress"
                ? "bg-yellow-500"
                : project.status == "Planning"
                ? "bg-red-500"
                : project.status == "Completed"
                ? "bg-green-500"
                : "bg-slate-300"
            }`}
            onClick={(event) => {
              handleClick(project.url);
            }}
          >
            <span className="font-bold">{project.title}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
