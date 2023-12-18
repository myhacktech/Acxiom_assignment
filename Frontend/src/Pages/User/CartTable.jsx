import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const CartTable = ({ onRemoveItem }) => {
  const cartItems = [];
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const onDeleteAll = () => {
    console.log("Delete All clicked");
  };
  const onProceedToCheckout = () => {
    console.log("Proceed to Checkout clicked");
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: 50, maxHeight: 50 }}
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4} align="right">
              <strong>Grand Total:</strong>
            </TableCell>
            <TableCell>${grandTotal.toFixed(2)}</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={onDeleteAll}
              >
                Delete All
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onProceedToCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>
    </TableContainer>
  );
};

export default CartTable;
