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

exports.getWalmartById = catchAsync(async(req, res) => {
  const walmart = await Walmart.findById(req.params.id);

  if (!walmart) return res.status(404).send("The walmart with the given ID was not found");

  res.send(walmart);
});

exports.updateWalmart = catchAsync(async(req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const walmart = await Walmart.findByIdAndUpdate(req.params.id, {
    fullName: req.body.fullName,
    goods: req.body.goods,
    price: req.body.price,
    cards: req.body.cards,
    products: req.body.products
  }, { new: true });

  if (!walmart) return res.status(404).send("The walmart with the given ID was not found");

  res.send(walmart);
});

exports.deleteWalmart = catchAsync(async(req, res) => {
  const walmart = await Walmart.findByIdAndDelete(req.params.id);

  if (!walmart) return res.status(404).send("The walmart with the given ID was not found");

  res.send(walmart);
});