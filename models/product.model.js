import { dataToJson, mustBeInArray, sortByReleaseDate } from '../helpers';

const mockedProducts = `${__dirname}/../mocks/mocked_products.json`;

const allProducts = dataToJson(mockedProducts);
export class Product {
  static find({ release_date }) {
    return allProducts.sort(sortByReleaseDate);
  }

  static findById(productId) {
    const product = mustBeInArray(allProducts, productId);
    return product;
  }
}
