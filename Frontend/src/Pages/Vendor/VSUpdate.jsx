import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const VSUpdate = () => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdateStatus = () => {
    // Add your logic to update the status
    console.log(`Order status updated to: ${selectedStatus}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Logout
          </Button>
        </div>
      </div>

      {/* Status Update Section */}
      <div style={{ marginTop: '20px' }}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select value={selectedStatus} onChange={handleStatusChange}>
            <MenuItem value="Received">Received</MenuItem>
            <MenuItem value="Ready for Shipping">Ready for Shipping</MenuItem>
            <MenuItem value="Out for Delivery">Out for Delivery</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
          onClick={handleUpdateStatus}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default VSUpdate;
