import calendarController from '../controllers/calendar.controller';
import { Router } from 'express';

const router = Router();

router.get('', calendarController.getEvents);
router.get('/:id', calendarController.getEventById);
router.get('/user', calendarController.getEventByUser);
router.get('/type', calendarController.getEventByType);
router.post('', calendarController.createEvent);
router.put('/:id', calendarController.updateEvent);
router.delete('/:id', calendarController.deleteEvent);

export default router; 