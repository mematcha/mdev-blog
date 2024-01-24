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
      "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "Completed",
  },
  {
    title: "Weather Forecast Analysis",
    description:
      "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "Completed",
  },
  {
    title: "Parallel Program Implementation",
    description:
      "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "Completed",
  },
  {
    title: "Basá App",
    description:
      "An Mobile App developed in React-Native for iOS and Android focus on providing a learning experience based on users learning abilities and skillsets, by utilizing Machine Learning algorithms",
    url: "https://github.com/mematcha/basa-app",
    status: "In Progress",
  },
  {
    title: "NFL Updates App / Sports Updates App",
    description:
      "An Web Application focused on providing real-time updates on sports with historical stats and match predictions.",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "Need to Begin",
  },
  {
    title: "Neosheets",
    description:
      "An Web Application for data scientists and analysts to create smart tables for accurate analysis and smoother presentation using AI",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "In Progress",
  },
  {
    title: "Diya",
    description:
      "A platform for UX/UI Designers and Developers to interact, integrate and build applications at ease using AI tools with guidelines on coding standards, color and UX theory.  ",
    url: "https://github.com/mematcha/nfl-updates-app",
    status: "Need to Begin",
  },
];

function OtherProjects() {
  const { theme, setNewTheme } = useContext(ThemeContext);
  const deviceContextVal = useContext(DeviceContext);

  useEffect(() => {
    document.title = "My Projects | mDev";
  }, []);

  const [projectsList, setProjectsList] = useState(PROJECTS_LIST);
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="flex flex-col">
      <div
        className="body-center fixed flex justify-center top-0 left-0 shadow z-10"
        style={{ backgroundColor: `${theme == "light" ? "#fff" : "#1e1e1e"}` }}
      >
        <MainHeader></MainHeader>
      </div>
      <div className={`slider-project-status flex flex-row justify-around mb-4 p-2 fixed top-[48px]  w-[100%] z-5 ${theme=="dark"?"bg-darkTheme":"bg-white"}`}>
        <span className="p-2 bg-red-500">Planning</span>
        <span className="p-2 bg-yellow-500">In Progress</span>
        <span className="p-2 bg-green-500">Completed</span>
      </div>
      <div className="relative pt-40 pb-[-10] ml-[10%] mr-[10%] mb-[100px]">
        {projectsList.map((project) => (
          <div
            className={`p-2 mb-2 cursor-pointer transition hover:scale-105 duration-300 ${
              project.status == "In Progress"
                ? "bg-yellow-500"
                : project.status == "Need to Begin"
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
