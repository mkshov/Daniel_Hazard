import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import "./Products.css";
import products from "./mockData/mockData";
import jackets from "./mockData/mockDataJackets";
import trousers from "./mockData/mockDataTrousers";

const Products = () => {
  const navigate = useNavigate();
  function randomArray(arr1, arr2, arr3, arr4, arr5) {
    const random1 = Math.floor(Math.random() * arr1.length);
    const random2 = Math.floor(Math.random() * arr2.length);
    const random3 = Math.floor(Math.random() * arr3.length);

    return [arr1[random1], arr2[random2], arr3[random3]];
  }
  const recommended = randomArray(products, jackets, trousers);
  return (
    <div style={{ marginBottom: "100px", marginTop: "200px" }}>
      <Typography
        style={{
          marginBottom: "70px",
          fontWeight: "bold",
          textAlign: "center",
        }}
        variant="h4"
      >
        Recommended Products
      </Typography>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {recommended.map((item) => (
          <div key={item.id} style={{ margin: "30px", width: "300px" }}>
            <div className="product-wrapper">
              <img className="product-img" src={item.image} alt={item.title} />
              <div className="middle">
                <Button
                  onClick={() =>
                    navigate(`/${item.route}/${item.route2}/${item.id}`)
                  }
                  className="main-button"
                >
                  hover me!
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