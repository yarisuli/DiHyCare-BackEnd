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

//get data de un usuario
const getUserData = async (req: Request, res: Response) => {
  const userId: number = req.body.userId;

  try {
    const userData = await dataService.getUserData(userId);
    if (userData) {
      return res.status(200).json(userData);
    }
    return res.status(404).json({ error: 'Data from user not found.' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//get data de un tipo especifico de un usuario
const getUserDataType = async (req: Request, res: Response) => {
  const userId: number = req.body.userId;
  const dataType: string = req.body.dataType;

  try {
    const userData = await dataService.getUserDataType(userId, dataType);
    if (userData) {
      return res.status(200).json(userData);
    }
    return res.status(404).json({ error: 'Data from user not found.' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//crear data de un usuario
const createData = async (req: Request, res: Response) => {
  try {
    const data = req.body as Data;
    const newData = await dataService.createData(data);
    return res.status(201).json(newData);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const user = {
  getAllData,
  getUserData,
  getUserDataType,
  createData
};

export default user;
