import express from 'express';
import {addProduct} from "../controllers/productsController.js";
const router = express.Router();

router.post('/create', addProduct)

export default router;