import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const nav = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Experience',
    route: '/experience'
  },
  {
    label: 'Open Source',
    route: '/open-source'
  },
  {
    label: 'Talks',
    route: '/talks'
  },
  {
    label: 'Message',
    route: '/message'
  },
  {
    label: 'Resume',
    route: '/resume'
  }
];

const Navigation = () => {
  const router = useRouter();

  return (
    <div>
      <ul className="flex flex-wrap my-10 space-x-2">
        {nav.map((d, i) =>
          d.route === '/resume' ? (
            <li key={i}>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1NwnGlVzfrU_Ulr_sN8oomwzt-y4b7-hY/view?usp=sharing"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-white underline"
              >
                {d.label}
              </a>
            </li>
          ) : (
            <React.Fragment key={i}>
              <li>
                <Link
                  className={`${
                    router.pathname === d.route
                      ? 'bg-sky-600 text-white dark:text-black dark:bg-white'
                      : 'text-sky-600 dark:text-white underline'
                  }`}
                  href={d.route}
                >
                  {d.label}
                </Link>
              </li>{' '}
              {nav.length - 1 !== i && <span>/</span>}
            </React.Fragment>
          )
        )}
      </ul>
    </div>
  );
};

export default Navigation;
