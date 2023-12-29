// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup
//   sendotp,
//   changePassword,
} = require("../controllers/auth")
// const {
//   resetPasswordToken,
//   resetPassword,
// } = require("../controllers/resetPassword")
const {addCart} =require("../controllers/cart")

const {orderItem} =require("../controllers/order")

const {addItem,deleteItem,getItems} =require("../controllers/addItem")
const{getallVendors,getitemsbyVendor}=require("../controllers/vendors")
const { auth, isVendor, isUser, isAdmin } = require("../middleware/auth")

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for adding item

router.post("/addItem", auth,isVendor,addItem)


// Route for editing item

router.post("/deleteItem", auth,isVendor,deleteItem)

// Route for getting items

router.get("/getItems", auth,isVendor,getItems)


// Route for getting all Vendors

router.get("/getallVendors", auth,isUser,getallVendors)
// Route for getting all items by vendor id

router.get("/getitemsbyVendor", auth,isUser,getitemsbyVendor)


// Route for adding  an item to cart by item id

router.post("/addCart", auth,isUser,addCart)

// Route for ordering  an item from cart by cart id

router.post("/orderItem", auth,isUser,orderItem)
// Route for sending OTP to the user's email
// router.post("/sendotp", sendotp)

// Route for Changing the password
// router.post("/changepassword", auth, changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
// router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
// router.post("/reset-password", resetPassword)

// Export the router for use in the main application
router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});
router.get("/vendor", auth,isVendor, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for vendor',
    });
});
router.get("/user", auth,isUser, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for user',
    });
});


module.exports = router
