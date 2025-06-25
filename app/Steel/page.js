'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
                    status: false,
                    key: 1,
                })
            
                const handleToggle = (key) => {
                    if (isActive.key === key) {
                        setIsActive({
                            status: false,
                        })
                    } else {
                        setIsActive({
                            status: true,
                            key,
                        })
                    }
                }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Steel ">
        {/* Start Services Details*/} 
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Start Services Details Content*/} 
                    <div className="col-xl-8">
                        <div className="services-details__content">
                            <div className="services-details__content-img1">
                                <img src="assets/images/allimg/steel/Steel1.webp" alt=""/>
                            </div>

                            <div className="services-details__content-text1">
                                {/* <h2>Structural Mastery</h2> */}
                                <p className="text1">Our Steel Fabrication division is the foundation of our operations, built to serve a wide array of industries including construction, infrastructure, manufacturing, logistics, and heavy engineering. We offer high-quality fabrication solutions tailored to your specifications and project demands, ensuring that every structure or component is built to last.</p>
                                
                            </div>

                            <div className="services-details__content-text1">
                                <h2>Key Capabilities:</h2>
                                <p className="text1">Our Steel Fabrication division is the foundation of our operations, built to serve a wide array of industries including construction, infrastructure, manufacturing, logistics, and heavy engineering. We offer high-quality fabrication solutions tailored to your specifications and project demands, ensuring that every structure or component is built to last.</p>
                                
                            </div>
<div className="col-xl-12 col-lg-6 col-md-6">
                                        <div className="services-details__content-text3-list">
                                            <ul>
                                                <li >
                                                    <p  ><span className="icon-verified"></span> Structural Steel Frames: Complete fabrication of structural steel frameworks for commercial buildings, warehouses, industrial plants, and infrastructure projects.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Beams, Columns, Trusses & Bracings: Fabrication of standard and custom load-bearing components using precision CNC cutting, punching, and welding.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Industrial Platforms & Walkways: Design and manufacture of safe and durable access solutions including walkways, stairs, mezzanines, and maintenance platforms.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Storage Tanks, Silos, and Enclosures: Manufacturing of cylindrical and rectangular tanks, hoppers, bins, and enclosures for industries such as water treatment, agriculture, and chemical processing.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Welding Services: MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and Arc welding provided by certified professionals with adherence to industry standards and safety protocols.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> Storage Tanks, Silos, and Enclosures: Manufacturing of cylindrical and rectangular tanks, hoppers, bins, and enclosures for industries such as water treatment, agriculture, and chemical processing.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span> On-Site Support: Field installation, fit-up, and structural erection with safety supervision and engineering coordination. Our mobile teams are available for remote project sites.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            <div className="services-details__content-img2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/allimg/steel/Steel2.webp" alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="services-details__content-img2-single">
                                            <img src="assets/images/allimg/steel/Steel3.webp" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12 col-lg-6 col-md-6">
                                   <h2>Materials Handled:</h2>
                                        <div className="services-details__content-text3-list">
                                            
                                            <ul>
                                                <li>
                                                    <p><span className="icon-verified"></span> Mild Steel (MS)</p>
                                                </li>
                                               
                                                <li>
                                                    <p><span className="icon-verified"></span>Structural Steel</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Stainless Steel (SS)</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Galvanized Steel</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Aluminum and other alloys</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                          <br/>
 <div className="services-details__content-text1">
                                <h2>Quality Assurance:</h2>
                                <p className="text1">All fabrication work undergoes rigorous quality checks including dimensional inspection, weld testing (NDT), surface preparation, and protective coating (as required). We follow ISO and IS code standards to ensure performance under varying environmental and load conditions.</p>
                                
                            </div>
                                   <div className="col-xl-12 col-lg-6 col-md-6">
                                   <h2>Applications:</h2>
                                        <div className="services-details__content-text3-list">
                                            
                                            <ul>
                                                <li>
                                                    <p><span className="icon-verified"></span> Commercial and Industrial Buildings</p>
                                                </li>
                                               
                                                <li>
                                                    <p><span className="icon-verified"></span>Energy and Power Sector</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Oil & Gas Infrastructure</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Water Treatment Plants</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Transportation Terminals</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-verified"></span>Warehouses and Storage Facilities</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <br/>
 <div className="services-details__content-text1">
                                {/* <h2>Quality Assurance:</h2> */}
                                <p className="text1">Our steel fabrication solutions are engineered for strength, designed for functionality, and built for the future. From initial concept to final installation, our team ensures precision execution, timely delivery, and complete customer satisfaction.</p>
                            </div>


                            {/* <div className="services-details__accrodion">
                                <div className="faq-one__faq">
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>What types of construction projects do you handle?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Our commitment to quality craftsmanship, customer satisfaction,
                                                        and innovative construction solutions as sets us apart. We pride
                                                        ourselves on delivering projects on time and within budget Yes,
                                                        we are fully a buing licensed and insured, meeting all
                                                        regulatory requirements to ensure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>What sets your company apart from others?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Our commitment to quality craftsmanship, customer satisfaction,
                                                        and innovative construction solutions as sets us apart. We pride
                                                        ourselves on delivering projects on time and within budget Yes,
                                                        we are fully a buing licensed and insured, meeting all
                                                        regulatory requirements to ensure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>Are your cleaning products safe for pets and children?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Our commitment to quality craftsmanship, customer satisfaction,
                                                        and innovative construction solutions as sets us apart. We pride
                                                        ourselves on delivering projects on time and within budget Yes,
                                                        we are fully a buing licensed and insured, meeting all
                                                        regulatory requirements to ensure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* End Services Details Content*/} 

                    {/* Start Sidebar*/} 
                    <div className="col-xl-4">
                        <div className="sidebar">
                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>All Services</h2>
                                </div>

                                <ul className="sidebar__services-list">
                                  


                                    <li className="active"><Link href="Steel">Steel Fabrication<span
                                                className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="Sand">Sand Blasting
                                            <span className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="Rental">Rental Services <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="Trading">Trading Services <span
                                                className="icon-right-arrow"></span></Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            {/* <div className="sidebar__single sidebar__emergency-services wow fadeInUp" data-wow-delay=".1s">
                                <div className="sidebar__emergency-services-inner text-center">
                                    <div className="title">
                                        <h2>Emergency Construction Services</h2>
                                    </div>

                                    <div className="icon-box">
                                        <span className="icon-old-typical-phone"></span>
                                    </div>

                                    <div className="number-box">
                                        <p>Requesting A Call</p>
                                        <h3><Link href="tel:1234567890">(205) 888-0258</Link></h3>
                                    </div>

                                    <div className="text-box">
                                        <p>Yes, we offer free estimates for all potential projects. Contact us to
                                            schedule a
                                            consultation.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="contact">Read more
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                            {/* End Sidebar Single*/} 
                        </div>
                    </div>
                    {/* End Sidebar*/} 
                </div>
            </div>
        </section>
        {/* End Services Details*/}

        </Layout>
        </>
    )
}