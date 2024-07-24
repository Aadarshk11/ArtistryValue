const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password",'not enough length').isLength({ min: 5 }),
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);



//for login users 
router.post(
  "/loginuser",async (req, res) => {
    let email = req.body.email;

    try {
      let userData = await User.findOne({email})
      if (!userData){
        return res.status(400).json({ errors: "Enter correct email address" });
      }
      if (req.body.password !== userData.password){
        return res.status(400).json({ errors: "Enter correct password" });
      }
      return res.json({success: true});

    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
