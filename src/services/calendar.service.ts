import { Calendar } from '../generated/prisma';
import prisma from '../utils/prisma.server';

// get todos los eventos
const getEvents = async (): Promise<Calendar[]> => {
  return prisma.calendar.findMany({});
};

// get evento por id
const getEventById = async (id: number): Promise<Calendar | null> => {
  return prisma.calendar.findUnique({
    where: {
      id: id
    }
  });
};

// get eventos de usuario
const getEventByUser = async (userId: number): Promise<Calendar[]> => {
  return prisma.calendar.findMany({
    where: {
      userId: userId
    }
  });
};

// get eventos de usuario por tipo
import { EventType } from '../generated/prisma';

const getEventByType = async (
  userId: number,
  eventType: string
): Promise<Calendar[]> => {
  return prisma.calendar.findMany({
    where: {
      userId: userId,
      type: eventType as EventType
    }
  });
};

// create evento
const createEvent = async (event: Omit<Calendar, 'id'>): Promise<Calendar> => {
  const { event: eventName, description, date, type, userId } = event;
  return prisma.calendar.create({
    data: {
      event: eventName,
      description,
      date,
      type,
      userId // DESPUES CUANDO HAYA LOGIN HACER CON REQ.USER.ID
    }
  });
};

//update evento
const updateEvent = async (
event: Omit<Calendar, 'id'>, id: number, userId: number): Promise<Calendar> => {
  const { event: eventName, description, date, type } = event;
  return prisma.calendar.update({
    where: {
      id: id
    },
    data: {
      event: eventName,
      description,
      date,
      type,
      userId // DESPUES CUANDO HAYA LOGIN HACER CON REQ.USER.ID
    }
  });
};

//delete evento
const deleteEvent = async (id: number): Promise<void> => {
  await prisma.calendar.delete({
    where: {
      id: id
    }
  });
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
