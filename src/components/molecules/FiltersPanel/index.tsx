import { FilterAccordion } from '@src/components/molecules/FilterAccordion';

import { FiltersPanelProps } from './types';

export const FiltersPanel = ({
  facets,
  selectedBrands,
  setSelectedBrands,
  selectedTypes,
  setSelectedTypes,
  selectedPrices,
  setSelectedPrices,
  clearSwitch,
}: FiltersPanelProps) => (
  <>
    <FilterAccordion
      title="Type"
      options={facets.type}
      selectedFilters={selectedTypes}
      setSelectedFilters={setSelectedTypes}
      clearSwitch={clearSwitch}
    />
    <FilterAccordion
      title="Brand"
      options={facets.brand}
      selectedFilters={selectedBrands}
      setSelectedFilters={setSelectedBrands}
      clearSwitch={clearSwitch}
    />
    <FilterAccordion
      title="Price"
      options={facets.price}
      selectedFilters={selectedPrices}
      setSelectedFilters={setSelectedPrices}
      border={false}
      clearSwitch={clearSwitch}
    />
  </>
);
