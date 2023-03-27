import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import toggleOn from '/public/icons/toggle-on.svg';
import toggleOff from '/public/icons/toggle-off.svg';

const ToogleDarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <Image
        src={currentTheme === 'light' ? toggleOn : toggleOff}
        alt="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        width={50}
      />
    </div>
  );
};

export default ToogleDarkMode;
