import { EntryUpload } from "../types/generalTypes";
import xdripService from "../services/xdrip.service";
import { Request, Response } from "express";
import userService from "../services/user.service";

const createEntries = async (req: Request, res: Response) => {
  try {
    const entries = req.body as EntryUpload[];
    if (!entries || entries.length === 0) {
      return res.status(400).json({ error: "No se proporcionaron entradas." });
    }
    const token = "3f509aca-4521-42f7-b621-7ad59db58cd1";
    const user = await userService.getUserByToken(token);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    } 
    await xdripService.createEntries(user.id ,entries);
    res.status(200).send("Se ingresaron los datos correctamente.");
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const xdrip = {
  createEntries,
};

export default xdrip;
