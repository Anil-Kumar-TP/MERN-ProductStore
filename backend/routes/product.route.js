import express from 'express'
import { createProducts, deleteProduct, getProducts, updatedProduct } from '../controllers/product.controller.js';
const router = express.Router();


router.get('/', getProducts);
router.post('/',createProducts);
router.delete('/:id', deleteProduct);
router.put('/:id', updatedProduct);


export default router;