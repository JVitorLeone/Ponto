const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db/ponto.db');

let create_user = `
	CREATE TABLE IF NOT EXISTS user (
		id INTEGER PRIMARY KEY,
		username TEXT NOT NULL
	)
`;

let create_journey = `
	CREATE TABLE IF NOT EXISTS journey (
		id INTEGER PRIMARY KEY,
		user_id INTEGER,
		date datetime,
		finished BOOLEAN,
		FOREIGN KEY (user_id)
      		REFERENCES user (id)
         		ON DELETE CASCADE
         		ON UPDATE NO ACTION
	)
`;

let create_periods = `
	CREATE TABLE IF NOT EXISTS periods (
		id INTEGER PRIMARY KEY,
		journey_id INTEGER,
		start datetime,
		end datetime,
		FOREIGN KEY (journey_id)
      		REFERENCES journey (id)
         		ON DELETE CASCADE
         		ON UPDATE NO ACTION
	)
`;

db.run(create_user);
db.run(create_journey);
db.run(create_periods);

db.close();