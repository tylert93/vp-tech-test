import { Dispatch, SetStateAction } from 'react';

import { OrderByOption } from '@src/types/products';

export interface OrderBySelectProps {
  orderBy: OrderByOption;
  setOrderBy: Dispatch<SetStateAction<OrderByOption>>;
}
