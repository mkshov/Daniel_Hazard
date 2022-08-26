import React from "react";

import jackets from "./mockData/mockDataJackets";
import Draft from "./draft";

const Jackets = () => {
  return (
    <Draft products={jackets} nameProduct="jackets" link="/clothing/jackets/" />
  );
};

export default Jackets;
