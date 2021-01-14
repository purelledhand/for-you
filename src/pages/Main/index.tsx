import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

import ExploreButton from 'components/ExploreButton';
import PageFooter from 'components/PageFooter';
import { HOST_URL } from 'constants/env';
import { windows } from 'constants/windows';

const useStyle = makeStyles({
  Player: {
    position: 'fixed',
    top: 0,
  },
});

const Main: React.FC = () => {
  const classes = useStyle();
  const pickIndex = (): number => Math.floor(Math.random() * Math.floor(windows.length - 1));
  const [windowIndex, setWindowIndex] = useState<number>(pickIndex());
  const changeWindow = () => setWindowIndex(pickIndex());

  return (
    <>
      <ReactPlayer
        url={`${HOST_URL}/video/${windows[windowIndex].windowId}`}
        playing
        onEnded={changeWindow}
        width='100vw'
        height='100vh'
        className={classes.Player}
      />
      <PageFooter>
        <Grid item />
        <ExploreButton onClick={changeWindow} />
        <Grid item />
      </PageFooter>
    </>
  );
};

export default Main;
