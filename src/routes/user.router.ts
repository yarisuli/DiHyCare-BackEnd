import userController from '../controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.get('', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('', userController.createUser);

export default router;
