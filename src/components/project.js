import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaGlobe } from "react-icons/fa";

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

export default function Data({ name, image, desc, publish, github }) {
  return (
    <div>
      <h2>{name}</h2>

      <Carousel responsive={responsive}>
        {image.map((item, index) => (
          <img
            src={item.image}
            aria-hidden
            alt={item.title}
            key={index}
            width="100%"
            height="200"
            style={{ objectFit: "contain" }}
          />
        ))}
      </Carousel>

      <p>{desc}</p>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          onClick={() => window.open(publish, "_blank", "noopener noreferrer")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaGithub />
          <span>Publish</span>
        </div>

        <div
          onClick={() => window.open(github, "_blank", "noopener noreferrer")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaGlobe />
          <span>Repository</span>
        </div>
      </div>

      {/* <ul className="Project-ul">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://zwallet-x.vercel.app/"
          >
            zwallet
          </a>{" "}
          - Zwallet adalah aplikasi transaksi yang bisa kamu pakai untuk
          melakukan top up dan transfer ke sesama pengguna aplikasi zwallet.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://one-chat.netlify.app/"
          >
            one chat
          </a>{" "}
          - realtime chat project from Pondok Programmer.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://info-coronavirus.netlify.app/"
          >
            covid19
          </a>{" "}
          - covid pandemic information.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vuegogo.web.app/"
          >
            simple crud
          </a>{" "}
          - simple crud app.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mini-blogs-app.herokuapp.com/"
          >
            mini-blogs
          </a>{" "}
          - mini blogs app.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://salamdoc.id/"
          >
            salamdoc
          </a>{" "}
          - web salamdoc.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://praxisacademy.netlify.app/"
          >
            praxis academy
          </a>{" "}
          - web bootcamp register.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://admin-praxis.netlify.app/"
          >
            admin praxis
          </a>{" "}
          - praxis admin system.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://admin-staycation-apps.herokuapp.com/"
          >
            admin staycation
          </a>{" "}
          - staycation admin system from BWA.
        </li>
      </ul> */}
    </div>
  );
}
