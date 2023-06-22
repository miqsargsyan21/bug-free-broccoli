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

const dbInit = () => {
  connection.connect((err) => {
    if (err) {
      console.log(`Error connecting to MySQL: ${err}`);
    } else {
      console.log('Connected to MySQL');
    }
  });
}

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

const setupTables = async () => {
  try {
    await queryMethod(`CREATE TABLE IF NOT EXISTS Users (
      user_id INT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      birthday DATE NOT NULL,
      is_admin BOOL DEFAULT FALSE
    )`)

    await queryMethod(`CREATE TABLE IF NOT EXISTS Authors (
      author_id INT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      birthday DATE NOT NULL
    )`);

    await queryMethod(`CREATE TABLE IF NOT EXISTS Books (
      book_id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      release_date DATE NOT NULL,
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES Users(user_id)
    )`);

    await queryMethod(`CREATE TABLE IF NOT EXISTS AuthorBookRelations (
      author_book_relation_id INT PRIMARY KEY AUTO_INCREMENT,
      book_id INT NOT NULL,
      author_id INT NOT NULL,
      CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE,
      CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES Authors(author_id) ON DELETE CASCADE
    )`);
  } catch (e) {
    console.log(`Error setting up tables: ${e}`);
  }
}

export { queryMethod, dbInit, setupTables };