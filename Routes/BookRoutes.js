import { getAllBooks, addBook } from "../Controllers/BookControllers.js";
import { Router } from "express";

const router = Router();

router.get('/all', getAllBooks);
router.post('/add', addBook);

export default router;