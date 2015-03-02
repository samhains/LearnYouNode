var fs = require('fs');

if(process.argv.length>2){
	var file = process.argv[2];
	fs.readFile(file,function(err,data){
		var lines = data.toString().split('\n');
		console.log(lines.length-1);
	});
}