var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  var newFile = fs.createWriteStream("readme_copy.md");

  request.pipe(newFile);

  request.on('end', function() {
    //atime is now, minus one day. mtime is current time
    var now = Date.now() / 1000; // converts milliseconds to seconds
    fs.utimes("readme_copy.md", now - 86400, now - 86400);
    response.end('success!\n');
  });
}).listen(8080);
