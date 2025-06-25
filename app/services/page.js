'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our services">
        {/* Start Services One*/} 
        <section className="services-one services-one--services">
            <div className="container">
                <div className="row">
                    {/* Start Services One Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="icon-box">
                                <span className="icon-building"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3><Link href="structural-mastery">Building Monstrance</Link></h3>
                                    <p>We offer a wide range of construction services including custom home kinds
                                        building management</p>
                                </div>

                                <div className="services-one__single-img">
                                    <img src="assets/images/services/services-v1-img1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 

                    {/* Start Services One Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="icon-box">
                                <span className="icon-helmet"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3><Link href="structural-mastery">Building Renovation</Link></h3>
                                    <p>We offer a wide range of construction services including custom home kinds
                                        building management</p>
                                </div>

                                <div className="services-one__single-img">
                                    <img src="assets/images/services/services-v1-img2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 

                    {/* Start Services One Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="icon-box">
                                <span className="icon-home"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3><Link href="structural-mastery">General Contracting</Link></h3>
                                    <p>We offer a wide range of construction services including custom home kinds
                                        building management</p>
                                </div>

                                <div className="services-one__single-img">
                                    <img src="assets/images/services/services-v1-img3.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 

                    {/* Start Services One Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="icon-box">
                                <span className="icon-architect"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3><Link href="structural-mastery">Apex Remodeling</Link></h3>
                                    <p>We offer a wide range of construction services including custom home kinds
                                        building management</p>
                                </div>

                                <div className="services-one__single-img">
                                    <img src="assets/images/services/services-v1-img5.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 

                    {/* Start Services One Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="icon-box">
                                <span className="icon-construction-2"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3><Link href="structural-mastery">Quality Assurance Builds</Link></h3>
                                    <p>We offer a wide range of construction services including custom home kinds
                                        building management</p>
                                </div>

                                <div className="services-one__single-img">
                                    <img src="assets/images/services/services-v1-img6.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 

                    {/* Start Services One Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="services-one__single">
                            <div className="icon-box">
                                <span className="icon-interior-design"></span>
                            </div>
                            <div className="services-one__single-inner">
                                <div className="services-one__single-content">
                                    <h3><Link href="structural-mastery">Urban Development</Link></h3>
                                    <p>We offer a wide range of construction services including custom home kinds
                                        building management</p>
                                </div>

                                <div className="services-one__single-img">
                                    <img src="assets/images/services/services-v1-img7.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Single*/} 
                </div>
            </div>
        </section>
        {/* End Services One*/} 
        </Layout>
        </>
    )
}