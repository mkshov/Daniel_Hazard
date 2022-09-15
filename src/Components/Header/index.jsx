import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import clsx from "clsx";

import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hamburger from "hamburger-react";
import { Collapse } from "@mui/material";

import "./Header.css";
import { Sidebar } from "Components";

import { useTranslation } from "react-i18next";
// import { useScroll } from "./ScrollHook";

export default function Header(props) {
  // const { scrollDirection } = useScroll();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);
  // console.log("isOpenShopMenu: ", isOpenShopMenu);
  const languageLocalStorage = localStorage.getItem("__dh:lang");

  const [currentLang, setCurrentLang] = useState(languageLocalStorage || "en");

  const handleLangChange = (e) => {
    if (currentLang === "en") {
      setCurrentLang("it");
      i18n.changeLanguage("it");
      localStorage.setItem("__dh:lang", "it");
    } else {
      setCurrentLang("en");
      i18n.changeLanguage("en");
      localStorage.setItem("__dh:lang", "en");
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

  const [navHeight, setNavHeight] = useState("height-active");
  const [navImage, setNavImage] = useState("image-active");

  const listenScrollEvent = () => {
    window.scrollY > 200
      ? setNavHeight("header")
      : setNavHeight("height-active");
    window.scrollY > 200 ? setNavImage("image") : setNavImage("image-active");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openSidebar]);

  const handleClickNavigate = (path) => (e) => {
    setIsOpenShopMenu(false);
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }} onMouseLeave={handleCloseShopMenu}>
      <AppBar
      // className={clsx("header-active", {
      //   // eslint-disable-next-line
      //   ["header-hidden"]: scrollDirection === "down",
      // })}
      >
        <Toolbar className={navHeight}>
          <Box
            className="hamburger"
            onClick={() => {
              toggleSidebar();
              handleCloseShopMenu();
            }}
          >
            <Hamburger toggled={openSidebar} direction="right" size={30} />
            <div className="border1"></div>
          </Box>

          <Box className="header-logo">
            <img
              onClick={() => {
                navigate("/");
                handleCloseSidebar();
              }}
              className={navImage}
              onMouseEnter={handleCloseShopMenu}
              src="/assets/HomePage/header-logo.png"
              alt="logo"
            />
          </Box>
          <div className="border3"></div>
          <Box className="header-routes holder">
            <Box
              sx={{
                height: "100%",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SearchIcon
                sx={{ fontSize: "30px" }}
                onMouseOver={handleOpenShopMenu}
              />
            </Box>
          </Box>
          <div className="border2"></div>
          <Box
            onClick={handleLangChange}
            sx={{ width: "55px", display: "flex", justifyContent: "center" }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              onMouseEnter={handleCloseShopMenu}
            >
              {currentLang}
            </Typography>
          </Box>
        </Toolbar>
        <Collapse className="header-category" in={isOpenShopMenu}>
          <ul>
            <Box className="header-category-box">
              <Typography variant="h6">{t("suits")}</Typography>
              <li onClick={handleClickNavigate("/suits/everyday")}>
                {t("everyday")}
              </li>
              <li onClick={handleClickNavigate("/suits/wedding")}>
                {t("wedding")}
              </li>
            </Box>
            <Box className="header-category-box">
              <Typography variant="h6">{t("clothing")}</Typography>
              <li onClick={handleClickNavigate("/clothing/jackets")}>
                {t("jackets")}
              </li>
              <li onClick={handleClickNavigate("/clothing/trousers")}>
                {t("trousers")}
              </li>
            </Box>

            <Box className="header-category-img">
              <img src="/assets/HomePage/category-img.jpg" alt="suit-img" />
            </Box>
          </ul>
        </Collapse>
      </AppBar>
      {<Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />}
    </Box>
  );
}
