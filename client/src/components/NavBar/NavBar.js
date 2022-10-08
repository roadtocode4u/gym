import React from 'react'
import "./NavBar.css";
import Logo from "../../assets/logo.png";

function NavBar() {
  return (
   <>
    
      {/* NavBar start */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg navbar-expand-sm py-3 justify-content-between">
          <div className="nav-left">
            <img src={Logo} alt="" style={{ width: "80px" }} />
          </div>
          <div className="justify-content-between nav-right">
            <div className="navbar-nav p-3 float-right">
              <a href="index.html" className="nav-item nav-link active text-light">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About Us
              </a>
              <a href="feature.html" className="nav-item nav-link">
                Our Features
              </a>
              <a href="class.html" className="nav-item nav-link">
                Classes
              </a>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
              <a href="" className="icon">
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* NavBar end */}

   </>
  )
}

export default NavBar