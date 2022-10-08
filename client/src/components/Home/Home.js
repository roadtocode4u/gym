import React from "react";
import "./Home.css";
import "../../index.css";
import NavBar from "../NavBar/NavBar";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "./img/carousel-1.jpg";
import Carousel2 from "./img/carousel-2.jpg";
import Carousel3 from "./img/carousel-3.jpg";

function Home() {
  return (
    <>
      <NavBar />

      {/* Carousel Start */}
<div className="carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Carousel1} alt="First slide" />
          <Carousel.Caption>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h3 className="text-capitalize m-0">Gym & Fitness Center</h3>
              <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                Best Gym In Town
              </h2>
              <a
                href=""
                className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5"
              >
                Join Us Now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={Carousel2} alt="Second slide" />
          <Carousel.Caption>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h3 className="text-capitalize m-0">Gym & Fitness Center</h3>
              <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                Get Body In Shape
              </h2>
              <a
                href=""
                className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5"
              >
                Join Us Now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel3} alt="Third slide" />
          <Carousel.Caption>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h3 className="text-capitalize m-0">Gym & Fitness Center</h3>
              <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
              Fuel your fitness journey
              </h2>
              <a
                href=""
                className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5"
              >
                Join Us Now
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      {/* Carousel End */}

{/* Gym Class cards start */}
{/* Flaticon Font */}
   
      <div class="container gym-class mb-5">
        <div class="row px-3">
            <div class="col-md-6 p-0">
                <div class="gym-class-box-left  d-flex flex-column align-items-end justify-content-center  text-right text-white py-5 px-5">
                    <i class="flaticon-six-pack"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                    Muscle building has many benefits, including increased strength, improved joint function, and increased calorie burning. Muscle building can also help to improve balance and coordination. A well-rounded muscle-building program should include exercises for all major muscle groups, including the chest, back, shoulders, arms, legs, and core.
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="gym-class-box-right d-flex flex-column align-items-start justify-content-center text-left text-white py-5 px-5">
                    <i class="flaticon-bodybuilding"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Weight Loss</h3>
                    <p>
                      Losing weight and keeping it off can seem like an impossible task, but with the right approach it is definitely achievable. The key to success is finding a weight loss plan that works for you and sticking to it. There is no one-size-fits-all solution, so it is important to find a plan that fits your lifestyle and food preferences.
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>

{/* Gym Class cards end */}

{/* Why choose us starts */}


    </>
  );
}

export default Home;
