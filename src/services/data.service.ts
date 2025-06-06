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

export default {
  getAllData,
  getUserData
};
