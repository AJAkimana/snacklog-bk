import express from 'express';
import {
  addProductToCart,
  getUserCartsProducts
} from '../../controllers/cart.controller';
import { hasProductAdded } from '../../middlewares/cart.middleware';
import { doesProductExist } from '../../middlewares/product.middleware';

const cartRouters = express.Router();

cartRouters.get('/:username', getUserCartsProducts);
cartRouters.post('/', doesProductExist, hasProductAdded, addProductToCart);

export default cartRouters;
