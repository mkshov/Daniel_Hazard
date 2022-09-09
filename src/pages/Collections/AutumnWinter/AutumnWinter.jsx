import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Collections/Collections.css";

import { CardActionArea, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AutumnWinter = () => {
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
          <Typography variant="h4">{t("autumnWinter")}</Typography>
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
          {t("autumn")}
        </Typography>
        <div className="sp-sm-container">
          <div className="product-wrapper2 sp-sm-inner">
            <CardActionArea
              onClick={() =>
                navigate("/collections-autumn-winter-2022-23/autumn")
              }
            >
              <img
                className="product-img2"
                src="https://i.shgcdn.com/014d510f-2811-4920-bf05-ef9fa3d70662/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""
              />

              <div className="middle2">
                <Typography
                  sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }}
                  variant="h3"
                >
                  {t("autumn")} 2022
                </Typography>
              </div>
            </CardActionArea>
          </div>
          <Typography
            id="sp-sm-mobile"
            sx={{ textAlign: "center", padding: "40px" }}
            variant="h4"
          >
            {t("winter")}
          </Typography>
          <div className="product-wrapper2 sp-sm-inner">
            <CardActionArea
              onClick={() =>
                navigate("/collections-autumn-winter-2022-23/winter")
              }
            >
              <img
                className="product-img2"
                src="https://i.shgcdn.com/174d7582-8d0c-4581-a277-6dd3b0fd9743/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""
              />
              <div className="middle2">
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "uppercase",
                  }}
                  variant="h3"
                >
                  {t("winter")} 2023
                </Typography>
              </div>
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutumnWinter;
