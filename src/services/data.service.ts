import { Data } from '../generated/prisma';
import prisma from '../utils/prisma';

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
  entries.forEach((e: Data) => {
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

//promedio semanal de presion de un usuario
const getWeeklyAveragePressure = async (
  userId: number
): Promise<{ day: string; PAS: number | null; PAD: number | null }[]> => {
  const today = new Date();
  const endOfToday = new Date(today);
  endOfToday.setHours(23, 59, 59, 999);

  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 6);
  weekAgo.setHours(0, 0, 0, 0);

  // Obtener datos PAS y PAD
  const [entriesPAS, entriesPAD] = await Promise.all([
    prisma.data.findMany({
      where: {
        userId,
        dataType: DataType.PAS,
        createdAt: { gte: weekAgo, lte: endOfToday }
      },
      orderBy: { createdAt: 'asc' }
    }),
    prisma.data.findMany({
      where: {
        userId,
        dataType: DataType.PAD,
        createdAt: { gte: weekAgo, lte: endOfToday }
      },
      orderBy: { createdAt: 'asc' }
    })
  ]);

  // Inicializar días
  const days: string[] = [];
  const groupedPAS: Record<string, number[]> = {};
  const groupedPAD: Record<string, number[]> = {};
  
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekAgo);
    d.setDate(weekAgo.getDate() + i);
    const key = d.toISOString().split('T')[0];
    days.push(key);
    groupedPAS[key] = [];
    groupedPAD[key] = [];
  }

  // Agrupar valores por día
  entriesPAS.forEach((e: Data) => {
    const key = e.createdAt.toISOString().split('T')[0];
    if (groupedPAS[key]) groupedPAS[key].push(Number(e.value));
  });

  entriesPAD.forEach((e: Data) => {
    const key = e.createdAt.toISOString().split('T')[0];
    if (groupedPAD[key]) groupedPAD[key].push(Number(e.value));
  });

  // Calcular promedios diarios
  const dailyAverages = days.map((day) => {
    const valuesPAS = groupedPAS[day];
    const valuesPAD = groupedPAD[day];

    const PAS = valuesPAS && valuesPAS.length > 0
      ? Number((valuesPAS.reduce((a, b) => a + b, 0) / valuesPAS.length).toFixed(2))
      : null;

    const PAD = valuesPAD && valuesPAD.length > 0
      ? Number((valuesPAD.reduce((a, b) => a + b, 0) / valuesPAD.length).toFixed(2))
      : null;

    return { day, PAS, PAD };
  });

  return dailyAverages;
};

//obtiene ultimo registro de cada tipo de data para un usuario
const getLatestDataByType = async (
  userId: number
): Promise<Record<string, Data | null>> => {
  try {
    const dataTypes = Object.values(DataType);
    const latestData: Record<string, Data | null> = {};

    for (const type of dataTypes) {
      try {
        const dataEntry = await prisma.data.findFirst({
          where: {
            userId,
            dataType: type
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
        latestData[type] = dataEntry;
      } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
        latestData[type] = null;
      }
    }

    return latestData;
  } catch (error: any) {
    console.error('Error in getLatestDataByTypeForUser:', error);
    throw new Error(`Failed to get latest data: ${error.message}`);
  }
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
  getWeeklyAveragePressure,
  getLatestDataByType,
  createData,
  updateData,
  deleteData
};
