import { db } from "../database/database.connection.js"

async function FlightDB(origin, destination, date) {
   
    return db.query(
        `
          INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)
        `,
        [origin, destination, date]
    )
}

export const flightRepository = { FlightDB }