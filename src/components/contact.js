import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaTelegram, FaHeart } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="Contact-div">
      <h2>contact :</h2>
      <ul className="Contact-ul">
        <li>
          <a href="https://t.me/WalidNurudin">
            <FaTelegram /> telegram
          </a>
        </li>
        <li>
          <a href="https://github.com/Walidnurudin">
            <FaGithub /> github
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/walidnurudin">
            <AiFillLinkedin /> linkedin
          </a>
        </li>
        <li>
          <a href="mailto:walidnurudin47@gmail.com">
            <MdEmail /> email
          </a>
        </li>
      </ul>
      <div className="Footer">
        <FaHeart />
      </div>
    </div>
  );
}
