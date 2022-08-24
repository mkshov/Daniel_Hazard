import { Suspense, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { BackdropLoader } from "./Components";
import mainRoutes from "./routes/route";
import "./App.css";

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  let routes = useRoutes(mainRoutes);
  useScrollToTop();

  return (
    <>
      <CssBaseline />
      <Suspense fallback={<BackdropLoader />}>{routes}</Suspense>
    </>
  );
}

export default App;
