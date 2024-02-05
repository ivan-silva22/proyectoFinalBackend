import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true,
  },
  email: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 2,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },
});

const Usuario = model("usuario", usuarioSchema);
export default Usuario;
