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
        Default:"Consumer",
      required: true,
    },
    
   
   
  
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
module.exports = mongoose.model("consumer", userSchema)
