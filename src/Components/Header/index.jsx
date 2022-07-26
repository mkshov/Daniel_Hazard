import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hamburger from "hamburger-react";

import "./Header.css";
import { Sidebar } from "Components";
import { Collapse } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();

  const [openSidebar, setOpenSidebar] = useState(false);

  const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar((open) => !open);
  };

  const handleOpenShopMenu = () => {
    setIsOpenShopMenu(true);
  };

  const handleCloseShopMenu = () => {
    setIsOpenShopMenu(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }} onMouseLeave={handleCloseShopMenu}>
      <AppBar position="fixed">
        <Toolbar className="header">
          <Box onClick={toggleSidebar}>
            <Hamburger toggled={openSidebar} direction="right" size={30} />
          </Box>
          {/* <Typography
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            variant="h4"
            component="div"
          >
            Daniel Hazard
          </Typography> */}
          <Box className="header-logo">
            <img
              style={{ width: "165px" }}
              onClick={() => navigate("/")}
              src="https://i.ibb.co/LhdTySj/1658673254367.png"
              alt=""
            />
          </Box>
          <Box className="header-routes holder">
            <Box>
              <Typography
                className="header-route"
                onMouseOver={handleOpenShopMenu}
              >
                SHOP
              </Typography>
            </Box>
            <Box onMouseEnter={handleCloseShopMenu}>
              <Typography className="header-route">WEDDING</Typography>
            </Box>
            <Box onMouseEnter={handleCloseShopMenu}>
              <Typography className="header-route">SHOWROOMS</Typography>
            </Box>
          </Box>
        </Toolbar>
        <Collapse in={isOpenShopMenu}>
          <ul style={{ textAlign: "center", color: "black" }}>
            <li>1asdasdasdasdas</li>
            <li>1asdasdasdasdasdasdasd</li>
            <li>1asdasdasdasdasdasd</li>
            <li>1asdasdasdasdsa</li>
          </ul>
        </Collapse>
      </AppBar>
      {<Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />}
    </Box>
  );
}
