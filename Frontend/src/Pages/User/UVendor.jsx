import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const UVendor = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <Button variant="contained" color="primary">
          Log Out
        </Button>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              Vendor Name:
            </Typography>
            <Typography color="text.secondary">Contact Details:</Typography>
          </CardContent>
          <Button variant="contained" color="primary">
            Action Button
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default UVendor;
