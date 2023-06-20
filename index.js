import Routes from "./Routes/index.js";
import bodyParser from "body-parser";
import express from 'express';
import dotenv from 'dotenv';

let { PORT: port } = dotenv.config().parsed;
port = port - 0 || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', Routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})