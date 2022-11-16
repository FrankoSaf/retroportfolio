import React, { useContext, useEffect, useState } from 'react';
import { ScreenContext } from '../../store/ScreenContext';
import '../../UI/Screen/Monitor.scss';
import Screen from './Screen';

const Monitor = ({ onKeyDown }) => {
  const { screen, fullScreen } = useContext(ScreenContext);

  return (
    <div
      className='screen_container'
      style={fullScreen ? { position: 'static' } : { position: 'relative' }}
    >
      <div
        style={fullScreen ? { zIndex: 0 } : { zIndex: 205 }}
        className='frame_top'
      >
        <h1>FRANKO</h1>
      </div>
      <Screen className={`screen ${fullScreen ? 'full-screen' : ''}`} />
    </div>
  );
};

export default Monitor;
