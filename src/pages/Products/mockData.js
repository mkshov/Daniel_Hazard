const products = [
  {
    id: 1,
    title: "AUTS35_2_PUZLAC_S22MA07_M31",
    subTitle: "subTitle",
    description:
      "This suit’s vibrant forest green pairs perfectly with the color palettes of both Spring and Summer. Match it with a white shirt and colorful tie for a formal yet cheerful look, or, pair the suit with darker colors for a style that is cool and collected. This suit is finished with a classic notch-lapel collar and two-button closure, paired with 36’’ inseam, un-hemmed trousers. Tailored from our finest poly/rayon blend, this stylish yet comfortable suit can come in either a modern or slim fit. ",
    price: 1200,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_01_1600x.jpg?v=1643447214",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 2,
    title: "AUTS659_PUY3_S22MA41_N21",
    subTitle: "subTitle",
    description: "description",
    price: 1500,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS659-PUY3_S22MA41_N21_01_800x.jpg?v=1643358471",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 3,
    title: "AUSS109_PUSZ3_MWA84_D31",
    subTitle: "subTitle",
    description: "description",
    price: 1220,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUSS109-PUSZ3_MWA84_D31_01_800x.jpg?v=1632412570",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 4,
    title: "AUS30_PUZ3_S17WA20_B31",
    subTitle: "subTitle",
    description: "description",
    price: 1600,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUS30_PUZ3_S17WA20_B31_01_800x.jpg?v=1624368457",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 5,
    title: "AUS30_PUZ3_S19WA21_G19",
    subTitle: "subTitle",
    description: "description",
    price: 900,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUS30_PUZ3_S18WA06_A31_01_800x.jpg?v=1624368494",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 6,
    title: "AUTS35_PUZ3_APWA02_N24",
    subTitle: "subTitle",
    description: "description",
    price: 2400,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUS30_PUZ3_S18WA26_B21_01_800x.jpg?v=1624368527",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 7,
    title: "AUTX30_PUZ3_CAWWA02_B31",
    subTitle: "subTitle",
    description: "description",
    price: 3200,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUS30_PUZ3_S19WA21_G19_01_800x.jpg?v=1624368564",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 8,
    title: "AUTX30_PUZ3_CAWWA02_B31",
    subTitle: "subTitle",
    description: "description",
    price: 2240,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTX30_PUZ3_CAWWA02_B31_01_800x.jpg?v=1624368662",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 9,
    title: "AUTX30_PUZ3_CAWWA02_B31",
    subTitle: "subTitle",
    description: "description",
    price: 1235,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTX35_PUZ3_S8LA05_V21_01_800x.jpg?v=1624368700",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
  {
    id: 10,
    title: "AUTX30_PUZ3_CAWWA02_B31",
    subTitle: "subTitle",
    description: "description",
    price: 1225,
    image:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTX35_PUZ3_SPLA01_B22_01_800x.jpg?v=1624368737",
    image2:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_02_1600x.jpg?v=1643447213",
    image3:
      "https://cdn.shopify.com/s/files/1/0557/0350/3012/products/AUTS35_2_PUZ3LAC_S22MA07_M31_03_1600x.jpg?v=1643447212",
  },
];

export default products;
