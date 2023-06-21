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

const addAuthor = async (req, res) => {
  const {firstName, lastName, birthday} = req.body;

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

export { getAllAuthors, addAuthor };