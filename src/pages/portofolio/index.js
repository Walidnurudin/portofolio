import React from 'react';

import { SliderComponent } from '@/components';

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
  recruiterClover,

  // kalasan
  loginKalasan,
  posKalasan,
  statusKalasan,
  billKalasan,

  // catur
  loginCatur,
  dashboardCatur,
  employeeCatur,
  supplierCatur,
  userCatur,

  // ckl
  homeCkl,
  careerCkl,
  blogsCkl,
  productCkl,

  // my-buckit
  feedMyBuckit,
  registerMyBuckit,
  groupMyBuckit,
  groupFeedMyBuckit,
  createFeedMyBuckit,

  // pratiwi
  homePratiwi,
  contactPratiwi,
  aboutPratiwi,

  // ifg-by-one
  homeIfg,
  blogIfg,
  aboutIfg,
} from '/src/assets/images';

const data = [
  {
    name: 'IFG By One',
    desc: 'IFG By One profile website. Developing landing pages & CMS. This website is built using NextJS. (As a Frontend Developer)',
    stack: 'NextJs, Typescript, TailwindCSS, React-hook-form, Redux, React-query',
    publish: 'https://one.ifg.id/',
    github: '',
    image: [
      {
        title: 'home page',
        image: homeIfg
      },
      {
        title: 'blog page',
        image: blogIfg
      },
      {
        title: 'about page',
        image: aboutIfg
      },
    ]
  },

  {
    name: 'Pratiwi Technology Solution',
    desc: 'Pratiwi Technology Solution is a company profile website. Developing landing page & API. This website is built using NextJS & ExpressJs. (As a Fullstack Developer)',
    stack: 'NextJs, Typescript, TailwindCSS, NodeJs, ExpressJs, PostgreSQL, Prisma',
    publish: 'https://pratiwitechnology.com/id',
    github: '',
    image: [
      {
        title: 'home page',
        image: homePratiwi
      },
      {
        title: 'about page',
        image: aboutPratiwi
      },
      {
        title: 'contact page',
        image: contactPratiwi
      },
    ]
  },

  {
    name: 'My Buckit',
    desc: 'My Bucket is a Korean based social media app. This application is built using ReactJS. (As a Frontend Developer)',
    stack: 'ReactJS, Typescript, TailwindCSS, React-query, Socket.io, Zustand',
    publish: 'https://my-bucket.co.kr/',
    github: '',
    isMobile: true,
    image: [
      {
        title: 'register page',
        image: registerMyBuckit
      },
      {
        title: 'feed page',
        image: feedMyBuckit
      },
      {
        title: 'create feed page',
        image: createFeedMyBuckit
      },
      {
        title: 'group page',
        image: groupMyBuckit
      },
      {
        title: 'group feed page',
        image: groupFeedMyBuckit
      },
    ]
  },

  {
    name: 'CKL Cargo',
    desc: 'CKL Cargo company profile website. Developing landing pages & CMS. This website is built using NextJS. (As a Frontend Developer)',
    stack: 'NextJs, Redux, React-query, React-hook-form, React-google-recaptcha',
    publish: 'https://cklcargo.com/',
    github: '',
    image: [
      {
        title: 'home page',
        image: homeCkl
      },
      {
        title: 'product page',
        image: productCkl
      },
      {
        title: 'blogs page',
        image: blogsCkl
      },
      {
        title: 'career page',
        image: careerCkl
      },
    ]
  },

  {
    name: 'Catur Coffee',
    desc: 'Catur Coffee simple ERP. Developing simple ERP website. This website is built using ReactJs. (As a Frontend Developer)',
    stack: 'ReactJs, CoreUI, Redux, React-query, React-hook-form',
    publish: 'https://caturcoffee.lyrid.id/login',
    github: '',
    image: [
      {
        title: 'login',
        image: loginCatur
      },
      {
        title: 'dashboard',
        image: dashboardCatur
      },
      {
        title: 'employee',
        image: employeeCatur
      },
      {
        title: 'supplier',
        image: supplierCatur
      },
      {
        title: 'user',
        image: userCatur
      },
    ]
  },

  {
    name: 'Kalasan',
    desc: 'Kalsan simple ERP. Developing simple ERP website. This website is built using ReactJs. (As a Frontend Developer)',
    stack: 'ReactJs, CoreUI, Redux, React-query, React-hook-form, Socket.io',
    publish: 'https://kalasanerp.lyrid.id/login',
    github: '',
    image: [
      {
        title: 'login',
        image: loginKalasan
      },
      {
        title: 'pos',
        image: posKalasan
      },
      {
        title: 'status',
        image: statusKalasan
      },
      {
        title: 'bill',
        image: billKalasan
      },
    ]
  },

  {
    name: 'Zwallet',
    desc: 'Zwallet is a transaction application that you can use to top up and transfer to fellow users of the zwallet application. Zwallet is built using NextJS. (As a Frontend Developer)',
    stack: 'NextJs, Redux, Bootstrap, ChartJs',
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

  {
    name: 'Tickitz',
    desc: 'Tickitz is an online based movie ticket booking application. In this application there are 2 roles, namely user and admin roles. The admin role here can manage movies and schedules. Tickitz is built using ReactJS technology on the frontend side, react native on the mobile side, & expressJS on the backend side. (As a Fullstack Developer)',
    stack: 'ReactJS, Redux, Bootstrap, ChartJs, ExpressJs, MySql, Redis, JWT, Nodemailer',
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

  {
    name: 'Coffee Brings',
    desc: 'Coffee Brings is an online-based F&B application that aims to make it easier for anyone to order food or drinks. Coffee Brings is built using NextJS on the frontend & expressJS on the backend. This is a team project, and I am as a fullstack. (As a Fullstack Developer)',
    stack: 'NextJs, Redux, ExpressJs, MySql, Redis, JWT, Nodemailer',
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

  {
    name: 'Clover Hire',
    desc: 'Clover Hire is an application that can facilitate companies to recruit talented programmers based on the skills needed by the company. Clover Hire is built using ReactJS. (As a Fullstack Developer)',
    stack: 'ReactJS, Redux, Bootstrap, ExpressJs, MySql, Redis, JWT',
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
  },

  {
    name: 'Tickitz (mobile)',
    desc: 'Tickitz is an online based movie ticket booking application. In this application there are 2 roles, namely user and admin roles. The admin role here can manage movies and schedules. Tickitz is built using ReactJS technology on the frontend side, react native on the mobile side, & ExpressJs on the backend side. (As a Fullstack Developer)',
    stack: 'React Native, Redux, ExpressJs, MySql, Redis, JWT, Nodemailer',
    isMobile: true,
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
  }
];

const Portofolio = () => {
  return (
    <div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
          {data.map((item, idx) => (
            <div className="border-2 rounded mx-5 mb-2 p-3" key={idx}>
              <SliderComponent data={item.image} isMobile={item?.isMobile} />
              {/* <Image
                src={item.image[0].image}
                width={500}
                height={500}
                className="rounded"
                alt="Picture"
              /> */}
              <div className="p-4 sm:p-6">
                <p className="font-bold dark:text-gray-50 text-gray-700 text-[22px] leading-7 mb-1">
                  {item.name}
                </p>
                <p className="dark:text-green-300 mt-6 font-light text-sm">
                  {item.desc}
                </p>

                <p className="text-[#7C7C80] mt-3 font-light text-sm">
                  Stack: {item.stack}
                </p>

                <a
                  target="_blank"
                  href={item.publish}
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Publish
                </a>
                {item.github && (
                  <a
                    target="_blank"
                    href={item.github}
                    className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  >
                    Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
