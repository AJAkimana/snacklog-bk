import express from 'express';
import {
  getProducts,
  getProductById
} from '../../controllers/product.controller';
import { doesProductExist } from '../../middlewares/product.middleware';

const productRouters = express.Router();

productRouters.get('/', getProducts);
productRouters.get('/:productId', doesProductExist, getProductById);

export default productRouters;
