import dotenv from "dotenv";
import mysql from 'mysql';

const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASSWORD: password,
  MYSQL_DATABASE: database,
} = dotenv.config().parsed;

const config = {
  host,
  user,
  password,
  database,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log(`Error connecting to MySQL: ${err}`);
  } else {
    console.log('Connected to MySQL');
  }
});

const queryMethod = (query, params) => {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

export { queryMethod };