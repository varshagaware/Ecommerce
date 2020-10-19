var http=require('http');


http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Hello");
        console.log("Hello from node Application");


res.end();


}).listen(8080);
    
