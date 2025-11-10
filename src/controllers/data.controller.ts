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
  const userId: number = parseInt(req.params['id']);

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
const getUserDataByType = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params['id']);
  const dataType: string = req.body.dataType;

  try {
    const userData = await dataService.getUserDataByType(userId, dataType);
    if (userData) {
      return res.status(200).json(userData);
    }
    return res.status(404).json({ error: 'Data from user not found.' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// obtener promedios diarios de GLUCOSE últimos 7 días para el usuario autenticado
const getWeeklyAverageGlucose = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params['id']);
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const averages = await dataService.getWeeklyAverageGlucose(userId);
    return res.status(200).json(averages);
  } catch (error: any) {
    console.error('Error in getWeeklyAverageGlucose controller:', error);
    return res.status(500).json({ error: 'Failed to get weekly glucose averages' });
  }
};

// obtener promedios diarios de PAS últimos 7 días para el usuario autenticado
const getWeeklyAveragePressure = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params['id']);
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const averages = await dataService.getWeeklyAveragePressure(userId);
    return res.status(200).json(averages);
  } catch (error: any) {
    console.error('Error in getWeeklyAveragePressure controller:', error);
    return res.status(500).json({ error: 'Failed to get weekly pressure averages' });
  }
};

const getLatestDataByType = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params['id']);
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const latestData = await dataService.getLatestDataByType(userId);
    
    // Check if we got any data back (object with at least one non-null value)
    const hasData = Object.values(latestData).some(entry => entry !== null);
    if (!hasData) {
      return res.status(404).json({ error: 'No data found for this user' });
    }

    return res.status(200).json(latestData);

  } catch (error: any) {
    console.error('Error in getLatestDataByType:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch latest data',
      details: error.message 
    });
  }
};

//crear data de un usuario
const createData = async (req: Request, res: Response) => {
  try {
    const data = req.body as Data;
    const userId = parseInt(req.params['id']);
    data.userId = userId;

    const newData = await dataService.createData(data);
    return res.status(201).json(newData);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

//actualizar data de un usuario
const updateData = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params['id']);
    const updatedData = await dataService.updateData(req.body, id);
    return res.status(200).json(updatedData);
  } catch (error: any) {
    return res.status(500).json({
      message: 'Error at updating data.',
      error: error.message
    });
  }
};

//eliminar data de un usuario
const deleteData = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params['id']);
    await dataService.deleteData(id);
    return res.status(200).send('Data deleted successfully.');
  } catch (error: any) {
    return res.status(500).json({
      message: 'Error with deleting data.',
      error: error.message
    });
  }
};

const user = {
  getAllData,
  getUserData,
  getUserDataByType,
  getWeeklyAverageGlucose,
  getWeeklyAveragePressure,
  getLatestDataByType,
  createData,
  updateData,
  deleteData
};

export default user;
