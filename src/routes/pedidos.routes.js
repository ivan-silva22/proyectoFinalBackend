import { Router } from "express";
import { consultaEntregarPedido, consultaPedidoPendiente, crearPedido, listaPedidos, consultaPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/").post(crearPedido).get(listaPedidos)
router.route("/entregado/:id").put(consultaEntregarPedido)
router.route("/pendiente/:id").put(consultaPedidoPendiente)
router.route("/:id").get(consultaPedido)

export default router;