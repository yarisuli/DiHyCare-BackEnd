import userController from '../controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.get('', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteAuthor);

export default router;
