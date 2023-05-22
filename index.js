import { connect } from "./modules/mongoModule.js";
import bodyParser from "body-parser";
import express from 'express';
import dotenv from 'dotenv';

let { PORT: port } = dotenv.config().parsed;
port = port - 0 || 3000;

const app = express();
connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})