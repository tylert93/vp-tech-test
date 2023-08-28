import { useParams, useSearchParams } from 'react-router-dom';
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
  FiltersStorageKeys,
  FilterFacets,
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
  TOILET_STORAGE_KEYS,
  BATH_FACETS,
  BATH_STORAGE_KEYS,
  PAGE_SIZE,
  ORDER_BY_STORAGE_KEY,
} from '@src/configuration/constants';
import { filterResults } from '@src/helpers/filterResults';
import {
  storeFiltersInSession,
  getFiltersInSession,
  storeOrderByInSession,
  getOrderByInSession,
} from '@src/helpers/sessionStorage';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
  const [clearSwitch, setClearSwitch] = useState<undefined | boolean>();
  const [firstLoad, setFirstLoad] = useState(false);

  if (
    !productType ||
    !Object.values(ProductType).includes(productType as ProductType)
  ) {
    return null;
  }

  let facets: FilterFacets;
  let storageKeys: FiltersStorageKeys;

  switch (productType) {
    case ProductType.Baths:
      facets = BATH_FACETS;
      storageKeys = BATH_STORAGE_KEYS;
      break;
    case ProductType.Toilets:
    default:
      facets = TOILET_FACETS;
      storageKeys = TOILET_STORAGE_KEYS;
      break;
  }

  const updateCurrentPage = (pageNumber: number) => {
    const newQueryParameters: URLSearchParams = new URLSearchParams();
    newQueryParameters.set('page', pageNumber.toString());

    setSearchParams(newQueryParameters);
    setCurrentPage(pageNumber);
  };

  const updateTypes = (filters: FilterFacetDefault[]) => {
    setSelectedTypes(filters);
    storeFiltersInSession<FilterFacetDefault>(storageKeys.types, filters);
    updateCurrentPage(1);
  };

  const updateBrands = (filters: FilterFacetDefault[]) => {
    setSelectedBrands(filters);
    storeFiltersInSession<FilterFacetDefault>(storageKeys.brands, filters);
    updateCurrentPage(1);
  };

  const updatePrices = (filters: FilterFacetPrice[]) => {
    setSelectedPrices(filters);
    storeFiltersInSession<FilterFacetPrice>(storageKeys.prices, filters);
    updateCurrentPage(1);
  };

  const updateOrderBy = (value: OrderByOption) => {
    setOrderBy(value);
    storeOrderByInSession(ORDER_BY_STORAGE_KEY, value);
    updateCurrentPage(1);
  };

  const clearFilters = () => {
    updateBrands([]);
    updateTypes([]);
    updatePrices([]);

    updateCurrentPage(1);

    clearSwitch === undefined
      ? setClearSwitch(false)
      : setClearSwitch(!clearSwitch);
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const { data, isError, isLoading } = useQuery<ProductsQuery>({
    queryKey: ['products', orderBy.displayValue],
    queryFn: () => getProducts(productType, orderBy.value),
  });

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
      remainingProducts >= PAGE_SIZE
        ? currentPage * PAGE_SIZE
        : offset + remainingProducts;

    setFrom(from);
    setTo(to);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    const pageParam = searchParams.get('page');

    if (!pageParam) {
      setCurrentPage(1);
    } else {
      const pageNumber = parseInt(pageParam);

      if (typeof pageNumber === 'number') {
        setCurrentPage(pageNumber);
      } else {
        setCurrentPage(1);
      }
    }

    setSelectedTypes(getFiltersInSession(storageKeys.types) ?? []);
    setSelectedBrands(getFiltersInSession(storageKeys.brands) ?? []);
    setSelectedPrices(getFiltersInSession(storageKeys.prices) ?? []);
    setOrderBy(
      getOrderByInSession(ORDER_BY_STORAGE_KEY) ?? ORDER_BY_OPTIONS[0]
    );

    setFirstLoad(true);
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(
        filterResults(data, selectedTypes, selectedBrands, selectedPrices)
      );
    }
  }, [data, selectedBrands, selectedTypes, selectedPrices]);

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
            <Typography className="font-bold">Filter By</Typography>{' '}
            <Button
              className="rounded bg-white py-1 px-2 text-left text-red-500 border border-red-500 shadow-none hover:shadow-none normal-case mb-2 sm:mb-0 ml-3"
              onClick={clearFilters}
            >
              <Typography variant="bodyXS" className="font-bold">
                Clear
              </Typography>
            </Button>
          </Flex>

          <div className="bg-white w-full rounded border border-black p-3 mt-6">
            <FiltersPanel
              facets={facets}
              selectedTypes={selectedTypes}
              updateTypes={updateTypes}
              selectedBrands={selectedBrands}
              updateBrands={updateBrands}
              selectedPrices={selectedPrices}
              updatePrices={updatePrices}
              clearSwitch={clearSwitch}
              firstLoad={firstLoad}
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
              <OrderBySelect
                orderBy={orderBy}
                updateOrderBy={updateOrderBy}
                clearFilters={clearFilters}
              />
            </Flex>
          </Flex>

          <ProductsDisplay
            products={products.slice(from - 1, to)}
            data={data}
            isLoading={isLoading}
            isError={isError}
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
            totalPages={totalPages}
          />
        </Grid>
      </Grid>

      <Drawer onClose={closeDrawer} open={open} className="bg-white" size={300}>
        <div className="px-4 pt-2">
          <div className="border-b border-gray-500 pb-2">
            <Flex justify="between" alignItems="center" className="w-full ">
              <Flex alignItems="center">
                <Typography>Filters</Typography>

                <Button
                  className="rounded bg-white py-1 px-2 text-left text-red-500 border border-red-500 shadow-none hover:shadow-none normal-case mb-2 sm:mb-0 ml-3"
                  onClick={clearFilters}
                >
                  <Typography variant="bodyXS" className="font-bold">
                    Clear
                  </Typography>
                </Button>
              </Flex>

              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <XMarkIcon className="h4 w-4" />
              </IconButton>
            </Flex>
          </div>

          <FiltersPanel
            facets={facets}
            selectedTypes={selectedTypes}
            updateTypes={updateTypes}
            selectedBrands={selectedBrands}
            updateBrands={updateBrands}
            selectedPrices={selectedPrices}
            updatePrices={updatePrices}
            clearSwitch={clearSwitch}
            firstLoad={firstLoad}
          />
        </div>
      </Drawer>
    </PageWrapper>
  );
};
