import * as pg from "pg";
const { Client } = pg;

export async function queryDB(sqlQuery: string) {
  const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres",
  });

  try {
    await client.connect();
    console.log("Connected to database");
    const res = await client.query(sqlQuery);
    return res.rows[0];
  } catch (e) {
    console.error(e);
    console.log("Failed to connect to database");
  } finally {
    await client.end();
    console.log("Disconnected from database");
  }
}
