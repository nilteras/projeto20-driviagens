import { db } from "../database/database.connection.js"

async function CitieDB(name) {

    return db.query(
        `
          INSERT INTO cities (name) VALUES ($1)
        `,
        [name]
    )
}

export const citieRepository = { CitieDB }