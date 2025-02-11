import express from "express";
import { 
    registerUser, 
    loginUser, 
    logoutUser 
} from "../controller/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js"

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authenticateUser, logoutUser); // Protect logout route

export default router;
