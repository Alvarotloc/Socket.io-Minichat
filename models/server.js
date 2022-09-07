// Servidor de Express
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require('path');

const cors = require('cors');

const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000 ;

    // HttpServer
    this.server = http.createServer(this.app);
    // Configuracion del socket server
    this.io = socketIo(this.server);
  }

  middlewares() {
    //Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, '../public')));

    this.app.use(cors());
  }

  configurarSockets(){
    new Sockets(this.io);
  }

  execute() {
    // Inicializar middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();
    //Inicializar server
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
