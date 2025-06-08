import dataController from '../controllers/data.controller';
import { Router } from 'express';

const router = Router();

router.get('', dataController.getAllData);
router.get('/user', dataController.getUserData);
router.get('/type', dataController.getUserDataType);
router.post('', dataController.createData);

export default router;
