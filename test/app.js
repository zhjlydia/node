//http服务
/*var http = require('http');
http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<h1>Node.js</h1>');
res.end('<p>Hello Wordless</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");
*/
//读取文件
/*var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end');
*/
//事件
var eventEmitter=require('events').EventEmitter;
var event=new eventEmitter;
event.on('some_event',function(){
   console.log('some event occured');
});
setTimeout(function(){
   event.emit('some_event');
},1000);