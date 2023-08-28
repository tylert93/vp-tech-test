import { Dispatch, SetStateAction } from 'react';

import { FilterFacetDefault, FilterFacetPrice } from '@src/types/products';

export interface FilterAccordionProps<
  T extends FilterFacetDefault | FilterFacetPrice
> {
  title: string;
  options: T[];
  border?: boolean;
  selectedFilters: T[];
  setSelectedFilters: Dispatch<SetStateAction<T[]>>;
  clearSwitch: boolean;
}
