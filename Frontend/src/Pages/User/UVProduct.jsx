import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const UVProduct = () => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("Add to Cart button clicked");
  };
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <Button variant="contained" color="primary">
          Log Out
        </Button>
      </div>
      <div>Vendor Name:</div>
      <div>
        <h4>Products</h4>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Name:
              </Typography>
              <Typography color="text.secondary">Price: $</Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UVProduct;
