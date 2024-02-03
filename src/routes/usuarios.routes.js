import { Router } from "express";
import { crearUsuario, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuario.controllers";

const router = Router();

router.route("/usuarios").post(crearUsuario).get(obtenerUsuarios);
router.route("/usuarios/:id").get(obtenerUsuario);
router.route("/usuarios/login").post(login)


export default router;