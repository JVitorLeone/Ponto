const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer();

server.on('request', (req, res) => {

	// Database
	let db = new sqlite3.Database('./db/ponto.db', (err) => {
		if (err) {
			console.error(err.message);
		}
	});

	// User
	if (req.url === '/user') {
		if (req.method == "POST") {
			// Request body
			let data;
			req.on('data', chunk => {
				data = chunk;
			});
			req.on('end', () => {
				data = JSON.parse(data);

			});

			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.end('data');
		}
	}

	// Close Database conection
	db.close();
});

server.listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});