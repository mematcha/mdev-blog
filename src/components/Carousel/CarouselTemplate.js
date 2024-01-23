import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
function CarouselTemplate({data}){
    const {theme} = useContext(ThemeContext);

    return (
        <div className=" rounded-[10px]">
            {/* header element */}
            <div className={`p-2 rounded-t-[10px] ${theme=="dark"?"bg-gray-600":"bg-slate-200"}`}>
                {data.title}
            </div>
            <div>
                <ul className="flex flex-row justify-around p-2">
                    {data.courses.map((point,index)=>(
                        <li>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CarouselTemplate;