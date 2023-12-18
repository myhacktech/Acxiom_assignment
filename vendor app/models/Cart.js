const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",//Item.js  //kon sa item liya hai
      },],
    vendor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",//Vendor.js //kis vendor se liya gya hai
      },],
    consumer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",//Consumer.js // kon sa consumer cart me add kiya hai
      },]

   
   
    
   
   
  
   
   
  
    
    
    
   
  });

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("cart", userSchema)
