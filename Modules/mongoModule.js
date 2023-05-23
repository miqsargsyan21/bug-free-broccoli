import mongoose from "mongoose";
import dotenv from "dotenv";

const {MONGO_URI: uri} = dotenv.config().parsed;

const connect = () => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}

export { connect };