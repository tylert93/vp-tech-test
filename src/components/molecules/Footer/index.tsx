import { Typography } from '@src/components/atoms/Typography';

import { Socials } from '@src/components/atoms/Socials';

export const Footer = () => (
  <div className="absolute bottom-0 pt-8 pb-3 px-8 md:px-12 w-full min-h-[275px] text-center md:text-left">
    <Socials />

    <Typography className="mt-5" variant="bodySM">
      VictoriaPlum.com, Unit 2 First Point Business Park, Water Vole Way,
      Doncaster, DN4 5JP
    </Typography>

    <Typography className="mt-5 hidden lg:block" variant="bodySM">
      Credit subject to status and affordability. Terms & conditions apply.
      Victoria Plum Limited trading as Victoria Plum is a credit broker and is
      authorised and regulated by the Financial Conduct Authority. Credit is
      provided by a panel of lenders with whom we have a commercial relationship
      (so we cannot provide independent advice).
    </Typography>

    <Typography className="mt-5" variant="bodySM">
      © 2023 All rights reserved.
    </Typography>
  </div>
);
