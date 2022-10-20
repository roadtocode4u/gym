import Footer from "../Footer/Footer"; 
import React from "react";

function Contact() {
  return (
    <>
      <div className="container-fluid page-header mb-5 bg-success">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5">
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-dark text-uppercase font-weight-bold">
            Contact Us
          </h4>
          <div className="d-inline-flex">
            <p className="m-0 text-dark">
              <a className="text-dark" href="">
                Home
              </a>
            </p>
            <p className="m-0 text-dark px-2">/</p>
            <p className="m-0 text-dark">Contact Us</p>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <div class="d-flex flex-column text-center mb-5">
          <h4 class="text-primary font-weight-bold">Get In Touch</h4>
          <h4 class="display-4 font-weight-bold">Email Us For Any Query</h4>
        </div>
        <div class="row px-3 pb-2">
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-map mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Address</h4>
            <p>Alephata, Pune, 412412</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-phone mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Phone</h4>
            <p>+012 345 6789</p>
          </div>
          <div class="col-sm-4 text-center mb-3">
            <i class="fa fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 class="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="container-fluid">
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lovely professional university&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="600"
              height="450"
              frameBorder="5"
              style={{ border: "10px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="container-fluid">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />

              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />

              <label for="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter your subject"
              />

              <label for="message">Message</label>
              <textarea
                className="form-control "
                id="message"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary mt-3 text-center mx-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
