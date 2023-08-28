import {
  FilterFacetDefault,
  FilterFacetPrice,
  FilterFacets,
} from '@src/types/products';

export interface FiltersPanelProps {
  facets: FilterFacets;
  selectedBrands: FilterFacetDefault[];
  updateBrands: (filters: FilterFacetDefault[]) => void;
  selectedTypes: FilterFacetDefault[];
  updateTypes: (filters: FilterFacetDefault[]) => void;
  selectedPrices: FilterFacetPrice[];
  updatePrices: (filters: FilterFacetPrice[]) => void;
  clearSwitch: undefined | boolean;
  firstLoad: boolean;
}
