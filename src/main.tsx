import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Root } from '@src/components/pages/Root';
import { Products } from './components/pages/Products';
import { Error } from '@src/components/pages/Error';

import { ProductType } from './types/products';
import '@src/theme/app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: '/products/:productType',
    element: <Products />,
    errorElement: <Error />,
    loader: ({ params }) => {
      const { productType } = params;

      if (
        !productType ||
        !Object.values(ProductType).includes(productType as ProductType)
      ) {
        throw new Response('Not Found', { status: 404 });
      } else {
        return <Products />;
      }
    },
  },
  {
    path: '/error',
    element: <Error />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
