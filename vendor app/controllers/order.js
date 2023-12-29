const mongoose = require("mongoose")


const User = require("../models/User")
const Order = require("../models/Order")

const Item = require("../models/Item")
const Cart = require("../models/Cart")
exports.orderItem=async(req,res)=>{
    try {
      
    
        // Get all required fields from request body
        let {
          cartId,
          address,
          payment

          
          
        //   whatYouWillLearn,
        //   price,
        //   tag: _tag,
        //   category,
        //   status,
        //   instructions: _instructions,
        } = req.body
       
        if (
          !cartId ||
          !address ||
          ! payment
        ) {
          return res.status(400).json({
            success: false,
            message: "fields are Mandatory",
          })
        }
    
        const cartItem = await Cart.findOne({ _id: cartId });
    
    
        const vendorId=cartItem.vendor;
        const userId=req.user.id;
        const cart = await Order.create({
          items:cartItem.items,
          vendor:vendorId,
          
          user: req.user.id,
        //   price,
          address,
          payment,
          status:"Recieved",
         
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
          message: "Failed to order Item to cart",
          error: error.message,
        })
      }
    }
