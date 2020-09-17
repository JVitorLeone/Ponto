const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;

// Allow CORS
app.use(cors({origin: 'http://localhost:3000'}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/user', (req, res) => {
	let data;

	data = req.body;

	console.log(data)

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.send({body: data});
});

const JourneyDAO = require('./db/JourneyDAO');
app.post('/journey', (req, res) => {
	let data;

	data = req.body;

	// convert timezone
	data.date = new Date(data.date);

	JourneyDAO.insert(data);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.send(data);
});

app.get('/journey', (req, res) => {
	let data;

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	
	data = req.body;

	JourneyDAO.getUserJourneys(1, journeys => {
		console.log(journeys);
		return res.send(journeys);
	});
	
	
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
