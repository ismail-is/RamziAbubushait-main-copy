'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>

        {/* Start About Three*/} 
        <section className="about-three">
            <div className="shape2 float-bob-x"><img src="assets/images/shapes/about-v3-shape2.png" alt=""/></div>
            <div className="shape3 float-bob-y"><img src="assets/images/shapes/about-v3-shape3.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start About Three Img*/} 
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-three__img">
                            <div className="about-three__experience-box">
                                <div className="count-box">
                                    <h2> </h2>
                                    {/* <h2> <CounterUp end={30} /></h2> */}
                                    <span></span>
                                </div>

                                <div className="text">
                                    <h2></h2>
                                </div>
                            </div>

                            <div className="about-three__img1">
                                <div className="inner">
                                    <img src="assets/images/allimg/about/about6.webp" alt=""/>
                                </div>
                            </div>

                            {/* <div className="about-three__img2">
                                <div className="inner">
                                    <img src="assets/images/allimg/about/about6.webp" alt=""/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* End About Three Img*/} 

                    {/* Start About Three Content*/} 
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-three__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <br/>
                                        <h4></h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Why Choose Us?
                                    </h2>
                            </div>

                            {/* <div className="about-three__content-text">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised.</p>
                            </div> */}

                            {/* <div className="about-three__content-list">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="fa fa-bullseye"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2>Our Mission</h2>
                                            <p>It is a long established fact that a reader will be distracted by <br/>
                                                the readable content</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-costumer"></span>
                                        </div>

                                        <div className="text-box">
                                            <h2>Our Vision</h2>
                                            <p>It is a long established fact that a reader will be distracted by <br/>
                                                the readable content</p>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}

                            <div className="about-three__content-list2">
                                <ul>
                                    <li>
                                        <p><span className="">Comprehensive Solutions :</span>  Steel fabrication, blasting, rentals, and trading – all in one place</p>
                                    </li>
                                    <li>
                                        <p><span className="">Experienced Workforce :</span>  Trained professionals with technical expertise and field experience.</p>
                                    </li>
                                    <li>
                                        <p><span className="">Quality Commitmen :</span>  Materials and services that meet or exceed international standards.</p>
                                    </li>
                                    <li>
                                        <p><span className="">Timely Delivery :</span> Strict adherence to deadlines and project milestones.</p>
                                    </li>
                                    <li>
                                        <p><span className="">Customer Focus :</span> Personalized service, flexible terms, and responsive support.</p>
                                    </li>
                                    <li>
                                        <p><span className="">Safety First: :</span>Compliance with all health, safety, and environmental regulations.</p>
                                    </li>

                                   
                                </ul>
                            </div>

                            {/* <div className="about-three__content-btn">
                                <Link className="thm-btn" href="about">Get a Quote
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    {/* End About Three Content*/} 
                </div>
            </div>
        </section>
        {/* End About Three*/}
        </>
    )
}
