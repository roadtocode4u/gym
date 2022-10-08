import React from 'react'
import "./Home.css"
import "../../index.css"
import Logo from '../../assets/logo.png'

function Home() {
  return (
<>

{/* NavBar start */}
<div class="container-fluid p-0 nav-bar">
        <nav class="navbar navbar-expand-lg py-3 justify-content-between">
          <div className="nav-left">
            <a href="">
            <img src={Logo} alt="" style={{width: "80px"}} />
            </a>
            </div>
            <div class="justify-content-between">
                <div class="navbar-nav p-3 float-right">
                    <a href="index.html" class="nav-item nav-link active text-light">Home</a>
                    <a href="about.html" class="nav-item nav-link">About Us</a>
                    <a href="feature.html" class="nav-item nav-link">Our Features</a>
                    <a href="class.html" class="nav-item nav-link">Classes</a>
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
            </div>
            
        </nav>
    </div>
    {/* NavBar end */}
</>

  )
}

export default Home