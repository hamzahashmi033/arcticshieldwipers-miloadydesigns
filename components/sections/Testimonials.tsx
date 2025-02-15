"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOptions";

export default function Testimonials() {
  return (
    <>
      <section className="section-box py-96 background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 col-sm-9 wow fadeInUp">
              <div className="box-author-testimonials">
                <img
                  src="/assets/imgs/page/homepage1/testimonial.png"
                  alt="Carento"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial2.png"
                  alt="Carento"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial3.png"
                  alt="Carento"
                />
                Testimonials
              </div>
              <h3 className="mt-8 mb-15 neutral-1000">
                What they say about us?
              </h3>
            </div>
          </div>
        </div>
        <div className="block-testimonials wow fadeIn">
          <div className="container-testimonials">
            <div className="container-slider ps-0">
              <div className="box-swiper mt-30">
                <Swiper
                  {...swiperGroupAnimate}
                  className="swiper-container swiper-group-animate swiper-group-journey"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="card-testimonial background-card">
                        <div className="card-info">
                          <p className="text-xl-bold card-title neutral-1000">
                            Lorem ipsum dolor sit amet.
                          </p>
                          <p className="text-md-regular neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse voluptate sint perspiciatis, totam
                            temporibus dolorem eum officia voluptas fugit omnis.
                          </p>
                        </div>
                        <div className="card-top pt-40 border-0 mb-0">
                          <div className="card-author">
                            <div className="card-image">
                              <img
                                src="/assets/imgs/testimonials/testimonials-1/author-1.png"
                                alt="Carento"
                              />
                            </div>
                            <div className="card-info">
                              <p className="text-lg-bold neutral-1000">
                                Sophia Moore
                              </p>
                              <p className="text-md-regular neutral-1000">
                                New York
                              </p>
                            </div>
                          </div>
                          <div className="card-rate">
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-testimonial background-card">
                        <div className="card-info">
                          <p className="text-xl-bold card-title neutral-1000">
                            Lorem ipsum dolor sit amet.
                          </p>
                          <p className="text-md-regular neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse voluptate sint perspiciatis, totam
                            temporibus dolorem eum officia voluptas fugit omnis.
                          </p>
                        </div>
                        <div className="card-top pt-40 border-0 mb-0">
                          <div className="card-author">
                            <div className="card-image">
                              <img
                                src="/assets/imgs/testimonials/testimonials-1/author-1.png"
                                alt="Carento"
                              />
                            </div>
                            <div className="card-info">
                              <p className="text-lg-bold neutral-1000">
                                Sophia Moore
                              </p>
                              <p className="text-md-regular neutral-1000">
                                New York
                              </p>
                            </div>
                          </div>
                          <div className="card-rate">
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-testimonial background-card">
                        <div className="card-info">
                          <p className="text-xl-bold card-title neutral-1000">
                            Lorem ipsum dolor sit amet.
                          </p>
                          <p className="text-md-regular neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse voluptate sint perspiciatis, totam
                            temporibus dolorem eum officia voluptas fugit omnis.
                          </p>
                        </div>
                        <div className="card-top pt-40 border-0 mb-0">
                          <div className="card-author">
                            <div className="card-image">
                              <img
                                src="/assets/imgs/testimonials/testimonials-1/author-1.png"
                                alt="Carento"
                              />
                            </div>
                            <div className="card-info">
                              <p className="text-lg-bold neutral-1000">
                                Sophia Moore
                              </p>
                              <p className="text-md-regular neutral-1000">
                                New York
                              </p>
                            </div>
                          </div>
                          <div className="card-rate">
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-testimonial background-card">
                        <div className="card-info">
                          <p className="text-xl-bold card-title neutral-1000">
                            Lorem ipsum dolor sit amet.
                          </p>
                          <p className="text-md-regular neutral-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse voluptate sint perspiciatis, totam
                            temporibus dolorem eum officia voluptas fugit omnis.
                          </p>
                        </div>
                        <div className="card-top pt-40 border-0 mb-0">
                          <div className="card-author">
                            <div className="card-image">
                              <img
                                src="/assets/imgs/testimonials/testimonials-1/author-1.png"
                                alt="Carento"
                              />
                            </div>
                            <div className="card-info">
                              <p className="text-lg-bold neutral-1000">
                                Sophia Moore
                              </p>
                              <p className="text-md-regular neutral-1000">
                                New York
                              </p>
                            </div>
                          </div>
                          <div className="card-rate">
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                            <img
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="Carento"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
