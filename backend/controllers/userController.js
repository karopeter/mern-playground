const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');

exports.signup = catchAsync(async(req, res) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        });
        user.save().then(result => {
          res.status(201).json({
            message: 'User Created',
            result: result
          });
        }).catch(err => {
            res.status(500).json({
              error: err
            });
        });
    });
});

exports.login = catchAsync(async(req, res) => {
   const { email, password } = req.body;

   // Check if email and password  exist
   if (!email || !password) {
     return next(new AppError("Please provide email and password", 400));
   }

   // check if user exists and password is correct
   const user = await User.findOne({ email }).select("+password");

   if (!user || !(await user.correctPassword(password, user.password))) {
     return next(new AppError("Incorrect  email and password", 401));
   }

   const token = jwt.sign(
     { email: user.email, userId: user._id },
     "secret_this_should_be_longer",
     { expiresIn: "1h" }
   );
   res.status(200).json({
     token: token,
   });
});