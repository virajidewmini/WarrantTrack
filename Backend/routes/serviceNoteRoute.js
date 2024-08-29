import express from "express";

import { addServiceNote} from '../controllers/serviceNoteController.js';

const router=express.Router();

//add new customer
router.post('/',addServiceNote)

export default router;