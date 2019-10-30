import express from 'express';
import {
  getProducts,
  getProductById
} from '../../controllers/product.controller';
import { isProductExist } from '../../middlewares/product.middleware';

const productRouters = express.Router();

productRouters.get('/', getProducts);
productRouters.get('/:productId', isProductExist, getProductById);

export default productRouters;
