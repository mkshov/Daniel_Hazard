import React from "react";

import { Box, Button, CardActionArea, Typography } from "@mui/material";

import "./Collections.css";

const SpringSummer = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <div>
        <div
          style={{
            height: "25vh",
            background: "#c1a57570",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
            variant="h4"
          >
            SPRING - SUMMER 2022
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "100px",
          }}
        >
          <div
            className="product-wrapper"
            style={{ width: "45%", background: "#c1a575" }}
          >
            <CardActionArea>
              <img
                className="product-img"
                style={{ width: "100%" }}
                src="https://i.shgcdn.com/aa74dc08-cbb6-43f2-aca2-c52dc8d57f98/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""
              />
              <div className="middle">
                <Typography
                  sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }}
                  variant="h3"
                >
                  Spring 2022
                </Typography>
              </div>
            </CardActionArea>
          </div>

          <div
            className="product-wrapper"
            style={{ width: "45%", background: "#c1a575" }}
          >
            <CardActionArea>
              <img
                className="product-img"
                style={{ width: "100%" }}
                src="https://i.shgcdn.com/d3d3bf30-79eb-4b4a-bfbd-dcdd7d50a98e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""
              />
              <div className="middle">
                <Typography
                  sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }}
                  variant="h3"
                >
                  Summer 2022
                </Typography>
              </div>
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringSummer;
