import "./SkillCarousel.scss";

function SkillCarousel ()  {
  // Define carousel settings
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to display at once
    slidesToScroll: 1, // Number of slides to scroll per click
  };

  const buttons=document.querySelectorAll('[data-carousel-button]');

  buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const offset = button.getAttribute("data-carousel-button") === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector('[data-slides ]');  

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex= [...slides.children ].indexOf(activeSlide) + offset;
        if(newIndex<0){
            newIndex=slides.children.length-1;
        }
        if(newIndex>=slides.children.length){
            newIndex=0;
        }
        slides.children[newIndex].dataset.active =true;
        delete activeSlide.dataset.active;
    });
  })

  return (
    <div>
      <div className="carousel" data-carousel>
        <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
        <ul data-slides>
          <li className="slide">
            <img src="https://images.unsplash.com/photo-1682685797898-6d7587974771?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image #1"></img>
          </li>
          <li className="slide">
            <img src="https://plus.unsplash.com/premium_photo-1701187887029-907bed510db6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image #2"></img>
          </li>
          <li className="slide">
            <img src="https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image #3"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillCarousel;
