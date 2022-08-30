import React from "react";

import "./Products.css";
import Draft from "./draft";
import wedding from "./mockData/WeddingData";

const Wedding = () => {
  return (
    <Draft products={wedding} nameProduct="wedding" link="/suits/wedding/" />
  );
};

export default Wedding;
