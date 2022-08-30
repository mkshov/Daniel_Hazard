import React from "react";
import suits from "../mockData/SuitsData";

import Details from "./Details";

const SuitsDetails = () => {
  return <Details productDetails={suits} />;
};

export default SuitsDetails;
