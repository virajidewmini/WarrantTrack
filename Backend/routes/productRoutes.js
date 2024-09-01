import express from 'express';
import {addProduct,getProducts} from "../controllers/productsController.js";
const router = express.Router();

router.post('/create', addProduct)
router.get('/all', getProducts)

export default router;