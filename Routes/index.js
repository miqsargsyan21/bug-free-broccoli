import AuthorRoutes from "./AuthorRoutes.js";
import BookRoutes from './BookRoutes.js';
import UserRoutes from "./UserRoutes.js";
import Routes from 'express';

const router = Routes();

router.use('/author', AuthorRoutes);
router.use('/book', BookRoutes);
router.use('/user', UserRoutes);

export default router;