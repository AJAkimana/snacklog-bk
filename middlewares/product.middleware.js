import { Product } from '../models';
import { serverResponse } from '../helpers';

export const doesProductExist = (req, res, next) => {
  const productId = req.params.productId || req.body.product_id;
  const product = Product.findById(productId);
  if (product) return next();
  return serverResponse(res, 404, 'Product does not exit');
};
