import React from 'react'
import { Link, BrowserRouter, Routes,Route } from "react-router-dom";

//pages
import Index from './Pages/Index/Index';
import Login from './Pages/Login/Login';
import Vhome from './Pages/Vendor/Vhome';
import Vitem from './Pages/Vendor/Vitem';
import Uhome from './Pages/User/Uhome';
import UVendor from './Pages/User/UVendor';
import UVProduct from './Pages/User/UVProduct';
import UCart from './Pages/User/UCart';
import UCheckout from './Pages/User/UCheckout';
import VOrders from './Pages/Vendor/VOrders';
import VStatusDetails from './Pages/Vendor/VStatusDetails';
import VSUpdate from './Pages/Vendor/VSUpdate';
import UOStatus from './Pages/User/UOStatus';
import Ahome from './Pages/Admin/Ahome';
import AUser from './Pages/Admin/AUser';
import AVendor from './Pages/Admin/AVendor';
import VPUpdate from './Pages/Vendor/VPUpdate';


const RouteConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vendor" element={<Vhome />} />
            <Route path="/vendor/addItem" element={<Vitem />} />
            <Route path='/vendor/updateItem/:id' element={<VPUpdate />} />
            <Route path="/vendor/viewItems" element={<VOrders />} />
            <Route path="/vendor/viewTransactions" element={<VStatusDetails />} />
            <Route path="/vendor/status/:id" element={<VSUpdate />} />
            <Route path='/user' element={<Uhome />} />
            <Route path='/user/vendor' element={<UVendor />} />
            <Route path='/user/vendor/:id' element={<UVProduct/>} />
            <Route path='/user/cart' element={<UCart />} />
            <Route path="/user/orders" element={<UOStatus />} />
            <Route path='/user/checkout' element={<UCheckout />} />
            <Route path='/admin' element={<Ahome />} />
            <Route path='/admin/users' element={<AUser />} />
            <Route path='/admin/vendors' element={<AVendor />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteConfig
