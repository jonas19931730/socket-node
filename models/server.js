require('dotenv').config();
const express = require('express');
const cors = require('cors');
const socketController2 = require('../sockets/controller');
class Server{
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        
        this.paths = {
        }
        this.middlewares();
        this.routes();

        this.sockets();
    }
    middlewares(){
        //Los middlewares en Node son como los interceptores, tipo configuración en Spring
        // se ejecutan antes de ejecutar los handlers
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }
    routes(){
       
    }
    sockets(){
        this.io.on('connection',socketController2);
    }
    listen(){
        this.server.listen(this.port,()=>{
            console.log("Servidor corriendo en el puerto "+this.port)
        })
        
    }
}
module.exports = Server