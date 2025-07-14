import { User } from '../generated/prisma';
import userService from '../services/user.service';
import { Request, Response } from 'express';

//Get todos los usuarios
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//Get un usuario por id
const getUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const user = await userService.getUser(id);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: 'User not found.' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//Crear un usuario
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body as User;
    const newUser = await userService.createUser(user);
    return res.status(201).json(newUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//Actualizar un usuario
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params["id"]);
    await userService.updateUser(req.body, id);
    res.send("User updated succesfully.");
  } catch (error: any) {
    return res.status(500).json({
      message: "Error at updating user.",
      error: error.message,
    });
  }
};

//Eliminar un usuario
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params["id"]);
    await userService.deleteUser(id);
    res.send("User deleted successfully.");
  } catch (error: any) {
    return res.status(500).json({
      message: "Error at deleting user.",
      error: error.message,
    });
  }
};

const user = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};

export default user;
