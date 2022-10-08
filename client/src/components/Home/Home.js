import React from 'react'
import "./Home.css"
import "../../index.css"
import Logo from '../../assets/logo.png'

function Home() {
  return (
<>

{/* NavBar start */}
<div class="container-fluid p-0 nav-bar">
        <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <div className="nav-left">
            <a href="" class="navbar-brand">
            <img src={Logo} alt="" style={{width: "80px"}} />
            </a>
            </div>
            <div class="collapse navbar-collapse justify-content-between float-right" id="navbarCollapse">
                <div class="navbar-nav p-4 nav-right float-right">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
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