import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import "./Index.css";

const NotFound = () => {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  return (
    <>
      <div className="not-found">
        <Typography variant="h2">404</Typography>
        <Typography variant="h4">Look like you're lost</Typography>
        <Typography variant="h5">
          the page you are looking for not avaible!
        </Typography>
        <Button onClick={goHome} className="main-button">
          Go to Home
        </Button>
      </div>
    </>
  );
};

export default NotFound;
