import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "usuario" },
 
  fecha: {
    type: 'Date',
    required: true,
  },

  nombreProducto:{
    type: String,
    required:true,
    unique: true,
    minLength: 2,
    maxLength: 100
},
   
  estado: {
    type: String,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000
  },
});

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;