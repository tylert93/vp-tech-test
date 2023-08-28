import {
  FilterFacetDefault,
  FilterFacetPrice,
  OrderByOption,
} from '@src/types/products';

export const storeFiltersInSession = <
  T extends FilterFacetDefault | FilterFacetPrice
>(
  key: string,
  filters: T[]
) => {
  sessionStorage.setItem(key, JSON.stringify(filters));
};

export const getFiltersInSession = <
  T extends FilterFacetDefault | FilterFacetPrice
>(
  key: string
): T[] | undefined => {
  const filters = sessionStorage.getItem(key);

  if (!filters) return undefined;

  return JSON.parse(filters);
};

export const storeOrderByInSession = (key: string, value: OrderByOption) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getOrderByInSession = (key: string): OrderByOption | undefined => {
  const orderBy = sessionStorage.getItem(key);

  if (!orderBy) return undefined;

  return JSON.parse(orderBy);
};
