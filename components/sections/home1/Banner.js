
'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (

        <>
        {/* Start Main Slider One*/} 
        <section className="main-slider-one">
            <Swiper {...swiperOptions} className="main-slider__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/* Start Main Slider One Single*/} 
                <div className="main-slider-one__single">
                    <div className="main-slider-one__bg"
                        style={{ backgroundImage: ' url(assets/images/allimg/home/slider1.jpg)' }}></div>
                    <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt=""/></div>
                    <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" alt=""/></div>
                    <div className="main-slider-one__img2"><img src="assets/images/allimg/home/b1.png" alt=""/></div>
                    <div className="container">
                        <div className="main-slider-one__content">
                            <div className="tagline">
                                {/* <span>Your Vision, Our Blueprint</span> */}
                            </div>
                            <div className="title-box">
                                <h2>We Provide <br/>High Quality <br/>Contracting Services</h2>
                            </div>

                            <div className="text-box">
                                <p>Ramzi Abubushait Trading and Contracting is multi diversified business<br/> firm and our dedication to customer atisfaction has brought us<br/> to the forefront in business </p>
                            </div>

                            <div className="main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="contact">Our Services
                                        <i className="icon-next"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>

                                {/* <div className="main-slider-one__single-video">
                                    <div className="main-slider-one__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="main-slider-one__video-icon">
                                                <span className="icon-play-button-arrowhead"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="text">
                                        <Link href="#">Watch Our Story</Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider One Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider One Single*/} 
                <div className="main-slider-one__single">
                    <div className="main-slider-one__bg"
                        style={{ backgroundImage: ' url(assets/images/allimg/home/b2.webp)' }}></div>
                    <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt=""/></div>
                    <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" alt=""/></div>
                    <div className="main-slider-one__img2"><img src="assets/images/allimg/home/b3.png" alt=""/></div>
                    <div className="container">
                        <div className="main-slider-one__content">
                            <div className="tagline">
                                {/* <span>Building a Better Tomorrow</span> */}
                            </div>
                            <div className="title-box">
                                <h2>On-Demand Machinery<br/> and Tools to 
Keep<br/> Your Projects Moving</h2>
                            </div>

                            <div className="text-box">
                                <p>Our rental division offers a wide range of construction machinery, <br/>heavy vehicles, and industrial tools for daily, weekly, or long-term hire</p>
                            </div>

                            <div className="main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="contact">Our Services
                                        <i className="icon-next"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>

                                {/* <div className="main-slider-one__single-video">
                                    <div className="main-slider-one__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="main-slider-one__video-icon">
                                                <span className="icon-play-button-arrowhead"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="text">
                                        <Link href="#">Watch Our Story</Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider One Single*/} 
                </SwiperSlide>
                {/* <SwiperSlide>
                <div className="main-slider-one__single">
                    <div className="main-slider-one__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-v1-img1.jpg)' }}></div>
                    <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt=""/></div>
                    <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" alt=""/></div>
                    <div className="main-slider-one__img2"><img src="assets/images/slider/slider-v1-img2.png" alt=""/></div>
                    <div className="container">
                        <div className="main-slider-one__content">
                            <div className="tagline">
                                <span>Building a Better Tomorrow</span>
                            </div>
                            <div className="title-box">
                                <h2>Reliable Solutions for<br/> Every Build</h2>
                            </div>

                            <div className="text-box">
                                <p>The timeline varies depending on the project's scope and complexity <br/>
                                    timeline after assessing your specific needs </p>
                            </div>

                            <div className="main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="contact">describe more
                                        <i className="icon-next"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>

                                <div className="main-slider-one__single-video">
                                    <div className="main-slider-one__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="main-slider-one__video-icon">
                                                <span className="icon-play-button-arrowhead"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="text">
                                        <Link href="#">Watch Our Story</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide> */}
            </Swiper>
        </section>
        {/* End Main Slider One*/} 
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
