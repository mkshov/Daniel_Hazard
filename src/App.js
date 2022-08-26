import { Suspense, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

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
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#c1a575",
      },
    },
  });
  let routes = useRoutes(mainRoutes);
  useScrollToTop();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<BackdropLoader />}>{routes}</Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
