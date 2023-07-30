const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

const {
  obtenerProductos,
  agregarProductos,
  actualizarProductos,
  borrarProductos,
} = require("../controllers/productos");

const { validateID, validarCampos } = require("../middlewares/validators");

router.get("/", obtenerProductos);
router.post(
  "/",
  [
    check("nombre", "Ingrese un nombre").notEmpty(),
    check("precio", "Colocar el precio y en valores numéricos").isNumeric(),
    validarCampos,
  ],
  agregarProductos
);
router.put(
  "/:id",
  [check("id").isMongoId(), check("id").custom(validateID), validarCampos],
  actualizarProductos
);
router.delete(
  "/:id",
  [check("id").isMongoId(), check("id").custom(validateID), validarCampos],
  borrarProductos
);

module.exports = router;
