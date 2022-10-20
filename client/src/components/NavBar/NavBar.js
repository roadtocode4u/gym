import React from "react";
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
              <a
                href="/"
                className="nav-item nav-link active text-light"
              >
                Home
              </a>
              <a href="/" className="nav-item nav-link">
                About Us
              </a>
              <a href="/" className="nav-item nav-link">
                Our Features
              </a>
              <a href="/" className="nav-item nav-link">
                Classes
              </a>
            
              <a  href="/signup" className="nav-item nav-link">
                Signup
              </a>

              <a href="/login" className="nav-item nav-link">
                Login
              </a>

              

            </div>
          </div>
        </nav>
      </div>
      {/* NavBar end */}
    </>
  );
}

export default NavBar;
