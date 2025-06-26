import entryController from "../controllers/xdrip.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

router.post("/entries", entryController.createEntries);
// router.post("/treatments", entryController.createEntries);
// router.post("/entries/devicestatus", entryController.createEntries);

export default router;
