import { Flex } from '@src/components/atoms/Flex';
import { Typography } from '@src/components/atoms/Typography';

export const Error = () => (
  <Flex
    direction="col"
    justify="center"
    alignItems="center"
    className="w-screen h-screen bg-white text-black"
  >
    <Typography variant="titleMD" className="mb-4">
      404 | page not found
    </Typography>
    <Typography>
      Go back to the{' '}
      <a className="text-blue-500 hover:underline" href="/">
        homepage
      </a>
    </Typography>
  </Flex>
);
