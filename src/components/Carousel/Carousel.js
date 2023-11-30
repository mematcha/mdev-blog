import { useState } from "react";
import "./Carousel.scss";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselGeneral({
  dataFeed,
  feedType,
  loopAnimation,
  setInfiniteLoop,
  setResponsive,
  setSwipe,
  setTouchEmulate,
  showArrows,
  showDots,
  showSwipe,
  stopOnHover
}) {
  const [data, setData] = useState(["1", "2", "3"]);

  return (
    <div className="box">
      <div className="carousel-root">
        <div className="carousel-data-slider">
          {data.map((dataPoint, index) => (
            <li className="carousel-slide">{dataPoint}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselGeneral;
