const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "todo";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("MongoDB connected!");

    const db = client.db(dbName);
    await db.command({ ping: 1 });
    console.log(`DB ping success: ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

run();
