import express  from "express";
import { userLogin, userSignup, userLogout } from "../controllers/auth.controller.js"; 

const router = express.Router();

router.post('/login', userLogin);

router.post('/signup', userSignup);

router.post('/logout', userLogout);


export default router;