import userController from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.get("", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("", userController.createUser);
// router.put("/:id", authorController.updateAuthor);
// router.delete("/:id", authorController.deleteAuthor);

export default router;
