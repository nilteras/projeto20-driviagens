import { db } from "../database/database.connection.js"


async function getPassengerDB(passengerId) {
  const result = await db.query(`
    SELECT * FROM passengers WHERE id=$1 
  `, [passengerId])
  return result.rows[0]
}

async function getFlightDB(flightId) {
  const result = await db.query(`
  SELECT * FROM flights WHERE id=$1 
`, [flightId])
return result.rows[0]
}

async function createTravelDB(passengerId, flightId) {
   
    await db.query(
        `
          INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)
        `,
        [passengerId, flightId]
    )
}

export const travelRepository = { getPassengerDB, getFlightDB, createTravelDB }