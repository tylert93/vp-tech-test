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
}: FiltersPanelProps) => (
  <>
    <FilterAccordion
      title="Type"
      options={facets.type}
      selectedFilters={selectedTypes}
      setSelectedFilters={setSelectedTypes}
    />
    <FilterAccordion
      title="Brand"
      options={facets.brand}
      selectedFilters={selectedBrands}
      setSelectedFilters={setSelectedBrands}
    />
    <FilterAccordion
      title="Price"
      options={facets.price}
      selectedFilters={selectedPrices}
      setSelectedFilters={setSelectedPrices}
      price
      border={false}
    />
  </>
);
