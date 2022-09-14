import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import "./Products.css";
import products from "./mockData/SuitsData";
import jackets from "./mockData/JacketsData";
import trousers from "./mockData/TrousersData";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  function randomArray(arr1, arr2, arr3, arr4, arr5) {
    const random1 = Math.floor(Math.random() * arr1.length);
    const random2 = Math.floor(Math.random() * arr2.length);
    const random3 = Math.floor(Math.random() * arr3.length);

    return [arr1[random1], arr2[random2], arr3[random3]];
  }
  const recommended = randomArray(products, jackets, trousers);
  return (
    <div className="recommended">
      <Typography variant="h4">{t("recommendedProducts")}</Typography>
      <img
        src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        alt=""
      />
      <div className="recommended-container">
        {recommended.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/${item.route}/${item.route2}/${item.id}`)}
            className="recommended-block"
          >
            <div className="product-wrapper">
              <img className="product-img" src={item.image} alt={item.title} />
              <div className="middle">
                <Button
                  onClick={() =>
                    navigate(`/${item.route}/${item.route2}/${item.id}`)
                  }
                  className="main-button"
                >
                  {t("discoverMore")}
                </Button>
              </div>
            </div>

            <div className="text">
              <Typography sx={{ fontWeight: "300" }}>{item.title}</Typography>
              <Typography sx={{ fontWeight: "300", letterSpacing: "1px" }}>
                €{item.price}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
