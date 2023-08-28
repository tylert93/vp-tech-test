import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { Checkbox } from '@src/components/atoms/Checkbox';
import { Flex } from '@src/components/atoms/Flex';

import { FilterAccordionProps } from './types';
import { Typography } from '@src/components/atoms/Typography';
import { FilterFacetDefault, FilterFacetPrice } from '@src/types/products';

export const FilterAccordion = <
  T extends FilterFacetDefault | FilterFacetPrice
>({
  title,
  options,
  border = true,
  selectedFilters,
  setSelectedFilters,
  clearSwitch,
}: FilterAccordionProps<T>) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen((cur) => !cur);

  return (
    <Accordion open={open} className={clsx(border && 'border-b border-black')}>
      <AccordionHeader className="border-none" onClick={handleClick}>
        <Flex justify="between" alignItems="center" className="w-full">
          <Typography>{title}</Typography>

          {open ? (
            <ChevronUpIcon strokeWidth={3} className="text-black h-5 w-5" />
          ) : (
            <ChevronDownIcon strokeWidth={3} className="text-black h-5 w-5" />
          )}
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        {options.map((option) => (
          <Flex className="mb-3">
            <Checkbox
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              option={option}
              clearSwitch={clearSwitch}
            />
            <Typography variant="bodySM" className="ml-2">
              {option.displayValue}
            </Typography>
          </Flex>
        ))}
      </AccordionBody>
    </Accordion>
  );
};
