import React, { useContext } from 'react';
import '../UI/Navigation/Navigation.scss';
import { ScreenContext } from '../store/ScreenContext';
import { IoIosClose } from 'react-icons/io';
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
        }}
      />
      <ul>
        {links.map((link) => (
          <li
            onClick={() => {
              setNavMenu(false);
              setScreen(link.toLowerCase());
            }}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
