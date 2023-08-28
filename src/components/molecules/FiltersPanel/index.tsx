import { FilterAccordion } from '@src/components/molecules/FilterAccordion';

import { FiltersPanelProps } from './types';

export const FiltersPanel = ({
  facets,
  selectedBrands,
  updateBrands,
  selectedTypes,
  updateTypes,
  selectedPrices,
  updatePrices,
  clearSwitch,
  firstLoad,
}: FiltersPanelProps) => (
  <>
    <FilterAccordion
      title="Type"
      options={facets.type}
      selectedFilters={selectedTypes}
      updateFilters={updateTypes}
      clearSwitch={clearSwitch}
      firstLoad={firstLoad}
    />
    <FilterAccordion
      title="Brand"
      options={facets.brand}
      selectedFilters={selectedBrands}
      updateFilters={updateBrands}
      clearSwitch={clearSwitch}
      firstLoad={firstLoad}
    />
    <FilterAccordion
      title="Price"
      options={facets.price}
      selectedFilters={selectedPrices}
      updateFilters={updatePrices}
      border={false}
      clearSwitch={clearSwitch}
      firstLoad={firstLoad}
    />
  </>
);
