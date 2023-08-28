import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import { PageWrapper } from '@src/components/organisms/PageWrapper';
import { Typography } from '@src/components/atoms/Typography';
import { Flex } from '@src/components/atoms/Flex';

export const Root = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="text-center border-b border-black py-10 mb-10">
        <Typography variant="titleLG" className="text-vp-purple">
          Welcome to Victoria Plum
        </Typography>
      </div>

      <Flex justify="center">
        <Flex direction="col" alignItems="center" className="w-32">
          <Button
            onClick={() => navigate('/products/toilets')}
            className="rounded bg-white py-2 px-3 text-left text-black border border-black hover:shadow-none normal-case w-full"
          >
            <Typography className="text-center" variant="titleMD">
              Toilets
            </Typography>
          </Button>

          <Button
            onClick={() => navigate('/products/baths')}
            className="rounded bg-white py-2 px-3 text-left text-black border border-black hover:shadow-none normal-case w-full mt-3"
          >
            <Typography className="text-center" variant="titleMD">
              Baths
            </Typography>
          </Button>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};
