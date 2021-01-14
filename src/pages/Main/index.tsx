import React, { useState } from 'react';

import ReactPlayer from 'react-player';

import { HOST_URL } from 'constants/env';
import { windows } from 'constants/windows';

import './index.scss';

const Main: React.FC = () => {
  const pickIndex = (): number => Math.floor(Math.random() * Math.floor(windows.length - 1));
  const [windowIndex, setWindowIndex] = useState<number>(pickIndex());

  return (
    <>
      <ReactPlayer
        url={`${HOST_URL}/video/${windows[windowIndex].windowId}`}
        playing
        onEnded={() => setWindowIndex(pickIndex())}
        width='100vw'
        height='100vh'
      />
    </>
  );
};

export default Main;
