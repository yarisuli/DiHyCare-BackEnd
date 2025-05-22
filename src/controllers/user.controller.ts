// import { Author } from "../types/generalTypes";
import { User } from "../generated/prisma";
import userService from "../services/user.service";
import authorService from "../services/user.service";
import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await authorService.getUsers();
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const user = await authorService.getUser(id);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: "User not found." });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body as User;
    const newUser = await userService.createUser(user);
    return res.status(201).json(newUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// const updateAuthor = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params["id"]);
//     await authorService.updateAuthor(req.body, id);
//     res.send("Se actualizó el author correctamente.");
//   } catch (error: any) {
//     return res.status(500).json({
//       message: "Error al actualizar el author.",
//       error: error.message,
//     });
//   }
// };

// const deleteAuthor = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params["id"]);
//     await authorService.deleteAuthor(id);
//     res.send("Se actualizó el usuario correctamente.");
//   } catch (error: any) {
//     return res.status(500).json({
//       message: "Error al actualizar el author.",
//       error: error.message,
//     });
//   }
// };

const user = {
  getUsers,
  getUser,
  createUser,
};

export default user;
