import { FilterFacetDefault, FilterFacetPrice } from '@src/types/products';

export interface CheckBoxProps<
  T extends FilterFacetDefault | FilterFacetPrice
> {
  selectedFilters: T[];
  updateFilters: (filters: T[]) => void;
  option: T;
  clearSwitch: undefined | boolean;
  firstLoad: boolean;
}
