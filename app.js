const http = require('http');

// function requestListener(req, res){

// }

// http.createServer(requestListener);


// http.createServer(function(req, res) {

// })

// http.createServer returns a server object, hence you need to store the value in a variable
const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === '/'){
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>My First Page</title><head>');
		res.write('<body><form action = "message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>');
		res.write('</html');
		return res.end();
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title><head>');
	res.write('<body><h1>Hello from my NodeJS server!</h1></body>');
	res.write('</html');
	res.end();

})


server.listen(3000); // We get an ongoing looping process which is continuosly listening for requests
