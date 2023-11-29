import { useEffect, useState } from "react";
import Slider from 'react-slick';

function SkillsCarousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [skills,setSkills]=useState();

  const intializeSkills = ()=>{
    setSkills(["Javascript","Typescript","Angular"]);
  };

  useEffect(()=>{
    intializeSkills();
  },[]);


  return (
    <Slider {...settings}>
      {/* {skills.map((skill, index) => (
        <div key={index}>
          <li></li>
        </div>
      ))} */}
    </Slider>
  );
}
export default SkillsCarousel;
