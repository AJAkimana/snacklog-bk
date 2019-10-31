import { serverResponse } from '../helpers';

export const addProductToCart = (req, res) => {
  let { carts } = req.session;
  const { user, product_id } = req.body;
  carts.push({ product_id, user });
  return serverResponse(res, 201, 'The product has added');
};

export const getUserCartsProducts = (req, res) => {
  const { carts } = req.session;
  const { username } = req.params;
  const userCart = carts.filter(card => card.user.username === username);
  return serverResponse(res, 200, 'Success', userCart);
};
