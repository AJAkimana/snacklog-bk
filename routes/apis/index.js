import express from 'express';
import productRoutes from './product.route';
import cartRoutes from './cart.route';

const routers = express.Router();

routers.use('/products', productRoutes);
routers.use('/carts', cartRoutes);

export default routers;
