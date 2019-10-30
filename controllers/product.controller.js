import { Product } from '../models';
import { serverResponse, paginate } from '../helpers';

export const getProducts = (req, res) => {
  const productsList = Product.find();
  const products = paginate(productsList, 4, 1);
  return serverResponse(res, 200, 'Success', products);
};

export const getProductById = (req, res) => {
  const { productId } = req.params;
  const product = Product.findById(productId);
  return serverResponse(res, 200, 'Success', product);
};
