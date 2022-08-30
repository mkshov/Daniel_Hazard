import React from "react";

import jackets from "./mockData/JacketsData";
import Draft from "./draft";

const Jackets = () => {
  return (
    <Draft products={jackets} nameProduct="jackets" link="/clothing/jackets/" />
  );
};

export default Jackets;
