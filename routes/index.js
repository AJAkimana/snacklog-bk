import express from 'express';
import apisRoutes from './apis';

const routes = express.Router();

routes.use('/api', apisRoutes);

export default routes;
