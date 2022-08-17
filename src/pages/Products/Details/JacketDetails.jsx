import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jackets from "../mockData/mockDataJackets";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Recommended } from "pages";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos sx={{ color: "#c1a575", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos sx={{ color: "#c1a575", fontSize: "45px" }} />
    </div>
  );
};
const JacketDetails = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { id } = useParams();
  const jacket = jackets.find((item) => +item.id === +id);
  const data = [jacket.image, jacket.image2, jacket.image3];
  const settings = {
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    fade: true,
    dotsClass: "slick-dots custom-indicator",
    customPaging: function (i) {
      return (
        <div>
          <img
            src={data[i]}
            alt=""
            style={{
              width: "100px",
              objectFit: "cover",
            }}
          />
        </div>
      );
    },
  };

  return (
    <div className="product">
      <div className="product-container">
        <Slider className="product-slider" {...settings}>
          {data.map((item) => (
            <div key={jacket.id}>
              <img className="product-slider-img" src={item} alt="" />
            </div>
          ))}
        </Slider>
        {/* <div className="product-tag">
          <img
            src="https://i.ibb.co/hXV983K/Picsart-22-08-09-16-01-36-695.jpg"
            alt="tag"
          />
        </div> */}
        <div className="product-info">
          <div className="product-info2">
            <Typography
              sx={{ fontSize: { xs: "20px", sm: "25px" }, color: "#c1a575" }}
              variant="h5"
            >
              {jacket.title}
            </Typography>
            <Typography sx={{ marginTop: "10px" }} variant="h5">
              €{jacket.price}
            </Typography>
          </div>
          <div className="product-info3">
            <Typography
              sx={{
                fontSize: "20px",
                padding: "20px",
              }}
            >
              {jacket.description}
            </Typography>
          </div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "33%", fontSize: "20px", flexShrink: 0 }}
              >
                General settings
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "20px" }}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "17px" }}>
                {jacket.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, fontSize: "20px" }}
              >
                Users
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "20px" }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "17px" }}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, fontSize: "20px" }}
              >
                Advanced settings
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "20px" }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "17px" }}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, fontSize: "20px" }}
              >
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "17px" }}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Recommended />
    </div>
  );
};

export default JacketDetails;
