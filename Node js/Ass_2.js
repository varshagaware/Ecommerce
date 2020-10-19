var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("Hello From Node js");
    res.end();


}).listen(9000);
console.log("Server Running on port number 9000");

