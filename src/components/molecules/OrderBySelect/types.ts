import { Dispatch, SetStateAction } from 'react';

import { OrderByOption } from '@src/types/products';

export interface OrderBySelectProps {
  orderBy: OrderByOption;
  updateOrderBy: (orderBy: OrderByOption) => void;
  clearFilters: () => void;
}
