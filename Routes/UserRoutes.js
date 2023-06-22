import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addUser
} from "../Controllers/UserController.js";
import { Router } from "express";

const router = Router();

router.get('/all', getAllUsers);
router.get('/:userId', getUserById);
router.post('/add', addUser);
router.delete('/delete/:userId', deleteUser);
router.put('/update/:userId', updateUser);

export default router;