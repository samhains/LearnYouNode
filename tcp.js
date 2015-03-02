var net = require('net');
var portNumber = process.argv[2];
var server = net.createServer(function(socket){
	var date = new Date();
	var data = date.getFullYear()+"-0"+(date.getMonth()+1)+"-0"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();

	socket.write(data);
	socket.write('\n');
	socket.write('\n');
	socket.end(data);

});

server.listen(portNumber);