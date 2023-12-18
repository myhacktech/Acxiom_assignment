const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    price: {
      type: String,
      required: true,
      trim: true,
    },
    vendor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",//Vendor.js //kis vendor ka item hai
      },],
    // consumer:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "consumer",//Consumer.js
    //   },]

   
   
    
   
   
  
   
   
  
    
    
    
   
  });

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("item", userSchema)
