import { Data } from '../generated/prisma';
import prisma from '../utils/prisma.server';

//get toda la data
const getAllData = async (): Promise<Data[]> => {
  return prisma.data.findMany({});
};

//get toda data de un usuario
const getUserData = async (id: number): Promise<Data | null> => {
  return prisma.data.findUnique({
    where: {
      id: id
    }
  });
};

//get toda data de un tipo especifico de un usuario 
import { DataType } from '../generated/prisma';

const getUserDataType = async (id: number, dataType: string): Promise<Data | null> => {
  return prisma.data.findUnique({
    where: {
      id: id,
      dataType: dataType as DataType,
    }
  });
};

//crear data de un usuario
const createData = async (data: Omit<Data, 'id'>): Promise<Data> => {
  const { dataType, value, description, userId} = data;
  return prisma.data.create({
    data: {
      dataType,
      value,
      description,
      userId // DESPUES CUANDO HAYA LOGIN HACER CON REQ.USER.ID
    }
  });
};

export default {
  getAllData,
  getUserData,
  getUserDataType,
  createData
};
