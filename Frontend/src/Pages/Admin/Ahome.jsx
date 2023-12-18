import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you are using React Router
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Ahome = () => {
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

      {/* Welcome Message */}
      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Welcome, Admin
      </Typography>

      {/* Admin Actions */}
      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={() => console.log('Maintain Users')}
        >
          <NavLink to="/admin/users">Maintain Users</NavLink>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Maintain Vendors')}
        >
            <NavLink to="/admin/vendors">Maintain Vendors</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Ahome;
