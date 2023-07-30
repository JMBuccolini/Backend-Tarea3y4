const Product = require("../models/producto");
const {validationResult} = require('express-validator');

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  next();
};



const validateID = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("No existe un producto con ese ID");
  }
};

module.exports = {validateID, validarCampos};