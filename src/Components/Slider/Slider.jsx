import React from "react";
import ReactSlickSlider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos sx={{ color: "#c1a575", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos sx={{ color: "#c1a575", fontSize: "45px" }} />
    </div>
  );
};
const settings = {
  className: "slider",
  dots: true,
  arrows: false,
  infinite: true,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
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
