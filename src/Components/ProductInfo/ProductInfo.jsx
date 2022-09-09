import React from "react";
import "./ProductInfo.css";

import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="info-component">
      <div className="info-component-txt">
        <Typography variant="h3">{t("theModern")}</Typography>
        <Typography variant="h5">
          {t("theModernChild1")} <br />
          {t("theModernChild2")}
        </Typography>
      </div>

      <div className="info-component-container">
        <div className="info-component-inner">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Nicht_waschen.svg/120px-Nicht_waschen.svg.png"
            alt=""
          />
          <Typography variant="subtitle3">{t("careIcon1")}</Typography>
          <Typography>{t("careIconChild1")}</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Nicht_bleichen_v2.svg/120px-Nicht_bleichen_v2.svg.png"
            alt=""
          />
          <Typography variant="subtitle3">{t("careIcon2")}</Typography>
          <Typography>{t("careIconChild2")}</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nicht_trommeltrocknen.svg/120px-Nicht_trommeltrocknen.svg.png"
            alt=""
          />
          <Typography variant="subtitle3">{t("careIcon3")}</Typography>
          <Typography>{t("careIconChild3")}</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/B%C3%BCgeln_1.svg/120px-B%C3%BCgeln_1.svg.png"
            alt=""
          />
          <Typography variant="subtitle3">{t("careIcon4")}</Typography>
          <Typography>{t("careIconChild4")}</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Professionelle_reinigung_%28P%29s.svg/120px-Professionelle_reinigung_%28P%29s.svg.png"
            alt=""
          />
          <Typography variant="subtitle3">{t("careIcon5")}</Typography>
          <Typography>{t("careIconChild5")}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
