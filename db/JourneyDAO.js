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
const insertJourney = (journey, cb) => {
	let {user_id, date, periods} = journey;
	let db = newConnection();

	let sql = `INSERT INTO journey (user_id, date) VALUES (?,?); `;

	db.run(sql, [user_id, date], function(err){
		if (err) {
			return cb({err: err.message});
		}

		console.log(`A journey has been inserted with rowid ${this.lastID}`);

		return insertPeriods(periods, this.lastID, cb);
	});

	db.close();
};

const insertPeriods = (periods, journey_id, cb) => {
	var db = newConnection();

	let sql = 'INSERT INTO periods (journey_id, start, end) VALUES ';
	let values = [];

	for (var period of periods) {
		sql += values.length ? ',(?,?,?)' : '(?,?,?)';
		values.push(journey_id);
		values.push(period.start || null);
		values.push(period.finish || null);
	}

	db.run(sql, values, function(err){
		if (err) {
			return cb({err: err.message});
		}

		return getJourney(journey_id, cb);
	});

	db.close();
};

const updatePeriods = (journey, cb) => {
	var db = newConnection();

	var {periods, id} = journey;
	var newPeriods = [];
	var sql= "", values = [];

	for (var period of periods) {
		if (period.id) {
			sql += ` UPDATE periods SET start = ?, end = ? WHERE id = ?; `;
			values.push(period.start || null);
			values.push(period.finish || null);
			values.push(period.id || null);
		} else {
			newPeriods.push(period);
		}
	}

	db.run(sql, [period.start, period.finish, period.id], function(err){
		if (err) {
			return  cb({err: err.message});
		}

		if (newPeriods.length) {
			return insertPeriods(newPeriods, id, cb);
		} else {
			return getJourney(id, cb);
		}
	});

	db.close();
}

const getJourney = (id, cb) => {
	var db = newConnection();

	var sql = `	SELECT
					journey.user_id,
					journey.id, journey.date,
					periods.start, periods.end,
					periods.id as period_id
				FROM journey
					LEFT JOIN periods
						ON periods.journey_id = journey.id
				WHERE journey.id = ? `;

	db.all(sql, [id], (err, rows) => {
		if (err) {
			return  cb({err: err.message});
		}

		return cb(convertJourneyDataSet(rows)[0]);
	});

	db.close();
}

function convertJourneyDataSet(rows) {
	var currId, currJourney, journeys = [];

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

		currJourney.periods.push({
			id: row.period_id,
			start: row.start,
			finish: row.end
		});
	}

	return journeys;
}

module.exports = {
	insert: (journey, cb) => {
		try {
			if (!journey.id) {
				insertJourney(journey, cb);
			} else {
				updatePeriods(journey, cb);
			}
		} catch (error) {
			return cb({err: err.message});
		}
	},
	getUserJourneys: (user_id, cb) => {
		let db = newConnection();

		try {
			var journeys = [],
				sql = `	SELECT
							journey.user_id,
							journey.id, journey.date,
							periods.start, periods.end,
							periods.id as period_id
						FROM journey
							LEFT JOIN periods
								ON periods.journey_id = journey.id `;

			db.all(sql, [], (err, rows) => {
				if (err) {
					return console.error(err.message);
				}

				journeys = convertJourneyDataSet(rows)

				return cb(journeys);
			});
		} catch (error) {
			console.log("Erro: " + error);
		} finally {
			db.close();
		}
	},
};
