import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
export const ProductsPage = lazy(() => import("../pages/Products/Products"));
export const ProductDetails = lazy(() =>
  import("../pages/Products/Details/ProductDetails")
);
export const JacketDetails = lazy(() =>
  import("../pages/Products/Details/JacketDetails")
);
export const TrousersDetails = lazy(() =>
  import("../pages/Products/Details/TrousersDetails")
);
export const Jackets = lazy(() => import("../pages/Products/Jackets"));
export const Trousers = lazy(() => import("../pages/Products/Trousers"));
export const Recommended = lazy(() => import("../pages/Products/Recommended"));
export const AboutUs = lazy(() => import("../pages/AboutUs/AbotUs"));
export const ContactsUs = lazy(() => import("../pages/ContactsUs/ContactsUs"));
export const SpringSummer = lazy(() =>
  import("../pages/Collections/SpirngSummer")
);
