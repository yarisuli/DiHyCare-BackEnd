import { User } from "../generated/prisma";
// import { Author } from "../types/generalTypes";
import prisma from "../utils/prisma.server";

const getUsers = async (): Promise<User[]> => {
  return prisma.user.findMany({});
};

const getUser = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

const createUser = async (user: Omit<User, "id">): Promise<User> => {
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
      height,
    },
  });
};

// const updateAuthor = async (
//   author: Omit<Author, "id">,
//   id: number,
// ): Promise<Author> => {
//   const { firstName, lastName } = author;
//   return prisma.author.update({
//     where: {
//       id: id,
//     },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
// };

// const deleteAuthor = async (id: number): Promise<void> => {
//   await prisma.author.delete({
//     where: {
//       id,
//     },
//   });
// };

export default {
  getUsers,
  getUser,
  createUser,
};
