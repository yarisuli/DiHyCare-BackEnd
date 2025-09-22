import { get } from 'http';
import { User } from '../generated/prisma';
import prisma from '../utils/prisma.server';
// import { Author } from "../types/generalTypes";

//get todos los usuarios
const getUsers = async (): Promise<User[]> => {
  return prisma.user.findMany({});
};

//get un usuario por id
const getUser = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      id: id
    }
  });
};

//get un usuario por token
// const getUserByToken = async (token: string): Promise<User | null> => {
//   return prisma.user.findUnique({
//     where: {
//       token: token
//     }
//   });
// };

//crear un usuario
const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const { email, password, name, surname, age, sex, weight, height } = user;
  return prisma.user.create({
    data: {
      email,
      password,
      name,
      surname,
      age,
      sex,
      weight,
      height
    }
  });
};

//actualizar un usuario
const updateUser = async (
  user: Omit<User, 'id'>,
  id: number
): Promise<User> => {
  const {
    email,
    password,
    name,
    surname,
    age,
    sex,
    weight,
    height,
    updatedAt
  } = user;
  return prisma.user.update({
    where: {
      id: id
    },
    data: {
      email,
      password,
      name,
      surname,
      age,
      sex,
      weight,
      height,
      updatedAt
    }
  });
};

//eliminar un usuario
const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({
    where: {
      id
    }
  });
};

export default {
  getUsers,
  getUser,
  // getUserByToken,
  createUser,
  updateUser,
  deleteUser
};
