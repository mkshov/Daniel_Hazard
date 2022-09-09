import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Collections/Collections.css";

import { CardActionArea, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SpringSummer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const [clickCount, setClickCount] = useState(0);
  // function changeCount() {
  //   setClickCount(clickCount + 1);
  //   if (clickCount >= 1) {
  //     navigate("/collections-spring-summer-2022/spring");
  //   }
  // }
  return (
    <div className="spring-summer">
      <div>
        <div className="sp-sm-txt">
          <Typography sx={{ textTransform: "uppercase" }} variant="h4">
            {t("springSummer")}
          </Typography>
          <img
            src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
          />
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
              onClick={() => navigate("/collections-spring-summer-2022/spring")}
            >
              <img
                className="product-img2"
                src="https://i.shgcdn.com/aa74dc08-cbb6-43f2-aca2-c52dc8d57f98/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
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
              onClick={() => navigate("/collections-spring-summer-2022/summer")}
            >
              <img
                className="product-img2"
                src="https://i.shgcdn.com/d3d3bf30-79eb-4b4a-bfbd-dcdd7d50a98e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
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
