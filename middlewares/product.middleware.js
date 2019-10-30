import { Product } from '../models';
import { serverResponse } from '../helpers';

export const isProductExist = (req, res, next) => {
  const { productId } = req.params;
  const product = Product.findById(productId);
  if (product) return next();
  return serverResponse(res, 404, 'Product does not exit');
};
