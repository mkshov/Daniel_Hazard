import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MyAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded2, setExpanded2] = useState(false);
  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };
  const [expanded3, setExpanded3] = useState(false);
  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded3(isExpanded ? panel : false);
  };
  const [expanded4, setExpanded4] = useState(false);
  const handleChange4 = (panel) => (event, isExpanded) => {
    setExpanded4(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded === false ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>SIZE & FIT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              We recommend using the Find My Size button and size chart to
              double-check your size{" "}
            </li>
            <li>Fit: Tailored - in between a standard and a slim fit </li>
            <li>
              Suit lengths are optimized for most people from 5'6" to 6'2"{" "}
            </li>
            <li>
              On average, our customers say it fits small so we recommend sizing
              up if you are between sizes{" "}
            </li>
            <li>
              Our suits can be tailored with the right expertise. Please use a
              tailor that is confident they are able to work with our materials
              and construction{" "}
            </li>
            <li>
              Tailored or altered garments won't be eligible for refunds or
              exchanges but are still covered by our 1-year warranty
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded2 === "panel1"}
        onChange={handleChange2("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded2 === false ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>MATERIALS & CARE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>5% polyester, 18% viscose, 7% elastane</li>
            <li>Dry clean only</li>
            <li>Iron only if necessary, use coolest setting possible</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded3 === "panel1"}
        onChange={handleChange3("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded3 === false ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>SHIPPING & RETURNS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }}>Shipping</Typography>
          <Typography sx={{ marginTop: "10px" }}>
            We offer free Priority Shipping for all US orders over $150. We also
            offer affordable rates for international shipping. Shipping times
            range from 4-7 business days depending on your location.
          </Typography>
          <Typography sx={{ marginTop: "20px" }}>
            International shipping charges do not include duties or taxes for
            applicable countries. You will need to pay the carrier at the time
            of delivery to release your order. Please note: If you refuse your
            package upon arrival, the shipping charges will be deducted from
            your refund.
          </Typography>
          <Typography sx={{ fontWeight: "bold", marginTop: "25px" }}>
            Shipping
          </Typography>
          <Typography sx={{ marginTop: "10px" }}>
            We offer 30 day exchanges and returns for items that are in new
            condition (unworn, unwashed, unaltered). Return shipping is free
            within the US. If you're returning from overseas, we ask that you
            cover that cost.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded4 === "panel1"}
        onChange={handleChange4("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded4 === false ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>WARRANTY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At xSuit, we stand behind the quality of our products 100%. We have
            a 1-year warranty period on all manufacturing issues. If you're
            unsure if it's wear and tear or a manufacturing issue, contact us
            and we'll be more than happy to help.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
