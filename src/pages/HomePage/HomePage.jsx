import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { Slider } from "Components";

import Heritage from "assets/images/heritage.jpg";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
    // autoplaySpeed: 6000,
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

  return (
    <Box>
      <Slider>
        <Box>
          <Box className="slide-1">
            <img
              alt="Background"
              src="https://i.ibb.co/9bqj0SD/Picsart-22-07-20-13-44-44-292.jpg"
            />
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
                  onClick={() => navigate(`/collections-spring-summer-2022`)}
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
            <img
              alt="Background-2"
              src="https://i.ibb.co/7gRVh4S/Picsart-22-07-20-13-56-52-904.jpg"
            />
            <Box className="slide-2-overlay">
              <Box className="slide-2-inner">
                <Typography variant="h3">{t("newCollection")}</Typography>
                <Typography variant="h5">{t("autumnWinter")}</Typography>
                <Button
                  onClick={() => navigate(`/collections-autumn-winter-2022-23`)}
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
              onClick={() => navigate(`/collections-spring-summer-2022`)}
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
              src="https://cdn.shopify.com/s/files/1/1383/8317/products/halfcanvasstripedsuit_3_800x.jpg?v=1646212605"
              alt=""
            />
            <div className="middle">
              <Button className="main-button">{t("discoverMore")}</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="https://cdn.shopify.com/s/files/1/1383/8317/products/beigesuit_9_800x.jpg?v=1614944367"
              alt=""
            />
            <div
              className="middle"
              onClick={() => navigate("/suits/everyday/256324324572")}
            >
              <Button className="main-button">{t("discoverMore")}</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="https://cdn.shopify.com/s/files/1/1383/8317/products/madetoorderbespokegreysuit_piniparma_800x.jpg?v=1614766914"
              alt=""
            />
            <div className="middle">
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
            <img
              src="https://canvas-static.suitopia.com/website/img/startpage/startpage-conscious-garments.8de1e36dbe50.jpeg"
              alt=""
            />
          </Box>
          <Box className="img-txt-mobile">
            <Typography>{t("excellentQualityChild1")}</Typography>
            <Typography>{t("excellentQualityChild2")}</Typography>
          </Box>
        </Box>

        <Box className="img-txt-block1">
          <Box>
            <img
              src="https://canvas-static.suitopia.com/website/img/startpage/startpage-perfect-fit-guarantee.3bf14753a328.jpg"
              alt=""
            />
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
                src="https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/CMP47_1.jpg"
                alt=""
              />
            </div>
            <div className="slide-padding">
              <img
                width="100%"
                src="https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Suits/default/P6383_1.jpg"
                alt=""
              />
            </div>
            <div className="slide-padding">
              <img
                width="100%"
                src="https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Winter/P6133_1.jpg"
                alt=""
              />
            </div>
            <div className="slide-padding">
              <img
                width="100%"
                src="https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Winter/P6159_1.jpg"
                alt=""
              />
            </div>

            <div className="slide-padding">
              <img
                width="100%"
                src="https://cdn.suitsupply.com/image/upload/ar_10:22,b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/Suits/default/C6666-S2_1.jpg"
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
            <Box className="history-img" style={{ overflowX: "hidden" }}>
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
                <img src={Heritage} alt="" />
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
                  onClick={() => navigate("/about-us")}
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
        <Box className="info-us" style={{ overflowX: "hidden" }}>
          <Box
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
            className="info-us-blocks"
          >
            <img
              style={{ width: "111px", height: "111px", marginBottom: "30px" }}
              src="	https://cdn.shopify.com/s/files/1/0261/4765/1638/files/Group561_small.png?v=1648817217"
              alt=""
            />
            <Box>
              <Typography
                style={{
                  color: "#c1a575",
                  fontWeight: "300",
                  fontSize: "30px",
                }}
                variant="h4"
              >
                {t("overSuitsInStock")}
              </Typography>
            </Box>
          </Box>
          <Box
            // style={{ overflowX: "hidden" }}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="500"
            className="info-us-blocks"
          >
            <img
              style={{ width: "111px", height: "111px", marginBottom: "30px" }}
              src="//cdn.shopify.com/s/files/1/0261/4765/1638/files/Group563_small_d7c935cc-bfc4-4f5a-858c-258044903d03_small.webp?v=1652186680"
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
            // style={{ overflowX: "hidden" }}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="500"
            className="info-us-blocks"
          >
            <img
              style={{ width: "130px", height: "111px", marginBottom: "30px" }}
              src="	https://cdn.shopify.com/s/files/1/0261/4765/1638/files/image10_small.png?v=1648817335"
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
