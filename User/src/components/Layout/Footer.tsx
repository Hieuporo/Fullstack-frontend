import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container mx-auto sm:px-4">
          <div className="inner-content">
            <div className="flex flex-wrap ">
              <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 w-full">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="src/assets/images/logo/white-logo.svg" alt="#" />
                  </a>
                </div>
              </div>
              <div className="lg:w-3/4 pr-4 pl-4 md:w-2/3 w-full">
                <div className="footer-newsletter">
                  <h4 className="title">
                    Subscribe to our Newsletter
                    <span>
                      Get all the latest information, Sales and Offers.
                    </span>
                  </h4>
                  <div className="newsletter-form-head">
                    <form
                      action="#"
                      method="get"
                      target="_blank"
                      className="newsletter-form"
                    >
                      <input
                        name="EMAIL"
                        placeholder="Email address here..."
                        type="email"
                      />
                      <div className="button">
                        <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline">
                          Subscribe
                          <span className="dir-part" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}
      {/* Start Footer Middle */}
      <div className="footer-middle">
        <div className="container mx-auto sm:px-4">
          <div className="bottom-inner">
            <div className="flex flex-wrap ">
              <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
                {/* Single Widget */}
                <div className="single-footer f-contact">
                  <h3>Get In Touch With Us</h3>
                  <p className="phone">Phone: +1 (900) 33 169 7720</p>
                  <ul>
                    <li>
                      <span>Monday-Friday: </span> 9.00 am - 8.00 pm
                    </li>
                    <li>
                      <span>Saturday: </span> 10.00 am - 6.00 pm
                    </li>
                  </ul>
                  <p className="mail">
                    <a href="mailto:support@shopgrids.com">
                      support@shopgrids.com
                    </a>
                  </p>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
                {/* Single Widget */}
                <div className="single-footer our-app">
                  <h3>Our Mobile App</h3>
                  <ul className="app-btn">
                    <li>
                      <a>
                        <i className="lni lni-apple" />
                        <span className="small-title">Download on the</span>
                        <span className="big-title">App Store</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="lni lni-play-store" />
                        <span className="small-title">Download on the</span>
                        <span className="big-title">Google Play</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Information</h3>
                  <ul>
                    <li>
                      <a>About Us</a>
                    </li>
                    <li>
                      <a>Contact Us</a>
                    </li>
                    <li>
                      <a>Downloads</a>
                    </li>
                    <li>
                      <a>Sitemap</a>
                    </li>
                    <li>
                      <a>FAQs Page</a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Shop Departments</h3>
                  <ul>
                    <li>
                      <a>Computers &amp; Accessories</a>
                    </li>
                    <li>
                      <a>Smartphones &amp; Tablets</a>
                    </li>
                    <li>
                      <a>TV, Video &amp; Audio</a>
                    </li>
                    <li>
                      <a>Cameras, Photo &amp; Video</a>
                    </li>
                    <li>
                      <a>Headphones</a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Middle */}
      {/* Start Footer Bottom */}
      <div className="footer-bottom">
        <div className="container mx-auto sm:px-4">
          <div className="inner-content">
            <div className="flex flex-wrap  items-center">
              <div className="lg:w-1/3 pr-4 pl-4 w-full">
                <div className="payment-gateway">
                  <span>We Accept:</span>
                  <img
                    src="src/assets/images/footer/credit-cards-footer.png"
                    alt="#"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 w-full">
                <div className="copyright">
                  <p>
                    Designed and Developed by
                    <a
                      href="https://graygrids.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      GrayGrids
                    </a>
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 w-full">
                <ul className="socila">
                  <li>
                    <span>Follow Us On:</span>
                  </li>
                  <li>
                    <a>
                      <i className="lni lni-facebook-filled" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni lni-twitter-original" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni lni-instagram" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="lni lni-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
