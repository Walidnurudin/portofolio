import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function portfolio({ name, image, desc, publish, github }) {
  return (
    <div className='border-2 border-inherit rounded-xl p-5 hover:bg-slate-50 hover:-translate-y-5 transition duration-300'>
      <h2 className='mb-5'>{name}</h2>
      <Carousel responsive={responsive}>
        {image.map((item, index) => (
          <img
            src={item.image}
            alt={item.title}
            key={index}
            style={{ objectFit: 'contain', width: '100%', height: '200px' }}
          />
        ))}
      </Carousel>

      <p className='my-5'>{desc}</p>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          onClick={() => window.open(publish, '_blank', 'noopener noreferrer')}
          className='flex items-center cursor-pointer gap-3 bg-blue-50 rounded-xl p-5'
        >
          <FaGlobe />
          <span>Publish</span>
        </div>

        <div
          onClick={() => window.open(github, '_blank', 'noopener noreferrer')}
          className='flex items-center cursor-pointer gap-3 bg-blue-50 rounded-xl p-5'
        >
          <FaGithub />
          <span>Repository</span>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
