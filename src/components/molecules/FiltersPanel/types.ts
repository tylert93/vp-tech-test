import {
  FilterFacetDefault,
  FilterFacetPrice,
  FilterFacets,
} from '@src/types/products';
import { Dispatch, SetStateAction } from 'react';

export interface FiltersPanelProps {
  facets: FilterFacets;
  selectedBrands: FilterFacetDefault[];
  setSelectedBrands: Dispatch<SetStateAction<FilterFacetDefault[]>>;
  selectedTypes: FilterFacetDefault[];
  setSelectedTypes: Dispatch<SetStateAction<FilterFacetDefault[]>>;
  selectedPrices: FilterFacetPrice[];
  setSelectedPrices: Dispatch<SetStateAction<FilterFacetPrice[]>>;
  clearSwitch: boolean;
}
