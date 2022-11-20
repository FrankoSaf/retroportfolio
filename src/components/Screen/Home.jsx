import React, { useContext, useState, useEffect } from 'react';
import { ScreenContext } from '../../store/ScreenContext';
import '../../UI/Screen/Home.scss';
const Home = () => {
  const links = ['ABOUT', 'PROJECTS', 'CONTACT'];
  const { screen, setScreen, fullScreen, joystick, size } =
    useContext(ScreenContext);
  const [selectedLink, setSelectedLink] = useState(0);
  console.log(typeof size);
  useEffect(() => {
    if (size > 781) {
      if (joystick.direction === 'up') {
        setSelectedLink(selectedLink - 1);
        if (selectedLink <= 0) setSelectedLink(0);
      } else if (joystick.direction === 'down') {
        setSelectedLink(selectedLink + 1);
        if (selectedLink >= links.length - 1) setSelectedLink(links.length - 1);
      }
      if (screen === 'home') {
        window.addEventListener('keyup', (e) => {
          return e.key.toLowerCase() === 'enter'
            ? setScreen(links[selectedLink].toLowerCase())
            : null;
        });
      }
    }
  }, [joystick]);

  return (
    <div className='home'>
      <h1>
        <span>Welcome to my</span> <span>portfolio</span>
      </h1>
      <ul>
        {links.map((item, index) => {
          return (
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => setScreen(item.toLowerCase())}
            >
              {item}
              {index === selectedLink && !fullScreen && (
                <>
                  <span className='border t tb'></span>
                  <span className='border tr trbl'></span>
                  <span className='border r rl'></span>
                  <span className='border br tlbr'></span>
                  <span className='border b tb'></span>
                  <span className='border bl trbl'></span>
                  <span className='border l rl'></span>
                  <span className='border tl tlbr'></span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
