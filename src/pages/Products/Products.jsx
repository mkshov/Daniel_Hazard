import { Button, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>MUI</h1>
      <Button
        style={{ marginTop: 20 }}
        size="small"
        onClick={() => setIsOpen((open) => !open)}
        endIcon={
          <IconButton>
            <AddIcon />
          </IconButton>
        }
      >
        Button
      </Button>
      <Collapse fullWidth in={isOpen} style={{ background: "green" }}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </Collapse>
    </div>
  );
};

export default Products;
