import { Calendar } from '../generated/prisma';
import calendarService from '../services/calendar.service';
import { Request, Response } from 'express';

// get todos los eventos
const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await calendarService.getEvents();
    return res.status(200).json(events);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// get evento por id
const getEventById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const event = await calendarService.getEventById(Number(id));
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    return res.status(200).json(event);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// get eventos de usuario
const getEventByUser = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params['id']);

  try {
    const event = await calendarService.getEventByUser(userId);
    if (event) {
      return res.status(200).json(event);
    }
    return res.status(404).json({ error: 'Event from user not found.' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//get eventos del usuario por tipo
const getEventByType = async (req: Request, res: Response) => {
  const userId: number = req.body.userId;
  const eventType: string = req.body.eventType;

  try {
    const events = await calendarService.getEventByType(userId, eventType);
    if (events.length === 0) {
      return res
        .status(404)
        .json({ error: 'Could not get events for this user and type.' });
    }
    return res.status(200).json(events);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// create evento
const createEvent = async (req: Request, res: Response) => {
  try {
    const event = req.body as Omit<Calendar, 'id'>;
    const newEvent = await calendarService.createEvent(event);
    return res.status(201).json(newEvent);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//update evento
const updateEvent = async (req: Request, res: Response) => {
  try {
    const eventId = parseInt(req.params['id'], 10);
    if (isNaN(eventId)) return res.status(400).json({ error: 'Invalid event ID' });

    const userId = Number(res.locals.userId);
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const eventData = req.body as Omit<Calendar, 'id'>;

    // pasar userId para que service valide ownership
    const updatedEvent = await calendarService.updateEvent(eventData, eventId, userId);
    return res.status(200).json(updatedEvent);
  } catch (error: any) {
    if (error.message === 'Event not found') return res.status(404).json({ message: 'Event not found.' });
    if (error.message === 'Forbidden') return res.status(403).json({ message: 'Forbidden' });
    return res.status(500).json({
      message: 'Error at updating event.',
      error: error.message
    });
  }
};

//delete evento
const deleteEvent = async (req: Request, res: Response) => {
  try {
    const eventId = parseInt(req.params['id'], 10);
    if (isNaN(eventId)) return res.status(400).json({ error: 'Invalid event ID' });

    const userId = Number(res.locals.userId);
    console.debug('deleteEvent request:', { eventId, tokenUserId: userId, reqParams: req.params, originalUrl: req.originalUrl });

    const existing = await calendarService.getEventById(eventId);
    console.debug('deleteEvent existing:', existing);

    if (!existing) return res.status(404).json({ message: 'Event not found.' });
    if (existing.userId !== userId) return res.status(403).json({ message: 'Forbidden' });

    await calendarService.deleteEvent(eventId);
    return res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (error: any) {
    console.error('Error deleting event:', error);
    return res.status(500).json({ message: 'Error at deleting event.', error: error.message });
  }
};

export default {
  getEvents,
  getEventById,
  getEventByUser,
  getEventByType,
  createEvent,
  updateEvent,
  deleteEvent
};
