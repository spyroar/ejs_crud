import express from "express";
import { userController ,createUserController} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController);
router.post("/createUser",createUserController)
export default router;
