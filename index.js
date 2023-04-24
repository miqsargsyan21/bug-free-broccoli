import dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";

let { PORT: port } = dotenv.config().parsed;
port = port - 0 || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})