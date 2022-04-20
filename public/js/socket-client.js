
// Referencias del HTML
const lblNuevo  = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
    btnCrear.disabled = false;
    
});

socket.on('disconnect', () => {
    btnCrear.disabled = true;
});


socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})


btnCrear.addEventListener( 'click', () => {

    

});