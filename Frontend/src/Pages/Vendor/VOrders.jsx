import React from "react";
import { Link, NavLink } from "react-router-dom"; // Assuming you are using React Router
import Button from "@mui/material/Button";

const VOrders = () => {
  // Sample data for ordered items
  const orderedItems = [
    { id: 1, itemName: "Product A", quantity: 2 },
    { id: 2, itemName: "Product B", quantity: 1 },
    { id: 3, itemName: "Product C", quantity: 3 },
    // Add more items as needed
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <h1>Requested Items</h1>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Logout
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {orderedItems.map((item) => (
            <NavLink to={`/vendor/order/${item.id}`}>
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <p>{item.itemName}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VOrders;
