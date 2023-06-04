import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const {MONGO_URI: uri} = dotenv.config().parsed;

const client = new MongoClient(uri);

const connect = async () => {
  try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export { connect, client };