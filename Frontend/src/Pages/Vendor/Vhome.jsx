import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Vhome = () => {
  return (
    <div>
      <h2>Welcome Vendor</h2>
      <NavLink to="/vendor/viewItems">View Items</NavLink>
      <NavLink to="/vendor/addItem">Add Item</NavLink>
      <NavLink to="/vendor/viewTransactions">View Transactions</NavLink>
      <Button>Log Out</Button>
    </div>
  );
};

export default Vhome;
