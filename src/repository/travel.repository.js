import { db } from "../database/database.connection.js"

async function TravelDB(passengerId, flightId) {
   
    return db.query(
        `
          INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)
        `,
        [passengerId, flightId]
    )
}

export const travelRepository = { TravelDB }