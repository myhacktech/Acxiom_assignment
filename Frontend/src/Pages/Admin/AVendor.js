import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AVendor = () => {
    
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

      {/* Membership Management */}
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6">Membership</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={() => console.log('Add Membership for Vendor')}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Update Membership for Vendor')}
        >
          Update
        </Button>
      </div>

      {/* Vendor Management */}
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6">Vendor Management</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={() => console.log('Add Vendor')}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Update Vendor')}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default AVendor;
