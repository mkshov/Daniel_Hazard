import React from "react";
import jackets from "../mockData/JacketsData";
import Details from "./Details";

const JacketDetails = () => {
  return <Details productDetails={jackets} />;
};

export default JacketDetails;
