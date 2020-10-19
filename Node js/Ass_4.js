var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url_parts = url.parse(req.url, true);
   // var name = url_parts.query.name;
    //res.write("<h2>Welcome  " + name + "</h1>");

    var path = url_parts.pathname;
   // console.log(path);
    var file = path.substring(1);

   /// console.log(file);
    fs.readFile(file, function (err, data) {
        if (!err) {


            res.write(data.toString());
            res.end();
        }
        else {
            res.write("Resource Not found!!!");
            res.end();
        }

    });

   
   
});
server.listen(8080);
console.log("Server Running on port 8080");

