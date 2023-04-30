import React from 'react';
import { ToogleDarkMode } from '.';

const Head = () => {
  return (
    <div>
      <div className="flex mt-10 sm:mt-20 md:mt-24 lg:mt-32 justify-between align-middle">
        <p className="m-0 self-center dark:text-green-300">Walid Nurudin</p>

        <ToogleDarkMode />
      </div>
    </div>
  );
};

export default Head;
