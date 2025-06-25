'use client'
import Link from "next/link"
export default function Appoinment() {
    return (
        <>
        {/* Start Appoinment One*/} 
        <section className="appoinment-one">
            <div className="appoinment-one__pattern"
                style={{ backgroundImage: ' url(assets/images/pattern/appoinment-v1-pattern.png)' }}></div>
            <div className="shape1"></div>
            <div className="appoinment-one__bg"
                style={{ backgroundImage: ' url(assets/images/allimg/home/homecontact.webp)' }}>
            </div>
            <div className="container">
                <div className="row">
                    {/* Start Appoinment One Left*/} 
                    <div className="col-xl-6 col-lg-6">
                        <div className="appoinment-one__contact">
                            <div className="appoinment-one__contact-list">
                                <ul>
                                    <li className="wow animated fadeInLeft" data-wow-delay="0.1s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-placeholder"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Location</h2>
                                                <p>PO Box 74103 Dammam 31423, Saudi Arabia</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInLeft" data-wow-delay="0.2s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-conversation"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Email us</h2>
                                                <p><Link href="mailto:ramzi.trading@gmail.com">ramzi.trading@gmail.com</Link></p>
                                                {/* <p><Link href="mailto:yourmail@email.com">info@example.com</Link></p> */}
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInLeft" data-wow-delay="0.3s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Call us</h2>
                                                <p><Link href="tel:96638596411">+966 3 859 6411</Link></p>
                                                <p><Link href="tel:96638596422">+966 3 859 6422</Link></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Appoinment One Left*/} 

                    {/* Start Appoinment One Form*/} 
                    <div className="col-xl-6 col-lg-6">
                        <div className="appoinment-one__form wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="title-box">
                                <h2>Request A Quoate</h2>
                                <p>24/7 Support</p>
                            </div>

                            <form method="post" action="/">
                                <div className="form-group">
                                    <input type="text" name="username" placeholder="Your Name" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address"  name="form_email"
                                        required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" placeholder="Phone Number" required=""/>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Write Your Message"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                submit now
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Appoinment One Form*/} 
                </div>
            </div>
        </section>
        {/* End Appoinment One*/} 
        </>
    )
}
