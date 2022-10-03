const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/Profile");

module.exports = {

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
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  }
};
