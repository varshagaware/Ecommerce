var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var url_parts = url.parse(req.url, true);
    var name = url_parts.query.name;
    res.write("<h2>Welcome  " + name + "</h1>");
    res.end();
});
server.listen(8080);
console.log("Server Running on port 8080");
