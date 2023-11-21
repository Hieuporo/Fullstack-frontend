const Home = () => {
  return (
    <>
      <section className="hero-area">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="lg:w-2/3 pr-4 pl-4 w-full custom-padding-right">
              <div className="slider-head">
                {/* Start Hero Slider */}
                <div className="hero-slider">
                  {/* Start Single Slider */}
                  <div
                    className="single-slider"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/hero/slider-bg1.jpg)",
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>No restocking fee ($35 savings)</span>
                        M75 Sport Watch
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <h3>
                        <span>Now Only</span> $320.99
                      </h3>
                      <div className="button">
                        <a
                          href="product-grids.html"
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Slider */}
                  {/* Start Single Slider */}
                  <div
                    className="single-slider"
                    style={{
                      backgroundImage:
                        "url(src/assets/images/hero/slider-bg2.jpg)",
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>Big Sale Offer</span>
                        Get the Best Deal on CCTV Camera
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <h3>
                        <span>Combo Only:</span> $590.00
                      </h3>
                      <div className="button">
                        <a
                          href="product-grids.html"
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Slider */}
                </div>
                {/* End Hero Slider */}
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 w-full">
              <div className="flex flex-wrap ">
                <div className="lg:w-full pr-4 pl-4 md:w-1/2 pr-4 pl-4 w-full md-custom-padding">
                  {/* Start Small Banner */}
                  <div
                    className="hero-small-banner"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/hero/slider-bnr.jpg")',
                    }}
                  >
                    <div className="content">
                      <h2>
                        <span>New line required</span>
                        iPhone 12 Pro Max
                      </h2>
                      <h3>$259.99</h3>
                    </div>
                  </div>
                  {/* End Small Banner */}
                </div>
                <div className="lg:w-full pr-4 pl-4 md:w-1/2 w-full">
                  {/* Start Small Banner */}
                  <div className="hero-small-banner style2">
                    <div className="content">
                      <h2>Weekly Sale!</h2>
                      <p>
                        Saving up to 50% off all online store items this week.
                      </p>
                      <div className="button">
                        <a
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                          href="product-grids.html"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Start Small Banner */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Area */}
      {/* Start Trending Product Area */}
      <section className="trending-product section" style={{ marginTop: 12 }}>
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="w-full">
              <div className="section-title">
                <h2>Trending Product</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-1.jpg" alt="#" />
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Watches</span>
                  <h4 className="title">
                    <a href="product-grids.html">Xiaomi Mi Band 5</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star" />
                    </li>
                    <li>
                      <span>4.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$199.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-2.jpg" alt="#" />
                  <span className="sale-tag">-25%</span>
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Speaker</span>
                  <h4 className="title">
                    <a href="product-grids.html">Big Power Sound Speaker</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <span>5.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$275.00</span>
                    <span className="discount-price">$300.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-3.jpg" alt="#" />
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Camera</span>
                  <h4 className="title">
                    <a href="product-grids.html">WiFi Security Camera</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <span>5.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$399.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-4.jpg" alt="#" />
                  <span className="new-tag">New</span>
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Phones</span>
                  <h4 className="title">
                    <a href="product-grids.html">iphone 6x plus</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <span>5.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$400.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-5.jpg" alt="#" />
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Headphones</span>
                  <h4 className="title">
                    <a href="product-grids.html">Wireless Headphones</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <span>5.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$350.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-6.jpg" alt="#" />
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Speaker</span>
                  <h4 className="title">
                    <a href="product-grids.html">Mini Bluetooth Speaker</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star" />
                    </li>
                    <li>
                      <span>4.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$70.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-7.jpg" alt="#" />
                  <span className="sale-tag">-50%</span>
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Headphones</span>
                  <h4 className="title">
                    <a href="product-grids.html">PX7 Wireless Headphones</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star" />
                    </li>
                    <li>
                      <span>4.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$100.00</span>
                    <span className="discount-price">$200.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src="src/assets/images/products/product-8.jpg" alt="#" />
                  <div className="button">
                    <a
                      href="product-details.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      <i className="lni lni-cart" /> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Laptop</span>
                  <h4 className="title">
                    <a href="product-grids.html">Apple MacBook Air</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <i className="lni lni-star-filled" />
                    </li>
                    <li>
                      <span>5.0 Review(s)</span>
                    </li>
                  </ul>
                  <div className="price">
                    <span>$899.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          </div>
        </div>
      </section>

      <section className="banner section">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 w-full">
              <div
                className="single-banner"
                style={{
                  backgroundImage:
                    'url("src/assets/images/banner/banner-1-bg.jpg")',
                }}
              >
                <div className="content">
                  <h2>Smart Watch 2.0</h2>
                  <p>
                    Space Gray Aluminum Case with <br />
                    Black/Volt Real Sport Band{" "}
                  </p>
                  <div className="button">
                    <a
                      href="product-grids.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 w-full">
              <div
                className="single-banner custom-responsive-margin"
                style={{
                  backgroundImage:
                    'url("src/assets/images/banner/banner-2-bg.jpg")',
                }}
              >
                <div className="content">
                  <h2>Smart Headphone</h2>
                  <p>
                    Lorem ipsum dolor sit amet, <br />
                    eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="button">
                    <a
                      href="product-grids.html"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}
      {/* Start Shipping Info */}
      <section className="shipping-info">
        <div className="container mx-auto sm:px-4">
          <ul>
            <li>
              <div className="media-icon">
                <i className="lni lni-delivery" />
              </div>
              <div className="flex-1">
                <h5>Free Shipping</h5>
                <span>On order over $99</span>
              </div>
            </li>
            {/* Money Return */}
            <li>
              <div className="media-icon">
                <i className="lni lni-support" />
              </div>
              <div className="flex-1">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>
            {/* Support 24/7 */}
            <li>
              <div className="media-icon">
                <i className="lni lni-credit-cards" />
              </div>
              <div className="flex-1">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>
            {/* Safe Payment */}
            <li>
              <div className="media-icon">
                <i className="lni lni-reload" />
              </div>
              <div className="flex-1">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up" />
      </a>
    </>
  );
};

export default Home;
