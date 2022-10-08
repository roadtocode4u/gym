import React from "react";
import "./Home.css";
import "../../index.css";
import NavBar from "../NavBar/NavBar";
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from "./img/carousel-1.jpg";
import Carousel2 from "./img/carousel-2.jpg";
import Carousel3 from "./img/carousel-3.jpg";

function Home() {
  return (
    <>
      <NavBar />

      {/* Carousel Start */}

<Carousel>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                        <a href="" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Get Body In Shape</h2>
                        <a href="" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 class="text-capitalize m-0">Gym & Fitness Center</h3>
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                        <a href="" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* Carousel End */}

    </>
  );
}

export default Home;
