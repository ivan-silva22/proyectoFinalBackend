import { Router } from "express";
import { consultaEntregarPedido, crearPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/").post(crearPedido)
router.route("/entregado/:id").put(consultaEntregarPedido)
export default router;