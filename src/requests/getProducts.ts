import axios from 'axios';

export const getProducts = async (productType: string, orderBy: number) => {
  const response = await axios({
    url: 'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings',
    method: 'POST',
    params: {
      apikey: 'yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI',
    },
    data: {
      query: productType,
      pageNumber: 0,
      size: 30,
      additionalPages: 0,
      sort: orderBy,
    },
  });

  return response.data;
};
