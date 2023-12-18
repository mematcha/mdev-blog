import { useContext } from "react";
import { DeviceContext } from "../DeviceContext";
import MainHeader from "../components/mainHeader";
import Poster1Img from "../assets/4_qsasa144.jpg";

function BlogPage(props) {
  const deviceContextVal = useContext(DeviceContext);

  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow bg-white z-10">
        <MainHeader></MainHeader>
      </div>
      <div
        className={`flex justify-center flex-col body ${
          deviceContextVal === "mobile" ? "mx-[10%]" : "ml-[05%] mr-[25%]"
        }`}
      >
        <div>
          <img src={Poster1Img} alt="Poster Image"></img>
        </div>
        <div className="p-4 flex flex-col">
          <p className="text-[20px] flex items-center mb-4 font-bold">
            Animating Multi-Page Navigations with Browser View Transitions and
            Astro
          </p>
          <span className="text-[14px] text-slate-600 mb-4">
            A beginner-friendly guide that walks you through the use of the
            Browser View Transitions API with Astro for a smoother navigation
            experience.
          </span>
          <span className="text-[14px] text-slate-300 mb-4">
            By Sathwik Matcha
          </span>
          <div className="app-body">
            <section className="mb-4">
              Earlier, achieving a smooth transition while navigating on the web
              was challenging. We had to juggle SPA, JavaScript, and CSS, which
              made compatibility, performance, and accessibility seem
              unattainable. Thankfully, with the new Native Browser API View
              Transitions and the Astro implementation, this process is now
              effortless. Astro takes care of the heavy lifting, reducing the
              CSS and JavaScript overhead and offering true navigation via Multi
              Page Application (MPA).
            </section>
            <section className="mb-4">
              In this guide, we’ll walk through building a basic shop, taking
              advantage of this technique to ensure smooth transitions between
              pages.
            </section>
            <section className="mb-4">
              If you are interested in learning how to build entire websites
              with Astro, we recommend the Astro 3.0 Course by James Q. Quick!
              It’s a hands-on course to teach you how to build websites using
              Astro 3.0, the all-in-one framework for the modern web. Codrops
              readers get an exclusive discount of 10%:
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
