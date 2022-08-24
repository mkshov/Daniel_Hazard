import React from "react";
import "./ContactsUs.css";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@mui/material";

const ContactsUs = () => {
  return (
    <div>
      <div className="contacts-background" />
      <div className="contacts">
        <div className="contacts-container">
          <div className="contacts-header">
            <Typography variant="h2">CONTACTS US</Typography>
            <Typography variant="h6">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Typography>
          </div>
          <div className="contacts-info">
            <div className="contacts-blocks">
              <LocationOnIcon sx={{ fontSize: "60px" }} />
              <Typography variant="h4">Adress</Typography>
              <Typography variant="h6">27 13 Lowe Haven</Typography>
            </div>
            <div className="contacts-blocks">
              <PhoneIphoneIcon sx={{ fontSize: "60px" }} />
              <Typography variant="h4">Phone</Typography>
              <Typography variant="h6">0755969400</Typography>
            </div>
            <div className="contacts-blocks">
              <EmailIcon sx={{ fontSize: "60px" }} />
              <Typography variant="h4">Email</Typography>
              <Typography variant="h6">danielhazard@info.com</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
