import express from 'express';
import {
  getProducts,
  getProductById
} from '../../controllers/product.controller';
import {
  doesProductExist,
  validatePagination
} from '../../middlewares/product.middleware';

const productRouters = express.Router();

productRouters.get('/', validatePagination, getProducts);
productRouters.get('/:productId', doesProductExist, getProductById);

export default productRouters;
