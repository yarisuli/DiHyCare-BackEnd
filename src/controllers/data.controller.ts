import { Data } from "../generated/prisma";
import dataService from "../services/data.service";
import { Request, Response } from "express";

// get toda la data
const getData = async (req: Request, res: Response) => {
    try {
        const data = await dataService.getData();
        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
};

const user = {
    getData,
};

export default user;
