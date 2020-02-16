var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  //res.write('Hello World!'); //write a response to the client
  //res.end(); //end the response
  res.write("<html><body><center><img src='basketball.jpg'></center></body></html>")
  res.end();
}).listen(8080); //the server object listens on port 8080
