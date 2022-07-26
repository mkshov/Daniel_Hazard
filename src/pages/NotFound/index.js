import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>Not Found 404</h1>
      <Button onClick={handleClick}>Home</Button>
    </>
  );
};

export default NotFound;
