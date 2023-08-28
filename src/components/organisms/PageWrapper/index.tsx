import { Header } from '@src/components/molecules/Header';
import { Footer } from '@src/components/molecules/Footer';

import { PageWrapperProps } from './types';

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="min-h-screen relative bg-gray-200">
      <Header />
      <div className="py-4 px-3 md:px-8 max-w-[1200px] mx-auto pt-[66px] pb-[275px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};
