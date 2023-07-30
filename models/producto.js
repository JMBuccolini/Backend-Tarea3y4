const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  precio: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  disponible: {
    type: Boolean,
  },
});

const Product = model('Product',ProductSchema);

module.exports = Product;
