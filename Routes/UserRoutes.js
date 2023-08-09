import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addUser
} from "../Controllers/UserController.js";
import { Router } from "express";

const router = Router();

router.route('/')
  .get(getAllUsers)
  .post(addUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;