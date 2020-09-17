const sqlite3 = require('sqlite3').verbose();

// Database
const newConnection = () => { 
	return new sqlite3.Database('./db/ponto.db', (err) => {
		if (err) {
			console.error(err.message);
		}
	});
};

// POST
const insertJourney = (db, journey) => {
	let {user_id, date, periods} = journey;

	let sql = 'INSERT INTO journey (user_id, date) VALUES (?,?)';
		
	db.run(sql, [user_id, date], function(err){
		if (err) {
			return console.error(err.message);
		}

		console.log(`A journey has been inserted with rowid ${this.lastID}`);	

		for (var period of periods) {
			insertPeriod(db, period, this.lastID);
		}
	});
};

const insertPeriod = (db, period, journey_id) => {
	let sql = 'INSERT INTO periods (journey_id, start, end) VALUES (?,?,?)';

	db.run(sql, [journey_id, period.start, period.finish], function(err){
		if (err) {
			return console.error(err.message);
		}

		console.log(`A period has been inserted with rowid ${this.lastID}`);	
	});
};

module.exports = {
	insert: (journey) => {
		let db = newConnection();

		try {
			insertJourney(db, journey);
		} catch (error) {
			console.log("Erro: " + error);
		} finally {
			db.close();
		}
	},
	getUserJourneys: (user_id, cb) => {
		let db = newConnection();

		try {
			var journeys = [],
				sql = `	SELECT journey.user_id, journey.id, journey.date, periods.start, periods.end
						FROM journey 
							LEFT JOIN periods 
								ON periods.journey_id = journey.id `;

			db.all(sql, [], (err, rows) => {
				var currId, currJourney;

				if (err) {
					return console.error(err.message);
				}

				for (var row of rows) {
					if (currId !== row.id) {

						currJourney = journeys[
							journeys.push({
								user_id: row.user_id,
								id: row.id,
								date: row.date,
								periods: []
						})-1];

						currId = row.id;
					}
					console.log(row);
					currJourney.periods.push({start: row.start, end: row.end});
				}

				return cb(journeys);
			});
		} catch (error) {
			console.log("Erro: " + error);
		} finally {
			db.close();
		}
	},
};

