import React, { useContext } from 'react';
import { ScreenContext } from '../../store/ScreenContext';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home';
import Projects from './Projects/Projects';
import '../../UI/Screen/Monitor.scss';
const Screen = ({ className, style }) => {
  const { screen, fullScreen, setFullScreen } = useContext(ScreenContext);
  const stars = Array.from(Array(20).keys());
  return (
    <div className={className} style={style}>
      <div className='night'>
        {stars.map((star) => (
          <span className='shooting_star'></span>
        ))}
      </div>
      {/* {fullScreen && (
        <p>
          Press{' '}
          <span onClick={() => setFullScreen(false)} style={{ color: 'red' }}>
            here
          </span>{' '}
          or hit ESC to exit full screen
        </p>
      )} */}
      {screen === 'home' ? (
        <Home />
      ) : screen === 'contact' ? (
        <Contact />
      ) : screen === 'about' ? (
        <About />
      ) : (
        <Projects />
      )}
    </div>
  );
};

export default Screen;
