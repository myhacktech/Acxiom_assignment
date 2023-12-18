import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you are using React Router
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const VStatusDetails = () => {
  // Sample data for the product status table
  const productStatusData = [
    { id: 1, name: 'Product A', email: 'productA@example.com', address: '123 Street, City', status: 'Active' },
    { id: 2, name: 'Product B', email: 'productB@example.com', address: '456 Street, City', status: 'Inactive' },
    // Add more items as needed
  ];

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

      {/* Product Status Table */}
      <div style={{ marginTop: '20px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productStatusData.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.email}</TableCell>
                  <TableCell>{product.address}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary">
                      <NavLink to={`/vendor/status/${product.id}`}>Update</NavLink>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default VStatusDetails;
