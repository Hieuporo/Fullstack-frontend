const Home = () => {
  return (
    <>
      {/* Start Header Area */}
      <header className="header navbar-area">
        {/* Start Topbar */}
        <div className="topbar">
          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap  items-center">
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 w-full">
                <div className="top-left">
                  <ul className="menu-top-link">
                    <li>
                      <div className="select-position">
                        <select id="select4">
                          <option value={0}>$ USD</option>
                          <option value={1}>€ EURO</option>
                          <option value={2}>$ CAD</option>
                          <option value={3}>₹ INR</option>
                          <option value={4}>¥ CNY</option>
                          <option value={5}>৳ BDT</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="select-position">
                        <select id="select5">
                          <option value={0}>English</option>
                          <option value={1}>Español</option>
                          <option value={2}>Filipino</option>
                          <option value={3}>Français</option>
                          <option value={4}>العربية</option>
                          <option value={5}>हिन्दी</option>
                          <option value={6}>বাংলা</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 w-full">
                <div className="top-middle">
                  <ul className="useful-links">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 w-full">
                <div className="top-end">
                  <div className="user">
                    <i className="lni lni-user" />
                    Hello
                  </div>
                  <ul className="user-login">
                    <li>
                      <a href="login.html">Sign In</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Start Header Middle */}
        <div className="header-middle">
          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap  items-center">
              <div className="lg:w-1/4 pr-4 pl-4 md:w-1/4 w-3/5">
                {/* Start Header Logo */}
                <a
                  className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap"
                  href="index.html"
                >
                  <img src="src/assets/images/logo/logo.svg" alt="Logo" />
                </a>
                {/* End Header Logo */}
              </div>
              <div className="lg:w-2/5 pr-4 pl-4 md:w-3/5 sm:hidden">
                {/* Start Main Menu Search */}
                <div className="main-menu-search">
                  {/* navbar search start */}
                  <div className="navbar-search search-style-5">
                    <div className="search-select">
                      <div className="select-position">
                        <select id="select1">
                          <option>All</option>
                          <option value={1}>option 01</option>
                          <option value={2}>option 02</option>
                          <option value={3}>option 03</option>
                          <option value={4}>option 04</option>
                          <option value={5}>option 05</option>
                        </select>
                      </div>
                    </div>
                    <div className="search-input">
                      <input type="text" placeholder="Search" />
                    </div>
                    <div className="search-btn">
                      <button>
                        <i className="lni lni-search-alt" />
                      </button>
                    </div>
                  </div>
                  {/* navbar search Ends */}
                </div>
                {/* End Main Menu Search */}
              </div>
              <div className="lg:w-1/3 pr-4 pl-4 md:w-1/5 w-2/5">
                <div className="middle-right-area">
                  <div className="nav-hotline">
                    <i className="lni lni-phone" />
                    <h3>
                      Hotline:
                      <span>(+100) 123 456 7890</span>
                    </h3>
                  </div>
                  <div className="navbar-cart">
                    <div className="wishlist">
                      <a>
                        <i className="lni lni-heart" />
                        <span className="total-items">0</span>
                      </a>
                    </div>
                    <div className="cart-items">
                      <a className="main-btn">
                        <i className="lni lni-cart" />
                        <span className="total-items">2</span>
                      </a>
                      {/* Shopping Item */}
                      <div className="shopping-item">
                        <div className="dropdown-cart-header">
                          <span>2 Items</span>
                          <a href="cart.html">View Cart</a>
                        </div>
                        <ul className="shopping-list">
                          <li>
                            <a className="remove" title="Remove this item">
                              <i className="lni lni-close" />
                            </a>
                            <div className="cart-img-head">
                              <a
                                className="cart-img"
                                href="product-details.html"
                              >
                                <img
                                  src="src/assets/images/header/cart-items/item1.jpg"
                                  alt="#"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="product-details.html">
                                  Apple Watch Series 6
                                </a>
                              </h4>
                              <p className="quantity">
                                1x - <span className="amount">$99.00</span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <a className="remove" title="Remove this item">
                              <i className="lni lni-close" />
                            </a>
                            <div className="cart-img-head">
                              <a
                                className="cart-img"
                                href="product-details.html"
                              >
                                <img
                                  src="src/assets/images/header/cart-items/item2.jpg"
                                  alt="#"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="product-details.html">
                                  Wi-Fi Smart Camera
                                </a>
                              </h4>
                              <p className="quantity">
                                1x - <span className="amount">$35.00</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                        <div className="bottom">
                          <div className="total">
                            <span>Total</span>
                            <span className="total-amount">$134.00</span>
                          </div>
                          <div className="button">
                            <a
                              href="checkout.html"
                              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline animate"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/ End Shopping Item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Middle */}
        {/* Start Header Bottom */}
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="lg:w-2/3 pr-4 pl-4 md:w-1/2 w-full">
              <div className="nav-inner">
                {/* Start Mega Category Menu */}
                <div className="mega-category-menu">
                  <span className="cat-button">
                    <i className="lni lni-menu" />
                    All Categories
                  </span>
                  <ul className="sub-category">
                    <li>
                      <a href="product-grids.html">
                        Electronics <i className="lni lni-chevron-right" />
                      </a>
                      <ul className="inner-sub-category">
                        <li>
                          <a href="product-grids.html">Digital Cameras</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Camcorders</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Camera Drones</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Smart Watches</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Headphones</a>
                        </li>
                        <li>
                          <a href="product-grids.html">MP3 Players</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Microphones</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Chargers</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Batteries</a>
                        </li>
                        <li>
                          <a href="product-grids.html">Cables &amp; Adapters</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="product-grids.html">accessories</a>
                    </li>
                    <li>
                      <a href="product-grids.html">Televisions</a>
                    </li>
                    <li>
                      <a href="product-grids.html">best selling</a>
                    </li>
                    <li>
                      <a href="product-grids.html">top 100 offer</a>
                    </li>
                    <li>
                      <a href="product-grids.html">sunglass</a>
                    </li>
                    <li>
                      <a href="product-grids.html">watch</a>
                    </li>
                    <li>
                      <a href="product-grids.html">man’s product</a>
                    </li>
                    <li>
                      <a href="product-grids.html">Home Audio &amp; Theater</a>
                    </li>
                    <li>
                      <a href="product-grids.html">Computers &amp; Tablets </a>
                    </li>
                    <li>
                      <a href="product-grids.html">Video Games </a>
                    </li>
                    <li>
                      <a href="product-grids.html">Home Appliances </a>
                    </li>
                  </ul>
                </div>
                {/* End Mega Category Menu */}
                {/* Start Navbar */}
                <nav className="relative flex flex-wrap items-center content-between py-3 px-4 ">
                  <button
                    className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div
                    className="hidden flex-grow items-center sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul
                      id="nav"
                      className="flex flex-wrap list-reset pl-0 mb-0 ms-auto"
                    >
                      <li className="">
                        <a
                          href="index.html"
                          className="active"
                          aria-label="Toggle navigation"
                        >
                          Home
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="dd-menu collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-2"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Pages
                        </a>
                        <ul className="sub-menu hidden" id="submenu-1-2">
                          <li className="">
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li className="">
                            <a href="faq.html">Faq</a>
                          </li>
                          <li className="">
                            <a href="login.html">Login</a>
                          </li>
                          <li className="">
                            <a href="register.html">Register</a>
                          </li>
                          <li className="">
                            <a href="mail-success.html">Mail Success</a>
                          </li>
                          <li className="">
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <a
                          className="dd-menu collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-3"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Shop
                        </a>
                        <ul className="sub-menu hidden" id="submenu-1-3">
                          <li className="">
                            <a href="product-grids.html">Shop Grid</a>
                          </li>
                          <li className="">
                            <a href="product-list.html">Shop List</a>
                          </li>
                          <li className="">
                            <a href="product-details.html">shop Single</a>
                          </li>
                          <li className="">
                            <a href="cart.html">Cart</a>
                          </li>
                          <li className="">
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <a
                          className="dd-menu collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-4"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Blog
                        </a>
                        <ul className="sub-menu hidden" id="submenu-1-4">
                          <li className="">
                            <a href="blog-grid-sidebar.html">
                              Blog Grid Sidebar
                            </a>
                          </li>
                          <li className="">
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                          <li className="">
                            <a href="blog-single-sidebar.html">
                              Blog Single Sibebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <a href="contact.html" aria-label="Toggle navigation">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* navbar collapse */}
                </nav>
                {/* End Navbar */}
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 w-full">
              {/* Start Nav Social */}
              <div className="nav-social">
                <h5 className="title">Follow Us:</h5>
                <ul>
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
                      <i className="lni lni-skype" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Nav Social */}
            </div>
          </div>
        </div>
        {/* End Header Bottom */}
      </header>
      {/* End Header Area */}
      {/* Start Hero Area */}
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
      {/* End Shipping Info */}
      {/* Start Footer Area */}
      <footer className="footer">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container mx-auto sm:px-4">
            <div className="inner-content">
              <div className="flex flex-wrap ">
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 w-full">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="src/assets/images/logo/white-logo.svg"
                        alt="#"
                      />
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
        {/* End Footer Bottom */}
      </footer>
      {/*/ End Footer Area */}
      {/* ========================= scroll-top ========================= */}
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up" />
      </a>
    </>
  );
};

export default Home;
