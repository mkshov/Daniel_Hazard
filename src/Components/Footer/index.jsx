import React from "react";
import "./Footer.css";

import { Typography } from "@mui/material";

const Footer = () => {
  return (
    // <div className="footer">
    <div className="footer-container">
      <section className="sections">
        <Typography variant="h6">DANIEL HAZARD</Typography>
        <div>
          <Typography variant="subtitle">Showrooms&Shops</Typography>
          <Typography variant="subtitle">Timeless</Typography>
          <Typography variant="subtitle">Contacts</Typography>
        </div>
      </section>
      <section className="sections">
        <Typography variant="h6">COLLECTIONS</Typography>
        <div>
          <Typography variant="subtitle">Fall/Winter 2022/23</Typography>
          <Typography variant="subtitle">Spring/Summer 2022</Typography>
        </div>
      </section>
      <section className="sections">
        <Typography variant="h6">CLIENTS</Typography>
        <div>
          <Typography variant="subtitle">Newsletter</Typography>
          <Typography variant="subtitle">Privacy Policy</Typography>
          <Typography variant="subtitle">Cookie Policy</Typography>
          <Typography variant="subtitle">Legal Notes</Typography>
          <Typography variant="subtitle">Term & Conditions</Typography>
        </div>
      </section>
      <section className="sections">
        <Typography variant="h6">FOLLOW US</Typography>
        <div>
          <Typography variant="subtitle">Facebook</Typography>
          <Typography variant="subtitle">Twitter</Typography>
          <Typography variant="subtitle">Instagram</Typography>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default Footer;
