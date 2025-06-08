import { Data } from '../generated/prisma';
// import { Author } from "../types/generalTypes";
import prisma from '../utils/prisma.server';

//get toda la data
const getAllData = async (): Promise<Data[]> => {
  return prisma.data.findMany({});
};

const getUserData = async (id: number): Promise<Data | null> => {
  return prisma.data.findUnique({
    where: {
      id: id
    }
  });
};

const createData = async (data: Omit<Data, 'id'>): Promise<Data> => {
  const { dataType, value, description, userId} = data;
  return prisma.data.create({
    data: {
      dataType,
      value,
      description,
      userId
    }
  });
};

export default {
  getAllData,
  getUserData,
  createData
};
