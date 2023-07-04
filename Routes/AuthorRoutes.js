import {
  getAuthorById,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
  addAuthor
} from "../Controllers/AuthorController.js";
import { Router } from "express";

const router = Router();

router.route('/')
  .get(getAllAuthors)
  .post(addAuthor);

router.route('/:authorId')
  .get(getAuthorById)
  .put(updateAuthor)
  .delete(deleteAuthor);

export default router;