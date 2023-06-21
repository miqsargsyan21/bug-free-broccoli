import { getAllAuthors, addAuthor } from "../Controllers/AuthorController.js";
import { Router } from "express";

const router = Router();

router.get('/all', getAllAuthors);
router.post('/add', addAuthor);

export default router;