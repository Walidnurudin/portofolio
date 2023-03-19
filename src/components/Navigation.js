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
  }
];

const Navigation = () => {
  return (
    <div>
      <ul className="flex">
        {nav.map((d, i) => (
          <React.Fragment key={i}>
            <li>
              <Link href={d.route}>{d.label}</Link>
            </li>{' '}
            {nav.length - 1 !== i && '/'}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
