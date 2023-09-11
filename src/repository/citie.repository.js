import { db } from "../database/database.connection.js"

async function getCitieDB(name) {
  const result = await db.query(`
  SELECT * FROM cities WHERE name=$1;
`, [name])
  return result.rows[0]
}

async function createCitieDB(name) {

  await db.query(
    `
          INSERT INTO cities (name) VALUES ($1)
        `,
    [name]
  )
}

export const citieRepository = { getCitieDB, createCitieDB }