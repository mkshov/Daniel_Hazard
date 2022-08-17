import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Tab, Tabs, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./Products.css";
import products from "./mockData/mockData";
const Products = () => {
  const navigate = useNavigate();

  // const random = Math.floor(Math.random() * 99999);
  // const LowToHigh = products?.sort((a, b) => (a.price > b.price ? 1 : -1));
  // console.log("LowToHigh: ", LowToHigh);
  // const HighToLow = products?.sort((a, b) => (a.price > b.price ? -1 : 1));
  // console.log("HighToLow: ", HighToLow);

  const [sortPrice, setSortPrice] = useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleChangeLow() {
    setSortPrice(true);
  }
  function handleChangeHigh() {
    setSortPrice(false);
  }

  if (sortPrice) {
    products?.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else {
    products?.sort((a, b) => (a.price > b.price ? -1 : 1));
  }
  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Low to High" onClick={handleChangeLow} />
        <Tab label="High to Low" onClick={handleChangeHigh} />
      </Tabs>
      <div className="card-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="product-wrapper">
              <img className="product-img" src={item.image} alt="" />
              <div className="middle">
                <Button
                  onClick={() => navigate(`/suits/everyday/${item.id}`)}
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

export default Products;
