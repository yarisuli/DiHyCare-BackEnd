import { Data } from '../generated/prisma';
import prisma from '../utils/prisma.server';

//get toda la data
const getAllData = async (): Promise<Data[]> => {
  return prisma.data.findMany({});
};

//get toda data de un usuario
const getUserData = async (userId: number): Promise<Data[]> => {
  return prisma.data.findMany({
    where: {
      userId: userId
    }
  });
};

//get toda data de un tipo especifico de un usuario
import { DataType } from '../generated/prisma';

const getUserDataByType = async (
  userId: number,
  dataType: string
): Promise<Data[]> => {
  return prisma.data.findMany({
    where: {
      userId: userId,
      dataType: dataType as DataType
    }
  });
};

//promedio semanal de glucosa de un usuario
const getWeeklyAverageGlucose = async (
  userId: number
): Promise<{ day: string; average: number | null }[]> => {
  const today = new Date();
  const endOfToday = new Date(today);
  endOfToday.setHours(23, 59, 59, 999);

  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 6); // últimos 7 días incluyendo hoy
  weekAgo.setHours(0, 0, 0, 0);

  const entries = await prisma.data.findMany({
    where: {
      userId,
      dataType: DataType.GLUCOSE,
      createdAt: {
        gte: weekAgo,
        lte: endOfToday
      }
    },
    orderBy: { createdAt: 'asc' }
  });
  // inicializar días del rango
  const days: string[] = [];
  const grouped: Record<string, number[]> = {};
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekAgo);
    d.setDate(weekAgo.getDate() + i);
    const key = d.toISOString().split('T')[0];
    days.push(key);
    grouped[key] = [];
  }

  // agrupar por día (YYYY-MM-DD)
  entries.forEach((e) => {
    const key = e.createdAt.toISOString().split('T')[0];
    if (grouped[key]) grouped[key].push(Number(e.value));
  });

  // calcular promedios diarios, null si no hay datos
  const dailyAverages = days.map((day) => {
    const values = grouped[day];
    if (!values || values.length === 0) return { day, average: null };
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;
    return { day, average: Number(avg.toFixed(2)) };
  });

  return dailyAverages;
};


//crear data de un usuario
const createData = async (data: Omit<Data, 'id'>): Promise<Data> => {
  const { dataType, value, description, userId } = data;
  return prisma.data.create({
    data: {
      dataType,
      value,
      description,
      userId // DESPUES CUANDO HAYA LOGIN HACER CON REQ.USER.ID
    }
  });
};

const updateData = async (
  data: Omit<Data, 'id'>,
  id: number
): Promise<Data> => {
  const { dataType, value, description, userId } = data;
  return prisma.data.update({
    where: {
      id: id
    },
    data: {
      dataType,
      value,
      description,
      userId // DESPUES CUANDO HAYA LOGIN HACER CON REQ.USER.ID
    }
  });
};

const deleteData = async (id: number): Promise<void> => {
  await prisma.data.delete({
    where: {
      id: id
    }
  });
};

export default {
  getAllData,
  getUserData,
  getUserDataByType,
  getWeeklyAverageGlucose,
  createData,
  updateData,
  deleteData
};
