import { Dispatch, SetStateAction } from 'react';

import { FilterFacetDefault, FilterFacetPrice } from '@src/types/products';

export interface CheckBoxProps<
  T extends FilterFacetDefault | FilterFacetPrice
> {
  selectedFilters: T[];
  setSelectedFilters: Dispatch<SetStateAction<T[]>>;
  option: T;
}
