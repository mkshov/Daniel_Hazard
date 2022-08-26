import React from "react";

import "./Products.css";
import Draft from "./draft";
import products from "./mockData/mockData";

const Products = () => {
  return (
    <Draft products={products} nameProduct="suits" link="/suits/everyday/" />
  );
};

export default Products;
