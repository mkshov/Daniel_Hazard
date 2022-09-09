import React from "react";
import "./Footer.css";

import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClickFooterNavigate = (path) => () => {
    navigate(path);
  };
  return (
    // <div className="footer">
    <div className="footer-container">
      <section className="sections">
        <Typography variant="h6">DANIEL HAZARD</Typography>
        <div>
          <Typography
            onClick={handleClickFooterNavigate("/about-us")}
            variant="subtitle"
          >
            {t("aboutUsFooter")}
          </Typography>
          <Typography
            onClick={handleClickFooterNavigate("/contacts-us")}
            variant="subtitle"
          >
            {t("contactsUsFooter")}
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
          {t("ourProductsFooter")}
        </Typography>
        <div>
          <Typography
            onClick={handleClickFooterNavigate("/suits/everyday")}
            variant="subtitle"
          >
            {t("everyday")}
          </Typography>
          <Typography
            onClick={handleClickFooterNavigate("/suits/wedding")}
            variant="subtitle"
          >
            {t("wedding")}
          </Typography>
          <Typography
            onClick={handleClickFooterNavigate("/clothing/jackets")}
            variant="subtitle"
          >
            {t("jackets")}
          </Typography>
          <Typography
            onClick={handleClickFooterNavigate("/clothing/trousers")}
            variant="subtitle"
          >
            {t("trousers")}
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography variant="h6">{t("collections")}</Typography>
        <div>
          <Typography
            onClick={handleClickFooterNavigate(
              "/collections-spring-summer-2022"
            )}
            variant="subtitle"
          >
            {t("springSummer")}
          </Typography>
          <Typography
            onClick={handleClickFooterNavigate(
              "/collections-autumn-winter-2022-23"
            )}
            variant="subtitle"
          >
            {t("autumnWinter")}
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
          {t("followUsFooter")}
        </Typography>
        <div>
          <Typography variant="subtitle">Facebook</Typography>
          <Typography variant="subtitle">Twitter</Typography>
          <Typography variant="subtitle">Instagram</Typography>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default Footer;
