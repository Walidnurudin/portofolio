import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import dotBlack from '/public/icons/dot-black.svg';
import dotWhite from '/public/icons/dot-white.svg';

import linkedinWhite from '/public/icons/linkedin-white.svg';
import linkedinBlack from '/public/icons/linkedin-black.svg';

import githubWhite from '/public/icons/github-white.svg';
import githubBlack from '/public/icons/github-black.svg';

import emailWhite from '/public/icons/email-white.svg';
import emailBlack from '/public/icons/email-black.svg';

const data = [
  {
    label: 'linkedin.com/in/walidnurudin',
    link: 'https://www.linkedin.com/in/walidnurudin',
    icon: linkedinWhite,
    icon_dark: linkedinBlack
  },
  {
    label: 'github.com/Walidnurudin',
    link: 'https://github.com/Walidnurudin',
    icon: githubWhite,
    icon_dark: githubBlack
  },
  {
    label: 'walidnurudin47@gmail.com',
    link: 'mailto:walidnurudin47@gmail.com',
    icon: emailWhite,
    icon_dark: emailBlack
  }
];

const Talks = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <div className="dark:text-green-300">
        {data.map((d, i) => (
          <Fragment key={i}>
            {d.label === 'walidnurudin47@gmail.com' ? (
              <a href={d.link} className="flex p-1">
                <Image
                  src={currentTheme === 'dark' ? dotWhite : dotBlack}
                  alt="icon-dot"
                  width={15}
                  className="mr-3"
                />
                <Image
                  src={currentTheme === 'dark' ? d.icon : d.icon_dark}
                  alt="icon-dot"
                  width={15}
                />
                <p className="ml-3">{d.label}</p>
              </a>
            ) : (
              <Link href={d.link} legacyBehavior>
                <a target="_blank" className="flex p-1">
                  <Image
                    src={currentTheme === 'dark' ? dotWhite : dotBlack}
                    alt="icon-dot"
                    width={15}
                    className="mr-3"
                  />
                  <Image
                    src={currentTheme === 'dark' ? d.icon : d.icon_dark}
                    alt="icon-dot"
                    width={15}
                  />
                  <p className="ml-3">{d.label}</p>
                </a>
              </Link>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Talks;
