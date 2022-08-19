import { Typography } from "@mui/material";
import React from "react";

const ProductInfo = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h3">The Modern Man's Suit</Typography>
        <Typography variant="h5">
          Designed to solve all the problems of traditional suits. The xSuit is
          packed <br /> with technical features that redefine the standard of
          suiting.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: " center",
            width: "180px",
          }}
        >
          <img
            style={{ width: "45px", height: "45px" }}
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/wrinkle-resistant-icon.svg?v=110878991719424721611615231328"
            alt=""
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
            WRINKLE
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>RESISTANT</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "180px",
            alignItems: " center",
          }}
        >
          <img
            style={{ width: "45px", height: "45px" }}
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/stain-resistant.svg?v=32114696396743005611642174741"
            alt=""
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
            WRINKLE
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>RESISTANT</Typography>
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "180px",
            alignItems: " center",
          }}
        >
          <img
            style={{ width: "45px", height: "45px" }}
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/anti-fogging.svg?v=75705090807656891741615231025"
            alt=""
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
            WRINKLE
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>RESISTANT</Typography>
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "180px",
            alignItems: " center",
          }}
        >
          <img
            style={{ width: "45px", height: "45px" }}
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/breathable.svg?v=132009631671884563401615231039"
            alt=""
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
            WRINKLE
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>RESISTANT</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "180px",
            alignItems: " center",
          }}
        >
          <img
            style={{ width: "45px", height: "45px" }}
            src="https://cdn.shopify.com/s/files/1/2377/9671/t/298/assets/durable.svg?v=51795380404611245151615231046"
            alt=""
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
            WRINKLE
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>RESISTANT</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
