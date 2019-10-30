import { dataToJson, mustBeInArray } from '../helpers';

const allProducts = dataToJson();
export class Product {
  static find() {
    return allProducts;
  }

  static findById(productId) {
    const product = mustBeInArray(allProducts, productId);
    return product;
  }
}
