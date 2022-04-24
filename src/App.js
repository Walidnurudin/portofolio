import React, { Component } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

class App extends Component {
  render() {
    return (
      <div>
        <h2>contact :</h2>
        <ul>
          <li>
            <a href='https://linkedin.com/in/walidnurudin'>
              <AiFillLinkedin /> linkedin
            </a>
          </li>
          <li>
            <a href='https://github.com/Walidnurudin'>
              <FaGithub /> github
            </a>
          </li>

          <li>
            <a href='mailto:walidnurudin47@gmail.com'>
              <MdEmail /> email
            </a>
          </li>
        </ul>
        <div>
          <FaHeart />
        </div>
      </div>
    );
  }
}

export default App;
