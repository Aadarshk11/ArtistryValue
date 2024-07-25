const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "Apple was founded as Apple Computer Company on April 1$#"
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

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt )

    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: secPassword, //we are saving the secured password in database
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
      const compare = await bcrypt.compare(req.body.password,userData.password)
      if (!compare){
        return res.status(400).json({ errors: "Enter correct password" });
      }
      const data = {
        user:{
          id:userData.id
        }
      }
      const authToken = jwt.sign(data , jwtSecret) //to generate authorization token
      return res.json({success: true, authToken:authToken});

    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
