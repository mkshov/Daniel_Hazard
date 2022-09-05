import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import clsx from "clsx";

import "./Header.css";
// import { useScroll } from "./ScrollHook";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { List, ListItemButton } from "@mui/material";
import { useTranslation } from "react-i18next";

const Sidebar = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { open, toggleSidebar } = props;
  // const { scrollDirection } = useScroll();
  const [openList1, setOpenList1] = useState(false);
  const [openList2, setOpenList2] = useState(false);
  const [openList3, setOpenList3] = useState(false);

  const handleClick = () => {
    setOpenList1(!openList1);
  };
  const handleClick2 = () => {
    setOpenList2(!openList2);
  };
  const handleClick3 = () => {
    setOpenList3(!openList3);
  };

  return (
    <>
      <div
      // className={clsx("header-active", {
      //   // eslint-disable-next-line
      //   ["header-hidden"]: scrollDirection === "down",
      // })}
      >
        <div className={open ? "sidebar sidebar--open" : "sidebar"}>
          <div className="sidebar-container">
            <List>
              <ListItemButton onClick={handleClick2}>
                <ListItemText primary={t("clothing")} />
                {openList2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/clothing/jackets");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={t("jackets")} />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/clothing/trousers");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={t("trousers")} />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClick3}>
                <ListItemText primary={t("collections")} />
                {openList3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/collections-spring-summer-2022");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={t("springSummer")} />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/collections-autumn-winter-2022-23");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={t("autumnWinter")} />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                onClick={() => {
                  toggleSidebar();
                  navigate("/about-us");
                }}
              >
                <ListItemText primary={t("aboutUs")} />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary={t("suits")} />
                {/* <Typography variant="h5">CATEGORY</Typography> */}
                {openList1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/suits/everyday");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={t("everyday")} />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/suits/wedding");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={t("wedding")} />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                onClick={() => {
                  toggleSidebar();
                  navigate("/contacts-us");
                }}
              >
                <ListItemText primary={t("contactsUs")} />
              </ListItemButton>
            </List>
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
