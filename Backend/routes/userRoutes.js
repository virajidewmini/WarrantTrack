import express from "express";
import {login, signup} from "../controllers/userController.js";

const router=express.Router();

//add new customer
router.post('/login',login)

//get all customers
router.post('/signup',signup)

export default router;