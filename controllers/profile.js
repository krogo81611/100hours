const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/Profile");
const Post = require("../models/Post")

module.exports = {
  getUserInfo: async (req, res) => {
    try {
      res.render("userInfo.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Profile.create({
        company: req.body.company,
        role: req.body.role,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
      });
      console.log("User Info has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  }
};
