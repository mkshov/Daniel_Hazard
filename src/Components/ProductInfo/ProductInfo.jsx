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
          <img src="/assets/productinfo/1.png" alt="" />
          <Typography variant="subtitle3">{t("careIcon1")}</Typography>
          <Typography>{t("careIconChild1")}</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/2.png" alt="" />
          <Typography variant="subtitle3">{t("careIcon2")}</Typography>
          <Typography>{t("careIconChild2")}</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/3.png" alt="" />
          <Typography variant="subtitle3">{t("careIcon3")}</Typography>
          <Typography>{t("careIconChild3")}</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/4.png" alt="" />
          <Typography variant="subtitle3">{t("careIcon4")}</Typography>
          <Typography>{t("careIconChild4")}</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/5.png" alt="" />
          <Typography variant="subtitle3">{t("careIcon5")}</Typography>
          <Typography>{t("careIconChild5")}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
