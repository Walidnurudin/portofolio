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
      <ul className="flex my-10 space-x-5">
        {nav.map((d, i) => (
          <React.Fragment key={i}>
            <li>
              <Link className="mr-3" href={d.route}>
                {d.label}
              </Link>
            </li>{' '}
            {nav.length - 1 !== i && '/'}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
