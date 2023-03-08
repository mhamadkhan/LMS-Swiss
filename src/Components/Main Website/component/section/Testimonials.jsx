import React, { useState } from 'react'
import './Testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {

    const [testmonials, setTestimonials] = useState([
        { name: "Ehtasham Toor", date: "Mar 7, 2023", review: "Satisfactory" }, { name: "Ehtasham Toor", date: "Mar 7, 2023", review: "Satisfactory" }, { name: "Ehtasham Toor", date: "Mar 7, 2023", review: "Satisfactory" }, { name: "Ehtasham Toor", date: "Mar 7, 2023", review: "Satisfactory" }, { name: "Ehtasham Toor", date: "Mar 7, 2023", review: "Satisfactory" }, { name: "Ehtasham Toor", date: "Mar 7, 2023", review: "Satisfactory" },
    ])
    return (
        <div className="my-4 p-3 testimonialBody">
            <div className='row'>
                <div className='col-12'>
                    <h2 className='text-center text-white mb-3 mt-4'>See what our Students say</h2>
                </div>
            </div>

            <div className="row owl-stage">

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    loop={'true'}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            width: 0,
                            slidesPerView: 1,
                        },
                        250: {
                            width: 250,
                            slidesPerView: 1,
                        },
                        450: {
                            width: 450,
                            slidesPerView: 1,
                        },
                        680: {
                            width: 680,
                            slidesPerView: 2,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        testmonials.map((person, index) => {
                            return <SwiperSlide key={index} className="swiperSlide">
                                <div className="owl-item col-md-12 col-4" style={{ width: '318.003px', marginRight: '5px' }}>
                                    <div className="testimonial">
                                        <i class="icofont-quote-left icofont-4x"></i>

                                        <span className="icon fa fa-quote-left color-black" />
                                        <ul className="rating d-block mb-1 d-flex justify-content-center mt-3">
                                            <li><i className="icofont-star" style={{ fontSize: "1.4rem" }}></i></li>
                                            <li><i className="icofont-star " style={{ fontSize: "1.4rem" }}></i></li>
                                            <li><i className="icofont-star " style={{ fontSize: "1.4rem" }}></i></li>
                                            <li><i className="icofont-star " style={{ fontSize: "1.4rem" }}></i></li>
                                            <li><i className="icofont-star " style={{ fontSize: "1.4rem" }}></i></li>
                                        </ul>
                                        <p className="description color-black text-center">
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                <font style={{ verticalAlign: 'inherit' }} className="text-black fw-bold">
                                                    {person.review}
                                                </font>
                                            </font><br />
                                        </p>
                                        <div className="testimonial-content">
                                            <div className="pic">
                                                <img src="http://hamza.wintifood.swiss/front/images/profile-14.png" alt="fizza Ali" />
                                            </div>
                                            <h3 className="title">
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <font style={{ verticalAlign: 'inherit' }}>{person.name}</font>
                                                </font>
                                            </h3>
                                            <span className="post">
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <font style={{ verticalAlign: 'inherit' }}>{person.date}</font>
                                                </font>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }

                </Swiper>



            </div>
        </div>
    )
}

export default Testimonials