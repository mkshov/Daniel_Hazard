import React from "react";
import "./Products.css";

import products from "./mockData";
import { Button, Typography } from "@mui/material";
const Products = () => {
  console.log(products);
  return (
    <div style={{ marginBottom: "100px", marginTop: "100px" }}>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((item) => (
          <div key={item.id} style={{ margin: "30px", width: "500px" }}>
            <div className="product-wrapper">
              <img
                className="product-img"
                style={{ width: "100%", height: "100%" }}
                src={item.image}
                alt=""
              />
              <div className="middle">
                <Button className="main-button">hover me!</Button>
              </div>
            </div>

            <div className="text">
              <Typography style={{ fontWeight: "300" }}>
                {item.title}
              </Typography>
              <Typography style={{ fontWeight: "300", letterSpacing: "1px" }}>
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
