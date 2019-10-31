import express from 'express';
import apisRoutes from './apis';

const routes = express.Router();

routes.use('/api', apisRoutes);
routes.all('*', (req, res) =>
  res.status(404).send({
    status: 404,
    error: 'Sorry you have lost!'
  })
);

export default routes;
