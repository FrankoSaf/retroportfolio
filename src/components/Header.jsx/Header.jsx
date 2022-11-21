import React from 'react';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import '../../UI/Header/Header.scss';
const Header = () => {
  return (
    <div className='header_container'>
      <div className='header_top'>
        <div className='outerLinks'>
          <a
            href='https://github.com/FrankoSaf'
            target='_blank'
            rel='noreferrer'
          >
            <GoMarkGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/franko-safradin-4a319b249/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
          <a href='mailto:franko.safradin13@gmail.com' type='email'>
            <GoMail />
          </a>
        </div>
        <h1>FRANKO</h1>
      </div>
      <div className='header_bottom'></div>
    </div>
  );
};

export default Header;
