import {MongoClient, ServerApiVersion} from "mongodb";
import dotenv from "dotenv";

const {MONGO_URI: uri} = dotenv.config().parsed;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    deprecationErrors: true,
    strict: true,
  }
})

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  }
}

export {client, connect};