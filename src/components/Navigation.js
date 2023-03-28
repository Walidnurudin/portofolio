import React from 'react';
import Link from 'next/link';

const nav = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Experience',
    route: 'experience'
  },
  {
    label: 'Talks',
    route: 'talks'
  },
  {
    label: 'Resume',
    route: 'resume'
  }
];

const Navigation = () => {
  return (
    <div>
      <ul className="flex my-10 space-x-2">
        {nav.map((d, i) =>
          d.route === 'resume' ? (
            <li key={i}>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/17BCASX3jI5RYsQ9uEzQLC-u4SF2cC1-Q/view?usp=sharing"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-white"
              >
                {d.label}
              </a>
            </li>
          ) : (
            <React.Fragment key={i}>
              <li>
                <Link className="text-sky-600 dark:text-white" href={d.route}>
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
