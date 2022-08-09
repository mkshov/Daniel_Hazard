import { AboutUs, NotFoundPage, ProductDetails } from "pages";
import { HomePage, ProductsPage } from "./pages";
import MainLayout from "layouts/Main";

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
    path: "/products",
    element: (
      <MainLayout>
        <ProductsPage />
      </MainLayout>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <MainLayout>
        <ProductDetails />
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
    path: "*",
    element: (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
  },
];

export default routes;
