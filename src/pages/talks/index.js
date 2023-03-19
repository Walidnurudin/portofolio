import Link from 'next/link';
import { Fragment } from 'react';

const data = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/walidnurudin',
    icon: ''
  },
  {
    label: 'Github',
    link: 'https://github.com/Walidnurudin',
    icon: ''
  },
  {
    label: 'Email',
    link: 'mailto:walidnurudin47@gmail.com',
    icon: ''
  }
];

const Talks = () => {
  return (
    <div>
      <p>Talks</p>

      <div>
        {data.map((d, i) => (
          <Fragment key={i}>
            {d.label === 'Email' ? (
              <a href={d.link}>
                <p>{d.label}</p>
              </a>
            ) : (
              <Link href={d.link} legacyBehavior>
                <a target="_blank">
                  <p>{d.label}</p>
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
