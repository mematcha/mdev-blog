import MainHeader from "../components/Header/mainHeader";

function SeriesPage() {
  return (
    <>
      <div className="body-center fixed flex justify-center top-0 left-0 shadow z-10">
        <MainHeader></MainHeader>
      </div>
      <div className="pt-20 ml-[10%] mr-[10%] flex flex-col align-center justify-center text-center h-[100vh]">
        <span className="font-bold p-8 text-[24px]">No Series Notes Available Currently 😔</span> 
        <button className="p-4 bg-green-500 w-[50%] mx-[25%]">Create a Series</button>
      </div>
    </>
  );
} 
export default SeriesPage;
