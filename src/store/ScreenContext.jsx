import React, { createContext, useState } from 'react';

const ScreenContext = createContext();
const ScreenContextProvider = ({ children }) => {
  const [screen, setScreen] = useState('home');
  const [joystick, setJoystick] = useState({ direction: '', styles: {} });
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <ScreenContext.Provider
      value={{
        screen,
        setScreen,
        fullScreen,
        setFullScreen,
        joystick,
        setJoystick,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export { ScreenContext, ScreenContextProvider };
