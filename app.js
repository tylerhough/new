var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  //res.write('Hello World!'); //write a response to the client
  //res.end(); //end the response
  res.write("<html>"
              +"<head></head>"
              +"<body><center><img src='basketball.jpg'></center></body>"
           +'</html>')
}).listen(8080); //the server object listens on port 8080
