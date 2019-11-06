import { readFileSync } from 'fs';
import lodash from 'lodash';
import { Product } from '../models/product.model';

export const dataToJson = jsonFile => {
  const jsonData = readFileSync(jsonFile);
  return JSON.parse(jsonData);
};

export const paginate = (items, pageSize, pageNumber) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const remainder = items.length % pageSize == 0 ? 0 : 1;
  const pages = Math.floor(items.length / pageSize) + remainder;

  const paginatedItems = lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  return { paginatedItems, pageNumber, pageSize, pages };
};

export const mustBeInArray = (dataArray, id) => {
  const item = dataArray.filter(item => item.id == id);
  return item[0];
};

export const serverResponse = (res, statusCode, message, data) => {
  const messageType = statusCode >= 400 ? 'error' : 'message';
  return res
    .status(statusCode)
    .json({ status: statusCode, [messageType]: message, data });
};
export const getUserCartProducts = products => {
  const userCarts = [];
  products.map(product => {
    const { id, name, picture, model, description, price } = Product.findById(
      product.product_id
    );
    userCarts.push({
      id,
      name,
      picture,
      model,
      description,
      price,
      size: product.size
    });
  });
  return userCarts;
};
export const sortByReleaseDate = (start, end) => {
  return new Date(end.release_date) - new Date(start.release_date);
};
