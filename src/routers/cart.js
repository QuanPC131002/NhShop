import { Router } from "express";
import { addItemToCart, getCartByUserId, removeFromCart, updateProductQuantity } from "../controllers/cart";

const router = await Router();

router.post('/cart/add-to-cart', addItemToCart)
router.put('/cart/update-product-quantity', updateProductQuantity)
router.get('/cart/:userId', getCartByUserId)
router.delete('/cart/remove-cart', removeFromCart)
export default router