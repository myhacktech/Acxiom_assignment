const mongoose = require("mongoose");
const User = require("../models/User")
const Item = require("../models/Item")

exports.getallVendors=async(req,res)=>{
    try {
        // const vendorId = req.user.id

      const allVendors = await User.find({ "accountType":   "Vendor" })
       
  
      return res.status(200).json({
        success: true,
        data: allVendors,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't Fetch vendor Data`,
        error: error.message,
      })
    }
  }

  
exports.getitemsbyVendor=async(req,res)=>{
    try {
        const {vendorId} = req.body;

      const itemsbyVendor = await Item.find({ "vendor":  vendorId })
       
  
      return res.status(200).json({
        success: true,
        data: itemsbyVendor,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't Fetch vendor Data`,
        error: error.message,
      })
    }
  }
  