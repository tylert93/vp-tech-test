import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

import { ORDER_BY_OPTIONS } from '@src/configuration/constants';

import { OrderBySelectProps } from './types';

export const OrderBySelect = ({
  orderBy,
  updateOrderBy,
}: OrderBySelectProps) => (
  <Listbox value={orderBy} onChange={updateOrderBy}>
    <div className="relative mt-1 z-10 w-48">
      <Listbox.Button className="relative w-full rounded bg-white py-2 pl-3 pr-10 text-left border border-black">
        <span className="block truncate">{orderBy.displayValue}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDownIcon className="h-6 w-6 text-black" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {ORDER_BY_OPTIONS.map((option) => (
            <Listbox.Option
              key={option.displayValue}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-gray-200 text-vp-purple font-bold' : 'text-black'
                }`
              }
              value={option}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {option.displayValue}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-vp-purple">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);
