var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
	var data = fs.createReadStream(process.argv[3]);
	response.writeHead(200,{'content-type':'text/plain'});
	data.pipe(response);
});

server.listen(process.argv[2]);