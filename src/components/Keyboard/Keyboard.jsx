import React, { useContext, useEffect, useState } from 'react';
import { ScreenContext } from '../../store/ScreenContext';
import '../../UI/Keyboard/Keyboard.scss';
const Keyboard = () => {
  const { screen, setScreen, setFullScreen, joystick, setJoystick } =
    useContext(ScreenContext);
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch (e.key.toLowerCase()) {
        case 'arrowright':
          setJoystick((pre) => ({
            ...pre,
            styles: {
              ...pre.styles,
              transform: 'rotateZ(20deg) translateY(-50%)',
            },
            direction: 'right',
          }));
          break;
        case 'arrowleft':
          setJoystick((pre) => ({
            ...pre,
            styles: {
              ...pre.styles,
              transform: 'rotate(-25deg)translateY(-50%)',
            },
            direction: 'left',
          }));
          break;
        case 'arrowdown':
          setJoystick((pre) => ({
            ...pre,
            styles: {
              ...pre.styles,
              transform: 'rotateX(40deg)translateY(-50%)',
              height: '0',
            },
            direction: 'down',
          }));
          break;
        case 'arrowup':
          setJoystick((pre) => ({
            ...pre,
            styles: {
              ...pre.styles,
              transform: 'translateY(-50%) rotateY(40deg)',
              height: '11rem',
              width: '2.5rem',
            },
            direction: 'up',
          }));
          break;
        default:
          setJoystick({});
          break;
      }
    });
    window.addEventListener('keyup', () => {
      setJoystick({});
    });
  }, []);

  return (
    <div className='keyboard'>
      <div className='left_panel'>
        <div className='joystick'>
          <div className='joystick-base'>
            <div className='joystick-stick' style={joystick.styles}>
              <div className='joystick-ball'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='right_panel'>
        <div className='right_panel-top'>
          <div className='contact'>
            <div className='circle_base'>
              <div className='button' onClick={() => setScreen('about')}>
                ABOUT
              </div>
            </div>
          </div>
          <div className='contact'>
            <div className='circle_base'>
              <div className='button' onClick={() => setScreen('contact')}>
                CONTACT
              </div>
            </div>
          </div>
        </div>
        <div className='right_panel-bottom'>
          <div className='contact'>
            <div className='circle_base'>
              <div className='button' onClick={() => setScreen('projects')}>
                PROJECTS
              </div>
            </div>
          </div>
          <div className='contact'>
            <div className='circle_base'>
              <div className='button' onClick={() => setScreen('home')}>
                HOME
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
