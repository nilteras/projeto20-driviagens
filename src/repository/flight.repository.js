import { db } from "../database/database.connection.js"


async function getOriginDB(origin) {

  const result = await db.query(`
    SELECT * FROM cities WHERE id=$1;
  `, [origin])
  return result.rows[0]
}

async function getDestinationDB(destination) {
  const result = await db.query(`
  SELECT * FROM cities WHERE id=$1;
`, [destination])
  return result.rows[0]
}


async function createFlightDB(origin, destination, date) {

  return db.query(
    `
          INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);
        `,
    [origin, destination, date]
  )
}

async function getFlightsDB(origin, destination, smallerDate, biggerDate) {


  let query = `
    SELECT
      flight.id,
      city1.name AS origin,
      city2.name AS destination,
      flight.date
    FROM
      flights AS flight
    JOIN
      cities AS city1 ON flight.origin = city1.id
    JOIN
    cities AS city2 ON flight.destination = city2.id`;

  const queryParams = [];

  if (origin) {
    query += ` WHERE city1.name = $1`;
    queryParams.push(origin);
  }

  if (destination) {
    query += origin ? ` AND city2.name = $${queryParams.length + 1}` : ` WHERE city2.name = $1`;
    queryParams.push(destination);
  }

  if (smallerDate && biggerDate) {
    query += ` AND flight.date >= $${queryParams.length + 1} AND flight.date <= $${queryParams.length + 2}`;
    queryParams.push(smallerDate, biggerDate);
  }

  query += ` ORDER BY flight.date;`;

  return await db.query(query, queryParams);
}

export const flightRepository = { getOriginDB, getDestinationDB, createFlightDB, getFlightsDB }