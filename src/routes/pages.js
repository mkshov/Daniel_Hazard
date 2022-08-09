import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
export const ProductsPage = lazy(() => import("../pages/Products/Products"));
export const ProductDetails = lazy(() =>
  import("../pages/Products/ProductDetails")
);
export const AboutUs = lazy(() => import("../pages/AboutUs/AbotUs"));
