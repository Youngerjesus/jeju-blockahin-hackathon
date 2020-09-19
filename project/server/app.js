const axios = require('axios');
const express = require('express');
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = 5000;
const cors =require('cors');
const api = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api',api);
app.use(cors);

io.on('connection', function(socket) {
    console.log('a user connected');

    io.emit('event', 'data');
    console.log('emit');
    socket.on('init', function(data) {
        console.log(data.name);
        socket.emit('welcome', `hello! ${data.name}`);
    });
});

http.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})

module.exports = app;