import React from "react";

import { Box, Typography } from "@mui/material";

import "./AboutUs.css";
import { useTranslation } from "react-i18next";

// import banner1 from "../../assets/images/banner.jpg";

const AbotUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section>
        <div className="about-us-header">
          <Typography variant="h4">{t("aboutUs0")}</Typography>
          <img
            src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
          />
        </div>

        <Box className="img-txt-block2">
          <Box className="img-txt-mobile2">
            <Typography variant="h4">Daniel Hazard</Typography>
          </Box>
          <Box className="img-txt-inner2 visable2">
            <Typography variant="h4">Daniel Hazard</Typography>
            <Typography>{t("ourStoryChild2")}</Typography>
            <Typography>{t("aboutUs1")}</Typography>
          </Box>

          <Box>
            <img
              src="https://i.insider.com/53c7d58069bedd1337e10562?width=1061&format=jpeg"
              alt=""
            />
          </Box>
          <Box className="img-txt-mobile2">
            <Typography>{t("ourStoryChild2")}</Typography>
            <Typography>{t("aboutUs1")}</Typography>
          </Box>
        </Box>

        <Box className="img-txt-block2">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://i.insider.com/53c73c2669bedd0127f996b9?width=750&format=jpeg&auto=webp"
              alt=""
            />
          </Box>
          <Box className="img-txt-inner2">
            <Typography variant="h4">{t("excellentQuality")}</Typography>
            <Typography>{t("aboutUs2")}</Typography>
            <Typography>{t("aboutUs3")}</Typography>
          </Box>
        </Box>
      </section>
      <section className="section-2">
        <div>
          <Typography sx={{ textAlign: "center" }} variant="h3">
            {t("aboutUs4")}
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            {t("aboutUs5")}
          </Typography>
        </div>
        <div className="section-2-container">
          <div className="section-2-blocks">
            <img
              src="https://i.ibb.co/V92Tqh3/photo-2022-08-14-20-22-19.jpg"
              alt="suits"
            />
            <div className="section-2-inner1">
              <Typography variant="h4">01 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">{t("aboutUs6")}</Typography>
              </div>
            </div>
          </div>
          <div className="section-2-blocks">
            <img
              src="https://i.ibb.co/SrYC4Hm/photo-2022-08-14-20-22-37.jpg"
              alt="suits"
            />
            <div className="section-2-inner1">
              <Typography variant="h4">02 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">{t("aboutUs7")}</Typography>
              </div>
            </div>
          </div>
          <div className="section-2-blocks">
            <img
              src="https://i.ibb.co/ZHKz912/photo-2022-08-14-20-23-25.jpg"
              alt="suits"
            />
            <div className="section-2-inner1">
              <Typography variant="h4">03 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">{t("aboutUs8")}</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      {/* <section>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/5vyqRKW/banner.jpg"
            alt=""
          />
        </div>
      </section> */}
    </div>
  );
};

export default AbotUs;
