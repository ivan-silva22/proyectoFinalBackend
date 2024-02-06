import { Router } from "express";
import { borrarUsuario, crearRegistroUsuarioNormal, crearUsuarioAdministrador, editarUsuario, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuario.controllers";

const router = Router();

router.route("/usuarios").post(crearUsuarioAdministrador).get(obtenerUsuarios);
router.route("/usuarios/:id").get(obtenerUsuario);
router.route("/usuarios/login").post(login);
router.route("/usuarios/registro").post(crearRegistroUsuarioNormal);
router.route("/usuarios/editar/:id").put(editarUsuario); 
router.route("/usuarios/borrar/:id").delete(borrarUsuario);


export default router;