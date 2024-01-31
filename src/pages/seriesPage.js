import { useContext, useEffect, useState } from "react";
import MainHeader from "../components/Header/mainHeader";
import API from "../apis/apiCatalog";
import CreateSeriesModal from "../components/Series/createSeriesModal";
import SeriesBlogsPage from "./seriesBlogsPage";
import { ThemeContext } from "../ThemeContext";
import { useNavigate } from 'react-router-dom';

function SeriesPage() {
  const [isCreateSeriesModalOpen, setisCreateSeriesModalOpen] = useState(false);
  const [seriesArray, setSeriesArray] = useState([]);
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllSeries();
  }, []);
  const openSeriesPage = (path_id)=>{
    navigate('/series/'+path_id)
  };

  const getAllSeries = async () => {
    API.getAllSeries().then((result)=>{
      setSeriesArray(result.data);
    });
  };

  const openSeriesPanel = () => {
    setisCreateSeriesModalOpen(true);
  };

  const closeSeriesPanel = () => {
    setisCreateSeriesModalOpen(false);
  };

  const AddBlogToSeries=()=>{
    console.log("Add Blog To Series");
  };

  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow z-10">
        <MainHeader></MainHeader>
      </div>
      {
        seriesArray.length==0
        && (
          <div className="pt-20 ml-[10%] mr-[10%] flex flex-col align-center justify-center text-center h-[100vh]">
        <span className="font-bold p-8 text-[24px]">
          No Series Notes Available Currently 😔
        </span>
        <button
          className="p-4 bg-green-500 w-[50%] mx-[25%]"
          onClick={openSeriesPanel}
        >
          Create a Series
        </button>
      </div>
        )
      }
      <div className="grid-container ml-[10%] mr-[10%] pt-20">
      {
          seriesArray.length>0 && (
          <div className="transition flex items-center justify-around">
                {/* <div alt="Image Not Loaded" className="rounded-4 border border-blue border-4" style={{
                }}></div> */}
                <span className="p-4 bg-green-500 hover:scale-105 duration-300" onClick={openSeriesPanel}>Create A New Series</span>
          </div>
          )
        }
        {
          seriesArray.map((series, index) => 
              <div className="grid-item" >
                <img src={series.poster} alt="Image Not Loaded" className="rounded-4 border border-blue border-4 transition hover:scale-105 duration-300" style={{
                  width:"300px",
                }} onClick={(e)=>{openSeriesPage(series.path_id);}}></img>
                <span className="mt-2 w-[100%] block text-left" onClick={(e)=>{openSeriesPage(series.path_id);}}>{series.title}</span>
                <span className={`mt-2 w-[100%] block text-left  py-2 px-2 z-10 ${theme=="dark"?"bg-gray-800":"bg-slate-100"}`} onClick={(e)=>{AddBlogToSeries(e);}}>{"Add Blog to Series"}</span>
              </div>
          )
        }
        
      </div>
      <div>
        
      </div>
      <div>
        <CreateSeriesModal
          isOpen={isCreateSeriesModalOpen}
          onClose={closeSeriesPanel}
        ></CreateSeriesModal>
      </div>
    </>
  );
}
export default SeriesPage;
