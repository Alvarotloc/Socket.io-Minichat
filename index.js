// Servidor de Express
const app = require('express')();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

const PORT = 4000 | process.env.PORT;


io.on('connection', () => { /* … */ });


server.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});