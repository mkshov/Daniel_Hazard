import React from "react";
import ReactSlickSlider from "react-slick";

const settings = {
  className: "slider",
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
};

const Slider = (props) => {
  const { children, ...rest } = props;

  return (
    <ReactSlickSlider {...settings} {...rest}>
      {children}
    </ReactSlickSlider>
  );
};

Slider.propTypes = {};

export default Slider;
