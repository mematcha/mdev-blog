import { DeviceContext } from "../DeviceContext";
import { ThemeContext } from "../ThemeContext";
import MainHeader from "../components/Header/mainHeader";
import { useContext, useEffect } from "react";

function UserPage() {
  const { theme, setNewTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.title = "User Page | mDev";
  }, []);

  const devBlogArticleTitles = [
    "Mastering JavaScript Closures: Unveiling the Mystery",
    "React Hooks in Depth: Rethinking State and Effects",
    "Building Scalable Backends with Node.js and Express",
    "The Complete Guide to Responsive Web Design with CSS Grid",
    "Unlocking Database Performance with MongoDB Optimization Techniques",
    "Demystifying Algorithms and Data Structures for Coding Interviews",
    "Agile Project Management in a Nutshell: Principles and Practices",
    "Unit Testing Best Practices: Writing Effective Tests for Your Code",
    "Exploring the Potential of Serverless Architectures with AWS Lambda",
    "Taming the Beast: Effective Debugging Strategies for Developers",
    "Design Patterns in Modern Web Development: Reusable Solutions for Common Problems",
    "The Rise of AI and Machine Learning: Implications for Developers",
    "Creating Secure Web Applications: Essential Security Practices",
    "Version Control Mastery with Git: Collaboration and Workflow Essentials",
    "JavaScript Fatigue? Exploring Alternative Languages for Web Development",
    "The Future of Front-End Development: WebAssembly and Beyond",
    "Building Cross-Platform Mobile Apps with React Native",
    "Unlocking the Power of GraphQL: Data Fetching for Modern Applications",
    "The Full-Stack Developer's Guide to Deployment and Server Management",
    "JavaScript Testing Frameworks Compared: Jest, Mocha, and More",
  ];

  const devBlogSeries = [
    {
      title: "JavaScript Deep Dive",
      list: [
        "Mastering JavaScript Closures: Unveiling the Mystery",
        "JavaScript's Hidden Gems: Exploring Advanced Features",
        "JavaScript Fatigue? Exploring Alternative Languages for Web Development",
      ],
    },
    {
      title: "React Mastery",
      list: [
        "React Hooks in Depth: Rethinking State and Effects",
        "Building High-Performance React Apps with Server-Side Rendering (SSR)",
        "Next.js vs. Gatsby: Choosing the Right React Framework",
      ],
    },
    {
      title: "Backend Development Essentials",
      list: [
        "Building Scalable Backends with Node.js and Express",
        "Database Fundamentals for Developers: SQL vs. NoSQL",
        "Unlocking Database Performance with MongoDB Optimization Techniques",
      ],
    },
    {
      title: "Front-End Mastery",
      list: [
        "The Complete Guide to Responsive Web Design with CSS Grid",
        "Building Stunning User Interfaces with Tailwind CSS",
        "JavaScript Animation Techniques for Engaging User Experiences",
      ],
    },
    {
      title: "Cracking the Coding Interview",
      list: [
        "Demystifying Algorithms and Data Structures for Coding Interviews",
        "Ace Your Coding Interview: Problem-Solving Strategies and Best Practices",
        "Landing Your Dream Developer Job: Crafting a Standout Resume and Portfolio",
      ],
    },
    {
      title: "Developer Productivity and Best Practices",
      list: [
        "Agile Project Management in a Nutshell: Principles and Practices",
        "Effective Team Collaboration for Developers: Tools and Techniques",
        "Taming the Beast: Effective Debugging Strategies for Developers",
      ],
    },
    {
      title: "Building Secure and Reliable Software",
      list: [
        "Unit Testing Best Practices: Writing Effective Tests for Your Code",
        "Continuous Integration and Delivery (CI/CD): Automating Your Workflow",
        "Building Secure and Reliable Software: Testing and Security Best Practices",
      ],
    },
  ];

  const toggleTheme = (themearg) => {
    const app = document.getElementsByClassName("App")[0];
    setNewTheme(themearg);
    localStorage.setItem("theme", themearg);
    app.setAttribute("theme", themearg);
  };
  console.log(theme);
  return (
    <div className="flex flex-col">
      <div
        className="body-center fixed flex justify-center top-0 left-0 shadow z-10"
        style={{ backgroundColor: `${theme == "light" ? "#fff" : "#1e1e1e"}` }}
      >
        <MainHeader></MainHeader>
      </div>
      <div className="relative top-20 ml-[10%] mr-[10%] mb-[100px]">
        <div className="p-2">
          <div className="font-bold text-[20px] pb-4">Personal Details</div>
          <div className="container flex flex-wrap justify-between">
            <div className="flex flex-col item w-full md:w-1/2">
              <span>First Name</span>
              <input></input>
            </div>
            <div className="flex flex-col item w-full md:w-1/2">
              <span>Last Name</span>
              <input></input>
            </div>
            <div className="flex flex-col item w-full md:w-1/2">
              <span>Username</span>
              <input></input>
            </div>
            <div className="flex flex-col item w-full md:w-1/2">
              <span>Password</span>
              <input></input>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="font-bold text-[20px] pb-4">Blogs</div>
          <div className="flex flex-col overflow-y-scroll h-[400px]">
            {devBlogArticleTitles.map((article, index) => (
              <div
                key={index}
                className="p-4 border-2 rounded flex flex-col justify-between"
              >
                <span className="cursor-pointer">{article}</span>
                <div className="text-slate-400 flex flex-row justify-between mt-4">
                  <button>Publish</button>
                  <button>Delete</button>
                  <button>Edit</button>
                  <button>Open</button>
                  <button>Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2">
          <div className="font-bold text-[20px] pb-4">Series</div>
          <div className="flex flex-col overflow-y-scroll h-48">
            {devBlogSeries.map((article, index) => (
              <div
                key={index}
                className="p-4 border-2 rounded flex flex-row justify-between"
              >
                <span className="cursor-pointer">{article.title}</span>
                <div className="text-slate-400">
                  <button className="mx-2">Delete</button>
                  <button className="mx-2">Open</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2">
          <div className="font-bold text-[20px] pb-4">Display</div>
          <div className="text-slate-400 flex flex-row justify-between my-4">
            <button
              className="mx-2 flex flex-row items-center"
              onClick={() => {
                toggleTheme("light");
              }}
            >
              <div className="icon-sunlight mr-2"></div>
              Light
            </button>
            <button
              className="mx-2 flex flex-row items-center"
              onClick={() => {
                toggleTheme("dark");
              }}
            >
              <div className="icon-dark mr-2"></div>
              Dark
            </button>
            <button
              className="mx-2 flex flex-row items-center"
              onClick={() => {
                toggleTheme("system");
              }}
            >
              <div className="icon-settings mr-2"></div>
              System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
