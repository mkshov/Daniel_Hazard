import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import "./Header.css";
import { useScroll } from "./ScrollHook";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, List, ListItemButton } from "@mui/material";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { open, toggleSidebar } = props;
  const { scrollDirection } = useScroll();
  const [openList1, setOpenList1] = useState(false);
  const [openList2, setOpenList2] = useState(false);

  const handleClick = () => {
    setOpenList1(!openList1);
  };
  const handleClick2 = () => {
    setOpenList2(!openList2);
  };

  return (
    <>
      <div
        className={clsx("header-active", {
          // eslint-disable-next-line
          ["header-hidden"]: scrollDirection === "down",
        })}
      >
        <div className={open ? "sidebar sidebar--open" : "sidebar"}>
          <div className="sidebar-container">
            <List>
              <ListItemButton onClick={handleClick2}>
                <ListItemText primary="CLOTHING" />
                {openList2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link href="#">
                    <ListItemButton
                      onClick={() => {
                        toggleSidebar();
                        navigate("/clothing/jackets");
                      }}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary="Jackets" />
                    </ListItemButton>
                  </Link>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                      navigate("/clothing/trousers");
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="Trousers" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                onClick={() => {
                  toggleSidebar();
                }}
              >
                <ListItemText primary="COLLECTIONS" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  toggleSidebar();
                  navigate("/about-us");
                }}
              >
                <ListItemText primary="ABOUT US" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="SUITS" />
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
                    <ListItemText primary="Everyday" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleSidebar();
                    }}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="Wedding" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Link
                href="#"
                onClick={() => {
                  toggleSidebar();
                  navigate("/contacts-us");
                }}
              >
                <ListItemButton>
                  <ListItemText primary="CONTACTS US" />
                </ListItemButton>
              </Link>
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
