import { queryMethod } from "../Modules/MysqlModule.js";

const getAllUsers = async (req, res) => {
  try {
    const response = await queryMethod('SELECT * FROM Users');

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
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await queryMethod('SELECT * FROM Users WHERE id = ?', [id]);

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
}

const addUser = async (req, res) => {
  const { firstName, lastName, birthday, email, password } = req.body;

  try {
    const response = await queryMethod('INSERT INTO Users(first_name, last_name, birthday, email, password) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, birthday, email, password]);

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
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, birthday, email, password } = req.body;

  try {
    const response = await queryMethod('UPDATE Users SET first_name = ?, last_name = ?, birthday = ?, email = ?, password = ? WHERE id = ?', [firstName, lastName, birthday, email, password, id]);

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
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await queryMethod('DELETE FROM Users WHERE id = ?', [id]);

    res.status(200).json({
      success: true,
      message: `User with id ${id} deleted`,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}

export {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addUser
}