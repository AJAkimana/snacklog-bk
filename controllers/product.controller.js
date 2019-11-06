import { Product } from '../models';
import { serverResponse, paginate } from '../helpers';

export const getProducts = (req, res) => {
  const { page, pageSize } = req.query;
  const productsList = Product.find({ release_date: 1 });
  const products = paginate(productsList, pageSize, page);
  return serverResponse(res, 200, 'Success', products);
};

export const getProductById = (req, res) => {
  const { productId } = req.params;
  const product = Product.findById(productId);
  return serverResponse(res, 200, 'Success', product);
};
