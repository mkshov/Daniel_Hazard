import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hamburger from "hamburger-react";
import { Collapse } from "@mui/material";

import "./Header.css";
import { Sidebar } from "Components";

import { useTranslation } from "react-i18next";
import { useScroll } from "./ScrollHook";

export default function Header() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const handleLangChange = (e) => {
    if (currentLang === "en") {
      setCurrentLang("it");
      i18n.changeLanguage("it");
    } else {
      setCurrentLang("en");
      i18n.changeLanguage("en");
    }
  };
  const toggleSidebar = () => {
    setOpenSidebar((open) => !open);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const handleOpenShopMenu = () => {
    setIsOpenShopMenu(true);
    handleCloseSidebar();
  };

  const handleCloseShopMenu = () => {
    setIsOpenShopMenu(false);
  };

  // Show - hide header
  const { scrollDirection } = useScroll();

  //

  return (
    <Box sx={{ flexGrow: 1 }} onMouseLeave={handleCloseShopMenu}>
      <AppBar
        className={clsx("header-active", {
          ["header-hidden"]: scrollDirection === "down",
        })}
      >
        <Toolbar className="header">
          <Box
            onClick={() => {
              toggleSidebar();
              handleCloseShopMenu();
            }}
          >
            <Hamburger toggled={openSidebar} direction="right" size={30} />
          </Box>
          <Box className="header-logo">
            <img
              style={{ width: "165px" }}
              onClick={() => navigate("/")}
              onMouseEnter={handleCloseShopMenu}
              src="https://i.ibb.co/LhdTySj/1658673254367.png"
              alt="logo"
            />
          </Box>
          <Box className="header-routes holder">
            <Typography
              sx={{ textTransform: "uppercase", cursor: "pointer" }}
              onClick={handleLangChange}
              onMouseEnter={handleCloseShopMenu}
            >
              {currentLang}
            </Typography>
            <Box>
              <Typography
                className="header-route hover-underline-animation"
                onMouseOver={handleOpenShopMenu}
              >
                {t("shop")}
              </Typography>
            </Box>
            <Box onMouseEnter={handleCloseShopMenu}>
              <Typography className="header-route hover-underline-animation">
                {t("wedding")}
              </Typography>
            </Box>
            <Box onMouseEnter={handleCloseShopMenu}>
              <Typography className="header-route hover-underline-animation">
                {t("showrooms")}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
        <Collapse className="header-category" in={isOpenShopMenu}>
          <ul>
            <Box className="header-category-box">
              <Typography variant="h6">SUITS</Typography>
              <li>Everyday</li>
              <li>Wedding</li>
            </Box>
            <Box className="header-category-box">
              <Typography variant="h6">CLOTHING</Typography>
              <li>Shirts</li>
              <li>Trousers</li>
            </Box>
            <Box className="header-category-img">
              <img
                src="https://cdn.shopify.com/s/files/1/1383/8317/files/DSC8997-Edit_2000x.jpg?v=1646392533"
                alt="suit-img"
              />
            </Box>
          </ul>
        </Collapse>
      </AppBar>
      {<Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />}
    </Box>
  );
}
