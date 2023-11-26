import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container mx-auto sm:px-24">
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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-3.5 pb-3.5 px-5 rounded">
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
        <div className="container mx-auto sm:px-24">
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
                        <i>
                          <svg
                            fill="#ffffff"
                            width="32"
                            height="32"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M55.6288 22.2893C55.2691 22.564 48.9197 26.0867 48.9197 33.9197C48.9197 42.9799 56.9991 46.1851 57.2409 46.2645C57.2037 46.4599 55.9574 50.6542 52.9811 54.9278C50.3272 58.6886 47.5556 62.4434 43.3391 62.4434C39.1227 62.4434 38.0376 60.0317 33.1701 60.0317C28.4266 60.0317 26.7401 62.5227 22.8833 62.5227C19.0265 62.5227 16.3354 59.0427 13.2413 54.7691C9.65741 49.7506 6.76172 41.9542 6.76172 34.5547C6.76172 22.6862 14.5993 16.3916 22.3128 16.3916C26.4114 16.3916 29.828 19.0413 32.4012 19.0413C34.8505 19.0413 38.6701 16.2329 43.3329 16.2329C45.1001 16.2329 51.4495 16.3916 55.6288 22.2893ZM41.1193 11.2083C43.0477 8.95546 44.4118 5.82959 44.4118 2.70371C44.4118 2.27024 44.3746 1.83067 44.294 1.47656C41.1565 1.59256 37.4237 3.53402 35.1729 6.10432C33.4057 8.08242 31.7564 11.2083 31.7564 14.3769C31.7564 14.8532 31.837 15.3293 31.8742 15.4819C32.0726 15.5186 32.395 15.5613 32.7175 15.5613C35.5326 15.5613 39.0731 13.7053 41.1193 11.2083Z"
                              stroke="#ffffff"
                            />
                          </svg>
                        </i>

                        <span className="small-title">Download on the</span>
                        <span className="big-title">App Store</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i>
                          <svg
                            fill="#ffffff"
                            width="32"
                            height="32"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M59.1394 30.2026C58.7939 29.7386 58.3496 29.3832 57.8856 29.1364C57.4216 28.8895 54.4007 27.1619 51.5773 25.5231C50.1655 24.7136 48.7933 23.9139 47.7764 23.3117C47.2631 23.0156 46.8485 22.7688 46.5523 22.6009L46.0883 22.3245L33.827 15.256L22.5134 8.72055C16.7677 5.41334 10.8641 1.99755 10.2125 1.6224H10.2027C9.71893 1.33611 9.13647 1.09917 8.56388 1.03007C8.28746 1.00045 8.00116 0.980704 7.705 1.03007H7.67538L7.64576 1.04981C7.62602 1.04981 7.60627 1.05968 7.5964 1.06955H7.53717C7.20151 1.11892 6.8856 1.24726 6.61905 1.47432C5.61208 2.04691 5 3.17234 5 4.37676V59.9575C5 60.8756 5.39489 61.853 6.16493 62.4552C6.55981 62.8797 7.14228 63.0673 7.705 62.9784H7.82346C8.45529 62.9784 9.10685 62.8303 9.66957 62.5045C10.2323 62.1788 16.2741 58.684 22.1678 55.2781L33.827 48.5353L45.8217 41.605C45.8217 41.605 45.881 41.5754 45.9106 41.5556L46.0685 41.4767H46.0982L46.1475 41.4372H46.2166L46.3351 41.3187H46.345C47.1446 40.8547 56.5331 35.4546 57.856 34.6944C58.8531 34.112 59.7317 33.1247 59.712 31.8512C59.7021 31.2194 59.4751 30.6567 59.1394 30.2026ZM25.6725 14.5156L32.0993 18.2275L42.3763 24.1607L37.0354 29.472L16.8171 9.40173C19.6899 11.0603 22.928 12.9261 25.6725 14.5156ZM8.45529 5.94645L34.6069 31.9006L8.45529 57.8448V5.94645ZM32.0993 45.5638L25.791 49.2066C23.0465 50.7862 19.7886 52.6619 16.8368 54.3698L37.0354 34.2798L42.4158 39.6306L32.0993 45.5638ZM46.187 37.4488C45.9106 37.6067 45.6737 37.745 45.496 37.8437L39.464 31.9006L45.4565 25.9476C46.2166 26.3919 47.737 27.2705 49.8496 28.4947C52.219 29.8669 54.6377 31.2589 55.7631 31.8907C54.0453 32.8779 48.5761 36.0667 46.187 37.4488Z"
                            />
                          </svg>
                        </i>
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
        <div className="container mx-auto sm:px-24">
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
                    Minh Hieu
                    <a
                      href="https://graygrids.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      IT
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
                      <FacebookOutlinedIcon />
                    </a>
                  </li>
                  <li>
                    <a>
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a>
                      <TwitterIcon />
                    </a>
                  </li>
                  <li>
                    <a>
                      <GitHubIcon />
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
