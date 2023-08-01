import Pedido from "../models/pedido";


export const crearPedido = async (req, res) => {
    try {
     const pedidoNuevo = new Pedido(req.body);
     await pedidoNuevo.save();
     res.status(201).json({
         mensaje: 'El pedido fue creado correctamente' 
     })
 
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al intentar crear los pedidos'
            
        })
        console.log(error) 
    }
}

export const consultaEntregarPedido = async (req, res) => {
    const idPedido = req.params.id;
    try {
      const pedido = await Pedido.findById(idPedido);
      if (!pedido) {
        return res.status(404).json({ error: "Su pedido no se ha encontrado" });
      }
  
      if (pedido.estado === "Entregado") {
        return res
          .status(404)
          .json({ error: "El pedido ya se encuentra en Entregado" });
      }
  
      pedido.estado = "Entregado";
      await pedido.save();
      res.status(200).json({
        mensaje: "Su pedido se entregó correctamente.",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Lo lamentamos, no se pudo entregar el pedido.",
      });
    }
  }
  