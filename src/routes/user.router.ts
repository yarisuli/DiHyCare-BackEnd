import userController from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { Router } from 'express';

const router = Router();

router.get('', verifyToken, userController.getUsers);
router.get('/:id', verifyToken, userController.getUser);
router.post('', verifyToken, userController.createUser);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);

export default router;
