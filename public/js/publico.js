
const lblTicket1 = document.querySelector('#lblTicket1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblTicket4 = document.querySelector('#lblTicket4');

const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
});


socket.on('recibir-ultimos',(payload)=>{
    
    console.log(payload)
    

   
})

