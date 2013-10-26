var express = require("express");

app = module.exports = express();

app.get("/", function(req,res) {
    res.writeHead(200, "text/plain");
    res.end("okay");
});