import {
  AboutUs,
  ContactsUs,
  JacketDetails,
  Jackets,
  NotFoundPage,
  ProductDetails,
  Recommended,
  Trousers,
  TrousersDetails,
} from "pages";
import { HomePage, ProductsPage } from "./pages";
import MainLayout from "layouts/Main";
import WithOutFooter from "layouts/Main/WithOutFooter";

let routes = [
  {
    index: true,
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/suits/everyday",
    element: (
      <MainLayout>
        <ProductsPage />
      </MainLayout>
    ),
  },
  {
    path: "/suits/everyday/:id",
    element: (
      <MainLayout>
        <ProductDetails />
      </MainLayout>
    ),
  },
  {
    path: "/clothing/jackets",
    element: (
      <MainLayout>
        <Jackets />
      </MainLayout>
    ),
  },
  {
    path: "/clothing/jackets/:id",
    element: (
      <MainLayout>
        <JacketDetails />
      </MainLayout>
    ),
  },
  {
    path: "/clothing/trousers/:id",
    element: (
      <MainLayout>
        <TrousersDetails />
      </MainLayout>
    ),
  },
  {
    path: "/clothing/trousers",
    element: (
      <MainLayout>
        <Trousers />
      </MainLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    ),
  },
  {
    path: "/contacts-us",
    element: (
      <WithOutFooter>
        <ContactsUs />
      </WithOutFooter>
    ),
  },
  {
    path: "/recommended",
    element: (
      <MainLayout>
        <Recommended />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <WithOutFooter>
        <NotFoundPage />
      </WithOutFooter>
    ),
  },
];

export default routes;
