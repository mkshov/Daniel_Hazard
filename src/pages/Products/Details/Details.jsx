import React from "react";
import { useParams } from "react-router-dom";
import { Recommended } from "pages";

import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Typography from "@mui/material/Typography";
import { Drawer, MyAccordion, ProductInfo } from "Components";
import { useTranslation } from "react-i18next";

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

const Details = (props) => {
  const { productDetails } = props;
  const { id } = useParams();
  const currentProduct = productDetails.find((item) => +item.id === +id);
  // console.log("currentProduct: ", currentProduct);
  const random = Math.floor(Math.random() * 999999);

  const { i18n, t } = useTranslation();

  const data = [
    currentProduct?.image,
    currentProduct?.image2,
    currentProduct?.image3,
  ];

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
              {currentProduct.title}
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
                €{currentProduct.price2}
              </Typography>
              <Typography sx={{ marginTop: "10px" }} variant="h5">
                €{currentProduct.price}
              </Typography>
            </div>
            <Typography
              variant="h6"
              sx={{ marginTop: "10px", marginBottom: "20px" }}
            >
              {t("details1")}
            </Typography>
            <ul>
              <li>{t("details2")}</li>
              <li>{t("details3")}</li>
              <li>{t("details4")}</li>
              <li>{t("details5")}</li>
            </ul>
          </div>
          <div className="product-info3">
            <MyAccordion />
            <Typography variant="h6" sx={{ marginTop: "50px" }}>
              {currentProduct[`description_${i18n.language}`]}
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

export default Details;
