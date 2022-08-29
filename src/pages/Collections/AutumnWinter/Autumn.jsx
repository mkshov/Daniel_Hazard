import React from "react";

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Autumn = () => {
  const navigate = useNavigate();
  const autumn = [
    {
      image:
        "https://i.shgcdn.com/9579307a-db02-4418-afc8-6786508d967b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unlined jacket with three buttons, two patch pockets, and unpleated trousers with a waist drawstring. Cut and sewn exclusively by hand from an exclusive Cesare Attolini textile, in 52% linen, 41% wool, and 7% silk.",
    },
    {
      image:
        "https://i.shgcdn.com/9dbc0ee9-1ee1-4f79-89e7-33efec811d29/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab. Repudiandae, nobis. Consectetur, consequatur eaque impedit ipsam recusandae quos. Modi!",
    },
    {
      image:
        "https://i.shgcdn.com/015dd1b9-4646-452b-ad2a-27a59a126590/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci autem nesciunt reiciendis rerum praesentium dolor provident laborum. Quae officiis eveniet error similique cumque culpa aliquam omnis sint, eum est!",
    },
    {
      image:
        "https://i.shgcdn.com/4ea2c6d8-8d25-4bae-a6de-d9666439bf4e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance, suitable for particularly humid climates: an unlined suit with three buttons and trousers with two pleats, fabric with Prince of Wales pattern, 71% wool, 15% silk, and 14% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/3b3f3633-f56a-4e8c-812a-9cf84d4e077d/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "An exceptional, unlined jacket with three buttons and two patch pockets, based on an exclusive model designed and created by Cesare Attolini. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, in 70% cashmere, 17% silk, and 13% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/aa638f34-9a5f-4641-92e2-19eabcaa75e8/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "Cesare Attolini’s exclusive and timeless elegance is embodied in two informal garments. A long-sleeved crewneck sweater, characterised by an ultrafine springy thread in 85% cotton and 15% cashmere. Paired with a pair of white trousers with two pleats, in twill with a three-dimensional effect, in 70% cotton and 30% linen.",
    },
    {
      image:
        "https://i.shgcdn.com/b072dc43-a2f5-44a0-b3b8-5f5c336177e0/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium earum molestias corporis totam, eligendi delectus quae consequuntur eum accusantium fuga iusto vel at repudiandae consectetur ullam, et, laudantium odit.",
    },
    {
      image:
        "https://i.shgcdn.com/e472f309-3abc-47db-8b49-584ae839757f/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione mollitia quas eaque? Recusandae, voluptatem itaque ad dicta repellat nulla exercitationem fugiat? Nemo earum consequuntur reprehenderit a eaque voluptatem laboriosam minima, quibusdam facilis totam, cumque optio in nam itaque officiis!",
    },
    {
      image:
        "https://i.shgcdn.com/8698655c-5367-431f-b317-e7e4c20f5938/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      text: "Cesare Attolini’s exclusive and timeless elegance is embodied in two sporty garments.A bomber with a full frontal sipper, in water resistant technical fabric, with a contrasting knit cotton interior, made up of 51% polyamide, 42% polyester, and 7% elastane. Underneath, a short sleeved jersey, with contrasting edges, made from a 100% twisted cotton thread for a sensation of extreme coolness.",
    },
  ];
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography variant="h4">AUTUMN</Typography>
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
                {item.text}
              </Typography>
            </div>
          </div>
        ))}
        <div className="d-flex-j-content-c">
          <Button
            onClick={() =>
              navigate("/collections-autumn-winter-2022-23/winter")
            }
            className="main-button"
          >
            WINTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Autumn;
