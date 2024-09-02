import express from 'express';
import {addProduct,getProducts,getProduct} from "../controllers/productsController.js";
const router = express.Router();

router.post('/create', addProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)

export default router;