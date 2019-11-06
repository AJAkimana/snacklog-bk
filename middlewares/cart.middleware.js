import { serverResponse } from '../helpers';

export const hasProductAdded = (req, res, next) => {
  const { carts } = req.session;
  const {
    product_id,
    user: { username },
    size
  } = req.body;
  const productIndex = carts.findIndex(
    cart => cart.product_id === product_id && cart.user.username === username
  );
  if (!username)
    return serverResponse(res, 400, 'Sorry we could not find your information');
  if (productIndex !== -1)
    return serverResponse(res, 409, 'The product has already added');
  if (!size || isNaN(size))
    return serverResponse(res, 400, 'Please select size');
  return next();
};
