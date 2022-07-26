import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { BackdropLoader } from "./Components";
import mainRoutes from "./routes/route";
import "./App.css";
import { CssBaseline } from "@mui/material";

function App() {
  let routes = useRoutes(mainRoutes);

  return (
    <>
      <CssBaseline />
      <Suspense fallback={<BackdropLoader />}>{routes}</Suspense>
    </>
  );
}

export default App;
