'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Products">
        {/* Product Start*/} 
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12">
                        <div className="product__sidebar">
                            <div className="shop-search product__sidebar-single">
                                <form action="#">
                                    <input type="text" placeholder="Search"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="product__price-ranger product__sidebar-single">
                                <h3 className="product__sidebar-title">Price</h3>
                                <div className="price-ranger">
                                    <div id="slider-range"></div>
                                    <div className="ranger-min-max-block">
                                        <input type="text" readonly className="min"/>
                                        <span>-</span>
                                        <input type="text" readonly className="max"/>
                                        <input type="submit" value="Filter"/>
                                    </div>
                                </div>
                            </div>

                            <div className="shop-category product__sidebar-single">
                                <h3 className="product__sidebar-title">Categories</h3>
                                <ul className="list-unstyled">
                                    <li><Link href="#">Make a Donation</Link></li>
                                    <li className="active"><Link href="#">Make World Happier</Link></li>
                                    <li><Link href="#">Education For People</Link></li>
                                    <li><Link href="#">Food & Build Home</Link></li>
                                    <li><Link href="#">Environtment Recyle</Link></li>
                                </ul>
                            </div>

                            <div className="shop-color-option product__sidebar-single">
                                <h3 className="product__sidebar-title">Color Option</h3>
                                <ul className="list-unstyled">
                                    <li>Black</li>
                                    <li>Blue</li>
                                    <li>Brown</li>
                                    <li>Pink</li>
                                    <li>Orange</li>
                                </ul>
                            </div>

                            <div className="shop-product-tags product__sidebar-single">
                                <h3 className="product__sidebar-title">Product Tags</h3>
                                <div className="shop-product__tags-list">
                                    <Link href="#">Art</Link>
                                    <Link href="#">Decor</Link>
                                    <Link href="#">Design</Link>
                                    <Link href="#">Electronix</Link>
                                    <Link href="#">Envato</Link>
                                    <Link href="#">Destination</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-12">
                        <div className="product__items">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product__showing-result">
                                        <div className="product__showing-text-box">
                                            <p className="product__showing-text">Showing 1–9 of 12 results</p>
                                        </div>
                                        <div className="product__showing-sort">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Sort by popular">Sort by popular</option>
                                                    <option value="1">Sort by popular</option>
                                                    <option value="2">Sort by Price</option>
                                                    <option value="3">Sort by Ratings</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__all">
                                <div className="row">
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-1.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-1.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Classy
                                                        chair</Link></h4>
                                                <p className="product__all-price">$33.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 

                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-2.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-2.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Comfy
                                                        chair</Link></h4>
                                                <p className="product__all-price">$68.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-3.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-3.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Boss
                                                        chair</Link></h4>
                                                <p className="product__all-price">$23.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-4.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-4.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Sofa
                                                        chair</Link></h4>
                                                <p className="product__all-price">$54.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-5.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-5.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Wooden
                                                        stool</Link></h4>
                                                <p className="product__all-price">$39.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-6.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-6.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Big
                                                        sofa</Link></h4>
                                                <p className="product__all-price">$44.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-7.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-7.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Round
                                                        chair</Link></h4>
                                                <p className="product__all-price">$96.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-8.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-8.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Big
                                                        stool</Link></h4>
                                                <p className="product__all-price">$23.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                    {/* Product All Single Start*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="product__all-single">
                                            <div className="product__all-img">
                                                <img src="assets/images/shop/shop-product-1-9.jpg" alt=""/>
                                                <img src="assets/images/shop/shop-product-1-9.jpg" alt=""/>
                                            </div>
                                            <div className="product__all-content">
                                                <div className="product__all-review">
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                    <i className="icon-star1"></i>
                                                </div>
                                                <h4 className="product__all-title"><Link href="product-details">Classic
                                                        chair</Link></h4>
                                                <p className="product__all-price">$33.00</p>
                                                <div className="product__all-btn-box">
                                                    <Link className="thm-btn product__all-btn" href="cart">Add to
                                                        Cart
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product All Single End*/} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Product End*/} 
        </Layout>
        </>
    )
}