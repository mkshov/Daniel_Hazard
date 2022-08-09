import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import "./Header.css";
import { useScroll } from "./ScrollHook";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { open, toggleSidebar } = props;
  const { scrollDirection } = useScroll();

  return (
    <>
      <div
        className={clsx("header-active", {
          ["header-hidden"]: scrollDirection === "down",
        })}
      >
        <div className={open ? "sidebar sidebar--open" : "sidebar"}>
          <div className="sidebar-container">
            <li
              onClick={() => {
                toggleSidebar();
                navigate("/about-us");
              }}
            >
              ABOUT US
            </li>
            <li
              onClick={() => {
                toggleSidebar();
                navigate("/products");
              }}
            >
              SHOWROOM & SHOPS
            </li>
            <li
              onClick={() => {
                toggleSidebar();
              }}
            >
              COLLECTIONS
            </li>
            <li
              onClick={() => {
                toggleSidebar();
              }}
            >
              TIMELESS
            </li>
            <li
              onClick={() => {
                toggleSidebar();
              }}
            >
              MANUFACTURING
            </li>
          </div>
        </div>
        <div
          className={open ? "backdrop backdrop--open" : "backdrop"}
          onClick={toggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
