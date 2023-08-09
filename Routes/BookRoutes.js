import {
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  addBook
} from "../Controllers/BookControllers.js";
import { Router } from "express";

const router = Router();

router.route("/")
  .get(getAllBooks)
  .post(addBook);

router.route("/:id")
  .get(getBookById)
  .put(updateBook)
  .delete(deleteBook);

export default router;