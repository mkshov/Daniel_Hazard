import React from "react";

import "./Products.css";
import Draft from "./draft";
import suits from "./mockData/SuitsData";

const Products = () => {
  return <Draft products={suits} nameProduct="suits" link="/suits/everyday/" />;
};

export default Products;
