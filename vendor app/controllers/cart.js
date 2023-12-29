const mongoose = require("mongoose")


const User = require("../models/User")
const Item = require("../models/Item")
const Cart = require("../models/Cart")

exports.addCart=async(req,res)=>{
    try {
      // Get user ID from request object
    //   const itemId = req.user.id
  
      // Get all required fields from request body
      let {
        itemId
        
        
      //   whatYouWillLearn,
      //   price,
      //   tag: _tag,
      //   category,
      //   status,
      //   instructions: _instructions,
      } = req.body
     
      if (
        !itemId 
      ) {
        return res.status(400).json({
          success: false,
          message: "itemID is Mandatory",
        })
      }

      const item = await Item.findOne({ _id: itemId });


      const vendorId=item.vendor;
      const userId=req.user.id;
      const cart = await Cart.create({
        items:itemId,
        vendor:vendorId,
        
        user: req.user.id,
       
      })
      res.status(200).json({
        success: true,
        data: cart,
        message: "Item Added to cart Successfully",
      })
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to Add Item to cart",
        error: error.message,
      })
    }
  }