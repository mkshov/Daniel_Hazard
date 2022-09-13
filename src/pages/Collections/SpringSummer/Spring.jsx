import React from "react";

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Spring = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const spring = [
    {
      image:
        "https://i.shgcdn.com/9579307a-db02-4418-afc8-6786508d967b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca sfoderata con tre bottoni, due tasche applicate e pantaloni scollati con coulisse in vita. Tagliato e cucito esclusivamente a mano da un esclusivo tessuto Daniel Hazard, in 52% lino, 41% lana e 7% seta.",
      text_en:
        "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unlined jacket with three buttons, two patch pockets, and unpleated trousers with a waist drawstring. Cut and sewn exclusively by hand from an exclusive Daniel Hazard textile, in 52% linen, 41% wool, and 7% silk.",
    },
    {
      image:
        "https://i.shgcdn.com/227da218-86f4-4be8-9d5a-05bc25cf63cc/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un'eccezionale giacca sfoderata con tre bottoni e due tasche applicate, basata su un modello esclusivo disegnato e creato da Daniel Hazard. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, in 55% cashmere, 25% seta e 20% lino.",
      text_en:
        "An exceptional, unlined jacket with three buttons and two patch pockets, based on an exclusive model designed and created by Daniel Hazard. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, in 55% cashmere, 25% silk, and 20% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/015dd1b9-4646-452b-ad2a-27a59a126590/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance, suitable for particularly humid climates: an unlined suit with three buttons and trousers with two pleats, fabric with Prince of Wales pattern, 71% wool, 15% silk, and 14% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/4ea2c6d8-8d25-4bae-a6de-d9666439bf4e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance, suitable for particularly humid climates: an unlined suit with three buttons and trousers with two pleats, fabric with Prince of Wales pattern, 71% wool, 15% silk, and 14% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/3b3f3633-f56a-4e8c-812a-9cf84d4e077d/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un'eccezionale giacca sfoderata con tre bottoni e due tasche applicate, basata su un modello esclusivo disegnato e creato da Daniel Hazard. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, in 70% cashmere, 17% seta e 13% lino.",
      text_en:
        "An exceptional, unlined jacket with three buttons and two patch pockets, based on an exclusive model designed and created by Daniel Hazard. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, in 70% cashmere, 17% silk, and 13% linen.",
    },
  ];
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography sx={{ textTransform: "uppercase" }} variant="h4">
          {t("spring")}
        </Typography>
        <img
          className="sp-img"
          src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </div>
      <div>
        {spring.map((item) => (
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
            onClick={() => navigate("/collections-spring-summer-2022/summer")}
            className="main-button"
          >
            {t("summer")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Spring;
