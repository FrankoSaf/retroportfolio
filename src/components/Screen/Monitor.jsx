import React, { useContext, useEffect, useState } from 'react';
import { ScreenContext } from '../../store/ScreenContext';
import '../../UI/Screen/Monitor.scss';
import Screen from './Screen';

const Monitor = ({ onKeyDown }) => {
  const { screen, fullScreen } = useContext(ScreenContext);

  return (
    <div
      className='screen_container'
      style={{ position: 'relative' }}
    >
      <Screen className={`screen ${fullScreen ? 'full-screen' : ''}`} />
    </div>
  );
};

export default Monitor;
