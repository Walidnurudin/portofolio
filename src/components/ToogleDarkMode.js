import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import toggleOn from '/public/icons/toggle-on.svg';
import toggleOff from '/public/icons/toggle-off.svg';

const ToogleDarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleSwitchToggle = () =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div>
      <Image
        src={currentTheme === 'dark' ? toggleOff : toggleOn}
        alt="icon"
        onClick={handleSwitchToggle}
        width={50}
        className="cursor-pointer"
      />
    </div>
  );
};

export default ToogleDarkMode;
