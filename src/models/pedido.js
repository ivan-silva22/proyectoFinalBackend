import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "usuario" },
 
  fecha: {
    type: 'Date',
    required: true,
  },

  
    productos: [
      {
        producto: { type: mongoose.Schema.Types.ObjectId, ref: 'producto' },
        cantidad: {
          type: Number,
          required: true,
          min: 1,
          max: 10,
        },
        subtotalItem: {
          type: Number,
          required: true,
          min: 1,
          max: 100000,
        },
      },
    ],
   
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