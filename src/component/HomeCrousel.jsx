import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const HomeCrousel = () => {
  return (
 
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img className="d-block w-100" src="https://img.freepik.com/free-psd/burger-banner-template-design_23-2148633963.jpg?w=1060" alt="Third slide"  style={{height:"200px"}}  />
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2017/09/23/12/40/catering-2778755_1280.jpg" alt="First slide" style={{height:"200px"}} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2017/07/07/22/19/someone-2482972__480.jpg" alt="Third slide" style={{height:"200px"}}  />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2016/06/24/11/28/glasses-1477078__340.jpg" alt="Second slide"  style={{height:"200px"}} />
    </div>
   
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>
  )
}

export default HomeCrousel