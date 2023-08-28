import { useState, Fragment } from 'react';
import {
  Navbar,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import { Flex } from '@src/components/atoms/Flex';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="absolute top-0 w-full">
      <Navbar className="w-full max-w-none rounded-none flex items-center bg-opacity-100 py-3 px-8 md:px-12">
        <IconButton variant="text" onClick={openDrawer}>
          <Bars3Icon className="h-6 w-6 text-black" />
        </IconButton>

        <img src="/vp-logo-stacked.svg" className="h-6 ml-4" />
      </Navbar>

      <Drawer onClose={closeDrawer} open={open} className="bg-white" size={300}>
        <div className="px-4 pt-2">
          <Flex
            justify="between"
            alignItems="center"
            className="w-full border-b border-gray-500 pb-2"
          >
            <Typography variant="h5" color="blue-gray">
              Menu
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon className="h4 w-4" />
            </IconButton>
          </Flex>
        </div>

        <List>
          <a href="/">
            <ListItem className="py-2 text-center">Home</ListItem>
          </a>

          <a href="/products/toilets">
            <ListItem className="py-2 text-center">Toilets</ListItem>
          </a>

          <a href="/products/baths">
            <ListItem className="py-2 text-center">Baths</ListItem>
          </a>
        </List>
      </Drawer>
    </div>
  );
};
