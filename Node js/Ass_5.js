

var http = require('http');
//var url = require('url');
const fs = require('fs');

var count = 0;
var server = http.createServer(function (req, res) {

    if (req.url === '/favicon.ico') {
        console.log('favicon');
        return;
    }

    count++;

 

    fs.writeFile('count.txt', "visit count "+count, (err) => {
        // If there is any error in writing to the file, return
        if (err) {
            console.error(err)
            return
        }

        // Log this message if the file was written to successfully
        console.log('wrote to file successfully')
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
 
    res.write("You have visited "+count);
    res.end();

});
server.listen(9000);
console.log("server running.....");
