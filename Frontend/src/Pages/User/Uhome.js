import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Uhome = () => {
  const [category, setCategory] = React.useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <div>Welcome User</div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="Vendor">Catering</MenuItem>
            <MenuItem value="User">Florist</MenuItem>
            <MenuItem value="User">Decoration</MenuItem>
            <MenuItem value="User">Lighting</MenuItem>
          </Select>
        </FormControl>
        <NavLink to="/user/cart">Cart</NavLink> <br />
        <NavLink to="/user/GuestList">GuestList</NavLink> <br />
        <NavLink to="/user/order">Order Status</NavLink> <br />
        <Button variant="outlined">Log out</Button>
      </div>
    </div>
  );
};

export default Uhome;
