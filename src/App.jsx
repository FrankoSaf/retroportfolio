import { useContext, useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header.jsx/Header';
import Keyboard from './components/Keyboard/Keyboard';
import Monitor from './components/Screen/Monitor';
import { ScreenContext } from './store/ScreenContext';
import { GiHamburgerMenu } from 'react-icons/gi';

import Navigation from './components/Navigation';
function App() {
  const { setFullScreen, size, setNavMenu, navMenu } =
    useContext(ScreenContext);
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);
  console.log(size);
  const detectKeyDown = (e) => {
    if (e.key === 'Escape') {
      setFullScreen(false);
    }
  };
  return (
    <>
      {size < 781 && (
        <>
          <GiHamburgerMenu
            onClick={() => setNavMenu(true)}
            style={{
              position: 'fixed',
              top: '15px',
              right: '25px',
              color: 'white',
              zIndex: '1000',
              width: '5rem',
              height: '5rem',
            }}
          />
          <Navigation />
        </>
      )}

      <Header />
      <Monitor />
      <Keyboard />
      <Footer />
    </>
  );
}

export default App;
