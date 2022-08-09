import React from "react";

import { Box, Typography } from "@mui/material";

import "./AboutUs.css";

// import banner1 from "../../assets/images/banner.jpg";

const AbotUs = () => {
  return (
    <div>
      <section>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "40px",
              color: "#987F40",
            }}
          >
            <Typography variant="h4">WHO WE ARE?</Typography>
            <img
              style={{ marginTop: "20px" }}
              width={350}
              src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt=""
            />
          </div>
          <Box className="img-txt-block2">
            <Box className="img-txt-mobile2">
              <Typography variant="h4">Conscious garments</Typography>
            </Box>
            <Box className="img-txt-inner2 visable2">
              <Typography variant="h4">Conscious garments</Typography>
              <Typography>
                We have a wide range of garments, spanning from ancient mill
                producers Vitale Barberis Canonico and William Thomson to new
                vegan garment alternatives.
              </Typography>
              <Typography>
                55% of our garment collection comes from natural fibers such as
                honestly sourced cotton, linen, wool, cashmere and silk.
              </Typography>
            </Box>

            <Box>
              <img
                src="https://i.insider.com/53c7d58069bedd1337e10562?width=1061&format=jpeg"
                alt=""
              />
            </Box>
            <Box className="img-txt-mobile2">
              <Typography>
                We have a wide range of garments, spanning from ancient mill
                producers Vitale Barberis Canonico and William Thomson to new
                vegan garment alternatives.
              </Typography>
              <Typography>
                55% of our garment collection comes from natural fibers such as
                honestly sourced cotton, linen, wool, cashmere and silk.
              </Typography>
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
              <Typography variant="h4">Conscious garments</Typography>
              <Typography>
                We have a wide range of garments, spanning from ancient mill
                producers Vitale Barberis Canonico and William Thomson to new
                vegan garment alternatives.
              </Typography>
              <Typography>
                55% of our garment collection comes from natural fibers such as
                honestly sourced cotton, linen, wool, cashmere and silk.
              </Typography>
            </Box>
          </Box>
        </div>
      </section>
      <section>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/5vyqRKW/banner.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AbotUs;
