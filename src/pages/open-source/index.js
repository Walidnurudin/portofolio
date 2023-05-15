import React from 'react';
import Image from 'next/image';

import {
  // tickitz
  homeTickitz,
  loginTickitz,
  movieDetailTickitz,
  orderTickitz,

  // tickitz (mobile)
  loginTickitzMobile,
  homeTickitzMobile,
  movieDetailTickitzMobile,
  orderTickitzMobile,

  // zwallet
  dashboardZwallet,
  landingZwallet,
  loginZwallet,
  profileZwallet,
  transferZwallet,

  // coffee-brings
  loginCoffee,
  landingCoffee,
  productCoffee,
  paymentCoffee,

  // clover-hire
  loginClover,
  landingClover,
  emailClover,
  recruiterClover
} from '/src/assets/images';

const data = [
  //   [1]
  {
    name: 'Zwallet',
    desc: 'Zwallet adalah aplikasi transaksi yang bisa kamu pakai untuk melakukan top up dan transfer ke sesama pengguna aplikasi zwallet. Zwallet dibangun menggunakan NextJS.',
    publish: 'https://zwallet-x.vercel.app',
    github: 'https://github.com/Walidnurudin/zwallet',
    image: [
      {
        title: 'landing page',
        image: landingZwallet
      },
      {
        title: 'login page',
        image: loginZwallet
      },
      {
        title: 'dashboard page',
        image: dashboardZwallet
      },
      {
        title: 'transfer page',
        image: transferZwallet
      },
      {
        title: 'profile page',
        image: profileZwallet
      }
    ]
  },

  // [2]
  {
    name: 'Tickitz (mobile)',
    desc: 'Tickitz adalah aplikasi pemesanan tiket film berbasis online. Di aplikasi ini juga user dapat melihat jadwal film, memesan lebih dari satu tiket, dan dapat memilih kursi sesuai yang diinginkan. Tickitz dibangun menggunakan teknologi React native.',
    publish: 'https://bit.ly/walid-tickitz-mobile',
    github: 'https://github.com/Walidnurudin/TickitzMobile',
    image: [
      {
        title: 'login page',
        image: loginTickitzMobile
      },
      {
        title: 'home page',
        image: homeTickitzMobile
      },
      {
        title: 'movie detail page',
        image: movieDetailTickitzMobile
      },
      {
        title: 'order page',
        image: orderTickitzMobile
      }
    ]
  },

  // [3]
  {
    name: 'Tickitz',
    desc: 'Tickitz adalah aplikasi pemesanan tiket film berbasis online. Di aplikasi ini terdapat 2 role, yaitu role user dan admin. Pada role admin disini dapat mengelola film dan jadwal. Tickitz dibangun menggunakan teknologi ReactJS.',
    publish: 'https://tickitzapp.netlify.app/',
    github: 'https://github.com/Walidnurudin/tickitz-app',
    image: [
      {
        title: 'login page',
        image: loginTickitz
      },
      {
        title: 'home page',
        image: homeTickitz
      },
      {
        title: 'movie detail page',
        image: movieDetailTickitz
      },
      {
        title: 'order page',
        image: orderTickitz
      }
    ]
  },

  // [4]
  {
    name: 'Coffee Brings',
    desc: 'Coffee Brings adalah aplikasi FnB berbasis online yang bertujuan untuk mempermudah siapa saja dalam pemesanan makanan atau minuman. Coffee Brings dibangun menggunakan NextJS.',
    publish: 'https://frontend-coffebrings.vercel.app/',
    github: 'https://github.com/LepakBoy/frontend-coffebrings',
    image: [
      {
        title: 'landing page',
        image: landingCoffee
      },
      {
        title: 'login page',
        image: loginCoffee
      },
      {
        title: 'product page',
        image: productCoffee
      },
      {
        title: 'payment page',
        image: paymentCoffee
      }
    ]
  },

  // [5]
  {
    name: 'Clover Hire',
    desc: 'Clover Hire adalah aplikasi yang dapat memfasilitasi perusahaan untuk merekrut programmer berbakat berdasarkan keterampilan yang dibutuhkan perusahaan. Clover Hire dibangun menggunakan ReactJS.',
    publish: 'https://clover-hire.netlify.app/',
    github: 'https://github.com/AhmadZaky19/clover-frontend',
    image: [
      {
        title: 'landing page',
        image: landingClover
      },
      {
        title: 'login page',
        image: loginClover
      },
      {
        title: 'recruiter page',
        image: recruiterClover
      },
      {
        title: 'email page',
        image: emailClover
      }
    ]
  }
];

const OpenSource = () => {
  return (
    <div>
      <p>Open Source</p>

      <div className="flex w-full">
        <div className="flex flex-row flex-wrap">
          {data.map((item, idx) => (
            <div className="w-60 border-2 m-5 p-3" key={idx}>
              <Image
                src={item.image[0].image}
                width={500}
                height={500}
                className="rounded"
                alt="Picture"
              />
              <div className="p-4 sm:p-6">
                <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                  {item.name}
                </p>
                <p className="text-[#7C7C80] font-[15px] mt-6">{item.desc}</p>

                <a
                  target="_blank"
                  href={item.publish}
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Publish
                </a>
                <a
                  target="_blank"
                  href={item.github}
                  className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
