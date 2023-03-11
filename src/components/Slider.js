import image1 from "./images/image-1.jpg"
import image2 from "./images/image-2.jpg"
import image3 from "./images/image-3.jpg"

import "./Slider.css"

function Slider() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 h-100" alt="image1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 h-100" alt="image2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 h-100" alt="image3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider;