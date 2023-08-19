import { Router } from "express";
import { consultaEntregarPedido, consultaPedidoPendiente, crearPedido, listaPedidos, consultaPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route("/pedidos").post(crearPedido).get(listaPedidos)
router.route("/pedidos/entregado/:id").put(consultaEntregarPedido)
router.route("/pedidos/pendiente/:id").put(consultaPedidoPendiente)
router.route("/pedidos/:id").get(consultaPedido)

export default router;