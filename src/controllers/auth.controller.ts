import { User } from '../generated/prisma';
import authService from '../services/auth.service';
import { Request, Response } from 'express';

const register = async (req: Request, res: Response) => {
  try {
    const user = req.body as User;
    const newUser = await authService.register(user.email, user.password);
    return res.status(201).json(newUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default {
  register,
  login
};