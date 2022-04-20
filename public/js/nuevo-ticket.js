
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear  = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
});


socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})

socket.on('ultimo-ticket',(ticket)=>{
    lblNuevoTicket.innerText = ticket;
})

btnCrear.addEventListener( 'click', () => {
    socket.emit('siguiente-ticket', null,(siguiente)=>{
        lblNuevoTicket.innerText = siguiente;
    })
});

