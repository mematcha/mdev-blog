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

function CarouselGeneral({ element, data, settings }) {
  
  const [isElementValid, setIsElementValid] = useState(false);
  const [isShowDots, setShowDots] = useState(false);
  const [activeIndex,setActiveIndex]=useState(0);

  //useEffect for Carousel Workup
  useEffect(() => {
    if(settings){
      if(settings.showDots == true){
        setShowDots(true);
      }
      else{
        setShowDots(false);
      }
      if(settings.selectedIndex && settings.selectedIndex<data.length){
        setActiveIndex(settings.selectedIndex);
      }
      else{
        setActiveIndex(0);
      }
    }
    if (React.isValidElement(element)) {
      if(data && data.length>0){
        setIsElementValid(true);
      }
    } else {
      setIsElementValid(false);
    }
  }, []);

  const moveNext=()=>{
    if(activeIndex+1<data.length){
      setActiveIndex(activeIndex+1);
    }
  }

  const movePrev=()=>{
    if(activeIndex-1>=0){
      setActiveIndex(activeIndex-1);
    }
  }

  const initiateElement = (data) => {
    if (isElementValid) {
      const updatedElement = React.cloneElement(element, { data: data });
  
      return updatedElement;
    } else {
      return <></>;
    }
  };

  return (
    <div className="box">
      <div className="carousel-root">
        <div className="carousel-data-slider">
          {data.map((dataPoint, index) => (
            index==activeIndex &&  (<div key={index} className={`carousel-slide ${index == activeIndex ? "active" : "hidden"}`}>
              {settings.showArrows && (
                <>
                  <div className="carousel-arrow left" onClick={movePrev}></div>
                </>
              )}
              <div className="carousel-slide-container">
                {initiateElement(data[activeIndex])}
              </div>
              {settings.showArrows && (
                <>
                  <div className="carousel-arrow right" onClick={moveNext}></div>
                </>
              )}
            </div>)
          ))}
        </div>

        {isShowDots && (
          <div className="carousel-dots">
            <ul>
              {data.map((dataPoint, index) => (
                <li key={index} className={`${index==activeIndex?'active-dot':'inactive-dot'}`}>&#8226;</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselGeneral;
