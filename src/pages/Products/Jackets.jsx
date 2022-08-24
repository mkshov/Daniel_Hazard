import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import "./Products.css";
import jackets from "./mockData/mockDataJackets";
import { Select } from "Components";

const Jackets = () => {
  const navigate = useNavigate();
  console.log(jackets);
  return (
    <div className="card-container">
      {jackets.map((item) => (
        <div className="card" key={item.id}>
          <div className="product-wrapper">
            <img className="product-img" src={item.image} alt="" />
            <div className="middle">
              <Button
                onClick={() => navigate(`/clothing/jackets/${item.id}`)}
                className="main-button"
              >
                hover me!
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
  );
};

export default Jackets;
