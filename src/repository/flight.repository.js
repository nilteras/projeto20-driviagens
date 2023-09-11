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

export const flightRepository = { getOriginDB, getDestinationDB, createFlightDB }