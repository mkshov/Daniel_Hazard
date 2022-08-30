import React from "react";

import "./Products.css";
import trousers from "./mockData/TrousersData";
import Draft from "./draft";

const Trousers = () => {
  return (
    <Draft
      products={trousers}
      nameProduct="trousers"
      link="/clothing/trousers/"
    />
  );
};

export default Trousers;
