const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      // required: true,
    },
    category:{
      type: String,
      enum: ["Catering", "Florist", "Decoration","Lighting",""],
      default:""

    },
    accountType: {
      type: String,
      enum: ["Admin", "Vendor", "User"],
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",//Item.js //is vendor ke pass kya item hai
      },
    ],
    reqitems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reqitem",//Reqitem.js //item ki request //doubt
      },
    ],
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",//Item.js //consumer ke cart me kon sa item hai 
      },
    ],
    ordered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",//Order.js //kon sa item order kiya hai
      },
    ],
   
   
  /////////////////////////////////////////
    vendors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",//Vendor.js //kon kon vendor hai
      },
    ], 
    consumers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "consumer",//Consumer.js //kon kon consumer hai
      },
    ],
    
    
    token: {
      type: String,
    }
   
  });

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)
