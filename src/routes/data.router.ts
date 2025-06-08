import dataController from '../controllers/data.controller';
import { Router } from 'express';

const router = Router();

router.get('', dataController.getAllData);
router.get('/:id', dataController.getUserData);
router.post('', dataController.createData);

export default router;
