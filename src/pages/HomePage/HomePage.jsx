import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Slider } from "Components";

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    dots: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClickNavigate = (path) => () => {
    navigate(path);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Box>
      <Slider>
        <Box>
          <Box className="slide-1">
            <img alt="Background" src="/assets/HomePage/img1.jpg" />
            <Box className="slide-1-overlay">
              <Box
                data-aos="fade-center"
                data-aos-offset="200"
                data-aos-duration="500"
                className="slide-1-inner"
              >
                <Typography data-aos="fade-left" variant="h3">
                  {t("newCollection")}
                </Typography>
                <Typography data-aos="fade-left" variant="h5">
                  {t("springSummer")}
                </Typography>
                <Typography data-aos="fade-right" variant="h4">
                  {t("styleFrames")}
                </Typography>
                <Button
                  data-aos="fade-right"
                  className="main-button"
                  onClick={handleClickNavigate(
                    "/collections-spring-summer-2022"
                  )}
                  variant="outlined"
                  color="inherit"
                >
                  {t("discoverMore")}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="slide-2">
            <img alt="Background-2" src="/assets/HomePage/img2.jpg" />
            <Box className="slide-2-overlay">
              <Box className="slide-2-inner">
                <Typography variant="h3">{t("newCollection")}</Typography>
                <Typography variant="h5">{t("springSummer")}</Typography>
                <Button
                  onClick={handleClickNavigate(
                    "/collections-spring-summer-2022"
                  )}
                  className="main-button"
                  variant="outlined"
                  color="inherit"
                >
                  {t("discoverMore")}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Slider>

      <Box>
        <Box className="slide-1-inner-adaptive">
          <Box className="slide-1-inner-adaptive-box">
            <Typography variant="h3">{t("newCollection")}</Typography>
            <Typography variant="h5">{t("springSummer")}</Typography>
            <Typography variant="h4">{t("styleFrames")}</Typography>
            <Button
              className="main-button"
              onClick={handleClickNavigate("/collections-spring-summer-2022")}
              variant="outlined"
              color="inherit"
            >
              {t("discoverMore")}
            </Button>
          </Box>
        </Box>
        <Box className="txt-block1">
          <Box className="txt-block-inner">
            <Typography variant="h4">{t("findYourPerfectLook")}</Typography>
            <Typography variant="h6">
              {t("findYourPerfectLookChild")}
            </Typography>
          </Box>
        </Box>
        <Box className="img-wrapper-container">
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="/assets/HomePage/inner-img_1.jpg"
              alt="inner-img"
            />
            <div
              className="middle"
              onClick={handleClickNavigate("/suits/everyday")}
            >
              <Button className="main-button">{t("discoverMore")}</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="/assets/HomePage/inner-img_2.jpg"
              alt="inner-img"
            />
            <div
              className="middle"
              onClick={handleClickNavigate("/suits/everyday/256324324572")}
            >
              <Button className="main-button">{t("discoverMore")}</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="/assets/HomePage/inner-img_3.jpg"
              alt="inner-img"
            />
            <div
              className="middle"
              onClick={handleClickNavigate("/suits/everyday")}
            >
              <Button className="main-button">{t("discoverMore")}</Button>
            </div>
          </Box>
        </Box>

        {/* ------------------------------- */}

        <Box className="img-txt-block1">
          <Box className="img-txt-mobile">
            <Typography variant="h4">{t("excellentQuality")}</Typography>
          </Box>
          <Box className="img-txt-inner visable">
            <Typography variant="h4">{t("excellentQuality")}</Typography>
            <Typography>{t("excellentQualityChild1")}</Typography>
            <Typography>{t("excellentQualityChild2")}</Typography>
          </Box>

          <Box>
            <img src="/assets/HomePage/img3.jpg" alt="" />
          </Box>
          <Box className="img-txt-mobile">
            <Typography>{t("excellentQualityChild1")}</Typography>
            <Typography>{t("excellentQualityChild2")}</Typography>
          </Box>
        </Box>

        <Box className="img-txt-block1">
          <Box>
            <img src="/assets/HomePage/img4.jpg" alt="" />
          </Box>
          <Box className="img-txt-inner">
            <Typography variant="h4">{t("newModels")}</Typography>
            <Typography>{t("newModelsChild1")}</Typography>
            <Typography>{t("newModelsChild2")}</Typography>
          </Box>
        </Box>
        <div>
          <Slider {...settings}>
            <div className="slide-padding">
              <img
                width="100%"
                src="/assets/HomePage/carousel-img_1.jpg"
                alt=""
              />
            </div>
            <div className="slide-padding">
              <img
                width="100%"
                src="/assets/HomePage/carousel-img_2.jpg"
                alt=""
              />
            </div>
            <div className="slide-padding">
              <img
                width="100%"
                src="/assets/HomePage/carousel-img_3.jpg"
                alt=""
              />
            </div>
            <div className="slide-padding">
              <img
                width="100%"
                src="/assets/HomePage/carousel-img_4.jpg"
                alt=""
              />
            </div>

            <div className="slide-padding">
              <img
                width="100%"
                src="/assets/HomePage/carousel-img_5.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>

        {/* ----------------------------------- */}

        {/* History us start */}
        <Box className="history-block">
          <Box className="history-block-box1">
            <Box className="history-text1">
              <Box data-aos="fade-right" className="history-text1-inner">
                <Typography variant="h4">{t("brandHistory")}</Typography>
                <Typography variant="h6">{t("ourStoryChild1")}</Typography>
              </Box>
            </Box>
            <Box className="history-img">
              <Box
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="500"
                className="history-img-title"
              >
                <Typography variant="h3">{t("ourStory")}</Typography>
              </Box>
              <Box
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="500"
              >
                <img src="/assets/HomePage/heritage.jpg" alt="" />
              </Box>
            </Box>
          </Box>
          <Box className="history-text2">
            <Box
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="500"
              className="history-text2-container"
            >
              <Box
                className="history-text2-inner"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="500"
              >
                <Typography variant="h4">Daniel Hazard</Typography>
                <Typography variant="h6">{t("ourStoryChild2")}</Typography>
                <Button
                  onClick={handleClickNavigate("about-us")}
                  className="button-black"
                >
                  {t("discoverMore")}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* History us end */}
        <Box className="txt-block2">
          <Box className="txt-block-inner">
            <Typography variant="h3">{t("ourAchievements")}</Typography>
            <Typography variant="h6">{t("reviews")}</Typography>
          </Box>
        </Box>
        {/* <Box className="img-block">
          <Box className="img-block-inner">
            <Typography variant="subtitle2">
              Free shipping, Discount applied in cart
            </Typography>
            <Button className="button-white">hover me!</Button>
          </Box>
        </Box> */}

        {/* info us start */}
        <Box className="info-us">
          <Box
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
            className="info-us-blocks"
          >
            <img
              className="info-usImg1"
              src="/assets/HomePage/img5.jpg"
              alt=""
            />
            <Box>
              <Typography className="h4-txt1" variant="h4">
                {t("overSuitsInStock")}
              </Typography>
            </Box>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="500"
            className="info-us-blocks"
          >
            <img
              className="info-usImg1"
              src="/assets/HomePage/img6.svg"
              alt=""
            />
            <Box>
              <Typography
                sx={{ color: "#c1a575", fontWeight: "300", fontSize: "30px" }}
                variant="h4"
              >
                {t("starGoogleRating")}
              </Typography>
            </Box>
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="500"
            className="info-us-blocks"
          >
            <img
              className="info-usImg1"
              src="/assets/HomePage/img7.jpg"
              alt=""
            />
            <Box>
              <Typography
                sx={{ color: "#c1a575", fontWeight: "300", fontSize: "30px" }}
                variant="h4"
              >
                {t("over40YearsInBusiness")}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Info us end */}
      </Box>
    </Box>
  );
};

export default HomePage;
