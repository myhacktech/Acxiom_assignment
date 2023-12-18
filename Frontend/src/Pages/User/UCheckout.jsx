import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const UCheckout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phoneNumber: "",
    paymentMethod: "",
    state: "",
    pinCode: "",
  });

  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleOrderNow = () => {
    // Add your logic to handle the order submission
    // You may want to send this data to a server or navigate to a confirmation page

    // For this example, just open the success dialog
    setSuccessDialogOpen(true);
  };
  const handleSuccessDialogClose = () => {
    // Reset the form and close the success dialog
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      phoneNumber: "",
      paymentMethod: "",
      state: "",
      pinCode: "",
    });
    setSuccessDialogOpen(false);
  };

  const paymentMethods = ["UPI", "Cash", "Credit Card", "Debit Card", "Other"];
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Items Details
        </Typography>
        {/* Add your items details here */}

        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </Grid>
          <Grid container spacing={2}>
            {/* ... other form fields ... */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Payment Method"
                variant="outlined"
                fullWidth
                value={formData.paymentMethod}
                onChange={(e) => handleChange("paymentMethod", e.target.value)}
              >
                {paymentMethods.map((method) => (
                  <MenuItem key={method} value={method}>
                    {method}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              value={formData.state}
              onChange={(e) => handleChange("state", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pin Code"
              variant="outlined"
              fullWidth
              value={formData.pinCode}
              onChange={(e) => handleChange("pinCode", e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleOrderNow}
        >
          Order Now
        </Button>
      </Paper>
      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onClose={handleSuccessDialogClose}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your order was successful. Here are the details:
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            {/* Add other fields with similar structure */}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogClose} color="primary">
            Continue Shopping
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UCheckout;
