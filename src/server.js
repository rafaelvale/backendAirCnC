const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
 const server = http.Server(app);
 const io = socketio(server);

 io.on('connection', socket => {
    console.log('usuario conectado');

    socket.emit('hello', 'world');

 });

mongoose.connect('mongodb+srv://rmvsolutions:lorenna123@cluster0-6fif3.azure.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//porta do mongodb = portquiz.net:27017

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);



server.listen(3333);


