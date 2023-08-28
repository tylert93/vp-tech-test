import { Grid } from '@src/components/atoms/Grid';
import { ProductCard } from '@src/components/molecules/ProductCard';
import { IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

import { ProductsDisplayProps } from './types';
import { Typography } from '@src/components/atoms/Typography';
import { Flex } from '@src/components/atoms/Flex';

export const ProductsDisplay = ({
  products,
  isLoading,
  isError,
  data,
  currentPage,
  setCurrentPage,
  totalPages,
}: ProductsDisplayProps) => {
  const next = () => {
    if (currentPage === totalPages) return;

    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };

  if (isLoading) {
    return (
      <Grid container>
        {Array.from(Array(9)).map((product, idx) => (
          <Grid
            key={`product-skeleton-${idx}`}
            item
            xs={12}
            sm={6}
            md={4}
            className="p-3"
          >
            <div className="rounded w-full h-[450px] bg-gray-400 animate-pulse" />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!data || isError || !products.length) {
    return (
      <Flex justify="center" className="w-full mt-14">
        <Typography className="font-bold">No results found.</Typography>
      </Flex>
    );
  }

  return (
    <>
      <Grid container>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} className="p-3">
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Flex justify="center" className="my-6">
        <div className="flex items-center gap-8">
          <IconButton
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={currentPage === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography className="font-normal">
            Page <strong className="text-gray-900">{currentPage}</strong> of{' '}
            <strong className="text-gray-900">{totalPages}</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={currentPage === totalPages}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
      </Flex>
    </>
  );
};
