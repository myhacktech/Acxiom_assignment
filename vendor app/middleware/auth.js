// Importing required modules
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");
// Configuring dotenv to load environment variables from .env file
dotenv.config();

// This function is used as middleware to authenticate user requests

exports.auth = (req,res,next) => {
    try{
        //extract JWT token
        //PENDING : other ways to fetch token

        console.log("cookie" , req.cookies.token);
        console.log("body" , req.body.token);
        console.log("header", req.header("Authorization"));
       
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        
        if(!token || token === undefined) {
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);// removing jwt from token,payload is left
            console.log(payload);
            //why this ?
            req.user = payload;
			console.log(req.user.id)
			next();
        } catch(error) { 
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
    } 
    catch(error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
    }
   
}

exports.isUser = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "User") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for User",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};
exports.isAdmin = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "Admin") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Admin",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};
exports.isVendor = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });
		console.log(userDetails);

		console.log(userDetails.accountType);

		if (userDetails.accountType !== "Vendor") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Vendor",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};

