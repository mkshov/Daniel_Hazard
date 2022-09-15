import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTranslation } from "react-i18next";

const CustomAccordion = styled(Accordion)`
  border: none;
  box-shadow: none;
  border-top: 1px solid #8080804a;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  &:last-child {
    border-top: none;
    border-bottom: 1px solid #8080804a;
  }
`;

const MyAccordion = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded2, setExpanded2] = useState(false);
  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  return (
    <div>
      <CustomAccordion
        className="my-accordion"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded === false ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t("detailsSizeFit")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>{t("detailsSizeFitChild1")}</li>
            <li>{t("detailsSizeFitChild2")}</li>
            <li>{t("detailsSizeFitChild3")}</li>
            <li>{t("detailsSizeFitChild4")}</li>
          </ul>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion
        className="my-accordion"
        expanded={expanded2 === "panel1"}
        onChange={handleChange2("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded2 === false ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t("detailsMaterialCare")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>{t("detailsMaterialCareChild1")}</li>
            <li>{t("detailsMaterialCareChild2")}</li>
            <li>{t("detailsMaterialCareChild3")}</li>
          </ul>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
};

export default MyAccordion;
