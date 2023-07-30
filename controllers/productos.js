const Product = require("../models/producto");

const obtenerProductos = async (_, res) => {
  const filter = { disponible: true };
  const productos = await Product.find(filter);

  res.status(200).json({
    msg: "Esta es una lista de los productos",
    productos,
  });
};

const agregarProductos = async (req, res) => {
  const { nombre, precio, stock, disponible } = req.body;

  const newProduct = new Product({ nombre, precio, stock, disponible });

  await newProduct.save();

  res.status(200).json({
    msg: "Producto agregado con éxito a la DB",
    newProduct,
  });
};

const actualizarProductos = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock, disponible } = req.body;

  const product = await Product.findByIdAndUpdate(id, {
    $set: {
      nombre: nombre,
      precio: precio,
      stock: stock,
      disponible: disponible,
    },
  });

  res.status(200).json({
    msg: "Producto actualizado con éxito",
    product,
  });
};

const borrarProductos = async (req, res) => {
  const { id } = req.params;
//Borrado lógico : await Product.findByIdAndUpdate(id,{disponible: false})

//Borrado físico:
  await Product.findByIdAndDelete(id);

  res.status(200).json({
    msg: "Producto borrado con éxito",
  });
};

module.exports = { obtenerProductos, agregarProductos, actualizarProductos, borrarProductos };
