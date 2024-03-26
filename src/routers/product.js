import { Router } from "express";
import { create, deleteProductById, getAll, getProductById, updateProductById } from "../controllers/product";

const router = Router();
router.post('/products', create);
router.get('/products', getAll);
router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProductById);
router.put('/products/:id', updateProductById);

export default router;
