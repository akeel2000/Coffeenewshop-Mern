const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // Store the image filename
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Product', productSchema);
