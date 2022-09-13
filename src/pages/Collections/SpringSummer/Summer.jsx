import React from "react";

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Summer = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const summer = [
    {
      image:
        "https://i.shgcdn.com/2e7ba7d0-2408-41c0-bcab-13d6b683dbb0/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca sfoderata con tre bottoni, due tasche applicate e pantaloni scollati con coulisse in vita. Tagliato e cucito esclusivamente a mano da un esclusivo tessuto Daniel Hazard, in 52% lino, 41% lana e 7% seta.",
      text_en:
        "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unlined jacket with three buttons, two patch pockets, and unpleated trousers with a waist drawstring. Cut and sewn exclusively by hand from an exclusive Daniel Hazard textile, in 52% linen, 41% wool, and 7% silk.",
    },
    {
      image:
        "https://i.shgcdn.com/70aa2bb8-07df-4869-8d79-5dac3f8b17d1/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca destrutturata con tre bottoni, due tasche applicate e pantaloni con due pieghe e coulisse in vita. Tagliato e cucito esclusivamente a mano da un tessuto con un esclusivo motivo a scacchi Daniel Hazard, in 100% lino.",
      text_en:
        "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unstructured jacket with three buttons, two patch pockets, and trousers with two pleats and a waist drawstring. Cut and sewn exclusively by hand from a textile with an exclusive Daniel Hazard checkered pattern, in 100% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/b80ef40a-9f30-4048-882e-9a220784f67b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni conoscitore di eleganza senza tempo: una dinner jacket nera con rever a picco con un bottone e pantaloni con due pieghe, tagliati e cuciti interamente a mano in lana S’170.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a black, peak-lapel dinner jacket with one button and trousers with two pleats, cut and sewn entirely by hand in S’170 wool.",
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
        "https://i.shgcdn.com/355cd3c3-7dfe-455f-a269-99aa93d9ec8a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni intenditore di eleganza senza tempo: abito semi-foderato doppiopetto, tre bottoni, due tasche applicate e pantalone con due pinces. Tessuto esclusivo, molto leggero, estivo e confortevole con una raffinata miscela di fibre di lino e lana.",
      text_en:
        "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: double-breasted semi-lined suit, three buttons, two patch pockets, and trousers with two pleats. Exclusive textile, a very lightweight, summery, and comfortable with a refined blend of linen and wool fibers.",
    },
    {
      image:
        "https://i.shgcdn.com/d4053c26-0c9c-449e-81e5-c7f943f56961/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Un capolavoro essenziale nel guardaroba di ogni conoscitore di eleganza senza tempo: abito semi-foderato, tre bottoni, due tasche a bugnato e pantaloni con due pieghe. Tagliato e cucito interamente a mano da un tessuto con un esclusivo design Daniel Hazard, in lana 100% S’170.",
      text_en:
        "An essential masterpiece in the wardrobe of any connoisseur of timeless elegance: semi-lined suit, three buttons, two besom pockets, and slacks with two pleats. Cut and sewn entirely by hand from a textile with an exclusive Daniel Hazard design, in 100% S’170 wool.",
    },
    {
      image:
        "https://i.shgcdn.com/d579cbb0-e774-439c-a1bb-a94210829474/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text_it:
        "Una giacca doppiopetto eccezionale e completamente destrutturata con due tasche applicate e un taschino sul petto. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, esclusivo motivo pied de poule, caratterizzato da un interessante effetto tridimensionale, in 59% lino e 41% lana.",
      text_en:
        "An exceptional and completely unstructured double-breasted jacket with two patch pockets and a chest pocket. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, exclusive houndstooth pattern, characterised by an interesting three-dimensional effect, in 59% linen and 41% wool.",
    },
  ];
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography variant="h4">{t("summer")}</Typography>
        <img
          className="sp-img"
          src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </div>
      <div>
        {summer.map((item) => (
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
            onClick={() => navigate("/collections-spring-summer-2022/spring")}
            className="main-button"
          >
            {t("spring")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summer;
