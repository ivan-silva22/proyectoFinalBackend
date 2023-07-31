import mongoose from "mongoose";

const uri = 'mongodb://127.0.0.1:27017/dbrestaurante';

mongoose.connect(uri);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');
});