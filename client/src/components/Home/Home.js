import React from "react";
import "./Home.css";
import "../../index.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "./img/carousel-1.jpg";
import Carousel2 from "./img/carousel-2.jpg";
import Carousel3 from "./img/carousel-3.jpg";
import Feature1 from "./img/feature-1.jpg";
import Feature2 from "./img/feature-2.jpg";
import Feature3 from "./img/feature-3.jpg";
import Feature4 from "./img/feature-4.jpg"; 


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
   
      <div className="container gym-class mb-5">
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-class-box-left  d-flex flex-column align-items-end justify-content-center  text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                    Muscle building has many benefits, including increased strength, improved joint function, and increased calorie burning. Muscle building can also help to improve balance and coordination. A well-rounded muscle-building program should include exercises for all major muscle groups, including the chest, back, shoulders, arms, legs, and core.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-class-box-right d-flex flex-column align-items-start justify-content-center text-left text-white py-5 px-5">
                    <i className="flaticon-bodybuilding"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Weight Loss</h3>
                    <p>
                      Losing weight and keeping it off can seem like an impossible task, but with the right approach it is definitely achievable. The key to success is finding a weight loss plan that works for you and sticking to it. There is no one-size-fits-all solution, so it is important to find a plan that fits your lifestyle and food preferences.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>

{/* Gym Class cards end */}

{/* Why choose us starts */}
<div className="container feature pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="">Why Choose Us?</h4>
            <h5 className="display-3 font-weight-bold">Benifits of Joining Our GYM</h5>
        </div>
        <div className="row">
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={Feature1} alt="Image"/>
                
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Videos Instruction</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={Feature2} alt="Image"/>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Training Calendar</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={Feature3} alt="Image"/>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={Feature4} alt="Image"/>
                       
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Community Support</h4>
                        <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* Why choose us ends */}

{/* BMI Calculator Starts */}


<div className="position-relative bmi my-5">
            <div className="row px-3 align-items-center">
                <div className="col-md-6">
                    <div className="pr-md-3 d-none d-md-block">
                        <h4 className="text-light">Body Mass Index </h4>
                        <h4 className="display-5 text-white font-weight-bold mb-4">Whate is BMI?</h4>
                        <h5 className="m-0 text-white">BMI is a measure of body fat based on height and weight that applies to both adult men and women.</h5>
                    </div>
                </div>
                <div className="col-md-6 py-5 bmi-calculator">
                    <div className="py-5 px-3">
                        <h1 className="mb-4 text-white">Calculate your BMI</h1>
                        <form>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Weight (KG)"/>
                                </div>
                                <div className="col form-group">
                                    <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Height (CM)"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control form-control-lg bg-dark text-white" placeholder="Age"/>
                                </div>
                                <div className="col form-group">
                                    <select className="form-control form-control-lg custom-select bg-dark text-muted">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input type="button" className="btn btn-lg btn-block btn-dark border-light w-100"
                                        value="Calculate Now"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
{/* BMI Calculator Ends */}

<Footer/>


    </>
  );
}

export default Home;
