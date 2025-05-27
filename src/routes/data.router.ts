import dataController from "../controllers/data.controller";
import { Router } from "express";

const router = Router();

router.get("", dataController.getData);

export default router;
