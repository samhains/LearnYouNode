var http = require('http');
var bl = require('bl');
var count =0;
var results = [];

var printResults = function(){

	for(var i=0;i<3;i++){
		console.log(results[i]);
	}
};


var httpGet = function(index){
	http.get(process.argv[2+index],function(response){
		var content = '';
		response.setEncoding('utf8');
		response.pipe(bl(function(err,data){
			count++;
			results[index]=data.toString();
			if(count==3){
				printResults();
			}
		}));

	} );

};

for(var i =0;i<3;i++){
	httpGet(i);
}



