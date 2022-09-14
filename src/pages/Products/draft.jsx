import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Tab, Tabs, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./Products.css";
import { useTranslation } from "react-i18next";

const Draft = (props) => {
  const { t } = useTranslation();

  const { nameProduct, products, link } = props;

  const categoryKey = `__dh:category-${nameProduct}`;

  const navigate = useNavigate();

  const categoryLocalStorage = localStorage.getItem(categoryKey);

  const [sortPrice, setSortPrice] = useState(categoryLocalStorage || "asc");

  const handleChange = (event, newValue) => {
    localStorage.setItem(categoryKey, newValue);
    setSortPrice(newValue);
  };

  const handleLinkDetails = (id) => () => {
    navigate(`${link}${id}`);
  };

  if (sortPrice === "asc") {
    products?.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sortPrice === "desc") {
    products?.sort((a, b) => (a.price > b.price ? -1 : 1));
  }

  return (
    <div>
      <Tabs value={sortPrice} onChange={handleChange} centered>
        <Tab label={t("lowToHigh")} value="asc" />
        <Tab label={t("highToLow")} value="desc" />
      </Tabs>
      <div className="card-container">
        {products.map((item) => (
          <div
            onClick={handleLinkDetails(item.id)}
            className="card"
            key={item.id}
          >
            <div className="product-wrapper">
              <img className="product-img" src={item.image} alt="" />
              <div className="middle">
                <Button
                  onClick={handleLinkDetails(item.id)}
                  className="main-button"
                >
                  <SearchIcon />
                </Button>
              </div>
            </div>

            <div className="text">
              <Typography sx={{ fontWeight: "300" }}>{item.title}</Typography>
              <Typography sx={{ fontWeight: "300", letterSpacing: "2px" }}>
                €{item.price}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Draft;
