import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerListaProductos } from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").post(crearProducto).get(obtenerListaProductos);
router.route("/productos/:id").get(obtenerListaProductos).delete(borrarProducto).put(editarProducto);


export default router;