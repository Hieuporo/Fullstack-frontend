import {
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { logOut } from "../../features/auth/authSlice";
import { useGetCategoriesQuery } from "../../features/home/homeApiSlice";
import { Category } from "../../types/index.type";

const Header = () => {
  const { data: categories } = useGetCategoriesQuery();

  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <header className="header navbar-area">
      {/* Start Topbar */}
      <div className="topbar">
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap  items-center">
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/3 w-full">
              <div className="top-left">
                <Link to={"/"} className="text-white text-base">
                  Hieu Shop
                </Link>
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
                {user ? (
                  <ul className="user-login ">
                    <li className="border-r text-white border-solid first:pr-3 last:mr-0 last:pr-0 last:border-r-[none]">
                      <div className="flex items-center">
                        <div className="mr-2">Hello {user.name}</div>
                        <UserCircleIcon className="h-5 w-5" />
                      </div>
                    </li>

                    <li className="border-none text-white">
                      <button onClick={logout}>Log out</button>
                    </li>
                  </ul>
                ) : (
                  <ul className="user-login ">
                    <li className="border-r border-solid first:pr-3 last:mr-0 last:pr-0 last:border-r-[none]">
                      <Link to="/login">Sign In</Link>
                    </li>
                    <li className="border-none">
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Topbar */}
      {/* Start Header Middle */}
      <div className="header-middle">
        <div className="container mx-auto sm:px-24">
          <div className="flex flex-wrap items-center justify-between">
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
            <div className={`lg:w-1/3 pr-4 pl-4 md:w-1/5 w-2/5`}>
              <div className={`middle-right-area`}>
                <div className="flex justify-center">
                  <div className={`nav-hotline ${user ? "ml-16" : " ml-28"}`}>
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

                  {user && (
                    <Link
                      to={"/user/checkout"}
                      className="navbar-cart mt-2 cursor-pointer"
                    >
                      <div className="cart-items">
                        <a className="main-btn flex items-center justify-center">
                          <ShoppingCartIcon className="m-2" />
                        </a>
                      </div>
                    </Link>
                  )}
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
                  {categories?.map((category: Category, i) => (
                    <li key={i}>
                      <div className="flex justify-center items-center">
                        <i
                          className="ml-4 w-8 h-8  bg-no-repeat"
                          style={{
                            backgroundImage: `url(${category.imageUrl})`,
                          }}
                        ></i>
                        <a>{category.name}</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Mega Category Menu */}
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
