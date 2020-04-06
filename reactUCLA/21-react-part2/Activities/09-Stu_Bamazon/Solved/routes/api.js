const router = require("express").Router();
const Product = require("../models/product.js");

router.post("/api/product", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Product.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.get("/api/products", function(req, res) {
  // find all products where quantity is greater than zero
  Product.find({
    quantity: {$gt: 0}
  })
  .then((docs) => {
    res.json(docs);
  });
});

router.get("/api/products/:id", function(req, res) {
  // find and return a single object based on upc
  Product.findOne({
    upc: req.params.id
  })
  .then((docs) => {
    res.json(docs);
  });
});

router.put("/api/products/:id", function(req, res) {
  Product.findOneAndUpdate({
    upc: req.params.id
  }, {
    // let mongo auto-decrement the quantity
    $inc: {quantity: -1}
  }, {
    // return the udpated object, not the original
    new: true
  })
  .then((docs) => {
    res.json(docs);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;