var express = require("express"),
    io = require("socket.io").listen(3001);

app = module.exports = express();

app.get("/", function(req,res) {
    res.writeHead(200, "text/plain");
    res.end("okay");
});

// socket.io code

var clients = [];

io.sockets.on("connect", function(socket) {
    // new client trying to connect
    clients.push(socket);
})

