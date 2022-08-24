import React from "react";
import "./ProductInfo.css";

import { Typography } from "@mui/material";

const ProductInfo = () => {
  return (
    <div className="info-component">
      <div className="info-component-txt">
        <Typography variant="h3">The Modern Man's Suit</Typography>
        <Typography variant="h5">
          Designed to solve all the problems of traditional suits. The xSuit is
          packed <br /> with technical features that redefine the standard of
          suiting.
        </Typography>
      </div>

      <div className="info-component-container">
        <div className="info-component-inner">
          <img
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/wrinkle-resistant-icon.svg?v=110878991719424721611615231328"
            alt=""
          />
          <Typography variant="subtitle3">WRINKLE</Typography>
          <Typography>RESISTANT</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/stain-resistant.svg?v=32114696396743005611642174741"
            alt=""
          />
          <Typography variant="subtitle3">WRINKLE</Typography>
          <Typography>RESISTANT</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/anti-fogging.svg?v=75705090807656891741615231025"
            alt=""
          />
          <Typography variant="subtitle3">WRINKLE</Typography>
          <Typography>RESISTANT</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/breathable.svg?v=132009631671884563401615231039"
            alt=""
          />
          <Typography variant="subtitle3">WRINKLE</Typography>
          <Typography>RESISTANT</Typography>
        </div>
        <div className="info-component-inner">
          <img
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/durable.svg?v=51795380404611245151615231046"
            alt=""
          />
          <Typography variant="subtitle3">WRINKLE</Typography>
          <Typography>RESISTANT</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
