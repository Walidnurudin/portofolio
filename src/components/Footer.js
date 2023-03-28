import Image from 'next/image';
import { useTheme } from 'next-themes';

import loveRed from '/public/icons/love-red.svg';
import loveWhite from '/public/icons/love-white.svg';

const Footer = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="flex justify-center mt-28 mb-10">
      <Image
        src={currentTheme === 'dark' ? loveWhite : loveRed}
        alt="icon-love"
        width={30}
      />
    </div>
  );
};

export default Footer;
