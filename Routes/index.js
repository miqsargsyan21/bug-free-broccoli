import BookRoutes from './BookRoutes';
import Routes from 'express';

const router = Routes();

router.use('/book', BookRoutes);

export default router;