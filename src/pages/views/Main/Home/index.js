import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Home = props => {
    return (
        <div>
     <div className="fixed-header-space" /> {/* empty placeholder div for Fixed Menu bar height*/}
        {/* Start of Main Content Wrapper */}
        <main id="content" className="main-content-wrapper">
          {/* Start of Primary Slider Section */}
          <section className="primary-slider-section mb0 pos-r">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  <div id="primary_slider" className="swiper-container slider-type-3">
                    {/* Slides */}
                    <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                            >
                    <div className="swiper-wrapper">
                      
                     
                                                 
                     
                           {/* end of slide-content */}
                          <SwiperSlide>
                           <img src="/images/slider/home-3/slide-1.jpg"  />   
                           </SwiperSlide>
                           <SwiperSlide>
                           <img src="/images/slider/home-3/slide-2.jpg"  />   
                           </SwiperSlide>
                           <SwiperSlide>
                           <img src="/images/slider/home-3/slide-3.jpg"  />   
                           </SwiperSlide>
                          
                           
                       {/* end of swiper-slide */}
                    </div>
                    
                    
                    </Swiper> {/* end of swiper-slide */}
                    {/* Slider Navigation */}
                    <div className="swiper-arrow next slide"><i className="fa fa-angle-right" /></div>
                    <div className="swiper-arrow prev slide"><i className="fa fa-angle-left" /></div>
                    {/* Slider Pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div> {/* end of row */}
            </div> {/* end of container */}
          </section>
          {/* End of Primary Slider Section */}
          {/* Start of Banner Section */}
          <div className="banner-section mt-30 mb-half">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="promo-banner hover-effect-1">
                    <a href="#">
                      <img src="/images/banners/banner-8.jpg" alt="Promo Banner" />
                    </a>
                  </div> {/* end of promo-banner */}
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="promo-banner hover-effect-1">
                    <a href="#">
                      <img src="/images/banners/banner-8.jpg" alt="Promo Banner" />
                    </a>
                  </div> {/* end of promo-banner */}
                </div>
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div>
          {/* End of Banner Section */}
          {/* Start of New Arrivals Section */}
          <section className="new-arrivals-section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  <div className="section-title">
                    <h2>New Trending Products</h2>
                    <p className="subtitle">Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero est</p>
                  </div>
                </div>
              </div> {/* end of row */}
              <div className="row product-row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    <div className="new-products pos-r">
                                        <div className="element-carousel anime-element" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                                            {/* Slides */}
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={6}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                            >
                                                <div className="swiper-wrapper">
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-sale">-20%</div>
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-1.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Studio Design</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Compete Track Tote</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-old">$54.65</span>
                                                                        <span className="price-new">$43.72</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-2.jpg" alt="Fusion Backpack" title="Fusion Backpack" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$55.70</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-3.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Rival Field Messenger 6</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$54.40</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-4.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$67.50</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-5.jpg" alt="Crown Summit Backpack" title="Crown Summit Backpack" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Crown Summit Backpack</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$78.90</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-6.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$54.50</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-sale">-7%</div>
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-7.jpg" alt="Strive Shoulder Pack" title="Strive Shoulder Pack" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Strive Shoulder Pack</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-old">$76.40</span>
                                                                        <span className="price-new">$71.05</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-8.jpg" alt="Wayfarer Messenger Bag" title="Wayfarer Messenger Bag" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Studio Design</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$65.40</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                </div> {/* end of swiper-wrapper */}
                                            </Swiper>
                                            {/* Slider Navigation */}
                                            <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                                            <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                                        </div> {/* end of element-carousel */}
                                    </div> {/* end of new-products */}
                                </div>
                            </div> 
                            </div>
              
          </section>
          {/* End of New Arrivals Section */}
          {/* Start of Instagram Section */}
          <section className="instagram-section pt-full top-bordered mb-half">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  <div className="section-title type-2">
                    <h2>Follow us On Instagram</h2>
                    <p className="subtitle">Consequat magna, massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                  </div>
                </div>
              </div> {/* end of row */}
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  <div className="instagram-container">
                    {/* Slides */}
                    <div id="instagram_feed" className="swiper-wrapper image-popup">
                    </div> {/* end of swiper-wrapper */}
                  </div> {/* end of instagram-carousel */}
                  <div className="follow-link">
                    <a href="https://www.instagram.com/themeitems/" target="_blank">Follow us On Instagram</a>
                  </div>
                </div>
              </div> {/* end of row */}
            </div> {/* end of container */}
          </section>
          {/* End of Instagram Section */}
        </main>
        {/* End of Main Content Wrapper */}
      </div>
    )
}

Home.propTypes = {

}

export default Home
