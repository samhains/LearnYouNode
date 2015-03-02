var fs = require('fs');
var path = require('path');



module.exports = function(pathStr,extension, callback){
		var filteredArr = [];
		fs.readdir(pathStr, function(err,list){
			if(err){
				return callback(err);
			}

			for(var file in list){
				if(path.extname(list[file]) == extension){

						filteredArr.push(list[file]);
					}
			}
		
			callback(null,filteredArr);

		});


};