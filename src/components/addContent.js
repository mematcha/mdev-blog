import AddIcon from "../assets/addIcon.svg";


function AddContent(){

    return(
        <>
            <div className="w-full h-24 my-4 p-2 border-slate-500 bg-slate-100 flex flex-col items-center justify-center">
                <img src={AddIcon} alt="Add Content"></img>
            </div>
        </>
    );

}
export default AddContent;