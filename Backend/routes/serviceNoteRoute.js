import express from "express";

import { addServiceNote,getServiceNotes} from '../controllers/serviceNoteController.js';

const router=express.Router();

//add new customer
router.post('/',addServiceNote)
router.get('/',getServiceNotes)
export default router;