import { useContext, useState } from "react";
import MainHeader from "../components/Header/mainHeader";
import { ThemeContext } from "../ThemeContext";
import BlogSeriesModal from "../components/Series/blogSeriesModal";

function SeriesBlogsPage() {

    const {theme} = useContext(ThemeContext);
    const [isModalOpen,setModalOpen ] = useState(false);

    const toggleSeriesPanel = (state)=>{
        if(state=="open"){
            setModalOpen(true);
        }
        else{
            setModalOpen(false);
        }
    };

    const sampleBlogResponse = {
      path_id:
        "the-it-job-market-is-tough-right-now-what-are-your-best-tips-to-create-a-developer-portfolio-tj6i",
      title:
        "The IT job market is tough right now. What are your best tips to create a developer portfolio ?",
      subText:
        "I was recently tasked with abstracting a database into an API. The database had a lot of confusing data formatting functions which should also be abstracted in my API. Since it was a generic market system, the documentation for the database was available through a humongous Excel file explaining how each field should receive data.",
    };
    const sampleBlogArray = [
        sampleBlogResponse,sampleBlogResponse,sampleBlogResponse,
        sampleBlogResponse,sampleBlogResponse,sampleBlogResponse,
        sampleBlogResponse,sampleBlogResponse,sampleBlogResponse,
        sampleBlogResponse,sampleBlogResponse,sampleBlogResponse,
        sampleBlogResponse,sampleBlogResponse,sampleBlogResponse
    ];

  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow z-10">
        <MainHeader></MainHeader>
      </div>
      <div className="pt-12 ml-[10%] mr-[10%] pb-24 flex flex-col">
        <div className={`text-[26px] fixed w-[80%] p-2 z-5 text-center ${theme=="dark"?"bg-darkTheme":"bg-white"}`}>Software Engineering</div>
        <div className={`fixed w-[80%] p-2 z-5 mt-12 text-center ${theme=="dark"?"bg-darkTheme":"bg-white"}`} onClick={(e)=>{toggleSeriesPanel("open")}}>Add Blogs</div>
        <div className="flex flex-col relative top-20">
            {
                sampleBlogArray.map((sampleBlog,index)=>(
                    <div className="p-4 border-4 rounded-4 mb-4" key={"link"+index}>
                        {sampleBlog.title}
                    </div>
                ))
            }
        </div>
      </div>
      <div>
        {
            isModalOpen && (<BlogSeriesModal
                isOpen={isModalOpen} 
                onClose={(e)=>{toggleSeriesPanel("close")}}
            ></BlogSeriesModal>)
        }
      </div>
    </>
  );
}
export default SeriesBlogsPage;
