


const socketController2 = (client) =>{
    
    client.on('enviar-mensaje',(payload)=>{
        client.broadcast.emit('enviar-mensaje',payload)
        // broad cast emitedesde el cliente hacia los demás clientes
    })
} 

module.exports = socketController2;