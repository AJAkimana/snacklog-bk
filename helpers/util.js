import { readFileSync } from 'fs';
import lodash from 'lodash';

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
  return { paginatedItems, pages };
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
