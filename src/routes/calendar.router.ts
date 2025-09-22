import calendarController from '../controllers/calendar.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { Router } from 'express';

const router = Router();

router.get('/user', verifyToken, calendarController.getEventByUser);
router.get('/type', verifyToken, calendarController.getEventByType);
router.get('/:id', verifyToken, calendarController.getEventById);
router.get('', verifyToken, calendarController.getEvents);
router.post('', verifyToken, calendarController.createEvent);
router.put('/:id', verifyToken, calendarController.updateEvent);
router.delete('/:id', verifyToken, calendarController.deleteEvent);

export default router;
