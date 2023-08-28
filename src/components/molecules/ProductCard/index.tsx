import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import { StarIcon, TruckIcon, NoSymbolIcon } from '@heroicons/react/24/solid';

import { Typography } from '@src/components/atoms/Typography';
import { Flex } from '@src/components/atoms/Flex';

import { ProductCardProps } from './types';

export const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="w-full rounded-md overflow-hidden">
    <div className="w-full h-1/2">
      <img
        className="w-full h-full object-fit"
        src={product.image.url}
        alt={product.image.attributes.imageAltText}
      />
    </div>

    <CardBody className="px-3 py-4">
      <div className="h-6">
        <img
          className="h-full"
          src={product.brand.brandImage.url}
          alt={product.brand.brandImage.attributes.imageAltText}
        />
      </div>

      <Typography
        variant="bodyXS"
        color="blue-gray"
        className="my-2 h-8 overflow-hidden"
      >
        {product.productName}
      </Typography>

      <div>
        {product.price.wasPriceIncTax ? (
          <>
            <Typography
              className="inline text-red-500 font-bold mr-1"
              variant="bodySM"
            >
              £{product.price.priceIncTax}
            </Typography>
            <Typography variant="bodyXS" className="inline line-through">
              £{product.price.wasPriceIncTax}
            </Typography>
          </>
        ) : (
          <Typography variant="bodySM" className="font-bold inline">
            £{product.price.priceIncTax}
          </Typography>
        )}
      </div>
    </CardBody>
    <CardFooter className="p-2 mt-0">
      {product.averageRating ? (
        <Flex alignItems="center">
          <StarIcon className="h-3.5 mr-0.5 text-orange-300" />
          <Typography variant="bodyXS">
            {product.averageRating} ({product.reviewsCount})
          </Typography>
        </Flex>
      ) : (
        <Typography variant="bodyXS">No ratings</Typography>
      )}

      <div className="mt-1">
        {' '}
        {product.stockStatus.status === 'G' ? (
          <Flex alignItems="center">
            <TruckIcon className="h-3.5 mr-0.5 text-green-500" />
            <Typography variant="bodyXS">
              In stock {product.price.priceIncTax > 50 && '- free delivery'}
            </Typography>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <NoSymbolIcon className="h-3.5 mr-0.5 text-red-500" />
            <Typography variant="bodyXS">
              {product.averageRating} ({product.reviewsCount})
            </Typography>
          </Flex>
        )}
      </div>
    </CardFooter>
  </Card>
);
