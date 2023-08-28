export interface FilterFacetDefault {
  value: string;
  displayValue: string;
}

export interface FilterFacetPrice {
  value: {
    gte: number;
    lte: number;
  };
  displayValue: string;
}

export interface FilterFacets {
  type: FilterFacetDefault[];
  price: FilterFacetPrice[];
  brand: FilterFacetDefault[];
}

export interface OrderByOption {
  value: number;
  displayValue: string;
}

interface RequestFacetOptionDefault {
  identifier: string;
  value: string;
  displayValue: string;
  productCount: number;
  priority: number;
}

export interface RequestFacetDefault {
  identifier: string;
  displayName: string;
  priority: number;
  options: RequestFacetOptionDefault[];
  facetType: number;
}

interface RequestFacetOptionPrice {
  identifier: string;
  value: {
    gte: number;
    lte: number;
  };
  displayValue: string;
  productCount: number;
  priority: number;
}

export interface RequestFacetPrice {
  identifier: string;
  displayName: string;
  priority: number;
  options: RequestFacetOptionPrice[];
  facetType: number;
}

export interface Product {
  id: string;
  legacyId: string;
  legacyVariantId: string;
  cultureCode: string;
  isDefaultVariant: boolean;
  sku: string;
  productName: string;
  slug: string;
  averageRating?: number;
  reviewsCount: number;
  questionsCount: number;
  image: {
    externalId: string;
    url: string;
    priority: number;
    isDefault: boolean;
    attributes: {
      imageAltText: string;
    };
  };
  stockStatus: {
    status: string;
  };
  price: {
    currencyCode: string;
    wasPriceIncTax?: number;
    wasPriceExcTax?: number;
    priceIncTax: number;
    priceExcTax: number;
    isOnPromotion: boolean;
  };
  attributes: {
    isApproved: boolean;
    isShownOnTv: boolean;
    isBestSeller: boolean;
    isFreeWaste: boolean;
    isPremium: boolean;
    isRecommended: boolean;
    isTrayIncluded: boolean;
    isBluetoothIncluded: boolean;
    isBatteryIncluded: boolean;
    isAntiSlipIncluded: boolean;
    isShortProjection: boolean;
    hasOneOutlet: boolean;
    hasTwoOutlets: boolean;
    hasThreeOutlets: boolean;
    isNew: boolean;
    hasMoreOptions: boolean;
  };
  defaultCategory: {
    externalId: string;
    slug: string;
    name: string;
    isDefault: boolean;
    ancestors: [
      {
        slug: string;
        externalId: string;
        name: string;
        depth: number;
      }
    ];
  };
  brand: {
    externalId: string;
    slug: string;
    name: string;
    brandImage: {
      externalId: string;
      url: string;
      priority: number;
      isDefault: boolean;
      attributes: {
        imageAltText: string;
      };
    };
  };
  score: number;
}

export interface ProductsQuery {
  pagination: {
    from: number;
    size: number;
    total: number;
    sortType: number;
  };
  facets: (RequestFacetPrice | RequestFacetDefault)[];
  products: Product[];
}

export enum ProductType {
  Toilets = 'toilets',
  Baths = 'baths',
}

export interface FiltersStorageKeys {
  types: string;
  brands: string;
  prices: string;
}
