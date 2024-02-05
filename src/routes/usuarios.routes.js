import { Router } from "express";
import { crearUsuarioAdministrador, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuario.controllers";

const router = Router();

router.route("/usuarios").post(crearUsuarioAdministrador).get(obtenerUsuarios);
router.route("/usuarios/:id").get(obtenerUsuario);
router.route("/usuarios/login").post(login)


export default router;