import { useState, useEffect, Fragment } from 'react';
import { Switch } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { CheckBoxProps } from './types';
import { FilterFacetDefault, FilterFacetPrice } from '@src/types/products';

export const Checkbox = <T extends FilterFacetDefault | FilterFacetPrice>({
  selectedFilters,
  updateFilters,
  option,
  clearSwitch,
  firstLoad,
}: CheckBoxProps<T>) => {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    let isSelected = false;

    selectedFilters.forEach((filter) => {
      if (filter.displayValue === option.displayValue) {
        return (isSelected = true);
      }
    });

    if (isSelected) {
      const newFilters = selectedFilters.filter(
        (filter) => filter.displayValue !== option.displayValue
      );
      updateFilters(newFilters);
      setEnabled(false);
    } else {
      const newFilters = [...selectedFilters, option];
      updateFilters(newFilters);
      setEnabled(true);
    }
  };

  useEffect(() => {
    if (firstLoad) {
      let isSelected = false;

      selectedFilters.forEach((filter) => {
        if (filter.displayValue === option.displayValue) {
          return (isSelected = true);
        }
      });

      if (isSelected) {
        setEnabled(true);
      } else {
        setEnabled(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);

  useEffect(() => {
    if (clearSwitch !== undefined) {
      setEnabled(false);
    }
  }, [clearSwitch]);

  return (
    <Switch checked={enabled} onChange={handleChange} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={clsx(
            'relative inline-flex h-6 w-6 items-center justify-center rounded border',
            checked
              ? 'border-red-700 bg-red-700'
              : 'border-black bg-white border'
          )}
        >
          {checked && (
            <CheckIcon strokeWidth={4} className="text-white h-4 w-4" />
          )}
        </button>
      )}
    </Switch>
  );
};
