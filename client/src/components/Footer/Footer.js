import React from 'react'
import './Footer.css'

function Footer() {
  return (
  <footer>
    <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-light">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-prim mb-4">Get In Touch</h4>
                <p><i className="fa fa-map-marker"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone "></i>+012 345 67890</p>
                <p><i className="fa fa-envelope "></i>info@example.com</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light rounded-circle text-center  px-0" style={{width: "40px", height: "40px"}} href="#"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center  px-0" style={{width: "40px", height: "40px"}} href="#"><i className="fa fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center  px-0" style={{width: "40px", height: "40px"}} href="#"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center  px-0" style={{width: "40px", height: "40px"}} href="#"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-prim mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className=" mb-2" href="#"><i className="fa fa-angle-right "></i>Home</a>
                    <a className="mb-2" href="#"><i className="fa fa-angle-right "></i>About Us</a>
                    <a className=" mb-2" href="#"><i className="fa fa-angle-right "></i>Our Features</a>
                    <a className="mb-2" href="#"><i className="fa fa-angle-right "></i>Classes</a>
                    <a className="" href="#"><i className="fa fa-angle-right "></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-prim mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                <a className=" mb-2" href="#"><i className="fa fa-angle-right "></i>Home</a>
                    <a className="mb-2" href="#"><i className="fa fa-angle-right "></i>About Us</a>
                    <a className=" mb-2" href="#"><i className="fa fa-angle-right "></i>Our Features</a>
                    <a className="mb-2" href="#"><i className="fa fa-angle-right "></i>Classes</a>
                    <a className="" href="#"><i className="fa fa-angle-right "></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-prim mb-4">Opening Hours</h4>
                <h5 className="">Monday - Friday</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 className="">Saturday - Sunday</h5>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div className="container border-top border-dark pt-5">
            <p className="m-0 text-center">
                &copy; <a className="text-light font-weight-bold" href="#">R Gym</a>. All Rights Reserved. Designed with {'\u00A0'}<i className='fa fa-heart' id='red-heart'></i> by Team
                <a className="text-light rtc-link" href="https://www.roadtocode.org"> Road to Code</a>
            </p>
        </div>
    </div>
  </footer>
  )
}

export default Footer