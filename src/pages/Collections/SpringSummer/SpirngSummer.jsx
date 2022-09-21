import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Collections/Collections.css";

import { CardActionArea, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SpringSummer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClickNavigate = (path) => () => {
    navigate(path);
  };
  return (
    <div className="spring-summer">
      <div>
        <div className="sp-sm-txt">
          <Typography sx={{ textTransform: "uppercase" }} variant="h4">
            {t("springSummer")}
          </Typography>
          <img src="/assets/underline.jpg" alt="" />
        </div>
        <Typography
          id="sp-sm-mobile"
          sx={{ textAlign: "center", padding: "40px" }}
          variant="h4"
        >
          {t("spring")}
        </Typography>
        <div className="sp-sm-container">
          <div className="product-wrapper2 sp-sm-inner">
            <CardActionArea
              onClick={handleClickNavigate(
                "/collections-spring-summer-2022/spring"
              )}
            >
              <img
                className="product-img2"
                src="/assets/collections/spring-category.jpg"
                alt=""
              />

              <div className="middle2">
                <Typography
                  sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }}
                  variant="h3"
                >
                  {t("spring")} 2022
                </Typography>
              </div>
            </CardActionArea>
          </div>
          <Typography
            id="sp-sm-mobile"
            sx={{ textAlign: "center", padding: "40px" }}
            variant="h4"
          >
            {t("summer")}
          </Typography>
          <div className="product-wrapper2 sp-sm-inner">
            <CardActionArea
              onClick={handleClickNavigate(
                "/collections-spring-summer-2022/summer"
              )}
            >
              <img
                className="product-img2"
                src="/assets/collections/summer-category.jpg"
                alt=""
              />
              <div className="middle2">
                <Typography
                  sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }}
                  variant="h3"
                >
                  {t("summer")} 2022
                </Typography>
              </div>
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringSummer;
