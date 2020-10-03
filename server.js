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
	let data = req.body;

	console.log(data)

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.send({body: data});
});

app.post('/journey', (req, res) => {
	const JourneyDAO = require('./db/JourneyDAO');

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');

	let journey = req.body;

	if (journey.user_id) {
		JourneyDAO.upsert(journey, newJourney => {
			console.log(newJourney);
			res.send(newJourney);
		});
	}
});

app.get('/journey', (req, res) => {
	const JourneyDAO = require('./db/JourneyDAO');

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');

	var {user_id} = req.query;	

	JourneyDAO.getUserJourneys(user_id, journeys => {
		if (journeys) {
			res.send(journeys);
		} else {
			res.send({erro: "algo deu errado, desculpe"});
		}
	});

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
