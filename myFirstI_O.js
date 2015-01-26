var fs = require('fs');

if(process.argv.length>2){
    var buf = fs.readFileSync(process.argv[2]);
    var str = buf.toString();
    var subStr = str.split('\n');

    console.log(subStr.length-1);
}



