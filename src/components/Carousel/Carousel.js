import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.scss";
import { Carousel } from "react-responsive-carousel";

function CarouselGeneral() {
  return (
    <Carousel showArrows={true} showThumbs={false} showStatus={false} className="carousel">
      <div>
        <img src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1701220293175-5c17f172b77a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="assets/4.jpeg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="assets/5.jpeg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="assets/6.jpeg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
}

export default CarouselGeneral;
