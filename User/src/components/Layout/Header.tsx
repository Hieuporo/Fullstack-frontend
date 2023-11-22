import {
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <header className="header navbar-area">
      {/* Start Topbar */}
      <div className="topbar">
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap  items-center">
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 w-full">
              <div className="top-left">
                <h6 className="text-white">Hieu Pro</h6>
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
                  <div className="flex">
                    <div className="mr-2">Hello Hieu</div>
                    <UserCircleIcon className="h-5 w-5" />
                  </div>
                </div>
                <ul className="user-login ">
                  <li className="border-r border-solid first:pr-3 last:mr-0 last:pr-0 last:border-r-[none]">
                    <a>Sign In</a>
                  </li>
                  <li className="border-none">
                    <a>Register</a>
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
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap  items-center">
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/4 w-3/5">
              {/* Start Header Logo */}
              <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap w-48">
                <img src="src/assets/images/logo/logo.svg" alt="Logo" />
              </a>
              {/* End Header Logo */}
            </div>
            <div className="lg:w-2/5 pr-4 pl-4 md:w-3/5">
              {/* Start Main Menu Search */}
              <div className="main-menu-search">
                {/* navbar search start */}
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>

                {/* navbar search Ends */}
              </div>
              {/* End Main Menu Search */}
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/5 w-2/5">
              <div className="middle-right-area">
                <div className="nav-hotline">
                  <div className="flex items-center">
                    <div className="border border-solid border-1 border-gray-300 rounded-full mt-2 mr-3 w-10 h-10">
                      <PhoneIcon className="m-2 text-black" />
                    </div>
                    <h3>
                      Hotline:
                      <span>(+100) 123 456 7890</span>
                    </h3>
                  </div>
                </div>
                <div className="navbar-cart">
                  <div className="cart-items">
                    <a className="main-btn flex items-center justify-center">
                      <ShoppingCartIcon className="m-2" />
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
                            <a className="cart-img" href="product-details.html">
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
                            <a className="cart-img" href="product-details.html">
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
      <div className="container mx-auto sm:px-24 my-3">
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
              <nav className="relative my-2">
                <ul className="flex">
                  <li className="mx-4 text-black">
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li className="mx-4 text-black">
                    <a href="faq.html">Faq</a>
                  </li>
                  <li className="mx-4 text-black">
                    <a href="login.html">Login</a>
                  </li>
                  <li className="mx-4 text-black">
                    <a href="register.html">Register</a>
                  </li>
                  <li className="mx-4 text-black">
                    <a href="mail-success.html">Mail Success</a>
                  </li>
                  <li className="mx-4 text-black">
                    <a href="404.html">404 Error</a>
                  </li>
                </ul>
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
    </header>
  );
};

export default Header;
