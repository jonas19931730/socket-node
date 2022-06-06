const {Client} = require('pg');
const {getClienteAtunera} = require('../database/config')

const cliente = getClienteAtunera();

const getPlantas = async()=>{

    try{
       const result = await cliente.query("select * from usuario");
       return result.rows;
    }
    catch(error){
        console.log("ERROR "+error)
        return "error"
    }
}

const consultarJson= async (tipo,destino,fecha,tipo_subproducto=null) =>{
    const consulta = "select * FROM func_nwi_getjsondata('"+tipo+"', '"+destino+"', '"+fecha+"',"+tipo_subproducto+")";
    try{
        const result = await cliente.query(consulta);
        return result.rows;
     }
     catch(error){
         console.log("ERROR "+error)
         return "error"
     }
}

module.exports = {
    getPlantas,
    consultarJson
}


