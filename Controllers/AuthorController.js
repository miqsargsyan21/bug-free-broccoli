import { queryMethod } from "../Modules/MysqlModule.js";

const getAllAuthors = async (req, res) => {
  try {
    const response = await queryMethod('SELECT * FROM Authors');

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

const getAuthorById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await queryMethod('SELECT * FROM Authors WHERE id = ?', [id]);

    res.status(200).json({
      success: true,
      data: response[0],
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const addAuthor = async (req, res) => {
  const { firstName, lastName, birthday } = req.body;

  try {
    const response = await queryMethod('INSERT INTO Authors (first_name, last_name, birthday) VALUES (?, ?, ?)', [firstName, lastName, birthday]);

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

const deleteAuthor = async (req, res) => {
  const { id } = req.params;

  try {
    await queryMethod('DELETE FROM Authors WHERE id = ?', [id]);

    res.status(200).json({
      success: true,
      message: 'Author deleted successfully',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, birthday } = req.body;

  try {
    await queryMethod('UPDATE Authors SET first_name = ?, last_name = ?, birthday = ? WHERE id = ?', [firstName, lastName, birthday, id]);

    res.status(200).json({
      success: true,
      message: 'Author updated successfully',
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

export {
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  addAuthor
};