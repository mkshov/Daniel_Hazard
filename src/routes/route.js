import {
  AboutUs,
  SpringSummer,
  ContactsUs,
  JacketDetails,
  Jackets,
  NotFoundPage,
  ProductDetails,
  Trousers,
  TrousersDetails,
  Spring,
  Summer,
  HomePage,
  ProductsPage,
} from "pages";
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
    path: "/collections-spring-summer-2022",
    element: (
      <WithOutFooter>
        <SpringSummer />
      </WithOutFooter>
    ),
  },
  {
    path: "/collections-spring-summer-2022/spring",
    element: (
      <MainLayout>
        <Spring />
      </MainLayout>
    ),
  },
  {
    path: "/collections-spring-summer-2022/summer",
    element: (
      <MainLayout>
        <Summer />
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
