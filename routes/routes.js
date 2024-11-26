import express from "express";
import { userController ,createUserController} from "../controllers/user.controller.js";
import { getUser } from "../controllers/getuser.controller.js";
import { editController,updateController,deleteController} from "../controllers/editController.js";
editController
const router = express.Router();

router.get("/", userController);
router.post("/",createUserController)
router.get('/read',getUser)
router.get('/edit/:id',editController)
router.post('/update/:id',updateController)
router.get('/delete/:id',deleteController)
export default router;
