import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className='py-10'>
      <h2 className='mb-5'>contact :</h2>
      <ul>
        <li>
          <a
            className='flex gap-3 items-center mb-2'
            href='https://linkedin.com/in/walidnurudin'
          >
            <AiFillLinkedin /> linkedin
          </a>
        </li>
        <li>
          <a
            className='flex gap-3 items-center mb-2'
            href='https://github.com/Walidnurudin'
          >
            <FaGithub /> github
          </a>
        </li>

        <li>
          <a
            className='flex gap-3 items-center mb-2'
            href='mailto:walidnurudin47@gmail.com'
          >
            <MdEmail /> email
          </a>
        </li>
      </ul>

      <div className='flex justify-center'>
        <FaHeart color='maroon' size={30} />
      </div>
    </div>
  );
}

export default Contact;
