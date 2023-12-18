import { Button } from '@mui/material'
import React from 'react'
import CartTable from './CartTable'

const UCart = () => {
  return (
    <div>
      <div className='header'>
        <Button variant='contained' color='primary'>Home </Button>
        <Button variant='contained' color='primary'>View Product</Button>
        <Button variant='contained' color='primary'>Request Item</Button>
        <Button variant='contained' color='primary'>Product Status</Button>
        <Button variant='contained' color='primary'>Log Out</Button>
      </div>
      <div>
        <h2>Shopping Cart</h2>
      </div>
      <div>
        <CartTable />
      </div>
    </div>
  )
}

export default UCart
