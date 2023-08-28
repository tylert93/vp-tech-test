import { FilterFacetDefault, FilterFacetPrice } from '@src/types/products';

export interface FilterAccordionProps<
  T extends FilterFacetDefault | FilterFacetPrice
> {
  title: string;
  options: T[];
  border?: boolean;
  selectedFilters: T[];
  updateFilters: (filters: T[]) => void;
  clearSwitch: undefined | boolean;
  firstLoad: boolean;
}
