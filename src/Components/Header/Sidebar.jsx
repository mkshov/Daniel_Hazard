import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { open, toggleSidebar } = props;

  return (
    <>
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
    </>
  );
};

export default Sidebar;
