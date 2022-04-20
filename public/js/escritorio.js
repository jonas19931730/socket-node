

const searchParams = new URLSearchParams(window.location.search);

if (! searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error("Escritorio es obligatorio");
}

const escritorio = searchParams.get('escritorio');


const lblEscritorio = document.querySelector('h1');
const btnAtender  = document.querySelector('button');
const lblTicket  = document.querySelector('small');
const divAlert = document.querySelector('.alert')

divAlert.style.display = 'none';

const socket = io();

socket.on('connect', () => {
    btnAtender.disabled = false;

});

socket.on('disconnect', () => {
    btnAtender.disabled = true;
});


socket.on('ultimo-ticket',(ticket)=>{
    //lblNuevoTicket.innerText = ticket;
})

btnAtender.addEventListener( 'click', () => {
    socket.emit('atender-ticket',{escritorio},( {msg,ok,ticket} )=>{
        
        if(!ok){
            return divAlert.style.display = '';
        }
        lblTicket.innerText = ticket;
    })
});