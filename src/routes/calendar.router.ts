import calendarController from '../controllers/calendar.controller';
import { Router } from 'express';

const router = Router();

router.get('/user', calendarController.getEventByUser);
router.get('/type', calendarController.getEventByType);
router.get('/:id', calendarController.getEventById);
router.get('', calendarController.getEvents);
router.post('', calendarController.createEvent);
router.put('/:id', calendarController.updateEvent);
router.delete('/:id', calendarController.deleteEvent);

export default router;
