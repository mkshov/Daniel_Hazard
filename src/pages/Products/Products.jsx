import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import "./Products.css";
import products from "./mockData";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginBottom: "100px", marginTop: "50px" }}>
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
                <Button
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="main-button"
                >
                  hover me!
                </Button>
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
