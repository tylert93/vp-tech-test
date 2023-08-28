import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Drawer, Button, IconButton } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { PageWrapper } from '@src/components/organisms/PageWrapper';
import { Grid } from '@src/components/atoms/Grid';
import {
  FilterFacetDefault,
  OrderByOption,
  ProductsQuery,
  Product,
  FilterFacetPrice,
} from '@src/types/products';
import { getProducts } from '@src/requests/getProducts';
import { ProductType } from '@src/types/products';
import { Typography } from '@src/components/atoms/Typography';
import { Flex } from '@src/components/atoms/Flex';
import { OrderBySelect } from '@src/components/molecules/OrderBySelect';
import { FiltersPanel } from '@src/components/molecules/FiltersPanel';
import { ProductsDisplay } from '@src/components/molecules/ProductsDisplay';
import { PaginationResults } from '@src/components/atoms/PaginationResults';

import {
  ORDER_BY_OPTIONS,
  TOILET_FACETS,
  BATH_FACETS,
  PAGE_SIZE,
} from '@src/configuration/constants';
import { filterResults } from '@src/helpers/filterResults';

export const Products = () => {
  const { productType } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [orderBy, setOrderBy] = useState<OrderByOption>(ORDER_BY_OPTIONS[0]);
  const [selectedTypes, setSelectedTypes] = useState<FilterFacetDefault[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<FilterFacetDefault[]>(
    []
  );
  const [selectedPrices, setSelectedPrices] = useState<FilterFacetPrice[]>([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  let facets;

  if (
    !productType ||
    !Object.values(ProductType).includes(productType as ProductType)
  ) {
    return null;
  }

  switch (productType) {
    case ProductType.Baths:
      facets = BATH_FACETS;
      break;
    case ProductType.Toilets:
    default:
      facets = TOILET_FACETS;
      break;
  }

  const { data, isError, isLoading } = useQuery<ProductsQuery>({
    queryKey: ['products', orderBy.displayValue],
    queryFn: () => getProducts(productType, orderBy.value),
  });

  useEffect(() => {
    if (data) {
      setProducts(
        filterResults(data, selectedTypes, selectedBrands, selectedPrices)
      );
    }
  }, [data, selectedBrands, selectedTypes, selectedPrices]);

  const getPaginationStats = () => {
    const totalProducts = products.length;

    if (!totalProducts) {
      setFrom(0);
      setTo(0);
      setTotalPages(0);
    }

    const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
    const offset = (currentPage - 1) * PAGE_SIZE + 1;

    const from = offset;

    const remainingProducts = totalProducts - offset;

    const to =
      remainingProducts > PAGE_SIZE
        ? offset + PAGE_SIZE - 1
        : offset + remainingProducts;

    setFrom(from);
    setTo(to);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    getPaginationStats();
  }, [currentPage, products]);

  return (
    <PageWrapper>
      <div className="text-center border-b border-black py-10 mb-10">
        <Typography variant="titleLG" className="text-vp-purple">
          All {productType}
        </Typography>
      </div>
      <Grid container>
        <Grid item xs={3} className="pr-4 hidden lg:block ">
          <Flex alignItems="center" className="h-[42px] mb-5">
            <Typography className="font-bold">Filter By</Typography>
          </Flex>

          <div className="bg-white w-full rounded border border-black p-3 mt-3">
            <FiltersPanel
              facets={facets}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedPrices={selectedPrices}
              setSelectedPrices={setSelectedPrices}
            />
          </div>
        </Grid>
        <Grid item lg={9}>
          <div className="w-full px-3 mb-2 lg:hidden">
            <PaginationResults
              from={from}
              to={to}
              totalProducts={products.length}
              isLoading={isLoading}
            />
          </div>

          <Flex className="w-full px-3 mb-2 flex-col sm:flex-row items-end sm:items-center justify-center sm:justify-between">
            <div className="hidden lg:block">
              <PaginationResults
                from={from}
                to={to}
                totalProducts={products.length}
                isLoading={isLoading}
              />
            </div>

            <Button
              className="lg:hidden rounded bg-white py-2 pl-3 pr-10 text-left text-black border border-black hover:shadow-none normal-case mb-2 sm:mb-0"
              onClick={openDrawer}
            >
              <Typography>Filters</Typography>
            </Button>

            <Flex alignItems="center">
              <Typography className="mr-3">Order By</Typography>
              <OrderBySelect orderBy={orderBy} setOrderBy={setOrderBy} />
            </Flex>
          </Flex>

          <ProductsDisplay
            products={products.slice(from - 1, to)}
            data={data}
            isLoading={isLoading}
            isError={isError}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </Grid>
      </Grid>

      <Drawer onClose={closeDrawer} open={open} className="bg-white" size={300}>
        <div className="px-4 pt-2">
          <Flex
            justify="between"
            alignItems="center"
            className="w-full border-b border-gray-500 pb-2"
          >
            <Typography>Filters</Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon className="h4 w-4" />
            </IconButton>
          </Flex>

          <FiltersPanel
            facets={facets}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedPrices={selectedPrices}
            setSelectedPrices={setSelectedPrices}
          />
        </div>
      </Drawer>
    </PageWrapper>
  );
};
