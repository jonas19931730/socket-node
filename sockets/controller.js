const TicketControl = require('../models/ticker-control')

const ticketControl = new TicketControl();

const socketController = (client) =>{

    client.emit('ultimo-ticket',ticketControl.ultimoSocket)
    
    client.emit('recibir-ultimos',ticketControl.encola4);

    client.on('siguiente-ticket',(payload , callback)=>{
        const siguiente = ticketControl.siguiente();
        callback(siguiente);    
    })

    client.on('atender-ticket',({ escritorio },callback)=>{
        if(!escritorio){
            return callback({
                ok:false,
                msg:'Escritorio Obligatorio'
            })
        }
        const ticket = ticketControl.atender(escritorio);
        
        client.broadcast.emit('recibir-ultimos',ticketControl.encola4);
        
        if(!ticket){
            return callback({
                ok:false,
                msg:'Ya no hay más tickets'
            })
        }else{

            
            return callback({
                ok:true,
                ticket
            })
        }
    })

    //TODO: Notificar que hay un nuevo ticket pendiente de asignar
} 

module.exports = socketController;