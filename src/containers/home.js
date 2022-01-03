import React from "react";
import Data from "../components/data";
import Project from "../components/project";
import Contact from "../components/contact";
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
} from "../assets/images";

const data = [
  //   [1]
  {
    name: "Zwallet",
    desc: "Zwallet adalah aplikasi transaksi yang bisa kamu pakai untuk melakukan top up dan transfer ke sesama pengguna aplikasi zwallet. Zwallet dibangun menggunakan NextJS.",
    publish: "https://zwallet-x.vercel.app",
    github: "https://github.com/Walidnurudin/zwallet",
    image: [
      {
        title: "landing page",
        image: landingZwallet,
      },
      {
        title: "login page",
        image: loginZwallet,
      },
      {
        title: "dashboard page",
        image: dashboardZwallet,
      },
      {
        title: "transfer page",
        image: transferZwallet,
      },
      {
        title: "profile page",
        image: profileZwallet,
      },
    ],
  },

  // [2]
  {
    name: "Tickitz (mobile)",
    desc: "Tickitz adalah aplikasi pemesanan tiket film berbasis online. Di aplikasi ini juga user dapat melihat jadwal film, memesan lebih dari satu tiket, dan dapat memilih kursi sesuai yang diinginkan. Tickitz dibangun menggunakan teknologi React native.",
    publish: "https://bit.ly/walid-tickitz-mobile",
    github: "https://github.com/Walidnurudin/TickitzMobile",
    image: [
      {
        title: "login page",
        image: loginTickitzMobile,
      },
      {
        title: "home page",
        image: homeTickitzMobile,
      },
      {
        title: "movie detail page",
        image: movieDetailTickitzMobile,
      },
      {
        title: "order page",
        image: orderTickitzMobile,
      },
    ],
  },

  // [3]
  {
    name: "Tickitz",
    desc: "Tickitz adalah aplikasi pemesanan tiket film berbasis online. Di aplikasi ini terdapat 2 role, yaitu role user dan admin. Pada role admin disini dapat mengelola film dan jadwal. Tickitz dibangun menggunakan teknologi ReactJS.",
    publish: "https://tickitzapp.netlify.app/",
    github: "https://github.com/Walidnurudin/tickitz-app",
    image: [
      {
        title: "login page",
        image: loginTickitz,
      },
      {
        title: "home page",
        image: homeTickitz,
      },
      {
        title: "movie detail page",
        image: movieDetailTickitz,
      },
      {
        title: "order page",
        image: orderTickitz,
      },
    ],
  },

  // [4]
  {
    name: "Coffee Brings",
    desc: "Coffee Brings adalah aplikasi FnB berbasis online yang bertujuan untuk mempermudah siapa saja dalam pemesanan makanan atau minuman. Coffee Brings dibangun menggunakan NextJS.",
    publish: "https://frontend-coffebrings.vercel.app/",
    github: "https://github.com/LepakBoy/frontend-coffebrings",
    image: [
      {
        title: "landing page",
        image: landingCoffee,
      },
      {
        title: "login page",
        image: loginCoffee,
      },
      {
        title: "product page",
        image: productCoffee,
      },
      {
        title: "payment page",
        image: paymentCoffee,
      },
    ],
  },

  // [5]
  {
    name: "Clover Hire",
    desc: "Clover Hire adalah aplikasi yang dapat memfasilitasi perusahaan untuk merekrut programmer berbakat berdasarkan keterampilan yang dibutuhkan perusahaan. Clover Hire dibangun menggunakan ReactJS.",
    publish: "https://clover-hire.netlify.app/",
    github: "https://github.com/AhmadZaky19/clover-frontend",
    image: [
      {
        title: "landing page",
        image: landingClover,
      },
      {
        title: "login page",
        image: loginClover,
      },
      {
        title: "recruiter page",
        image: recruiterClover,
      },
      {
        title: "email page",
        image: emailClover,
      },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Data />
      <h2>portofolio : </h2>
      <div className="project-section">
        {data.map((item, index) => (
          <div className="project-wrap" key={index}>
            <Project
              name={item.name}
              image={item.image}
              desc={item.desc}
              publish={item.publish}
              github={item.github}
            />
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}
