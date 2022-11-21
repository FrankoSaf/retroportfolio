import React, { useContext } from 'react';
import '../UI/Navigation/Navigation.scss';
import { ScreenContext } from '../store/ScreenContext';
import { IoIosClose } from 'react-icons/io';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
const Navigation = () => {
  const { setNavMenu, navMenu, setScreen } = useContext(ScreenContext);
  const links = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
  return (
    <nav className={navMenu ? 'active' : ''}>
      <IoIosClose
        onClick={() => setNavMenu(false)}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          color: 'white',
          zIndex: '1000',
          width: '8rem',
          height: '8rem',
          cursor: 'pointer',
        }}
      />
      <ul>
        {links.map((link) => (
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setNavMenu(false);
              setScreen(link.toLowerCase());
            }}
          >
            {link}
          </li>
        ))}
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
