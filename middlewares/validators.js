const Product = require("../models/producto");
const {validationResult} = require('express-validator');

//Este validador que utiliza "validationResult" es el que nos permite controlar los errores de validación de "check" y frenar
//o permitir avanzar hacia el controlador
const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  next();
};


//Este es un validador custom para verificar que exista un producto en la DB con el id recibido
const validateID = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("No existe un producto con ese ID");
  }
};

module.exports = {validateID, validarCampos};