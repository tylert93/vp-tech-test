import { Typography } from '@src/components/atoms/Typography';

import { PaginationResultsProps } from './types';

export const PaginationResults = ({
  from,
  to,
  totalProducts,
  isLoading,
}: PaginationResultsProps) => {
  if (isLoading) {
    return (
      <div className="bg-gray-400 animate-pulse h-[20px] w-[170px] rounded mb-3" />
    );
  }

  return (
    <Typography className="mb-3">
      Showing {from}-{to} of {totalProducts}
    </Typography>
  );
};
