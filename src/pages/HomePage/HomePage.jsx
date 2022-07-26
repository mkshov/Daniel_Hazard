import React from "react";

import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";

import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Slider {...settings} className="slider">
        <Box>
          <Box className="slide-1">
            {/* https://ltdfoto.ru/images/2022/07/20/Picsart_22-07-20_13-44-44-292.jpg */}
            <img
              alt="Background"
              src="https://i.ibb.co/9bqj0SD/Picsart-22-07-20-13-44-44-292.jpg"
            />
            <Box className="slide-1-overlay">
              <Box className="slide-1-inner">
                <Typography variant="h3">New Collection</Typography>
                <Typography variant="h5">Fall Summer 2022/23</Typography>
                <Typography variant="h4">Style Frames</Typography>
                <Button variant="outlined" color="inherit">
                  DISCOVER MORE
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="slide-2">
            {/* https://ltdfoto.ru/images/2022/07/20/Picsart_22-07-20_13-56-52-904.jpg */}
            <img
              alt="Background-2"
              src="https://i.ibb.co/7gRVh4S/Picsart-22-07-20-13-56-52-904.jpg"
            />
            <Box className="slide-2-overlay">
              <Box className="slide-2-inner">
                <Typography variant="h3">New Collection</Typography>
                <Typography variant="h5">Fall Summer 2022/23</Typography>
                <Typography variant="h4">Style Frames</Typography>
                <Button variant="outlined" color="inherit">
                  DISCOVER MORE
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Slider>
      <Box>
        <Box className="slide-1-inner-adaptive">
          <Box className="slide-1-inner-adaptive-box">
            <Typography variant="h3">New Collection</Typography>
            <Typography variant="h5">Fall Summer 2022/23</Typography>
            <Typography variant="h4">Style Frames</Typography>
            <Button variant="outlined" color="inherit">
              DISCOVER MORE
            </Button>
          </Box>
        </Box>

        <Box className="img-wrapper-container">
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="https://cdn.shopify.com/s/files/1/1383/8317/products/halfcanvasstripedsuit_3_800x.jpg?v=1646212605"
              alt=""
            />
            <div className="middle">
              <Button>hover me!</Button>
              <button onClick={() => navigate("products")}></button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="https://cdn.shopify.com/s/files/1/1383/8317/products/beigesuit_9_800x.jpg?v=1614944367"
              alt=""
            />
            <div className="middle">
              <Button>hover me!</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img
              className="inner-img"
              src="https://cdn.shopify.com/s/files/1/1383/8317/products/madetoorderbespokegreysuit_piniparma_800x.jpg?v=1614766914"
              alt=""
            />
            <div className="middle">
              <Button>hover me!</Button>
            </div>
          </Box>
        </Box>

        <Box className="txt-block1">
          <Box className="txt-block-inner">
            <Typography variant="h4">FIND YOUR PERFECT LOOK</Typography>
            <Typography variant="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              necessitatibus tenetur cupiditate expedita placeat quas distinctio
              odio.
            </Typography>
          </Box>
        </Box>
        <Box className="img-block">
          <Box className="img-block-inner">
            <Typography variant="subtitle2">
              Free shipping, Discount applied in cart
            </Typography>
            <Button>hover me!</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
