import express from 'express';
import productRoutes from './product.routes';

const routers = express.Router();

routers.use('/products', productRoutes);

export default routers;
