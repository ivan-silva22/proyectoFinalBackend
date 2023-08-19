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
  
  export const consultaPedidoPendiente = async (req, res) => {

    const idPedido = req.params.id;
    try {
      const pedido = await Pedido.findById(idPedido);
      if (!pedido) {
        return res.status(404).json({ error: "Su pedido no se ha encontrado" });
      }
  
      if (pedido.estado === "Pendiente") {
        return res
          .status(404)
          .json({ error: "Su pedido esta pendiente." });
      }
  
      pedido.estado = "Pendiente";
      await pedido.save();
      res.status(200).json({
        mensaje: "Su pedido esta pendiente.",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: 'Lo lamentamos, no se pudo entregar el pedido.',
       }); 
     } 
  };

  export const listaPedidos = async (req, res) => {
    try {
      const listapedidos = await Pedido.find().populate({
          path: "usuario", 
        });
      res.status(200).json(listapedidos);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Lo lamentamos, no se pudieron listar los pedidos",
      });
    }
  };

  export const consultaPedido = async (req,res) => {
    try{
      const pedido = await Pedido.findById(req.params.id)
      res.status(200).json(pedido);
    }
    catch (error){
      console.log(error);
      res.status(404).json({
        mensaje:"No hay ningun registro"});
      }
    }
  
   