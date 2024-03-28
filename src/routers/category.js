import { Router } from "express";
import { create, deleteCategoryById, getAll, getCategoryById, updateCategoryById } from "../controllers/category";

const router = Router();
router.post('/categories', create);
router.get('/categories', getAll);
router.get('/categories/:id', getCategoryById);
router.delete('/categories/:id', deleteCategoryById);
router.put('/categories/:id', updateCategoryById);

export default router;
