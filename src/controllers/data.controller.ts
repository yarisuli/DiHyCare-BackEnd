import { Data } from '../generated/prisma';
import dataService from '../services/data.service';
import { Request, Response } from 'express';

// get toda la data
const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await dataService.getAllData();
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//Get un usuario por id
const getUserData = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const userData = await dataService.getUserData(id);
    if (userData) {
      return res.status(200).json(userData);
    }
    return res.status(404).json({ error: 'Data from user not found.' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const user = {
  getAllData,
  getUserData
};

export default user;
