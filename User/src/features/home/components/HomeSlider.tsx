import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    url: "src/assets/images/hero/slider-bg1.jpg",
    caption: "M75 Sport Watch",
    des: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 100,
  },
  {
    url: "src/assets/images/hero/slider-bg2.jpg",
    caption: "Get the Best Deal on CCTV Camera",
    des: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 100,
  },
];

const HomeSlider = () => {
  return (
    <div className="slider-head">
      <div className="hero-slider">
        <Fade transitionDuration={1200} autoplay={true} duration={1000}>
          {slides.map((slide, index) => (
            <div
              className="single-slider"
              key={index}
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
            >
              <div className="content">
                <h2>
                  <span>No restocking fee</span>${slide.caption}
                </h2>
                <p>{slide.des}</p>
                <h3>
                  <span>Now Only</span> ${slide.price}
                </h3>
                <div className="button">
                  <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default HomeSlider;
