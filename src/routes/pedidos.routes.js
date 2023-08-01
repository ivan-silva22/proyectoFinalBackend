import { Router } from "express";
import { crearPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/").post(crearPedido)
export default router;