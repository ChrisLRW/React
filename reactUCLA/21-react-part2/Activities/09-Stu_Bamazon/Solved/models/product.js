const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  upc: {
    type: Number,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    min: 1
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;