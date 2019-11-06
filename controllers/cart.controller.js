import { serverResponse } from '../helpers';
import { getUserCartProducts } from '../helpers/util';

export const addProductToCart = (req, res) => {
  let { carts } = req.session;
  const { user, product_id, size } = req.body;
  carts.push({ product_id, user, size });
  return serverResponse(res, 201, 'The product has added');
};

export const getUserCartsProducts = (req, res) => {
  const { carts } = req.session;
  const { username } = req.params;
  const currentUserCart = carts.filter(card => card.user.username === username);
  const currentUserItems = getUserCartProducts(currentUserCart);
  return serverResponse(res, 200, 'Success', currentUserItems);
};

export const finishShoping = (req, res) => {
  req.session.carts = [];
  return serverResponse(res, 200, 'Thanks for shopping with us');
};
