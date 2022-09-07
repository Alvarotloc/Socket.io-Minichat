// Servidor de Express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuracion del socket server
const io = require('socket.io')(server);

//Desplegar el directorio público
app.use(express.static(__dirname + `/public`));

const PORT = 4000 | process.env.PORT;


io.on('connection', (socket) => { 
    socket.emit('bienvenido-luis-angel',{msg : 'Bienvenido Luis Ángel',fecha : new Date()});
    socket.on('mensaje-cliente',(data) => {
        console.log(data)
    })
});

server.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});