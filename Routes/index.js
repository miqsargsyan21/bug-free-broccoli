import AuthorRoutes from "./AuthorRoutes.js";
import BookRoutes from './BookRoutes.js';
import Routes from 'express';

const router = Routes();

router.use('/author', AuthorRoutes);
router.use('/book', BookRoutes);

export default router;