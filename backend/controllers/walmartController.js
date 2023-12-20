const { Walmart, validate } = require('../models/walmartModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllWalmart = catchAsync(async(req, res) => {
  const walmart = await Walmart.find().sort("fullName");
   res.send(walmart);
});


exports.createWalmart = catchAsync(async(req, res) => {
     const { error } = validate(req.body);
     if (error) return res.status(400).send(error.details[0].message);


     let walmart = new Walmart({
        fullName: req.body.fullName,
        goods: req.body.goods,
        price: req.body.price,
        cards: req.body.cards,
        products: req.body.products
     });
     walmart = await walmart.save();

     res.send(walmart);
});