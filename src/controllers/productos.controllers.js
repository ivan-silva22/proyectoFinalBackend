

export const crearProducto = async (req, res) => {
    try {
     const productoNuevo = new Producto(req.body);
     await productoNuevo.save();
     res.status(201).json({
         mensaje: 'El producto fue creado correctamente' 
     })
 
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al intentar crear los productos' 
        })
    
    }
}

export const obtenerListaProductos = async (req, res)=>{
    try{
        const productos = await Producto.find();
        res.status(200).json(productos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener los productos' 
        })
    }
}

export const obtenerProducto = async (req, res)=>{
    try{
        console.log(req.params.id);
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    }catch(error){
        res.status(404).json({
            mensaje: 'Error al intentar obtener el producto' 
        })
    }
}

export const borrarProducto = async (req, res)=>{
    try{
      await Producto.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje:"El producto fue eliminado correctamente"
      });
    }catch(error){
        res.status(404).json({
            mensaje: 'Error, no se pudo borrar el producto' 
        })
    }
}

export const editarProducto = async (req, res)=>{
    try{
       await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: 'El producto fue actualizado correctamente'
      })
    }catch(error){
        res.status(404).json({
            mensaje: 'Error, no se pudo actualizar el producto' 
        })
    }
}