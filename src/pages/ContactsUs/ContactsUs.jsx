import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Alert, TextField, Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LoadingButton from "@mui/lab/LoadingButton";

import "./ContactsUs.css";

const ContactsUs = () => {
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ffkn9jj",
        "template_9e9tkig",
        formRef.current,
        "b7MhDtuBxTDx_R8H9"
      )
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
        alert("FAILED...", error);
      });

    e.target.reset();
  };

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
              <Typography variant="h6">
                danielhazard.info
                <br />
                @gmail.com
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts-form">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contacts-form-inputs"
        >
          <Typography variant="h4" sx={{ color: "#c1a575" }}>
            Would you like to get in touch with us?
          </Typography>
          <Typography variant="h5">Please use the form below. </Typography>
          <Typography variant="h5">All fields are required.</Typography>
          <div className="contacts-form-inputs-inner">
            <Typography sx={{ marginTop: "40px" }} variant="h6">
              Name
            </Typography>
            <TextField
              required
              name="from_name"
              type="text"
              color="secondary"
              variant="outlined"
              placeholder="Name"
            />
            <Typography sx={{ marginTop: "20px" }} variant="h6">
              Email
            </Typography>
            <TextField
              required
              name="from_email"
              color="secondary"
              variant="outlined"
              placeholder="Email"
              type="email"
            />
            <Typography sx={{ marginTop: "20px" }} variant="h6">
              Message
            </Typography>
            <TextField
              required
              multiline
              name="message"
              rows={4}
              color="secondary"
              variant="outlined"
              placeholder="Your Message"
            />
            {success && (
              <Alert
                sx={{ marginTop: "20px" }}
                variant="outlined"
                severity="success"
              >
                This is a success alert — check it out!
              </Alert>
            )}
            <LoadingButton
              sx={{ marginTop: "20px", height: "50px" }}
              className="main-button"
              type="submit"
              value="Send Message"
              // loading={state.submitting}
            >
              Send
            </LoadingButton>
          </div>
        </form>
        <div className="contacts-form-img">
          <img
            src="https://i.shgcdn.com/a0445f7a-b90f-487e-b8cc-d8e2bd91dfd4/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
