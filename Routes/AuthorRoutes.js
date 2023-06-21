import {
  getAuthorById,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
  addAuthor
} from "../Controllers/AuthorController.js";
import { Router } from "express";

const router = Router();

router.get('/all', getAllAuthors);
router.get('/:authorId', getAuthorById);
router.post('/add', addAuthor);
router.delete('/delete/:authorId', deleteAuthor);
router.put('/update/:authorId', updateAuthor);

export default router;