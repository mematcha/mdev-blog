import React from "react";
import { useEffect, useState } from "react";
import "./Carousel.scss";

//Type and features for settings
// settings {
//   showDots,
//   showSwipe,
//   stopOnHover,
//   useKeyboardArrows,
//   feedType,
//   loopAnimation,
//   setInfiniteLoop,
//   setResponsive,
//   setSwipe,
//   setTouchEmulate,
//   showArrows
// }

function CarouselGeneral({ element, settings }) {
  const [data, setData] = useState(["1", "2", "3"]);
  const [isElementValid, setIsElementValid] = useState(false);
  const [isShowDots, setShowDots] = useState(false);

  useEffect(() => {
    if (settings && settings.showDots == true) {
      setShowDots(true);
    } else {
      setShowDots(false);
    }

    if (React.isValidElement(element)) {
      setIsElementValid(true);
    } else {
      setIsElementValid(false);
    }
  }, []);

  const initiateElement = () => {
    if (isElementValid) {
      return element;
    } else {
      return <></>;
    }
  };

  return (
    <div className="box">
      <div className="carousel-root">
        <div className="carousel-data-slider">
          {data.map((dataPoint, index) => (
            <div key={index} className={`carousel-slide ${index == 0 ? "active" : "hidden"}`}>
              {settings.showArrows && (
                <>
                  <div className="carousel-arrow left"></div>
                </>
              )}
              <div className="carousel-slide-container">
                {initiateElement()}
              </div>
              {settings.showArrows && (
                <>
                  <div className="carousel-arrow right"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {isShowDots && (
          <div className="carousel-dots">
            <ul>
              {data.map((dataPoint, index) => (
                <li key={index} className={`${index==0?'active-dot':'inactive-dot'}`}>&#8226;</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselGeneral;
