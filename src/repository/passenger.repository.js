import { db } from "../database/database.connection.js"

async function PassengerDB(firstName, lastName) {

    return db.query(
        `
          INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)
        `,
        [firstName, lastName]
    )
}

export const passengerRepository = { PassengerDB }