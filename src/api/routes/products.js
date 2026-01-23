import express from 'express';
// Note: importing named exports for controller functions
import * as productsController from '../controllers/productsController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'descriptionImages', maxCount: 10 }]), productsController.createProduct);
router.put('/:id', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'descriptionImages', maxCount: 10 }]), productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

export default router;
