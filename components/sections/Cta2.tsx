import CounterUp from "../elements/CounterUp";

export default function Cta2() {
  return (
    <>
      <section className="box-cta-2 background-body overflow-hidden">
        <div className="bg-shape top-50 start-50 translate-middle" />
        <div className="container position-relative z-1">
          <div className="row ">
            <div className="col-lg-5 pe-lg-5 ">
              <h3 className="text-white wow fadeInDown">
                Lorem ipsum dolor sit adipisicing elit.
              </h3>
              <p className="text-lg-medium text-white wow fadeInUp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                aliquam, deleniti qui quos incidunt repellendus. Modi, at
                laboriosam.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1"></div>
          </div>
          <div className="row align-items-center">
            <div className="border-top py-3 mt-3" />
            <div className="col-lg-7 mb-20 wow fadeIn">
              <div className="row">
                <div className="col-md-3 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h3 className="count text-white">
                      <CounterUp count={100} />
                    </h3>
                    <h3 className="text-white">+</h3>
                  </div>
                  <div className="position-relative">
                    <p className="text-lg-bold text-white">Global</p>
                    <p className="text-lg-bold text-white">Products</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h3 className="count text-white">
                      <CounterUp count={129} />
                    </h3>
                    <h3 className="text-white">K</h3>
                  </div>
                  <div className="position-relative">
                    <p className="text-lg-bold text-white">Customer</p>
                    <p className="text-lg-bold text-white">Reviews</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h3 className="count text-white">
                      <CounterUp count={20} />
                    </h3>
                    <h3 className="text-white">+</h3>
                  </div>
                  <div className="position-relative">
                    <p className="text-lg-bold text-white">Years</p>
                    <p className="text-lg-bold text-white">Experience</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h3 className="count text-white">
                      <CounterUp count={168} />
                    </h3>
                    <h3 className="text-white">K</h3>
                  </div>
                  <div className="position-relative">
                    <p className="text-lg-bold text-white">Happy</p>
                    <p className="text-lg-bold text-white">Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 wow fadeIn">
              <div className="box-authors-partner background-body wow fadeInUp p-4">
                <div className="authors-partner-left">
                  <img
                    src="/assets/imgs/page/homepage5/author.png"
                    alt="Carento"
                  />
                  <img
                    src="/assets/imgs/page/homepage5/author2.png"
                    alt="Carento"
                  />
                  <img
                    src="/assets/imgs/page/homepage5/author3.png"
                    alt="Carento"
                  />
                  <span className="item-author">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="7.448"
                        width={17}
                        height="2.31818"
                        fill="black"
                      />
                      <rect
                        x="7.84082"
                        y="17.1072"
                        width={17}
                        height="2.31818"
                        transform="rotate(-90 7.84082 17.1072)"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <div className="authors-partner-right">
                  <p className="text-sm neutral-1000">
                    1684 people used <strong>Arctic Shields </strong>in the last
                    <strong>24 hours</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
