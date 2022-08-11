import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Products.css";
import jackets from "./mockData/mockDataJackets";

const Jackets = () => {
  const navigate = useNavigate();
  console.log(jackets);
  return (
    <div style={{ marginBottom: "100px", color: "black !important" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Accordion sx={{ borderRadius: "0 !important" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {jackets.map((item) => (
          <div key={item.id} style={{ margin: "30px", width: "350px" }}>
            <div className="product-wrapper">
              <img
                className="product-img"
                style={{ width: "100%", height: "100%" }}
                src={item.image}
                alt=""
              />
              <div className="middle">
                <Button
                  onClick={() => navigate(`/clothing/jackets/${item.id}`)}
                  className="main-button"
                >
                  hover me!
                </Button>
              </div>
            </div>

            <div className="text">
              <Typography style={{ fontWeight: "300" }}>
                {item.title}
              </Typography>
              <Typography style={{ fontWeight: "300", letterSpacing: "1px" }}>
                €{item.price}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jackets;
