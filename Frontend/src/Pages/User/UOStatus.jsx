import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UOStatus = () => {
  // Sample data for the user's order status table
  const userOrderStatusData = [
    { id: 1, name: 'Product A', email: 'productA@example.com', address: '123 Street, City', status: 'Shipped' },
    { id: 2, name: 'Product B', email: 'productB@example.com', address: '456 Street, City', status: 'Delivered' },
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

      {/* Order Status Heading */}
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Your Order Status
      </Typography>

      {/* Order Status Table */}
      <div style={{ marginTop: '20px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userOrderStatusData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default UOStatus;
