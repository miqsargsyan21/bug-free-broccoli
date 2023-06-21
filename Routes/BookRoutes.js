import {
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  addBook
} from "../Controllers/BookControllers.js";
import { Router } from "express";

const router = Router();

router.get('/all', getAllBooks);
router.get('/:bookId', getBookById);
router.post('/add', addBook);
router.delete('/delete/:bookId', deleteBook);
router.put('/update/:bookId', updateBook);

export default router;