http.createServer(function(request, response) {
  response.writeHead(200); // status code in header
  response.write("Hello, this is Patrick Star"); // response body
  response.end(); // close connection
}).listen(8080); // listens on port 8080
