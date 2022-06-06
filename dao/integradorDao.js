const {getClienteIntegrador} = require('../database/config')

const cliente = getClienteIntegrador();

const getRegistros = async()=>{
    try{
        const result = await cliente.query("select * from nwi_det_integracion_sap"); 
        return result.rows;
    }
    catch(error){
        console.log(error);
    }
}
const getNotificacionesCompletadas = async()=>{
    try{
        const consulta = "select cab.idcabintegracionsap as idintegracion,det.jsonrespuestasap "
		                +" from nwi_cab_integracion_sap cab inner join nwi_det_integracion_sap det on" 
				        +" det.idcabintegracionsap = cab.idcabintegracionsap" 
						+" where det.estadoenviosap = 1";
        const result = await cliente.query(consulta); 
        return result.rows;
    }
    catch(error){
        console.log(error);
    }
}
module.exports= {
    getRegistros,
    getNotificacionesCompletadas
}