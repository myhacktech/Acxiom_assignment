// const Course = require("../models/Course")
const mongoose = require("mongoose");

// const Category = require("../models/Category")
// const Section = require("../models/Section")
// const SubSection = require("../models/Subsection")
const User = require("../models/User")
const Item = require("../models/Item")

// const { uploadImageToCloudinary } = require("../utils/imageUploader")
// const CourseProgress = require("../models/CourseProgress")
// const { convertSecondsToDuration } = require("../utils/secToDuration")
// Function to create a new course
exports.addItem = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id

    // Get all required fields from request body
    let {
      name,
      price,
      
    //   whatYouWillLearn,
    //   price,
    //   tag: _tag,
    //   category,
    //   status,
    //   instructions: _instructions,
    } = req.body
    // Get thumbnail image from request files
    // const thumbnail = req.files.thumbnailImage

    // Convert the tag and instructions from stringified Array to Array
    // const tag = JSON.parse(_tag)
    // const instructions = JSON.parse(_instructions)

    // console.log("tag", tag)
    // console.log("instructions", instructions)

    // Check if any of the required fields are missing
    if (
      !name ||
      !price 
     
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      })
    }
    // if (!status || status === undefined) {
    //   status = "Draft"
    // }
    // Check if the user is an instructor
    // const instructorDetails = await User.findById(userId, {
    //   accountType: "Instructor",
    // })

    // if (!instructorDetails) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Instructor Details Not Found",
    //   })
    // }

    // Check if the tag given is valid
    // const categoryDetails = await Category.findById(category)
    // if (!categoryDetails) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Category Details Not Found",
    //   })
    // }
    // Upload the Thumbnail to Cloudinary
    // const thumbnailImage = await uploadImageToCloudinary(
    //   thumbnail,
    //   process.env.FOLDER_NAME
    // )
    // console.log(thumbnailImage)
    // Create a new course with the given details
    const newItem = await Item.create({
      name,
      price,
      vendor: req.user.id,
     
    })

    // Add the new Item to the User Schema of the Vendor
    await User.findByIdAndUpdate(
      {
        _id: req.user.id,
      },
      {
        $push: {
          items: newItem._id,
        },
      },
      { new: true }
    )
    // Add the new course to the Categories
    // const categoryDetails2 = await Category.findByIdAndUpdate(
    //   { _id: category },
    //   {
    //     $push: {
    //       courses: newCourse._id,
    //     },
    //   },
    //   { new: true }
    // )
    // console.log("HEREEEEEEEE", categoryDetails2)
    // Return the new course and a success message

    res.status(200).json({
      success: true,
      data: newItem,
      message: "Item Added Successfully",
    })
  } catch (error) {
    // Handle any errors that occur during the creation of the course
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to Add Item",
      error: error.message,
    })
  }
}
// Edit item Details
exports.deleteItem = async (req, res) => {
  try {
    const { itemId } = req.body
    const item = await Item.findById(itemId)
    if (!item) {
      return res.status(404).json({ message: "item not found" })
    }

    // If Thumbnail Image is found, update it
    // if (req.files) {
    //   console.log("thumbnail update")
    //   const thumbnail = req.files.thumbnailImage
    //   const thumbnailImage = await uploadImageToCloudinary(
    //     thumbnail,
    //     process.env.FOLDER_NAME
    //   )
    //   course.thumbnail = thumbnailImage.secure_url
    // }

    // Update only the fields that are present in the request body
    await Item.findByIdAndDelete(itemId)

    return res.status(200).json({
      success: true,
      message: "item deleted successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}




exports.getItems = async (req, res) => {
    try {
        const vendorId = req.user.id

      const allItems = await Item.find({ "vendor": vendorId })
       
  
      return res.status(200).json({
        success: true,
        data: allItems,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't Fetch Item Data`,
        error: error.message,
      })
    }
  }
// Get Course List
// exports.getAllCourses = async (req, res) => {
//   try {
//     const allCourses = await Course.find(
//       { status: "Published" },
//       {
//         courseName: true,
//         price: true,
//         thumbnail: true,
//         instructor: true,
//         ratingAndReviews: true,
//         studentsEnrolled: true,
//       }
//     )
//       .populate("instructor")
//       .exec()

//     return res.status(200).json({
//       success: true,
//       data: allCourses,
//     })
//   } catch (error) {
//     console.log(error)
//     return res.status(404).json({
//       success: false,
//       message: `Can't Fetch Course Data`,
//       error: error.message,
//     })
//   }
// }
// Get One Single Course Details
// exports.getCourseDetails = async (req, res) => {
//   try {
//     const { courseId } = req.body
//     const courseDetails = await Course.findOne({
//       _id: courseId,
//     })
//       .populate({
//         path: "instructor",
//         populate: {
//           path: "additionalDetails",
//         },
//       })
//       .populate("category")
//       .populate("ratingAndReviews")
//       .populate({
//         path: "courseContent",
//         populate: {
//           path: "subSection",
//         },
//       })
//       .exec()
//     // console.log(
//     //   "###################################### course details : ",
//     //   courseDetails,
//     //   courseId
//     // );
//     if (!courseDetails || !courseDetails.length) {
//       return res.status(400).json({
//         success: false,
//         message: `Could not find course with id: ${courseId}`,
//       })
//     }

//     if (courseDetails.status === "Draft") {
//       return res.status(403).json({
//         success: false,
//         message: `Accessing a draft course is forbidden`,
//       })
//     }

//     return res.status(200).json({
//       success: true,
//       data: courseDetails,
//     })
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     })
//   }
// }
// Get a list of Course for a given Instructor
// Delete the Course