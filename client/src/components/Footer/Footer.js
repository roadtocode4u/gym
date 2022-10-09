import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
<div className="top_header">
<section>
<span><i className="fa fa-map-marker"></i></span>
<span>7th Avenue, Vadgaon, Junnar, Pune, 412412</span>
</section>
<section>
<span><i className="fa fa-phone"></i></span>
<span>(+91) 9860847191</span>
</section>
<section>
<span><i className="fa fa-envelope"></i></span>
<span>info@roadtocode.com</span>
</section>
</div>
<span className="border-shape"></span>
<div className="bottom_content">
<section>
<a href="#"><i className="fa fa-facebook"></i></a>
<a href="#"><i className="fa fa-instagram"></i></a>
<a href="#"><i className="fa fa-twitter"></i></a>
<a href="#"><i className="fa fa-telegram"></i></a>
</section>
<section>
<a href="#">Home</a>
<a href="#">About us</a>
<a href="#">Order</a>
<a href="#">Retail</a>
<a href="#">Member</a>
<a href="#">Contact Us</a>
</section>
</div>
<div className="copyright">
Copyright © 2021 R Gym - All rights reserved 
</div>
</footer>
  )
}

export default Footer