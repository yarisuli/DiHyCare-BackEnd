import dataController from '../controllers/data.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { Router } from 'express';

const router = Router();

router.get('', verifyToken, dataController.getAllData);
router.get('/user', verifyToken, dataController.getUserData);
router.get('/type', verifyToken, dataController.getUserDataByType);
router.get('/glucoseGraphic', verifyToken, dataController.getWeeklyAverageGlucose);
router.get('/pressureGraphic', verifyToken, dataController.getWeeklyAveragePressure);
router.post('', verifyToken, dataController.createData);
router.put('/:id', verifyToken, dataController.updateData);
router.delete('/:id', verifyToken, dataController.deleteData);

export default router;
