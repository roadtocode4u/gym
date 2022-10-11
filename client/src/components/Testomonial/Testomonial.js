import React from 'react'

function Testomonial() {
  return (
    <div className="container-fluid position-relative testimonial my-5">
    <div className="container">
        <div className="row px-3 align-items-center">
            <div className="col-md-6 bg-secondary">
                <div className="d-flex align-items-center px-3" style={{ height : "450px"}}>
                    <div id="carouselId" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselId" data-slide-to="1"></li>
                            <li data-target="#carouselId" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="d-flex align-items-center mb-4 text-white">
                                    <img className="rounded-circle bg-dark p-2" src="img/testimonial-1.jpg" alt="Image"/>
                                    <div className="pl-4">
                                        <h4 className="text-primary">Client Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex align-items-center mb-4 text-white">
                                    <img  className="rounded-circle bg-dark p-2" src="img/testimonial-2.jpg" alt="Image"/>
                                    <div className="pl-4">
                                        <h4 className="text-primary">Client Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex align-items-center mb-4 text-white">
                                    <img className="rounded-circle bg-dark p-2 test-car-img" src="img/testimonial-3.jpg" alt="Image"/>
                                    <div className="pl-4">
                                        <h4 className="text-primary">Client Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                    Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="pl-md-3 d-none d-md-block">
                    <h4 className="text-primary">Testimonial</h4>
                    <h4 className="display-4 mb-4 text-white font-weight-bold">What Our Clients Say?</h4>
                    <p className="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testomonial