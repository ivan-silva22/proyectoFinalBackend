import Usuario from "../models/usuario";
import bcrypt from "bcrypt";

export const obtenerUsuarios = async (req, res) => {
  try {
    //pedir a la BD la lista de productos
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};
export const obtenerUsuario = async (req, res) => {
  try {
    //pedir a la BD la lista de productos
    console.log(req.params.id);
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};
export const crearUsuario = async (req, res) => {
  try {
    //verificar si el mail ya existe
    let usuario = await Usuario.findOne({ email: req.body.email });
    if (usuario) {
      return res
        .status(400)
        .json({ mensaje: "ya existe un usuario con el email enviado" });
    }
    // console.log(req.body);
    const usuarioNuevo = new Usuario(req.body);
    //encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    usuarioNuevo.password = bcrypt.hashSync(req.body.password, salt);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el usuario",
    });
  }
};

export const login = async (req, res) => {
  try {
    // buscar si existe el mail en nuestra collection de usuarios
    let usuario = await Usuario.findOne({email: req.body.email});
    //si el usuario No existe
    if(!usuario){
        return res.status(404).json({mensaje: 'Correo o contraseña invalida - correo'});
    }
    //preguntar si la contraseña NO corresponde con el usuario encontrado
    const passwordValido = bcrypt.compareSync(req.body.password, usuario.password);// devuelve true si los datos son iguales, caso contrario devuelve false
    if(!passwordValido){
        return res.status(400).json({mensaje: 'Correo o contraseña invalida - password'});
    }
    //responder al frontend que debe loguear al usuario
    res.status(200).json({
        mensaje: 'El usuario es correcto',
        nombreUsuario: usuario.nombreUsuario
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar loguear un usuario",
    });
  }
};