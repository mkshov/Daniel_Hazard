import { useEffect, useState } from "react";

import { Fab } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "./main.css";

const MainLayout = (props) => {
  const [scrollTop, setScrollTop] = useState("scroll-top");
  const listenScrollEvent = () => {
    window.scrollY > 1400
      ? setScrollTop("scroll-top-active")
      : setScrollTop("scroll-top");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="content-wrap">{props.children}</div>
      <Fab
        className={scrollTop}
        sx={{ position: "fixed", bottom: "35px", right: "25px" }}
        color="primary"
        aria-label="add"
        href="#"
      >
        <KeyboardDoubleArrowUpIcon />
      </Fab>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
