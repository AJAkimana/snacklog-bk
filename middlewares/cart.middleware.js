import { serverResponse } from '../helpers';

export const hasProductAdded = (req, res, next) => {
  const { carts } = req.session;
  const {
    product_id,
    user: { username }
  } = req.body;
  const productIndex = carts.findIndex(
    cart => cart.product_id === product_id && cart.user.username === username
  );

  if (productIndex === -1) return next();
  return serverResponse(res, 409, 'The product has already added');
};
