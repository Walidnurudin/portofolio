import React from 'react';
import Image from 'next/image';

import rocket from '/public/icons/rocket.svg';
import { useTheme } from 'next-themes';

export default function LoadingScreen() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="h-screen w-screen flex items-center justify-center dark:bg-slate-700">
      <div className="w-1/2 h-1/2 animate-bounce flex items-center justify-center">
        <Image
          src={currentTheme === 'dark' ? rocket : rocket}
          alt="icon-rocket"
          width={60}
        />
      </div>
    </div>
  );
}
