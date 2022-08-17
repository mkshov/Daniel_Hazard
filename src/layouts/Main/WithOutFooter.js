import { Header } from "Components";
import React from "react";

const WithOutFooter = (props) => {
  return (
    <>
      <Header />
      <div className="content-wrap">{props.children}</div>
    </>
  );
};

export default WithOutFooter;
