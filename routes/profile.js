const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profileController = require("../controllers/profile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/createProfile", upload.single("file"), profileController.createProfile);


module.exports = router;
