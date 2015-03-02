var fs = require('fs');

var filtered = require('./filtered');

var callback = function(err,list){
	if(err){
		console.log("We have an Error");
	}
	else{

		for(var i =0; i<list.length;i++){

			console.log(list[i]);
		}

	}
};

if(process.argv.length===4){
	var pathStr = process.argv[2];
	var extension = "."+process.argv[3];
	filtered(pathStr,extension,callback);

}



