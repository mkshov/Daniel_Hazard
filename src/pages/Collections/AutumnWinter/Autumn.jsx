import React from "react";

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Autumn = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const autumn = [
    {
      image:
        "https://i.shgcdn.com/00bd526d-975f-4048-a505-2a16ebb14475/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, essenziale nel guardaroba di ogni conoscitore di eleganza senza tempo: un abito doppiopetto con sei bottoni e due tasche a taglio, e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Daniel Hazard, 93% lana e cashmere S’170.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a double-breasted suit with six buttons and two slash pockets, and trousers with two pleats. Sewn by hand in a very soft, fulled fabric with an exclusive Daniel Hazard design, 93% wool and S’170 cashmere.",
    },
    {
      image:
        "https://i.shgcdn.com/79d745ec-0ea7-41aa-b46d-ca4c109f8201/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni conoscitore di un'eleganza senza tempo: un abito a tre bottoni con due tasche a taglio, e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Daniel Hazard, 93% lana e cashmere S’170.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button suit featuring two slash pockets, and trousers with two pleats. Sewn by hand in a very soft, fulled fabric with an exclusive Daniel Hazard design, 93% wool and S’170 cashmere.",
    },
    {
      image:
        "https://i.shgcdn.com/d3d3bf30-79eb-4b4a-bfbd-dcdd7d50a98e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta, interamente destrutturata. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button jacket with two patch pockets and a barchetta pocket, entirely deconstructed. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
    },
    {
      image:
        "https://i.shgcdn.com/a8b5ab65-a5b0-4792-a809-fdcf758817c8/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Da un modello esclusivo disegnato da Daniel Hazard, una giacca a tre bottoni con tasche per biglietti e patta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
      text_en:
        "From an exclusive model designed by Daniel Hazard, a three-button jacket with ticket pockets and flaps. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
    },
    {
      image:
        "https://i.shgcdn.com/ef30c794-1134-46f9-9368-e70d3fea68e3/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di un'eleganza senza tempo: un abito a tre bottoni con due tasche e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Daniel Hazard, 93% lana e cashmere S’170.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button suit featuring two pockets, and trousers with two pleats. Sewn by hand in a very soft, fulled fabric with an exclusive Daniel Hazard design, 93% wool and S’170 cashmere.",
    },
    {
      image:
        "https://i.shgcdn.com/9bcb5915-d54c-4c4e-83d1-6ed9fbdf3f6a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
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
          {t("autumn")}
        </Typography>
        <img
          className="sp-img"
          src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </div>
      <div>
        {autumn.map((item) => (
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
              navigate("/collections-autumn-winter-2022-23/winter")
            }
            sx={{ textTransform: "uppercase" }}
            className="main-button"
          >
            {t("winter")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Autumn;
