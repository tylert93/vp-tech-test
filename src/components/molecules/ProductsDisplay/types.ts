import { SetStateAction, Dispatch } from 'react';
import { Product, ProductsQuery } from '@src/types/products';

export interface ProductsDisplayProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  data: ProductsQuery | undefined;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}
