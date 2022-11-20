import React, { createContext, useEffect, useState } from 'react';

const ScreenContext = createContext();
const ScreenContextProvider = ({ children }) => {
  const [screen, setScreen] = useState('home');
  const [joystick, setJoystick] = useState({ direction: '', styles: {} });
  const [size, setSize] = useState(window.innerWidth);
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    });
  });
  // const [fullScreen, setFullScreen] = useState(false);
  return (
    <ScreenContext.Provider
      value={{
        screen,
        setScreen,
        // fullScreen,
        // setFullScreen,
        joystick,
        setJoystick,
        size,
        navMenu,
        setNavMenu,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export { ScreenContext, ScreenContextProvider };
