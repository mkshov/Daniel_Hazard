import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Alert, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LoadingButton from "@mui/lab/LoadingButton";

import "./ContactsUs.css";
import { useTranslation } from "react-i18next";

const ContactsUs = () => {
  const { t } = useTranslation();
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
            <Typography variant="h2">{t("contactsUs")}</Typography>
            <Typography variant="h6">{t("contactsUsText")}</Typography>
          </div>
          <div className="contacts-info">
            <div className="contacts-blocks">
              <EmailIcon sx={{ fontSize: "60px" }} />
              <Typography variant="h4">Email</Typography>
              <Typography variant="h6">danielhazard.info@gmail.com</Typography>
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
            {t("contactsUsText2")}
          </Typography>
          <Typography variant="h5">{t("contactsUsText3")} </Typography>
          <Typography variant="h5">{t("contactsUsText4")}</Typography>
          <div className="contacts-form-inputs-inner">
            <Typography sx={{ marginTop: "30px" }} variant="h6">
              {t("contactsUsText5")}
            </Typography>
            <TextField
              required
              name="from_name"
              type="text"
              color="secondary"
              variant="outlined"
              placeholder={t("contactsUsText5")}
              InputProps={{
                style: {
                  fontSize: "25px",
                },
              }}
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
              InputProps={{
                style: {
                  fontSize: "25px",
                },
              }}
            />
            <Typography sx={{ marginTop: "20px" }} variant="h6">
              {t("contactsUsText6")}
            </Typography>
            <TextField
              required
              multiline
              name="message"
              rows={4}
              color="secondary"
              variant="outlined"
              placeholder={t("contactsUsText7")}
            />
            {success && (
              <Alert
                sx={{ marginTop: "20px" }}
                variant="outlined"
                severity="success"
              >
                {t("contactsUsAlert")}
              </Alert>
            )}
            <LoadingButton
              sx={{
                marginTop: "20px",
                height: "50px",
                textTransform: "uppercase",
              }}
              className="main-button"
              type="submit"
              value="Send Message"
              // loading={state.submitting}
            >
              {t("contactsUsButton")}
            </LoadingButton>
          </div>
        </form>
        <div className="contacts-form-img">
          <img src="/assets/aboutus/contactsUs_2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
