import { DeviceContext } from "../DeviceContext";
import { ThemeContext } from "../ThemeContext";
import MainHeader from "../components/Header/mainHeader";
import { useContext, useEffect, useState } from "react";

const PROJECTS_LIST=[
    {
        "title": "Personal Blog",
        "description": "A Blog focused on Software Development and Deep Learning, with a focus on presenting content in an organized manner",
        "url": "https://github.com/mematcha/mdev-blog",
        "status": "In Progress"
    },
    {
        "title": "Basá App",
        "description": "An Mobile App developed in React-Native for iOS and Android focus on providing a learning experience based on users learning abilities and skillsets, by utilizing Machine Learning algorithms",
        "url": "https://github.com/mematcha/basa-app",
        "status": "In Progress"
    }
]

function OtherProjects() {
  const { theme, setNewTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    document.title = "Other Projects | mDev";
  }, []);

  const [projectsList,setProjectsList] = useState(PROJECTS_LIST);

  return (
    <div className="flex flex-col">
      <div
        className="body-center fixed flex justify-center top-0 left-0 shadow z-10"
        style={{ backgroundColor: `${theme == "light" ? "#fff" : "#1e1e1e"}` }}
      >
        <MainHeader></MainHeader>
      </div>
      <div className="relative top-20 ml-[10%] mr-[10%] mb-[100px]">
        {projectsList.map((project)=>(
            <div className={`p-2 mb-2 ${project.status=="In Progress"?"bg-yellow-200":"bg-slate-100"}`}>
                <span>{project.title}</span>
                <p>{project.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
