import React from "react";

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Winter = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const winter = [
    {
      image:
        "https://i.shgcdn.com/788465a1-b0e1-4684-b67f-91bbe79453ed/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un cappotto esclusivo, tre bottoni, due tasche applicate con patta e martingala posteriore. Cucito a mano in un esclusivo quattro fili 100% cashmere. Un filo di maglieria di alta qualità, morbido e leggero.",
      text_en:
        "An exclusive coat, three buttons, two patch pockets with flaps, and rear martingale. Sewn by hand in an exclusive four-thread 100% cashmere. A high quality, soft, and lightweight knitwear thread.",
    },
    {
      image:
        "https://i.shgcdn.com/74397b6a-9240-4486-8ab1-2ab4cd4f784a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un esclusivo cappotto a quattro bottoni con tasche, interamente sfoderato, cucito a mano con doppio trattamento waterproof. 100% cashmere, esclusivo tessuto per maglieria super soft, adatto per capi interamente sfoderati.",
      text_en:
        "An exclusive four-button coat with pockets, entirely unlined, sewn by hand with a double waterproof treatment. 100% cashmere, exclusive super soft knitwear fabric, suitable for entirely unlined garments.",
    },
    {
      image:
        "https://i.shgcdn.com/2217576c-3c6a-4cb7-8475-312fe9152145/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un esclusivo overshirt con quattro tasche applicate e alette Safari. Caratterizzato da un tessuto accoppiato in cotone e cashmere. Cucita interamente a mano ed estremamente morbida al tatto.",
      text_en:
        "An exclusive overshirt with four patch pockets and Safari flaps. Featuring a coupled fabric in cotton and cashmere. Sewn entirely by hand and extremely soft to the touch.",
    },
    {
      image:
        "https://i.shgcdn.com/924530b2-5dc4-46fd-a4d1-f04e7d357159/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button jacket with two patch pockets and a barchetta pocket. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
    },
  ];
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography sx={{ textTransform: "uppercase" }} variant="h4">
          {t("winter")} 2023
        </Typography>
        <img
          className="sp-img"
          src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </div>
      <div>
        {winter.map((item) => (
          <div key={item.image} style={{ textAlign: "center" }}>
            <img style={{ width: "100%" }} src={item.image} alt="" />
            <div>
              <Typography variant="h6" sx={{ padding: "50px" }}>
                {item[`text_${i18n.language}`]}
              </Typography>
            </div>
          </div>
        ))}
        <div className="d-flex-j-content-c">
          <Button
            onClick={() =>
              navigate("/collections-autumn-winter-2022-23/autumn")
            }
            sx={{ textTransform: "uppercase" }}
            className="main-button"
          >
            {t("autumn")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Winter;
