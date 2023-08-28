import { TwitterIcon } from '@src/components/icons/Twitter';
import { YoutubeIcon } from '@src/components/icons/Youtube';
import { PinterestIcon } from '@src/components/icons/Pinterest';
import { InstagramIcon } from '@src/components/icons/Instagram';
import { FacebookIcon } from '@src/components/icons/Facebook';

import { Flex } from '@src/components/atoms/Flex';

const socials = [
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/VictoriaPlumUK',
    bgClass: 'bg-facebook',
  },
  {
    icon: TwitterIcon,
    href: 'https://twitter.com/VictoriaPlumUK',
    bgClass: 'bg-twitter',
  },
  {
    icon: PinterestIcon,
    href: 'https://www.pinterest.co.uk/VictoriaPlumUK/',
    bgClass: 'bg-pinterest',
  },
  {
    icon: YoutubeIcon,
    href: 'https://www.youtube.com/c/VictoriaPlumUK',
    bgClass: 'bg-youtube',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/victoriaplumuk/',
    bgClass: 'instagram-gradient',
  },
];

export const Socials = () => {
  return (
    <Flex className="justify-center md:justify-start pt-5 border-t border-black">
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className={`rounded-full p-1.5 h-8 w-8 mr-4 ${social.bgClass}`}>
            <social.icon className="text-white" />
          </div>
        </a>
      ))}
    </Flex>
  );
};
