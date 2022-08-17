import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import "./Products.css";
import trousers from "./mockData/mockDataTrousers";

const Trousers = () => {
  const navigate = useNavigate();
  console.log(trousers);
  return (
    <div className="card-container">
      {trousers.map((item) => (
        <div className="card" key={item.id}>
          <div className="product-wrapper">
            <img className="product-img" src={item.image} alt="" />
            <div className="middle">
              <Button
                onClick={() => navigate(`/clothing/trousers/${item.id}`)}
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

export default Trousers;
