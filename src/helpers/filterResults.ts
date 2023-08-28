import {
  FilterFacetDefault,
  FilterFacetPrice,
  ProductsQuery,
} from '@src/types/products';

export const filterResults = (
  data: ProductsQuery,
  selectedTypes: FilterFacetDefault[],
  selectedBrands: FilterFacetDefault[],
  selectedPrices: FilterFacetPrice[]
) => {
  let filteredResults = data.products;

  if (selectedTypes.length) {
    filteredResults = filteredResults.filter((product) => {
      let allow = false;

      selectedTypes.forEach((type) => {
        if (type.value === product.defaultCategory.name) {
          allow = true;
        }
      });

      return allow;
    });
  }

  if (selectedBrands.length) {
    filteredResults = filteredResults.filter((product) => {
      let allow = false;

      selectedBrands.forEach((brand) => {
        if (brand.value === product.brand.name) {
          allow = true;
        }
      });

      return allow;
    });
  }

  if (selectedPrices.length) {
    filteredResults = filteredResults.filter((product) => {
      let allow = false;

      selectedPrices.forEach((price) => {
        if (
          product.price.priceIncTax >= price.value.gte &&
          product.price.priceIncTax <= price.value.lte
        ) {
          allow = true;
        }
      });

      return allow;
    });
  }

  return filteredResults;
};
