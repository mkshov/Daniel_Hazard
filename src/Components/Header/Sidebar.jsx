import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import clsx from "clsx";

import "./Header.css";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { List, ListItemButton, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const MyListItem = styled(ListItemButton)`
  padding: 0.7rem 2rem;
  border-bottom: solid rgba(40, 40, 40, 0.1) 1px;
  span {
    font-weight: bold;
  }
  &:hover {
    background-color: #c1a575;
  }
`;
const MyListItemCollapse = styled(ListItemButton)`
  background-color: #8080801c;
  border-bottom: solid rgba(40, 40, 40, 0.1) 1px;
  &:hover {
    background-color: #c1a575;
  }
`;
const MyListItemText = styled(ListItemText)`
  padding-left: 30px;
`;

const Sidebar = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { open, toggleSidebar } = props;
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
  const handleClickNavigate = (path) => () => {
    toggleSidebar();
    navigate(path);
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
              <MyListItem
                sx={{
                  padding: "0.7rem 2rem",
                  borderBottom: "solid rgba(40, 40, 40, 0.1) 1px",
                }}
                onClick={handleClick2}
              >
                <ListItemText primary={t("clothing")} />
                {openList2 ? <ExpandLess /> : <ExpandMore />}
              </MyListItem>
              <Collapse in={openList2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <MyListItemCollapse
                    onClick={handleClickNavigate("/clothing/jackets")}
                  >
                    <MyListItemText primary={t("jackets")} />
                  </MyListItemCollapse>
                </List>
                <List component="div" disablePadding>
                  <MyListItemCollapse
                    onClick={handleClickNavigate("/clothing/trousers")}
                  >
                    <MyListItemText primary={t("trousers")} />
                  </MyListItemCollapse>
                </List>
              </Collapse>
              <MyListItem onClick={handleClick3}>
                <ListItemText primary={t("collections")} />
                {openList3 ? <ExpandLess /> : <ExpandMore />}
              </MyListItem>
              <Collapse in={openList3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <MyListItemCollapse
                    onClick={handleClickNavigate(
                      "/collections-spring-summer-2022"
                    )}
                  >
                    <MyListItemText primary={t("springSummer")} />
                  </MyListItemCollapse>
                </List>
                <List component="div" disablePadding>
                  <MyListItemCollapse
                    onClick={handleClickNavigate(
                      "/collections-autumn-winter-2022-23"
                    )}
                  >
                    <MyListItemText primary={t("autumnWinter")} />
                  </MyListItemCollapse>
                </List>
              </Collapse>
              <MyListItem onClick={handleClickNavigate("/about-us")}>
                <ListItemText primary={t("aboutUs")} />
              </MyListItem>
              <MyListItem onClick={handleClick}>
                <ListItemText primary={t("suits")} />
                {/* <Typography variant="h5">CATEGORY</Typography> */}
                {openList1 ? <ExpandLess /> : <ExpandMore />}
              </MyListItem>
              <Collapse in={openList1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <MyListItemCollapse
                    onClick={handleClickNavigate("/suits/everyday")}
                  >
                    <MyListItemText primary={t("everyday")} />
                  </MyListItemCollapse>
                </List>
                <List component="div" disablePadding>
                  <MyListItemCollapse
                    onClick={handleClickNavigate("/suits/wedding")}
                  >
                    <MyListItemText primary={t("wedding")} />
                  </MyListItemCollapse>
                </List>
              </Collapse>
              <MyListItem onClick={handleClickNavigate("/contacts-us")}>
                <ListItemText primary={t("contactsUs")} />
              </MyListItem>
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
