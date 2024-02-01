import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
function CarouselTemplate({ data }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className=" rounded-[10px]">
      {/* header element */}
      <div
        className={`p-2 rounded-t-[10px] ${
          theme == "dark" ? "bg-gray-600" : "bg-slate-200"
        }`}
      >
        {data.title}
      </div>
      <div>
        <div className="grid-container">
          {data.courses.map((point, index) => (
            <div className="grid-item">
              <a href={point.url} target="_blank">{point.text}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselTemplate;
