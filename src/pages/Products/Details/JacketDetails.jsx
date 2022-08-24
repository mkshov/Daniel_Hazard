import React from "react";
import { useParams } from "react-router-dom";
import jackets from "../mockData/mockDataJackets";
import { Recommended } from "pages";

import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Typography from "@mui/material/Typography";
import { Drawer, MyAccordion, ProductInfo } from "Components";

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

const JacketDetails = () => {
  const { id } = useParams();
  const jacket = jackets.find((item) => +item.id === +id);
  const random = Math.floor(Math.random() * 999999);

  const data = [jacket.image, jacket.image2, jacket.image3];
  console.log("data: ", data);
  const settings = {
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    fade: true,
    dotsClass: "slick-dots custom-indicator",
    customPaging: function (i) {
      return (
        <div>
          <img
            src={data[i]}
            alt=""
            style={{
              width: "100px",
              objectFit: "cover",
            }}
          />
        </div>
      );
    },
  };

  return (
    <div className="product">
      <div className="product-container">
        <Slider className="product-slider" {...settings}>
          {data.map((item) => (
            <div key={random}>
              <img className="product-slider-img" src={item} alt="" />
            </div>
          ))}
        </Slider>

        <div className="product-info">
          <div className="product-info2">
            <Typography
              sx={{ fontSize: { xs: "20px", sm: "25px" }, color: "#c1a575" }}
              variant="h5"
            >
              {jacket.title}
            </Typography>
            <div className="product-info2-2">
              <Typography
                sx={{
                  marginTop: "10px",
                  marginRight: "20px",
                  textDecoration: "line-through",
                  color: "gray",
                }}
                variant="h5"
              >
                €{jacket.price2}
              </Typography>
              <Typography sx={{ marginTop: "10px" }} variant="h5">
                €{jacket.price}
              </Typography>
            </div>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", marginBottom: "20px" }}
            >
              An upgraded classic suit designed for comfort and convenience.
            </Typography>
            <ul>
              <li>6-Way Stretch Fabric</li>
              <li>Wrinkle Resistant</li>
              <li>Stain Resistant</li>
              <li>Odor Resistant</li>
            </ul>
          </div>
          <div className="product-info3">
            <MyAccordion />
            <Typography sx={{ marginTop: "50px" }}>
              {jacket.description}
            </Typography>
            <Drawer />
          </div>
        </div>
      </div>
      <ProductInfo />
      <Recommended />
    </div>
  );
};

export default JacketDetails;
