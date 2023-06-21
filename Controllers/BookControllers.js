import { queryMethod } from "../Modules/MysqlModule.js";

const getAllBooks = async (req, res) => {
  try {
    const response = await queryMethod('SELECT * FROM Books');

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const addBook = async (req, res) => {
  const {name, releaseDate, authorIds = []} = req.body;

  try {
    const response = await queryMethod('INSERT INTO Books (name, release_date) VALUES (?, ?)', [name, releaseDate]);

    const bookId = response.insertId;

    const authorValues = authorIds.map((authorId) => {
      return [bookId, authorId];
    });

    await queryMethod(`INSERT INTO AuthorBookRelations (book_id, author_id) VALUES ?`, [authorValues]);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

export { getAllBooks, addBook };