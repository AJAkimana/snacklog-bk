import { dataToJson, mustBeInArray } from '../helpers';

const mockedProducts = `${__dirname}/../mocks/MOCK_DATA.json`;

const allProducts = dataToJson(mockedProducts);
export class Product {
  static find() {
    return allProducts;
  }

  static findById(productId) {
    const product = mustBeInArray(allProducts, productId);
    return product;
  }
}
