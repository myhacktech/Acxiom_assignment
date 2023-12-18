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
    accountType: {
      type: String,
        Default:"Vendor",
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
    //   products: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "reqitem",//reqitem.js
    //     },
    //   ],
    
    token: {
      type: String,
    }
   
  });

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("vendor", userSchema)
