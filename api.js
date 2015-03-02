var http = require('http');
var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'application/json'});
	console.log(request);
});

server.listen(8000);